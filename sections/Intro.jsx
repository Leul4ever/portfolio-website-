'use client'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const Intro = () => {
  const [isHome, setIsHome] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const homeRef = useRef()
  const introRef = useRef()
  const profileRef = useRef()

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    // Scroll Animation
    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting)
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? '-100px' : '-300px'}`,
        }
      )

      homeObserver.observe(homeRef.current)

      if (isHome) {
        profileRef.current.classList.add('slide-in')
        introRef.current.classList.add('slide-in')
      } else {
        profileRef.current.classList.remove('slide-in')
        introRef.current.classList.remove('slide-in')
      }
    }
  }, [homeRef, isHome])

  return (
    <Fragment>
      <Head>
        <title>Leul Portfolio</title>
      </Head>
      <section id="home">
        <div
          className="min-h-[100vh] overflow-x-hidden px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[200px] pt-20 sm:pt-28 md:pt-0 flex flex-col md:flex-row items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm"
          ref={homeRef}
        >
          <div
            className="w-full md:w-1/2 translate-x-[-500px] transition-all duration-700 opacity-0 mb-8 md:mb-0"
            ref={introRef}
          >
            <div className="py-2">
              <h1 className="capitalize pb-4 text-lg sm:text-xl md:text-xl non-italic font-semibold">
                {mounted ? (
                  <TypeAnimation
                    sequence={[
                      'Transforming your digital dreams into reality!',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-black dark:text-[#07d0e5]"
                  />
                ) : (
                  <span className="text-[#c72c6c] dark:text-[#07d0e5]">
                    Full-Stack Developer
                  </span>
                )}
              </h1>
              <p className="py-4 text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold font-sans">
                Hi, I&apos;m Leul Abera
              </p>
              <p className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-sans">
                {' '}
                {mounted ? (
                  <TypeAnimation
                    sequence={[
                      'Software Engineer',
                      1000,
                      'Full-Stack Developer',
                      1000,
                      'ML Enthusiast',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-[#c72c6c] dark:text-[#07d0e5]"
                  />
                ) : (
                  <span className="text-[#c72c6c] dark:text-[#07d0e5]">
                    Full-Stack Developer
                  </span>
                )}
                <span className="text-white"> |</span>
              </p>
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-3">
              <Link
                className="text-white text-base sm:text-lg md:text-xl font-semibold rounded-full bg-red-400 hover:bg-red-500 px-3 py-2 transition-colors duration-300"
                href={'#contact'}
              >
                Contact
              </Link>
              <Link
                className="text-base sm:text-lg md:text-xl font-semibold rounded-full border border-red-500 hover:text-white hover:bg-red-500 px-3 py-2 transition-colors duration-300"
                href="https://drive.google.com/file/d/1pF27SdzSIHVnbMCAiYDkxOS7whmmLLsl/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] bg-cover bg-center m-auto md:m-2 mt-8 md:mt-0 rounded-full translate-x-[500px] transition-all opacity-0 duration-700 "
            ref={profileRef}
            style={{
              backgroundImage: 'url(/images/leul.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </section>
    </Fragment>
  )
}

export default Intro
