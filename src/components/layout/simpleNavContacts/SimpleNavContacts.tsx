import SocialsIsonsList from '@/components/socialsIcons/SocialsiconsList';
import PagesListing from '@/components/pagesListing/PagesListing';
import PhoneList from '@/components/phonesList/PhoneList';
import { useContext } from 'react';
import { SocialsContext } from '../Layout';

function SimpleNavContacts({
  moreStyling = '',
  children = null,
  onClick,
}: {
  moreStyling?: string;
  children?: any;
  onClick?: Function;
}) {
  const socials = useContext(SocialsContext);

  return (
    <section
      className={
        'flex flex-col ssm:flex-row ssm:justify-evenly gap-8 transition-opacity duration-300 w-full min-h-fit py-5 px-2 ' +
        moreStyling
      }
    >
      <div className="flex flex-col items-center gap-2">
        <PagesListing isSimple={true} onClick={onClick} />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-row gap-4 text-large flex-wrap">
          <SocialsIsonsList socials={socials.socials} />
        </div>
        <div className="flex flex-col gap-2 font-bold  items-center text-base h-[100%]">
          <PhoneList phones={socials.phones} />
        </div>
        {children}
      </div>
    </section>
  );
}

export default SimpleNavContacts;
