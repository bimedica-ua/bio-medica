'use client';
import InfoBlock from './block/Block';
import {
  faUserLarge,
  faUserDoctor,
  faVialCircleCheck,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

const blocs = [
  {
    text: 'Пациєнтів',
    number: 5000,
    img: faUserLarge,
    styleRounded: 'rounded-tl-xl',
  },
  {
    text: 'Докторів',
    number: 200,
    img: faUserDoctor,
    styleRounded: 'rounded-tr-xl',
  },
  {
    text: 'Нагород',
    number: 100,
    img: faTrophy,
    styleRounded: 'rounded-bl-xl',
  },
  {
    text: 'Тестів',
    number: 1000,
    img: faVialCircleCheck,
    styleRounded: 'rounded-br-xl',
  },
];

function AboutUs() {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <section className='max-w-containerWidth flex flex-col gap-10 p-8'>
        <article className='flex flex-col mdp:flex-row justify-center items-center gap-24'>
          <div className='flex flex-col gap-5 max-w-[500px] text-base lg:text-medium'>
            <h1 className='text-xl font-bold'>Про нас</h1>
            <h2 className='text-medium lg:text-large'>Медична лабораторія</h2>
            <p className='font-light'>
              Ласкаво просимо до "BioMedica" – вашого надійного партнера у сфері
              медичних досліджень та аналізів. Наша приватна лабораторія
              забезпечує високоякісні послуги з діагностики за доступними
              цінами. За допомогою передового обладнання та кваліфікованого
              персоналу ми здійснюємо широкий спектр аналізів, від клінічних до
              молекулярно-біологічних. Наша місія – забезпечити точні та надійні
              результати в найкоротший термін, щоб ви могли швидко отримати
              необхідну інформацію для вашого здоров'я. Ми прагнемо до
              постійного удосконалення і розвитку, дотримуючись найвищих
              стандартів якості та безпеки. Довірте ваші медичні потреби
              "BioMedica" – де ваше здоров'я завжди на першому місці.
            </p>
          </div>
          <div className='grid grid-cols-2 grid-rows-2  gap-1 min-w-fit items-center'>
            {blocs.map(({ text, number, img, styleRounded }) => (
              <InfoBlock
                key={text}
                text={text}
                number={number}
                img={img}
                styleRounded={styleRounded}
              />
            ))}
          </div>
        </article>
        {/* <div className="flex justify-center items-center">
          <YouTubeVideo videoId={'stUyuEVZlU4'} />
        </div> */}
      </section>
    </div>
  );
}

export default AboutUs;
