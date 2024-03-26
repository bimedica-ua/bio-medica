import Link from 'next/link';
import { CONSTANTS } from '../../constants';
const { pages } = CONSTANTS;

function PagesListing({
  isSimple = false,
  style = '',
  onClick,
}: {
  isSimple?: boolean;
  style?: string;
  onClick?: Function;
}) {
  return pages.map(({ url, pageName }) => (
    <Link
      href={url}
      key={url}
      className={
        'hover:cursor-pointer transition-colors duration-200 text-center font-bold' +
        (isSimple
          ? ' hover:text-orangeMax '
          : ' p-2 lg:p-3 hover:bg-secondColor rounded-md ') +
        style
      }
      onClick={() => {
        if (onClick) return onClick();
      }}
    >
      {pageName}
    </Link>
  ));
}

export default PagesListing;
