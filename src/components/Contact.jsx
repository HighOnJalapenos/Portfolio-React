import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/91cf67d8-695e-4fa2-9ef4-dd8a149865f8"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email - dvsingh958@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 outline-none focus:ring rounded-sm"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] outline-none focus:ring rounded-sm"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 outline-none focus:ring rounded-sm resize-none"
          type="text"
          rows={10}
          placeholder="Message"
          name="message"
          required
        />
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 hover:scale-105 px-4 py-3 my-8 mx-auto flex items-center transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
