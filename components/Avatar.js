//import Image from 'next/image';

import Image from 'next/image';

const Avatar = ({ url, className }) => {
  return (
    <Image
      width={40}
      height={40}
      loading="lazy"
      src={url}
      alt="profile pic"
      className={`rounded-full cursor-pointer h-10 ${className}`}
    />
  );
};

export default Avatar;
