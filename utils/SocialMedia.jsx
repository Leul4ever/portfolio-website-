
import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { MdFeedback } from "react-icons/md";

import { SocialMediaData } from "@/constants/SocialMediaData";
import { PortfolioContext } from "@/contextApi/PortfolioContext";

const SocialMedia = () => {
  const { setShowModal } = useContext(PortfolioContext);

  return (
    <Fragment>
      <div className='fixed left-0 bottom-0 w-full sm:w-auto sm:left-4 md:left-8 lg:left-14 sm:bottom-10 md:bottom-10 lg:bottom-20 flex flex-row 
      sm:flex-row lg:flex-col  justify-center  items-center gap-2 sm:gap-4 z-10 bg-gray-100 
      dark:bg-gray-800 sm:bg-transparent sm:dark:bg-transparent p-2 sm:ml-44 md:ml-2'>
        {SocialMediaData.map((social, key) => (
          <Link className='w-fit' href={social.link} key={key} target="_blank" rel="noopener noreferrer">
            <div
              className={"p-1.5 sm:p-2 rounded-full text-base sm:text-xl text-white transition-transform hover:scale-110"}
              style={{ background: social.color }}
            >
              {social.icon}
            </div>
          </Link>
        ))}
        <button
          className='p-1.5 sm:p-2 rounded-full text-base sm:text-xl bg-[#f2925a] text-white transition-transform hover:scale-110'
          onClick={() => setShowModal(true)}
        >
          <MdFeedback />
        </button>
      </div>
    </Fragment>
  );
};

export default SocialMedia;