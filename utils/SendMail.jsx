'use client'
import React, { useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const SendMail = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/send'

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const resData = await response.json()

    if (response.status === 200) {
      console.log('Message sent.')
      setEmailSubmitted(true)
    }
  }

  return (
    <section id="contact" className="bg-gray-200 dark:bg-gray-800 py-12 px-4 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Side: Text and Social Links */}
        <div className="pl-4 md:pl-8 lg:pl-16">
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-lg text-gray-700 dark:text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex gap-4">
            <Link href="https://www.linkedin.com/in/leul-abera-418791259/">
              <FaLinkedinIn className="text-gray-900 dark:text-white text-2xl" />
            </Link>
             <Link href="https://github.com/Leul4ever">
              <BsGithub className="text-gray-900 dark:text-white text-2xl" />
            </Link>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white dark:bg-[#18191E] p-6 rounded-lg shadow-md md:w-3/4 lg:w-2/3 mx-auto">
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-gray-900 dark:text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-gray-100 dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="leul0593@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="text-gray-900 dark:text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-gray-100 dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="say hi"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-gray-900 dark:text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-gray-100 dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                  rows="3"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-300 dark:bg-gray-700 hover:bg-primary-600 text-gray-900 dark:text-gray-100 font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default SendMail
