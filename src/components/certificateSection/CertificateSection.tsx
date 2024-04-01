'use client';
import React from 'react';
import Certificate from './Certificate';
import { useEffect, useState } from 'react';
import { getFromApi } from '../../apiGetter';
import ToggleButton from '../button/ToggleButton';
import { CONSTANTS } from '@/constants';
const { CertificateApi: storyBlockApi } = CONSTANTS;

function CertificateSection() {
  const [cards, setCards] = useState({ Certificates: [] });
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    getFromApi(storyBlockApi, setCards);
  }, []);

  return (
    <section className=" bg-firstColor my-10">
      <div className="max-w-containerWidth mx-auto flex flex-col gap-4 px-3 py-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-xl font-bold">Ліцензії, сертифікати та обладнання</h1>
          <ToggleButton isChecked={isShowAll} onToggle={setIsShowAll}>
            Дивитись всі
          </ToggleButton>
        </div>
        {cards.Certificates.length <= 0 && (
          <div className="text-center w-full">Завантаження сертифікатів...</div>
        )}
        {cards.Certificates.length > 0 && (
          <article className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center">
            {(isShowAll
              ? cards.Certificates
              : cards.Certificates.slice(0, 4)
            ).map(({ _uid, img: { filename }, title, url: { url } }) => (
              <Certificate
                key={_uid}
                img={filename}
                title={title}
                url={url ? url : filename}
              />
            ))}
          </article>
        )}
      </div>
    </section>
  );
}

export default CertificateSection;
