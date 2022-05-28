import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#fff");
  const [linkColor, setLinkColor] = useState("#000");
  const [logo, setLogo] = useState('/../public/assets/logo-o.png')
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/otherpage'
     ) {
       setNavBg('transparent')
       setLinkColor('#fff')
       setLogo('/../public/assets/logo-w.png')
     } else {
       setNavBg('#fff')
       setLinkColor("#000")
       setLogo('/../public/assets/logo-o.png')
     }

  }, [router])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
    style={{backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer">
        <Link href="/">
          <Image
            src={logo}
            alt="/"
            width="100"
            height="100"
          />
        </Link>
        <div>
          <ul style={{color: `${linkColor}`}} className="hidden md:flex text-black">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-[#FF9F1C] hover:ease-in hover:duration-150">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-[#FF9F1C] hover:ease-in hover:duration-150">
                About
              </li>
            </Link>
            <Link href="/#services">
              <li className="ml-10 text-sm uppercase hover:text-[#FF9F1C] hover:ease-in hover:duration-150">
                Services
              </li>
            </Link>
            <Link href="/#work">
              <li className="ml-10 text-sm uppercase hover:text-[#FF9F1C] hover:ease-in hover:duration-150">
                Work
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-[#FF9F1C] hover:ease-in hover:duration-150">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#fff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/logo-b.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </Link>
              <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-[#393E41] my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-[#587B7F]">
                Let's build somethig beautiful
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#services">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Services
                </li>
              </Link>
              <Link href="/#work">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Work
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase text-[#587B7F]">Let's talk!</p>
              <div className="flex items-center justify-between w-full sm:w-[60%]">
                <div className="py-6">
                  <FaLinkedinIn size={25} />
                </div>
                <div className="py-6">
                  <FaGithub size={25} />
                </div>
                <div className="py-6">
                  <BsYoutube size={25} />
                </div>
                <div className="py-6">
                  <AiOutlineMail size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
