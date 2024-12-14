import React from "react";

const Services = () => {
  return (
    <section className="bg-neutral-900 text-white py-20" id="services">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-bold text-3xl sm:text-4xl text-white">
          My <span className="text-yellow-500">Services</span>
        </h2>
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Website Development */}
          <div className="bg-neutral-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-5xl mb-6 text-yellow-500">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Website Development</h3>
            <p className="text-gray-300">
              I specialize in building custom websites tailored to your business
              needs. From dynamic, responsive web applications to fully
              functional e-commerce platforms, I ensure that your website
              performs flawlessly across all devices.
            </p>
          </div>

          {/* Website Design */}
          <div className="bg-neutral-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-5xl mb-6 text-yellow-500">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Website Design</h3>
            <p className="text-gray-300">
              I design visually stunning and user-friendly websites that
              captivate visitors. From wireframes to final designs, I focus on
              creating seamless and intuitive experiences that reflect your
              brand identity.
            </p>
          </div>

          {/* Website Maintenance and Optimization */}
          <div className="bg-neutral-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-5xl mb-6 text-yellow-500">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Website Maintenance & Optimization
            </h3>
            <p className="text-gray-300">
              I provide ongoing maintenance and optimization services to ensure
              that your website stays up-to-date, secure, and performs at its
              best. From speed optimization to security patches, I ensure your
              website is always running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
