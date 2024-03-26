import SectionForCards from '../sectionForCards/SectionForCards';
import '../layout/header/styles.css';
import ExtendedComponent from '@/components/extendedComponent/ExtendedComponent';
import { cardHolder } from '@/constants';
import { CardSectionType } from '../namedSections/namedSectionCards/NamedSectionCards';
import { QuestionProps } from '@/components/extendedComponent/ExtendedComponent';

function SectionWithName({
  arr,
  isRounded = false,
  isForCard = false,
}: {
  arr: CardSectionType[];
  isRounded?: boolean;
  isForCard?: boolean;
}) {
  const normalComponentListing = arr.map(({ title, services, _uid }) => {
    return (
      <div className="gap-10 flex flex-col" key={`${_uid}+${title}`} id={title}>
        <h1
          className={
            'pl-3 text-xl p-2 font-bold ' +
            (isRounded
              ? ' radial-gradient text-white rounded-lg'
              : ' border-b-2 border-firstColor')
          }
        >
          {title}
        </h1>
        {isForCard ? (
          <SectionForCards cardsArr={services} />
        ) : (
          <div className="ml-5 flex flex-col gap-4">
            {(services as unknown as QuestionProps[]).map(
              ({ question, answer }, index) => (
                <ExtendedComponent
                  question={question}
                  answer={answer}
                  key={`${question}+${answer}+${index}`}
                />
              )
            )}
          </div>
        )}
      </div>
    );
  });

  const Placeholder = isForCard ? (
    <SectionForCards cardsArr={[cardHolder]} />
  ) : (
    <div className="ml-5 flex flex-col gap-4">
      <ExtendedComponent
        question={'Завантаження...'}
        answer={'Завантаження...'}
      />
    </div>
  );

  return arr.length > 0 ? normalComponentListing : Placeholder;
}

export default SectionWithName;
