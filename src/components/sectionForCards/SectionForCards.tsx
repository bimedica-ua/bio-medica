import Card, { CardType } from '../card/Card';

function SectionForCards({ cardsArr }: { cardsArr?: CardType[] }) {
  return (
    <section
      className={'flex flex-col gap-5 justify-stretch items-stretch w-full'}
    >
      {cardsArr && cardsArr.length > 0 ? (
        cardsArr.map((card) => {
          return <Card card={card} key={card._uid} />;
        })
      ) : (
        <p className="w-full text-center">Вибачте, нічого не знайдено.</p>
      )}
    </section>
  );
}

export default SectionForCards;
