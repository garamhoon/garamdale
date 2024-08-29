import React from 'react';
import Image from 'next/image';
import { FaThreads, FaGithub, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import AboutMeParagraph from '@/components/AboutMeParagraph';

const AboutPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-40 px-4 bg-background text-secondary">
      <div className="relative w-52 h-52 mb-6">
        <Image
          src="https://avatars.githubusercontent.com/u/175632583?v=4"
          alt="Profile Picture"
          fill
          className="object-cover rounded-full"
        />
      </div>

      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <AboutMeParagraph className="mb-4">안녕하세요! 저는 웹 개발자 정명훈입니다.</AboutMeParagraph>
        <AboutMeParagraph>저는 2019년에 웹 개발을 시작하여 현재까지 개발자로서 일하고 있습니다.</AboutMeParagraph>
        <AboutMeParagraph>지금까지는 C#과 jQuery를 사용해왔습니다.</AboutMeParagraph>
        <AboutMeParagraph>앞으로는 조금 다른 여정을 시작할 예정입니다. 저의 새로운 여정 지켜봐주세요.</AboutMeParagraph>
      </div>

      <div className="flex space-x-6 mt-16">
        <Link href="https://www.threads.net/@garamhoon" target="_blank" rel="noopener noreferrer">
          <FaThreads className="text-secondary hover:text-primary text-3xl" />
        </Link>
        <Link href="https://x.com/garamhoon" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-secondary hover:text-primary text-3xl" />
        </Link>
        <Link href="https://github.com/garamhoon" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-secondary hover:text-primary text-3xl" />
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
