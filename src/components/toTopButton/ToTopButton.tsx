import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
function ToTopButton({ style = '' }: { style?: string }) {
  return (
    <section
      className={
        'fixed bottom-5 right-5 h-[45px] w-[45px] border-2 border-cardSecondColor rounded-full flex justify-center items-center text-[28px] text-cardSecondColor hover:cursor-pointer hover:text-white hover:bg-cardSecondColor transition-all duration-300 z-0' +
        style
      }
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      <FontAwesomeIcon icon={faCaretUp} />
    </section>
  );
}

export default ToTopButton;
