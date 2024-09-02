import Link from "next/link";

const CTA = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          Start your free trial today
        </h2>
        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
          Try Takara for 30 days. No credit card required.
        </p>
        <Link
          href="#"
          className="mb-2 mr-2 rounded-lg bg-theme-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-theme-800 focus:outline-none focus:ring-4 focus:ring-theme-300 dark:bg-theme-600 dark:hover:bg-theme-700 dark:focus:ring-theme-800"
        >
          Free trial for 30 days
        </Link>
      </div>
    </div>
  );
};

export default CTA;
