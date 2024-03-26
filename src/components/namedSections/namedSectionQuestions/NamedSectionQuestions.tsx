import './../style.css';
import ExtendedComponent from '@/components/extendedComponent/ExtendedComponent';
import { QuestionProps } from '@/components/extendedComponent/ExtendedComponent';
import TitleForNamedSections from '../titleForNamedSections/TitleForNamedSections';

export type QuestionSectionType = {
  _uid: string;
  questions: QuestionProps[];
  title: string;
};

function NamedSectionQuestions({
  arr,
  isRounded = false,
}: {
  arr: QuestionSectionType[];
  isRounded?: boolean;
}) {
  const normalComponentListing = arr.map(({ title, questions, _uid }) => {
    return (
      <div className='gap-10 flex flex-col' key={`${_uid}+${title}`} id={title}>
        <TitleForNamedSections isRounded={isRounded} title={title} />
        
        <div className='ml-5 flex flex-col gap-4'>
          {questions.map(({ question, answer }, index) => {
            return (
              <ExtendedComponent
                question={question}
                answer={answer}
                key={`${question}+${answer}+${index}`}
              />
            );
          })}
        </div>
      </div>
    );
  });

  const Placeholder = (
    <div className='ml-5 flex flex-col gap-4'>
      <ExtendedComponent
        question={'Завантаження...'}
        answer={'Завантаження...'}
      />
    </div>
  );

  return arr.length > 0 ? normalComponentListing : Placeholder;
}

export default NamedSectionQuestions;
