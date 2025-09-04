import React from "react";
import profileImg from "../assets/abcdef.webp";
export default function ContactSection() {
  return (
    <section className="min-h-screen bg-[#071233] relative py-16 lg:pb-32 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="flex justify-center items-center flex-col  lg:text-left text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Want to discuss your idea?
            </h2>
            <p className="text-gray-300 max-w-[320px] text-xl font-semibold mx-auto lg:mx-0">
              Hi I am Ryan, a Business Consultant at RV Technologies. We are
              excited to hear about your project.
            </p>

            {/* Profile Image */}
            <div className="mt-8 p-3 flex justify-center">
              <img
                src={profileImg}
                alt="Consultant"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </div>

            <p className="mt-6 text-gray-300">
              Drop us a line and we will connect you to our experts.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="
    bg-[#ff6565] text-white rounded-md shadow-xl p-8 w-full
    relative
    lg:absolute lg:right-8 lg:bottom-[-60px] lg:z-10 lg:max-w-[500px]
  "
          >
            <h3 className="text-2xl font-bold mb-2">Let’s Get Started</h3>
            <p className="text-white/90 mb-6">
              We’re here to help you. Fill the form below and we will get you in
              touch with our experts soon.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-3 rounded-full bg-white text-gray-800 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 rounded-full bg-white text-gray-800 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-full bg-white text-gray-800 focus:outline-none"
              />
              <textarea
                placeholder="Describe project"
                rows="4"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#071233] hover:bg-[#0a1b4a] text-white py-3 rounded-full font-semibold transition"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
