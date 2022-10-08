import type { NextPage } from 'next';
import { AiFillGithub } from 'react-icons/ai';
import { CgArrowTopRightR } from 'react-icons/cg';

const Projects: NextPage = () => {
  return (
    <section className="mt-20 mb-5">
      <h1 className="mb-10 text-3xl text-center border-b-2 max-w-sm mx-auto">
        PROJECTS
      </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-10 flex-wrap px-10">
        <div className="text-center shadow-xl rounded-md border basis-1/3 flex-1">
          <div className="p-5">
            <h1 className="text-xl font-semibold">PORTFOLIO</h1>
            <p className="my-4 max-w-lg mx-auto leading-8 text-xl">
              This project is about my portfolio, To see source code click on
              the github icon below.
            </p>
            <div className="text-3xl flex justify-center">
              <a
                href="https://github.com/EArnold1/portfolio "
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="mx-auto" />
              </a>
            </div>
            <br />
            <h4 className="my-3 font-semibold">TOOLS</h4>
            <div className="flex flex-col lg:flex-row justify-center gap-x-3">
              <p className="text-gray-500">NEXT JS</p>
              <p className="text-gray-500">TAILWIND CSS</p>
            </div>
          </div>
          <div className="text-left border-t-2 p-3">
            <p>
              Built with : <span className="text-gray-500">Typescript</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="text-center shadow-xl rounded-md border basis-1/3 flex-1">
          <div className="p-5">
            <h1 className="text-xl font-semibold">ANONYMOUS</h1>
            <p className="my-4 max-w-lg mx-auto leading-8 text-xl">
              An anonymous messaging application used to send messages to family
              and friends
            </p>
            <div className="text-3xl flex justify-center gap-x-3">
              <a
                href="https://github.com/EArnold1/anonymous"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="mx-auto" />
              </a>
              <a
                href="https://anonymous.earnold.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgArrowTopRightR className="mx-auto" />
              </a>
            </div>
            <br />
            <h4 className="my-3 font-semibold">TOOLS</h4>
            <div className="flex flex-col lg:flex-row justify-center gap-x-3">
              <p className="text-gray-500">NEXT JS</p>
              <p className="text-gray-500">TAILWIND CSS</p>
              <p className="text-gray-500">MONGODB</p>
              <p className="text-gray-500">NODE JS</p>
              <p className="text-gray-500">EXPRESS JS</p>
            </div>
          </div>
          <div className="text-left border-t-2 p-3">
            <p>
              Built with :{' '}
              <span className="text-gray-500">Typescript & Javascript</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="text-center shadow-xl rounded-md border basis-1/3 flex-1">
          <div className="p-5">
            <h1 className="text-xl font-semibold">EJS BLOG</h1>
            <p className="my-4 max-w-lg mx-auto leading-8 text-xl">
              Mini blog built with ejs template engine. It is a subsitute for a
              frontend framework, This is used to showcase the capabilites of a
              template engine.
            </p>
            <div className="text-3xl flex justify-center">
              <a
                href="https://github.com/EArnold1/ejs-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="mx-auto" />
              </a>
            </div>
            <br />
            <h4 className="my-3 font-semibold">TOOLS</h4>
            <div className="flex flex-col lg:flex-row justify-center gap-x-3">
              <p className="text-gray-500">EJS</p>
              <p className="text-gray-500">BOOTSTRAP</p>
              <p className="text-gray-500">NODE JS</p>
              <p className="text-gray-500">EXPRESS JS</p>
            </div>
          </div>
          <div className="text-left border-t-2 p-3">
            <p>
              Built with : <span className="text-gray-500">Javascript</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
