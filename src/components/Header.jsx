import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../assests/yt-logo.png";
import ytLogoMobile from "../assests/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";

const Header = () => {

  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu,  setMobileMenu } = useContext(Context);
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if ((e?.key === "Enter" || e === "searchButton") && searchQuery.length > 0) {
      inputRef.current.blur();
      navigate(`/searchResult/${searchQuery}`);

    }

  }

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  }

  const clearQuery = () =>{
    setSearchQuery("");
    inputRef.current.focus();
  }

  const { pathname } = useLocation();

  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  // console.log("pageName ", pageName);

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {/* Loader show */}
      {loading && <Loader />}

      <div className="flex h-5 items-center">

        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="Youtube"
          />
          <img
            className="h-full md:hidden"
            src={ytLogoMobile}
            alt="Youtube"
          />
        </Link>

      </div>
      
      {/* SEARCH BAR  */}
      <div className="group flex items-center">
        
        <div className=" relative flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                    <IoIosSearch className="text-white text-xl" />
                </div>
                <input
                        type="text"
                        className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0  md:group-focus-within:pl-0 w-24 md:w-[16rem] lg:w-[500px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="Search"
                        value={searchQuery}
                        ref={inputRef}
                    />
        { 
          searchQuery.length > 0 && <button className="absolute right-[-2px] top-0 hover:bg-[#343131] p-2 rounded-full  w-10 items-center justify-center  group-focus-within:md:flex"
                                      onClick={()=>clearQuery()}>
                                      <RxCross1 className="text-white text-xl" />
                                    </button>
        }
        </div>
        <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <IoIosSearch className="text-white text-xl" />
        </button>

      </div>

      <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-6 md:h-8 w-6 md:w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
                </div>
            </div>

    </div>
  )
}

export default Header;
