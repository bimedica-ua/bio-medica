'use client';
import { createContext, useEffect, useState } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import { getFromApi, transformSocials } from '@/apiGetter';
import { CONSTANTS } from '@/constants';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SocialsData = { mail:string; phones: string[]; socials: Social[] };

export type Social = {
  name: string;
  url: string;
  icon: IconDefinition;
};

export const SocialsContext = createContext<{
  mail:string;
  phones: string[];
  socials: Social[];
}>({
  mail:'',
  phones: [],
  socials: [],
});

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [socials, setSocials] = useState<SocialsData>({
    mail: '',
    phones: [],
    socials: [],
  });

  useEffect(() => {
    getFromApi(CONSTANTS.OtherApi, setSocials, transformSocials);
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <SocialsContext.Provider value={socials}>
        <Header />
        <div className="transition-all duration-300 flex-1">{children}</div>
        <Footer />
      </SocialsContext.Provider>
    </main>
  );
}

export default Layout;
