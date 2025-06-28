import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 py-12 bg-white dark:bg-gray-900 gap-8 lg:gap-0">
      {/* Left: Content */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Hello,<br />I am <span className="text-blue-600 dark:text-blue-400">Yasas Sri Wickramasinghe</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
          Doctoral Candidate - PhD in Augmented Reality
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
          I'm Passionate about <span className="font-bold text-gray-900 dark:text-white">new technologies</span>, inspiring people and motivating teams as a leader to achieve goals. I believe that, if we can <span className="font-bold text-blue-600 dark:text-blue-400">change the way we see the world</span>, we can <span className="font-bold text-blue-600 dark:text-blue-400">change the world we see</span>.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 w-full lg:w-auto justify-center lg:justify-start">
          <a
            href="/resume.pdf"
            download
            className="relative inline-block px-8 py-3 font-mono text-lg font-semibold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow z-10"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute left-2 top-2 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 rounded -z-10" />
          </a>
          <div className="flex flex-col items-center justify-center bg-purple-600 text-white rounded-xl px-8 py-4 shadow-lg min-w-[120px]">
            <span className="text-3xl font-bold">10+</span>
            <span className="text-xs font-semibold mt-1">YEARS OF<br />EXPERIENCE</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 justify-center lg:justify-start">
          <span className="text-gray-600 dark:text-gray-300 text-base">Follow Me on</span>
          <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"><FaInstagram className="text-xl text-blue-600" /></a>
          <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"><FaFacebook className="text-xl text-blue-600" /></a>
          <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"><FaLinkedin className="text-xl text-blue-600" /></a>
        </div>
      </div>
      {/* Right: Profile Image with Gradient Back Layer */}
      <div className="flex-1 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-green-400 to-blue-500 blur-lg z-0 w-full h-full" />
          <Image
            src="/avatar.png"
            alt="Profile Photo"
            width={400}
            height={500}
            className="relative z-10 object-cover rounded-2xl w-[90vw] max-w-[350px] h-[220px] sm:w-[350px] sm:h-[300px] lg:w-[400px] lg:h-[500px] shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
} 