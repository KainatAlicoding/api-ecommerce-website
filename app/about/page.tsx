// app/components/AboutSection.tsx

import Image from 'next/image';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const AboutSection = () => {
  return (
    <div>
      <Header />
      <section className="flex items-center justify-center min-h-screen bg-gray-50 py-16 px-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
          {/* Left Content (Image or Graphic) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/Frame 17.png" // Replace with your image path
              alt="About Us"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right Content (Text Section) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              About <span className="text-yellow-400">Us</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We are passionate about providing unique and high-quality products 
              that resonate with your style. Our mission is to bring innovation 
              and creativity to every piece we design, ensuring a perfect blend 
              of comfort and fashion.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              With a commitment to excellence, we aim to redefine how you see 
              style, one outfit at a time.
            </p>
            <button className="mt-8 px-8 py-4 bg-yellow-400 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutSection;
