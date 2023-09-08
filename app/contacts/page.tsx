import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts - Jose Purba",
};

const Contacts = () => {
  return <div className="max-w-4xl mx-auto mt-8">
    <p>Get in touch with me.</p>
    <ul className="mt-3">
      <li>Email - <a href="mailto:josprb@gmail.com" className="text-teal-600 font-semibold underline underline-offset-2">josprb@gmail.com</a></li>
      <li>Github - <a href="https://github.com/joseprb" className="text-teal-600 font-semibold underline underline-offset-2">https://github.com/joseprb</a></li>
      <li>LinkedIn - <a href="https://linkedin.com/in/josepurba" className="text-teal-600 font-semibold underline underline-offset-2">https://linkedin.com/in/josepurba</a></li>
      <li>Discord - <span className="text-teal-600 font-semibold underline underline-offset-2">joseyp</span></li>
    </ul>
  </div>;
};

export default Contacts;
