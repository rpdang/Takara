import heroImg from "@/app/assets/hero.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
          Master your Finances with a Single Dashboard
        </h1>
        <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
          Centralize all your bank accounts, assets, and liabilities for a
          complete financial overview. Get personalized advice and learn as you
          go.
        </p>
        <Link
          href="#"
          className="rounded-lg bg-theme-600 px-4 py-2 text-sm font-medium text-white hover:bg-theme-800 focus:outline-none focus:ring-4 focus:ring-theme-300 dark:bg-theme-600 dark:hover:bg-theme-700 dark:focus:ring-theme-800 sm:mr-2 lg:mr-0 lg:px-5 lg:py-2.5"
        >
          Join the Waitlist
        </Link>
      </div>
      <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
        <Image src={heroImg} priority alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
