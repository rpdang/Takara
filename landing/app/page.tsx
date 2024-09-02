import Image from "next/image";
import feature1 from "./assets/feature-1.png";
import feature2 from "./assets/feature-2.png";
import hero from "./assets/hero.png";

export default function HomePage() {
  return (
    <>
      <header className="fixed w-full">
        <nav className="border-gray-200 bg-white py-2.5 dark:bg-gray-900">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
            <a href="#" className="flex items-center">
              <svg
                className="h-6 sm:h-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
              >
                <g id="T">
                  <rect
                    x="40"
                    y="40"
                    width="15"
                    height="45"
                    rx="10"
                    fill="#8A45FF"
                  />

                  <rect
                    x="20"
                    y="22"
                    width="55"
                    height="15"
                    rx="10"
                    fill="#D56AFF"
                  />
                </g>
              </svg>
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                akara
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="bg-theme-600 hover:bg-theme-800 focus:ring-theme-300 dark:bg-theme-600 dark:hover:bg-theme-700 dark:focus:ring-theme-800 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 sm:mr-2 lg:mr-0 lg:px-5 lg:py-2.5"
              >
                Coming Soon
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <a
                    href="#"
                    className="bg-theme-700 lg:text-theme-700 block rounded py-2 pl-3 pr-4 text-white dark:text-white lg:bg-transparent lg:p-0"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-theme-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-theme-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-theme-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Master your Finances with a Single Dashboard
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Centralize all your bank accounts, assets, and liabilities for a
              complete financial overview. Get personalized advice and learn as
              you go.
            </p>
            <a
              href="https://themesberg.com/product/tailwind-css/landing-page"
              className="bg-theme-600 hover:bg-theme-800 focus:ring-theme-300 dark:bg-theme-600 dark:hover:bg-theme-700 dark:focus:ring-theme-800 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 sm:mr-2 lg:mr-0 lg:px-5 lg:py-2.5"
            >
              Join the Waitlist
            </a>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <Image src={hero} alt="hero image" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Centralized Financial Overview
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Managing finances is challenging when your accounts, assets, and
                liabilities are scattered across multiple banks and providers.
                Our solution centralizes everything, giving you a clear and
                concise overview of your financial health, all in one place.
              </p>
              <p className="mb-8 font-light lg:text-xl">
                View all your bank accounts, assets, and liabilities in one
                place, giving you a complete picture of your financial status at
                a glance.
              </p>
            </div>

            <Image
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
              src={feature1}
              alt="dashboard feature image"
            />
          </div>

          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <Image
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
              src={feature2}
              alt="feature image 2"
            />
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Chat with Your Statements
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Interact with your financial data using a smart assistant
                powered by AI. Ask questions and receive insights tailored to
                your needs.
              </p>

              <ul
                role="list"
                className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
              >
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Templates for everyone
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Knowledge management
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Personalized Financial Recommendations
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Receive tailored advice based on your financial habits and
                goals, helping you make informed decisions to improve your
                financial health.
              </p>
            </div>
            <Image
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
              src={feature1}
              alt="dashboard feature image"
            />
          </div>

          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <Image
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
              src={feature1}
              alt="dashboard feature image"
            />
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Financial Education
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Access financial tips and educational content, customized to
                your situation, to help you grow your knowledge and improve your
                financial literacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-24">
          <figure className="mx-auto max-w-screen-md">
            <svg
              className="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 dark:text-white md:text-2xl">
                "Takara is just awesome and it is a game-changer. It provides an
                all-in-one solution with everything from seamless bank account
                integration to powerful financial analytics. The personalized
                recommendations and AI-driven insights make managing my finances
                easier than ever. It's the perfect tool for anyone looking to
                take control of their financial future."
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <img
                className="h-6 w-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Robin Dang
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  Citizen
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-24">
          <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-8 lg:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mx-auto max-w-screen-md">
            <div id="accordion-flush" data-accordion="collapse">
              <h3 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-between border-b border-gray-200 bg-white py-5 text-left font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                >
                  <span>TBD</span>
                  <svg
                    data-accordion-icon=""
                    className="h-6 w-6 shrink-0 rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              <div
                id="accordion-flush-body-1"
                className=""
                aria-labelledby="accordion-flush-heading-1"
              >
                <div className="border-b border-gray-200 py-5 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">TBD</p>
                  <p className="text-gray-500 dark:text-gray-400">TBD</p>
                </div>
              </div>
              <h3 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span>TBD?</span>
                  <svg
                    data-accordion-icon=""
                    className="h-6 w-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              <div
                id="accordion-flush-body-2"
                className="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div className="border-b border-gray-200 py-5 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">TBD</p>
                  <p className="text-gray-500 dark:text-gray-400">TBD</p>
                </div>
              </div>
              <h3 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <span>TBD</span>
                  <svg
                    data-accordion-icon=""
                    className="h-6 w-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              <div
                id="accordion-flush-body-3"
                className="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div className="border-b border-gray-200 py-5 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem Ipsum
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">TBD</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Links:
                  </p>
                  <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="text-purple-600 hover:underline dark:text-purple-500"
                      >
                        Takara 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-purple-600 hover:underline dark:text-purple-500"
                      >
                        Takara 2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Start your free trial today
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Try Takara for 30 days. No credit card required.
            </p>
            <a
              href="#"
              className="bg-theme-700 hover:bg-theme-800 focus:ring-theme-300 dark:bg-theme-600 dark:hover:bg-theme-700 dark:focus:ring-theme-800 mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Free trial for 30 days
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Company
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Download
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Android
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="text-center">
            <a
              href="#"
              className="mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <svg
                className="h-6 sm:h-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
              >
                <g id="T">
                  <rect
                    x="40"
                    y="40"
                    width="15"
                    height="45"
                    rx="10"
                    fill="#8A45FF"
                  />

                  <rect
                    x="20"
                    y="22"
                    width="55"
                    height="15"
                    rx="10"
                    fill="#D56AFF"
                  />
                </g>
              </svg>
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                akara
              </span>
            </a>
            <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
              © Takara. All rights reserved.
            </span>
            <ul className="mt-5 flex justify-center space-x-5">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
