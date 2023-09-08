import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jose Purba",
};

export default function Home() {
  return (
    <div className="w-full flex-grow  ">
      <h1 className="lg:text-lg font-semibold mb-3">Hi, I&apos;m Jose!</h1>
      <p className="mb-3 text-sm lg:text-base">
        A passionate web developer currenty based in Jakarta, Indonesia.
      </p>
      <p className="text-sm lg:text-base">
        I mainly use <span className="text-teal-600 font-bold">Laravel</span>{" "}
        for my clients, but I also use{" "}
        <span className="text-teal-600 font-bold">Go</span> in my private
        projects.
      </p>
      <p className="text-sm lg:text-base">
        Right now, I&apos;m learning{" "}
        <span className="text-teal-600 font-bold">Next.js</span> which I used to
        build this website.
      </p>
    </div>
  );
}
