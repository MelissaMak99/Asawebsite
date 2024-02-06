import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="bg-yellow-500 relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-[#fcb900] lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#fcb900] uppercase">
          CONTACT US
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-16 py-2 mt-2
            border
            rounded-md
            focus:outline-none
            focus:shadow-outline
          "
                placeholder="your name"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border
            rounded-md
            focus:outline-none
            focus:shadow-outline
          "
                placeholder="email@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-2 px-16 py-8
            border
            rounded-md
            focus:outline-none
            focus:shadow-outline
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-yellow-600
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-yellow-800
          "
            >
              Send Message
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Contact