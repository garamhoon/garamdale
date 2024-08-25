import React from 'react';
import Paragraph from "@/components/Paragraph";

const AboutPage: React.FC = () => {
  return (
    <section className="relative py-16 px-4">
      <div className="relative z-10 container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <Paragraph>
          내 이야기.
        </Paragraph>
      </div>
    </section>
  );
};

export default AboutPage;