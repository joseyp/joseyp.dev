import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts - joseyp.dev",
};

const Contacts = () => {
  return <div className="max-w-4xl mx-auto mt-8">
    <p>Get in touch with me.</p>
    <ul className="mt-3">
      <li>Email - <a href="mailto:josprb@gmail.com" className="text-teal-600 font-semibold underline underline-offset-2">josprb@gmail.com</a></li>
      <li>Github - <a href="https://github.com/joseyp" className="text-teal-600 font-semibold underline underline-offset-2">github.com/joseyp</a></li>
      <li>LinkedIn - <a href="https://linkedin.com/in/josepurba" className="text-teal-600 font-semibold underline underline-offset-2">linkedin.com/in/josepurba</a></li>
      <li>Discord - <span className="text-teal-600 font-semibold underline underline-offset-2">joseyp</span></li>
    </ul>
  </div>;
};

export default Contacts;
