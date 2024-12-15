import React from "react";

const About = () => {
  return (
    <section className="bg-neutral-900 text-white" id="about-me">
      <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-20 mx-auto sm:flex items-center">
        {/* Image Section */}
        <div className="sm:w-1/2 p-5">
          <div className="image object-center text-center">
            <img
              src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif"
              alt="About Me"
              className="mx-auto"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="font-bold text-3xl sm:text-4xl mb-6 text-white">
              About <span className="text-yellow-500">Me</span>
            </h2>
            <p className="text-gray-300 mb-6">
              I’m an Informatics Engineering student with a strong passion for
              Fullstack Development, UI/UX design, and Artificial Intelligence.
              I enjoy building end-to-end applications, focusing on creating
              intuitive and visually appealing user interfaces, while also
              exploring how AI can be applied to solve complex problems.
            </p>

            <h3 className="font-semibold text-xl mb-4">💻 Tech Stack</h3>

            {/* Frontend Section */}
            <h4 className="font-semibold text-lg mb-3">Frontend</h4>
            <p align="left" className="mb-6">
              <a href="https://skillicons.dev">
                <img
                  src="https://skillicons.dev/icons?i=html,css,js,jquery,tailwind,bootstrap,react,vite,nextjs"
                  alt="Frontend Tech Stack"
                />
              </a>
            </p>

            {/* Backend Section */}
            <h4 className="font-semibold text-lg mb-3">Backend</h4>
            <p align="left" className="mb-6">
              <a href="https://skillicons.dev">
                <img
                  src="https://skillicons.dev/icons?i=php,mysql,nodejs,mongodb,express,laravel"
                  alt="Backend Tech Stack"
                />
              </a>
            </p>

            {/* Tools Section */}
            <h4 className="font-semibold text-lg mb-3">Tools</h4>
            <p align="left">
              <a href="https://skillicons.dev">
                <img
                  src="https://skillicons.dev/icons?i=windows,vscode,git,github,figma,vercel,npm,bun,postman"
                  alt="Tools"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
