import MapSection from '@/components/mapSection/MapSection';
import { CONSTANTS } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
const { phones, socials } = CONSTANTS;
function AboutUsPage() {
  return (
    <section className="max-w-[1400px] mx-auto">
      <section className="flex flex-col lg:flex-row gap-5 md:gap-10 justify-center items-center lg:items-stretch py-10 px-4 text-base lg:text-medium">
        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-center lg:text-left">
            Телефони колл-центру:
          </h2>
          <div className="flex flex-col gap-1 items-center lg:items-start">
            {phones.map((phone) => (
              <p key={phone}>{phone}</p>
            ))}
          </div>
          <h2 className="font-bold text-center lg:text-left">
            Електронна пошта:
          </h2>
          <p>bimedica.ua@gmail.com</p>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-center lg:text-left">
            Графік роботи колл-центру:
          </h2>
          <div className="flex flex-col gap-1 items-center lg:items-start">
            <p>Понеділок-п'ятниця: 8:00 - 19:00</p>
            <p>Субота: 8:00 - 17:00</p>
            <p>Неділя: 8:00 - 15:00</p>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-center lg:text-left">
            Слідкуйте за нами у соц. мережах:
          </h2>
          <div className="flex flex-row gap-2 justify-evenly">
            {socials.map(({ url, icon, name }) => (
              <Link
                href={url}
                title={name}
                key={url}
                className="transition-colors duration-200 cursor-pointer text-[36px] px-4 py-6 border-2 border-black hover:border-orangeMax text-black hover:text-orangeMax rounded-lg"
              >
                <FontAwesomeIcon icon={icon} className="pb-1" />
              </Link>
            ))}
          </div>
        </section>
      </section>
      <MapSection />
    </section>
  );
}

export default AboutUsPage;
