//import Image from 'next/image';

const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile pic"
      className={`rounded-full cursor-pointer h-10 animate-bounce transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
};

export default Avatar;
