import React from 'react';

const Contact = () => {
  return (
    <section className="bg-neutral-900" id="contact">
      <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Contact <span className="text-yellow-500">Me</span>
          </h2>
          <p className="mt-1 text-neutral-400">
            I'm open to collaborations and opportunities. Let's connect!
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div className="space-y-4">
                {/* Input Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-name"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="hs-tac-input-name"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Name
                  </label>
                </div>

                {/* Input Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="hs-tac-input-email"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="hs-tac-input-email"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Email
                  </label>
                </div>

                {/* Input Company */}
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-company"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Company"
                  />
                  <label
                    htmlFor="hs-tac-input-company"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Company
                  </label>
                </div>

                {/* Input Phone */}
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-phone"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="hs-tac-input-phone"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Phone
                  </label>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    id="hs-tac-message"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Tell me about your project"
                    data-hs-textarea-auto-height
                  ></textarea>
                  <label
                    htmlFor="hs-tac-message"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Tell me about your project
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">All fields are required</p>

                <p className="mt-5">
                  <a
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                    href="#"
                  >
                    Submit
                    <svg
                      className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
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
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-14">
            <div className="flex gap-x-5">
              <i className="fas fa-map-marker-alt text-neutral-500 text-2xl"></i>
              <div className="grow">
                <h4 className="text-white font-semibold">My address</h4>
                <address className="mt-1 text-neutral-400 text-sm not-italic">
                  Cirebon, Indonesia
                </address>
              </div>
            </div>

            <div className="flex gap-x-5">
              <i className="fas fa-envelope text-neutral-500 text-2xl"></i>
              <div className="grow">
                <h4 className="text-white font-semibold">Let's chat</h4>
                <a
                  href="mailto:your-email@example.com"
                  className="mt-1 text-neutral-400 text-sm"
                >
                  azharanggakusuma01@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-x-5">
              <i className="fas fa-phone text-neutral-500 text-2xl"></i>
              <div className="grow">
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="mt-1 text-neutral-400 text-sm">+62 895 3645 27280</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
