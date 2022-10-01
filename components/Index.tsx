import React from 'react';
import Layout from './Layout';
import Image from 'next/image';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import Projects from './Projects';

const Index = () => {
  return (
    <Layout title="Home">
      <section className="text-center">
        <div className="flex flex-col lg:flex-row justify-around gap-10">
          <section className="my-auto">
            <h2 className="text-5xl py-2">Arnold Emmanuel</h2>
            <h3 className="text-2xl py-2">Developer.</h3>
            <p className="text-lg py-5 leading-8 text-gray-800 max-w-lg mx-auto">
              <span className="text-yellow-500">Javascript</span> and{' '}
              <span className="text-blue-500">Typescript</span> developer
              providing programming services, Welcome to my{' '}
              <span className="text-gray-600 px-2 bg-zinc-100 rounded-sm">
                !exciting
              </span>{' '}
              portfolio.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
          </section>
          <section>
            <div className="mx-auto bg-gradient-to-bl from-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={'https://ershemug.sirv.com/portfolio/profile.svg'}
                layout="fill"
                objectFit="cover"
                alt={'profile'}
              />
            </div>
          </section>
        </div>
        <Projects />
      </section>
    </Layout>
  );
};

export default Index;
