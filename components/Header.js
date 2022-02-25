import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import MicrophoneIcon from './MicrophoneIcon';
import SearchIcon from './SearchIcon';
import SettingIcon from './SettingIcon';
import ViewGridIcon from './ViewGridIcon';
import HeaderOptions from './HeaderOptions';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const backToHome = () => {
    router.push('/');
  };
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.de/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google pic"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={backToHome}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            className="flex-grow w-full focus:outline-none "
            type="text"
            ref={searchInputRef}
            defaultValue={router.query.term}
          />
          {/*XIvcon Start*/}
          <svg
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => (searchInputRef.current.value = '')}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          {/*XIvcon End*/}
          <MicrophoneIcon styles="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon class=" h-6 hidden text-blue-500 sm:inline-flex" />
          <button hidden onClick={search}>
            Search
          </button>
        </form>
        <div className="flex flex-row ml-auto">
          <SettingIcon className="hidden sm:inline-flex" />
          <ViewGridIcon className="hidden sm:inline-flex" />
          <Avatar url="https://i.pinimg.com/474x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg" />
        </div>
      </div>
      {/*Header options*/}
      <HeaderOptions />
    </header>
  );
}

export default Header;
