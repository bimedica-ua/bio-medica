import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export type QuestionProps = {
  question: string;
  answer: string;
};

const ExtendedComponent: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mx-auto">
      <div
        className={` p-4 flex justify-between items-center cursor-pointer rounded-lg border-[1px] border-cardSecondColor transition-all ${
          isExpanded ? 'rounded-b-none' : ''
        }`}
        onClick={toggleExpansion}
      >
        <div className="font-bold">{question}</div>
        <FontAwesomeIcon
          icon={isExpanded ? faChevronUp : faChevronDown}
          className="text-gray-600"
        />
      </div>

      <div
        className={`border-[1px] border-firstColor border-t-0 px-4 overflow-hidden transition-all duration-500 transform-gpu rounded-b-lg ${
          isExpanded ? 'h-auto p-4' : 'h-0 p-0 border-none'
        }`}
      >
        <div className="font-normal">{answer}</div>
      </div>
    </div>
  );
};

export default ExtendedComponent;
