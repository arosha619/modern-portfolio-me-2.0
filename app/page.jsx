import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-white dark:bg-gray-900">
      {/* Profile Photo with Gradient Back Layer */}
      <div className="relative mb-8">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 blur-lg z-0" />
        <Image
          src="/avatar.png"
          alt="Profile Photo"
          width={160}
          height={160}
          className="relative z-10 rounded-full border-4 border-white shadow-xl object-cover"
        />
      </div>
      {/* Greeting and Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-2">
        Hello,<br />I am <span className="text-blue-600 dark:text-blue-400">Yasas Sri Wickramasinghe</span>
      </h1>
      {/* Subtitle */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 text-center">
        Doctoral Candidate - PhD in Augmented Reality
      </h2>
      {/* Intro Paragraph */}
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8">
        I'm Passionate about <span className="font-bold text-gray-900 dark:text-white">new technologies</span>, inspiring people and motivating teams as a leader to achieve goals. I believe that, if we can <span className="font-bold text-blue-600 dark:text-blue-400">change the way we see the world</span>, we can <span className="font-bold text-blue-600 dark:text-blue-400">change the world we see</span>.
      </p>
      {/* Download Resume Button and Experience Badge */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 w-full justify-center">
        {/* Download Resume Button with Gradient Shadow */}
        <a
          href="/resume.pdf"
          download
          className="relative inline-block px-8 py-3 font-mono text-lg font-semibold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow z-10"
        >
          <span className="relative z-10">Download Resume</span>
          <span className="absolute left-2 top-2 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 rounded -z-10" />
        </a>
        {/* Experience Badge */}
        <div className="flex flex-col items-center justify-center bg-purple-600 text-white rounded-xl px-8 py-4 shadow-lg min-w-[120px]">
          <span className="text-3xl font-bold">10+</span>
          <span className="text-xs font-semibold mt-1">YEARS OF<br />EXPERIENCE</span>
        </div>
      </div>
      {/* Social Icons */}
      <div className="flex items-center gap-4 mt-2">
        <span className="text-gray-600 dark:text-gray-300 text-base">Follow Me on</span>
        <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"><FaInstagram className="text-xl text-blue-600" /></a>
        <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"><FaFacebook className="text-xl text-blue-600" /></a>
        <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"><FaLinkedin className="text-xl text-blue-600" /></a>
      </div>
    </div>
  );
} 