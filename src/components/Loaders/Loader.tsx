import Image from 'next/image';

function Loader() {
  return (
    <Image
      className="w-10"
      src="/images/gif/loader.gif"
      alt="loader"
    />
  );
}

export default Loader;
