import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function InfoBlock({
  number,
  text,
  img,
  styleRounded,
}: {
  number: number;
  text: string;
  img: IconProp;
  styleRounded?: string;
}) {
  return (
    <section className={"p-5 bg-secondColor shadow-xl border-[0.1px] flex flex-row gap-4 w-full items-center justify-center "+(styleRounded)}>
      <FontAwesomeIcon icon={img} className='text-[24px]'/>
      <div className="text-center">
        <h2 className="text-2xl">{number}+</h2>
        <p className="text-base font-light">{text}</p>
      </div>
    </section>
  );
}

export default InfoBlock;
