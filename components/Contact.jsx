import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsChevronDoubleUp, BsYoutube, BsTwitter } from "react-icons/bs";

const Contact = () => {
  const [query, setQuery] = useState({
    name: "",
    phone: "",
    email: "",
    subject:""
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/0eee90e9-563b-49c1-b4e4-063c59da8427", {
      method: "POST",
      body: formData,
    }).then(() => setQuery({ name: "", phone:"", email: "", subject: "", message: "" }));
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#587B7F]">
          contact
        </p>
        <h2 className="py-4">Let's talk :)</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="hover:scale-105 ease-in duration-300 mb-3 hidden md:block">
                <Image
                  className="rounded-xl "
                  src='https://res.cloudinary.com/da7gjdcwj/image/upload/v1653947196/chicode/images/contact_x3nqlc.png'
                  width={1500} height={800}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="pt-2">CHICODE</h2>
                <div className="my-2 h-0.5 bg-[#2EC4B6]"></div>
                <p className="py-1 uppercase text-sm">Web Developer</p>
                <p className="py-4">
                  I am available for freelance jobs. <br /> If you want to build
                  something awesome feel free to reach me.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between py-4 lg:py-12 lg:mt-2">
                  <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn
                      className="hover:text-[#007bb5] ease-in duration-100"
                      size={30}
                    />
                  </div>
                  <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300">
                    <FaGithub
                      className="hover:text-[#000000] ease-in duration-100"
                      size={30}
                    />
                  </div>
                  <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300">
                    <BsYoutube
                      className="hover:text-[#ff0000] ease-in duration-100"
                      size={30}
                    />
                  </div>
                  <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300">
                    <BsTwitter
                      className="hover:text-[#55acee] ease-in duration-100"
                      size={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}

          <div className="col-span-3 h-auto w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                method="POST"
                action="https://getform.io/f/0eee90e9-563b-49c1-b4e4-063c59da8427"
                onSubmit={formSubmit}
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">Name *</label>
                    <input
                      className="border-2 rounded-lg p-3 border-[#2EC4B6] form-control"
                      aria-label="Name"
                      type="text"
                      name="name"
                      value={query.name}
                      onChange={handleParam()}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-[#2EC4B6] form-control"
                      aria-label="Phone number"
                      type="number"
                      name="phone"
                      value={query.phone}
                      onChange={handleParam()}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col py-2 ">
                    <label htmlFor="email" className="uppercase text-sm py-2">email *</label>
                    <input
                      className="border-2 rounded-lg p-3 border-[#2EC4B6] form-control"
                      aria-label="Email"
                      type="email"
                      name="email"
                      value={query.email}
                      onChange={handleParam()}
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2 ">
                    <label htmlFor="subject" className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 border-[#2EC4B6] form-control"
                      aria-label="Subject"
                      type="text"
                      name="subject"
                      value={query.subject}
                      onChange={handleParam()}
                    />
                  </div>
                  <div className="flex flex-col py-2 ">
                    <label htmlFor="message" className="uppercase text-sm py-2">Message *</label>
                    <textarea
                      name="message"
                      aria-label="Message"
                      rows="10"
                      className="border-2 rounded-lg p-3 border-[#2EC4B6] form-control"
                      value={query.message}
                      onChange={handleParam()}
                      required
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="w-full p-4 mt-4 uppercase bg-[#2EC4B6]">
                  Send Message
                </button>
              </form>

              <div className="md:hidden hover:scale-105 ease-in duration-300 mt-10 mb-4">
                <Image
                  className="rounded-xl "
                  src="https://res.cloudinary.com/da7gjdcwj/image/upload/v1653947196/chicode/images/contact_x3nqlc.png"
                  alt="/"
                  width={1500} height={800}
                />
              </div>

            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-105 ease-in duration-300">
              <BsChevronDoubleUp className="text-[#2EC4B6] " size={30} />
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-[#2EC4B6] h-12 w-full flex justify-center items-center">
        <div className="max-w-[1240px] ">
          <div className="flex justify-between items-center">
            <p className="text-white uppercase">
              &copy; Chicode 2022 || All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
