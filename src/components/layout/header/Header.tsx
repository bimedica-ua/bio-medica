import SocialsIsonsList from '@/components/socialsIcons/SocialsiconsList';
import PagesListing from '@/components/pagesListing/PagesListing';
import SimpleNavContacts from '../simpleNavContacts/SimpleNavContacts';
import PhoneList from '@/components/phonesList/PhoneList';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import { Button } from '@/components/button/Button';
import { useContext, useState } from 'react';
import './styles.css';
import { SocialsContext } from '../Layout';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    console.log(isOpenMenu);
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  };
  const socials = useContext(SocialsContext);

  return (
    <header className="radial-gradient top-0 left-0 right-0 drop-shadow-xl w-full bg-firstColor mx-[auto] flex flex-row justify-between items-center z-10 relative">
      <div className={'flex gap-1 flex-row'}>
        <Link
          href="./"
          className="icon-gradient pl-4 lg:pl-8 pr-4 md:pr-6 py-[4px]"
        >
          <img
            src="./logo.png"
            alt="logo"
            className="max-h-[40px] md:max-h-[50px] lg:max-h-[60px]"
          />
        </Link>
        <div className="hidden mdp:flex flex-row items-center gap-2">
          <PagesListing />
        </div>
      </div>
      <div className="hidden mdp:flex gap-5 pr-4 lg:pr-8 text-buttonDarktColor items-center">
        <Button href="http://results.bio-medica.com.ua/" isBlack={false}>
          Отримати результати
        </Button>
        <div className="hidden xl:grid grid-cols-2 gap-2 text-large flex-wrap">
          <SocialsIsonsList socials={socials.socials} />
        </div>
        <div className="hidden  xl:block font-bold text-small  md:text-base h-[100%]">
          <PhoneList phones={socials.phones} />
        </div>
      </div>
      <div className="pr-2 mdp:hidden">
        <Hamburger
          size={25}
          label="Show menu"
          toggled={isOpenMenu}
          onToggle={(toggled) => {
            toggled ? setIsOpenMenu(true) : setIsOpenMenu(false);
          }}
        />
        <SimpleNavContacts
          moreStyling={
            ' absolute top-full left-0 bg-white items-center' +
            (isOpenMenu ? ' opacity-100 visible' : ' opacity-0 invisible')
          }
          onClick={toggleMenu}
        >
          <Button href="http://results.bio-medica.com.ua/" isBlack={true}>
            Отримати результати
          </Button>
        </SimpleNavContacts>
      </div>
    </header>
  );
}

export default Header;
