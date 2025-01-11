// app/components/HeroSection.tsx

import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    {/* Content Wrapper */}
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between max-w-7xl w-full p-8">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          LET’S <span className="block">EXPLORE</span>
          <span className="text-yellow-400">UNIQUE</span>{' '}
          <span className="block">CLOTHES.</span>
        </h1>
        <p className="mt-4 text-md md:text-lg text-gray-700">
          Live for Influential and Innovative fashion!
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
          Shop Now
        </button>
      </div>
      {/* Right Image */}
      <div className="relative w-full flex justify-center max-w-sm md:max-w-md lg:max-w-lg">
        <Image
          src="/women 2.png" // Replace with your image path
          alt="Fashion Girl"
          width={600}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Optional Decorative Stars */}
      <div className="absolute -top-4 -left-4 text-gray-300 text-5xl hidden md:block">★</div>
      <div className="absolute -bottom-4 -right-4 text-gray-300 text-5xl hidden md:block">★</div>
    </div>
    
    </div>


 
  );
};

export default HeroSection;
 