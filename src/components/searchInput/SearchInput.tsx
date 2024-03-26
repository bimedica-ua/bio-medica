import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchInput({search, setSearch}:{search:string, setSearch:Function}) {
  return (
    <div className='relative'>
      <input
        type='text'
        value={search}
        placeholder='Введіть назву аналізу'
        className='border border-gray-300 rounded-md py-2 pl-4 pr-[33px] focus:outline-none focus:ring-2 focus:ring-orangeDark focus:border-transparent max-w-[250px] ssm:max-w-full'
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
        <FontAwesomeIcon icon={faSearch} className='text-gray-400' />
      </div>
    </div>
  );
}

export default SearchInput;
