'use client';
import { KeyboardEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from '../card/Card';
import { Button } from '../button/Button';
import { getFromApi } from '../../apiGetter';
import SectionForCards from '../sectionForCards/SectionForCards';
import { CONSTANTS, cardHolder } from '@/constants';

const { TopServicesApi: storyBlockApi } = CONSTANTS;

function TopServices() {
  const [cards, setCards] = useState({ AllSevices: [] });
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const onHandleInput = ({ code }: KeyboardEvent<HTMLInputElement>) => {
    if (code === 'Enter' && searchValue) {
      router.push(`/AllServices?search=${searchValue}`);
    }
  };
  useEffect(() => {
    getFromApi(storyBlockApi, setCards);
  }, []);

  return (
    <section className=" bg-firstColor my-10">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-10 px-3 py-5 md:py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-3 items-center">
          <h1 className="text-xl font-bold">ТОП аналізів</h1>
          <div className="relative">
            <input
              type="text"
              value={searchValue}
              placeholder="Введіть назву аналізу"
              className="border border-gray-300 rounded-md py-2 pl-4 pr-[33px] focus:outline-none focus:ring-2 focus:ring-orangeDark focus:border-transparent "
              onKeyDownCapture={onHandleInput}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
          </div>
        </div>
        <article className="flex flex-col justify-center items-center gap-10">
          {cards.AllSevices.length > 0 && (
            <SectionForCards cardsArr={cards.AllSevices} />
          )}
          {cards.AllSevices.length <= 0 && <Card card={cardHolder} />}
          <Button href="/AllServices#top">Продивитись усі</Button>
        </article>
      </div>
    </section>
  );
}

export default TopServices;
