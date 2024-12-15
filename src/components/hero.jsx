// src/components/hero.js
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white pt-8"
      id="home"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://source.unsplash.com/1600x900/?technology"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
        />
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Announcement Banner */}
          <div className="flex justify-center mb-10">
            <a
              className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-white/10"
              href="#"
            >
              <p className="me-2 text-white text-sm">
                View my repository here!
              </p>
              <span className="group-hover:bg-white/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}

          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Hi, I'm Azharangga Kusuma.
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl text-gray-300">
            A full-stack developer and UI/UX designer currently studying, honing
            my skills in web development and design to create seamless and
            user-friendly experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Buttons */}
            <div className="text-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
                href="#projects"
              >
                <i className="fas fa-folder-open"></i> My Projects
              </a>
            </div>
            <div className="text-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
                href="https://www.linkedin.com/in/azharanggakusuma"
                target="_blank"
              >
                <i className="fas fa-paper-plane"></i> Let’s Connect
              </a>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
