import Head from 'next/head';
import Avatar from './../components/Avatar';
import ViewGridIcon from './../components/ViewGridIcon';
import MicrophoneIcon from './../components/MicrophoneIcon';
import SearchIcon from './../components/SearchIcon';
import CameraIcon from './../components/CameraIcon';
import Footer from './../components/Footer';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
      </Head>
      {/*Header*/}
      <header className="flex w-full p-5 justify-end text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/*Icon*/}
          <ViewGridIcon />

          {/*Avatr*/}
          <Avatar url="https://i.pinimg.com/474x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg" />
        </div>
      </header>
      {/*Body*/}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          alt="Google Pic"
          width={300}
          height={100}
          src="https://www.google.de/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon class="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <div className="flex flex-row justify-evenly">
            <CameraIcon />
            <MicrophoneIcon styles="h-5 pl-5" />
          </div>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I am feeling Lucky
          </button>
        </div>
      </form>
      {/*Footer*/}
      <Footer />
    </div>
  );
}
