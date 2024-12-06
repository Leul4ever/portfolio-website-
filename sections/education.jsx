"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";

import { EducationData } from "@/constants/EducationData";

const Education = () => {
  const [isEducation, setIsEducation] = useState(false);
  const educationRef = useRef();
  const educationBoxesRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const educationObserver = new IntersectionObserver(
      ([educationEntry]) => {
        setIsEducation(educationEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      }
    );

    educationObserver.observe(educationRef.current);

    if (isEducation) {
      educationBoxesRef.current.classList.add("pop-up-child");
    } else {
      educationBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isEducation]);

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden"
        id="education"
        ref={educationRef}
      >
        <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
          <IoSchoolSharp /> Education
        </h2>

        <div
          className="pop-down-child pb-[30px] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[100px]
           flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]"
          ref={educationBoxesRef}
        >
          {EducationData.map((education) => (
            <div
              className="ml-16 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#c7c6c6] dark:hover:bg-[#333333]
              flex flex-col md:flex-row border border-zinc-300 dark:border-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700
              rounded-lg sm:rounded-full gap-4 md:gap-6 p-4 cursor-pointer bg-[#faf7f7] dark:bg-[#1a1919]"
              key={education.name}
            >
              <div className="hidden lg:block w-[120px] flex-shrink-0">
                <Image
                  alt={education.name}
                  className="object-cover w-full h-full rounded-lg"
                  height={120}
                  src={education.image}
                  width={120}
                />
              </div>
              <div className="flex flex-col gap-2 justify-center md:justify-start text-center md:text-left">
                <p className="text-lg md:text-xl font-bold text-blue-500">
                  {education.name}
                </p>
                <p>{education.schoolOrCollege}</p>
                <p className="text-blue-600">
                  {education.fromTo} &nbsp; | &nbsp; {education.statusOrPrecentage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Education;
