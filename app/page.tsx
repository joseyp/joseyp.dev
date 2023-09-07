import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - joseyp.dev",
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-xl font-semibold mb-3">Hi, I&apos;m Jose!</h1>
      <p className="mb-3">
        A passionate web developer from Jakarta, Indonesia.
      </p>
      <p>
        I mainly use <span className="text-teal-600 font-bold">Laravel</span>{" "}
        for my clients, but I also use{" "}
        <span className="text-teal-600 font-bold">Go</span> in my private
        projects.
      </p>
      <p>
        Right now, I&apos;m learning{" "}
        <span className="text-teal-600 font-bold">Next.js</span> which I used to
        build this website.
      </p>
    </div>
  );
}
