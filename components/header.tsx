"use client";

import { NavigationMenuDemo } from "@/components/navbar";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className="md:flex justify-between items-center text-center md:text-left max-w-4xl mx-auto mt-6">
      <TypeAnimation
        sequence={[
          550,
          "Jose",
          250,
          "Jose Yolanda",
          250,
          "Jose Yolanda Purba",
          () => {},
        ]}
        speed={10}
        wrapper="span"
        cursor={false}
        className="type text-3xl font-semibold text-teal-600"
        style={{ display: "inline-block" }}
      />
      <NavigationMenuDemo />
      <style global jsx>{`
        .type::after {
          content: "_";
          animation: cursor 1.1s infinite step-start;
        }
        @keyframes cursor {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
