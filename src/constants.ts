import { CardType } from '@/components/card/Card';
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { LatLngTuple } from 'leaflet';
import { Social } from './components/layout/Layout';

type ImageForSlider = {
  id: number;
  title: string;
  description: string;
  buttonUrl: string;
  imgSrc: string;
};

export type MapLocation = {
  address: string;
  coordinates: LatLngTuple;
  phone: string;
  schedule: {
    weekdays: string;
    saturday?: string;
  };
};

export type page = { url: string; pageName: string };

type MyData = {
  OtherApi: string;
  MapApi: string;
  FAQApi: string;
  AllServicesApi: string;
  ImageSliderApi: string;
  TopServicesApi: string;
  CertificateApi: string;
  cardHolder: CardType;
  pages: page[];
  imagesForSlider: ImageForSlider[];
  phones: string[];
  map: Record<string, MapLocation[]>;
  socials: Social[];
};

export const cardHolder = {
  Name: 'Завантаження...',
  Days: 'Завантаження...',
  Price: 'Завантаження...',
  _uid: 'Завантаження...',
};

export const CONSTANTS: MyData = {
  OtherApi:
    'https://api.storyblok.com/v2/cdn/stories/other?cv=1710940971&token=FYShrSsmafxPX5CaF9YMKAtt&version=published',
  MapApi:
    'https://api.storyblok.com/v2/cdn/stories/map?cv=1710940705&token=FYShrSsmafxPX5CaF9YMKAtt&version=published',
  FAQApi:
    'https://api.storyblok.com/v2/cdn/stories/faq?cv=1710496295&token=FYShrSsmafxPX5CaF9YMKAtt&version=published',
  AllServicesApi:
    'https://api.storyblok.com/v2/cdn/stories/allservices?cv=1708287624&token=FYShrSsmafxPX5CaF9YMKAtt&version=published',
  ImageSliderApi:
    'https://api.storyblok.com/v2/cdn/stories/sliderphotos?cv=1707929168&token=FYShrSsmafxPX5CaF9YMKAtt&version=published',
  TopServicesApi:
    'https://api.storyblok.com/v2/cdn/stories/topservices?cv=1708287624&token=FYShrSsmafxPX5CaF9YMKAtt&version=published',
  CertificateApi:
    'https://api.storyblok.com/v2/cdn/stories/allcertificates?cv=1707941033&token=FYShrSsmafxPX5CaF9YMKAtt&version=published',
  cardHolder,
  pages: [
    {
      url: '/',
      pageName: 'Головна',
    },
    {
      url: '/AllServices',
      pageName: 'Перелік аналізів',
    },
    {
      url: '/AboutUs',
      pageName: 'Контакти',
    },
    {
      url: './FAQ',
      pageName: 'Часті запитання',
    },
  ],
  imagesForSlider: [
    {
      id: 1,
      title: 'ПАКЕТ АНАЛІЗІВ "ПРЕДОПЕРАЦІЙНИЙ"',
      description:
        'Тільки у нас Ви можете зробити все дослідження з гарантією якості!',
      buttonUrl: 'https://nikolab.com.ua/uk/',
      imgSrc: 'https://nikolab.com.ua/wp-content/uploads/2023/10/01.jpg.webp',
    },
    {
      id: 2,
      title: 'ПАКЕТ АНАЛІЗІВ "ОПЕРАЦІЙНИЙ"',
      description:
        'Тільки у нас Ви можете зробити все дослідження з гарантією якості!',
      buttonUrl: 'https://nikolab.com.ua/uk/',
      imgSrc:
        'https://nikolab.com.ua/wp-content/uploads/2022/09/slide2-min.jpg.webp',
    },
  ],
  phones: ['+38(096) 201 23 45', '+38(090) 123 12 33'],
  socials: [
    { name: 'facebook', url: 'https://facebook.com', icon: faFacebook },
    { name: 'instagram', url: 'https://instagram.com', icon: faInstagram },
    { name: 'telegram', url: 'https://telegram.com', icon: faTelegram },
    { name: 'twitter', url: 'https://instagram.com/', icon: faXTwitter },
  ],
  map: {
    'м. Запоріжжя': [
      {
        address: 'вул. Новокузнецька, 20А\\n(ПІСКИ «РОМАКС»)',
        coordinates: [47.778019943823196, 35.18512938619378],
        phone: '+38 (067) 612-81-12',
        schedule: {
          weekdays: 'пн-пт: 7:30-14:00',
          saturday: 'сб: 7:30-13:00',
        },
      },
      {
        address: 'вул. Патріотична, 56 Б\\n(Алея троянд)',
        coordinates: [47.83856141743252, 35.12997032161144],
        phone: '+38 (066) 960-58-60',
        schedule: {
          weekdays: 'пн-пт: 8:00-13:00',
          saturday: 'пн-пт: 8:00-13:00',
        },
      },
      {
        address: 'вул. Північно-Кільцева, 7\\n(КОСМОС район Варуса)',
        coordinates: [47.78591764537749, 35.2168867437514],
        phone: '+38 (099) 374-83-67',
        schedule: {
          weekdays: 'пн-пт: 8:00-13:00',
          saturday: 'сб: 8:00-12:00',
        },
      },
      {
        address: 'вул. Авраменко, 3\\n(Шевченківський м-н Лікарня №',
        coordinates: [47.84906519959316, 35.23803725217588],
        phone: '+38 (099) 374-84-69',
        schedule: {
          weekdays: 'пн-сб: 8:00-12:00',
        },
      },
      {
        address: 'пр-т Соборний, 84\\n(пл. Університетська)',
        coordinates: [47.81934703676764, 35.17421310208214],
        phone: '+38 (050) 664-74-98',
        schedule: {
          weekdays: 'пн-сб: 8:00-12:00',
        },
      },
      {
        address: 'вул. Запорізька, 13\\n(МАЛИЙ РИНОК)',
        coordinates: [47.82486950787394, 35.16287955457805],
        phone: '+38 (066) 010-67-09',
        schedule: {
          weekdays: 'пн-пт: 8:00-13:00',
          saturday: 'сб: 8:00-12:00',
        },
      },
      {
        address: 'вул. Ладозька, 22\\n(Правий берег район АМСТОРУ)',
        coordinates: [47.88689165839529, 35.0703922622611],
        phone: '+38 (099) 395-90-18',
        schedule: {
          weekdays: 'пн-пт: 7:30-14:30',
          saturday: 'сб: 8:00-12:00',
        },
      },
    ],
    'м. Покровськ': [
      {
        address: 'вул. Шахтобудівників, 32',
        coordinates: [48.27089446590867, 37.17951144145992],
        phone: '+38 (099) 395-90-18',
        schedule: {
          weekdays: 'пн.- сб. 8:00 - 12:00',
        },
      },
    ],
  },
};
