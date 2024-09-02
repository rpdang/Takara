const Testimonials = () => {
  return (
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
            easier than ever. It's the perfect tool for anyone looking to take
            control of their financial future."
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
  );
};

export default Testimonials;
