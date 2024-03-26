import axios from 'axios';
import { CardSectionType } from './components/namedSections/namedSectionCards/NamedSectionCards';
import { CardType } from './components/card/Card';
import { MapLocation } from './constants';
import { Social } from './components/layout/Layout';
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const getFromApi = (
  url: string,
  setter: Function,
  mapper?: (...args: any[]) => any
) => {
  axios
    .get(url)
    .then((res) => {
      setter(mapper ? mapper(res.data.story.content) : res.data.story.content);
    })
    .catch(({ message }: { message: string }) => {
      console.log(message);
    });
};

type SectionPayload = CardSectionType & { services: string };

type TransformSectionsPayload = {
  Sections: SectionPayload[];
};

export const transformSections = (data: TransformSectionsPayload) => {
  const sections = data.Sections;
  const transformServices = (services: string) => {
    const lines = services.split('\n');
    const cards: CardType[] = [];

    lines.forEach((line, index) => {
      const [name, price, days] = line.split('\t');
      if (name === undefined || days === undefined || price === undefined)
        return;
      cards.push({
        Name: name.trim(),
        Days: days.trim(),
        Price: price.trim(),
        _uid: name.trim() + index,
      });
    });

    return cards;
  };

  return sections.map((section) => ({
    ...section,
    services: transformServices(section.services) || [],
  }));
};

interface CityData {
  _uid: string;
  Cities: {
    _uid: string;
    city: string;
    offices: {
      _uid: string;
      phone: string;
      address: string;
      saturday?: string;
      weekdays: string;
      component: string;
      coordinates: string;
    }[];
    component: string;
  }[];
  component: string;
}

export const transformMapLocation = (data: CityData) => {
  const cityMap: { [city: string]: MapLocation[] } = {};

  data.Cities.forEach((city) => {
    const offices: MapLocation[] = city.offices.map((office) => ({
      address: office.address,
      coordinates: office.coordinates.split(' ').map(parseFloat) as [
        number,
        number
      ],
      phone: office.phone,
      schedule: {
        weekdays: office.weekdays,
        saturday: office.saturday || undefined,
      },
    }));

    cityMap[city.city] = offices;
  });

  return cityMap;
};

interface StoryData {
  email: string;
  phone1: string;
  phone2: string;
  facebookUrl: { url: string };
  instagramUrl: { url: string };
  telegramUrl: { url: string };
  twitterUrl: { url: string };
}

export const transformSocials = (
  data: StoryData
): { phones: string[]; socials: Social[] } => {
  const {
    email,
    phone1,
    phone2,
    facebookUrl,
    instagramUrl,
    telegramUrl,
    twitterUrl,
  } = data;
  const phones = [phone1, phone2];
  const socials: Social[] = [
    { name: 'facebook', url: facebookUrl.url, icon: faFacebook },
    { name: 'instagram', url: instagramUrl.url, icon: faInstagram },
    { name: 'telegram', url: telegramUrl.url, icon: faTelegram },
    { name: 'twitter', url: twitterUrl.url, icon: faXTwitter },
  ];

  return { phones, socials };
};
