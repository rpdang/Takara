import feature1 from "@/app/assets/feature-1.png";
import feature2 from "@/app/assets/feature-2.png";
import Image from "next/image";

const Features = () => {
  return (
    <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Centralized Financial Overview
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            Managing finances is challenging when your accounts, assets, and
            liabilities are scattered across multiple banks and providers. Our
            solution centralizes everything, giving you a clear and concise
            overview of your financial health, all in one place.
          </p>
          <p className="mb-8 font-light lg:text-xl">
            View all your bank accounts, assets, and liabilities in one place,
            giving you a complete picture of your financial status at a glance.
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
            Interact with your financial data using a smart assistant powered by
            AI. Ask questions and receive insights tailored to your needs.
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
            Receive tailored advice based on your financial habits and goals,
            helping you make informed decisions to improve your financial
            health.
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
            Access financial tips and educational content, customized to your
            situation, to help you grow your knowledge and improve your
            financial literacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
