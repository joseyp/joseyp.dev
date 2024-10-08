import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts - Jose Purba",
};

const Contacts = () => {
  return <div className="w-full flex-grow text-sm lg:text-base">
    <p>Get in touch with me.</p>
    <ul className="mt-3">
      <li>Email - <a href="mailto:josprb@gmail.com" target="_blank" className="text-teal-600 font-semibold underline underline-offset-2">josprb@gmail.com</a></li>
      <li>Github - <a href="https://github.com/joseyp" target="_blank" className="text-teal-600 font-semibold underline underline-offset-2">github.com/joseyp</a></li>
      <li>LinkedIn - <a href="https://linkedin.com/in/josepurba" target="_blank" className="text-teal-600 font-semibold underline underline-offset-2">linkedin.com/in/josepurba</a></li>
    </ul>
  </div>;
};

export default Contacts;
