import SectionForCards from '../../sectionForCards/SectionForCards';
import TitleForNamedSections from '../titleForNamedSections/TitleForNamedSections';
import './../style.css';
import { cardHolder } from '@/constants';
import { CardType } from '../../card/Card';

export type CardSectionType = {
  _uid: string;
  services: CardType[];
  title: string;
};

function NamedSectionCards({
  arr,
  isRounded = false,
}: {
  arr: CardSectionType[];
  isRounded?: boolean;
}) {
  const normalComponentListing = arr.map(({ title, services, _uid }) => {
    return (
      <div
        className="gap-10 flex flex-col"
        key={`${_uid}+${title}`}
        id={title.replace(/\s/g, '')}
      >
        <TitleForNamedSections isRounded={isRounded} title={title} />

        <SectionForCards cardsArr={services} />
      </div>
    );
  });

  const Placeholder = <SectionForCards cardsArr={[cardHolder]} />;

  return arr.length > 0 ? normalComponentListing : Placeholder;
}

export default NamedSectionCards;
