import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import ButtonLink from '@/components/ButtonLink';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const projects: Project[] = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  title: `Project ${i + 1}`,
  description: 'Coming soon',
  imageUrl: '/bg_marble.jpg',
  githubUrl: 'https://github.com/garamhoon',
}));

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">2024 My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/30 rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div></div>
                  <ButtonLink href={project.githubUrl} target="_blank">
                    <FaGithub />
                  </ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
