import Link from 'next/link';
import React from 'react';

export const Button = ({
  href,
  children,
  isBlack = true,
}: {
  href: string;
  children: any;
  isBlack?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={
        'p-2 border-2 border-solid  rounded-lg transition-colors duration-300  font-bold' +
        (isBlack ? ' text-cardSecondColor bg-transparent border-cardSecondColor hover:bg-cardSecondColor hover:text-white' : ' bg-white border-white  hover:bg-white hover:text-orangeMax')
      }
    >
      {children}
    </Link>
  );
};
