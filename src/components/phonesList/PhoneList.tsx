import { CONSTANTS } from '@/constants';

function PhoneList({ phones }: { phones: string[] }) {
  return (
    <>
      {(phones.length > 0 ? phones : CONSTANTS.phones).map((phone: string) => (
        <a
          key={phone}
          href={'tel:'+phone}
          className="hover:text-orangeMax transition-colors duration-200 cursor-pointer"
        >
          {phone}
        </a>
      ))}
    </>
  );
}

export default PhoneList;
