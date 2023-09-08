"use client";

import { NavigationMenuDemo } from "@/components/navbar";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className="w-full block lg:flex lg:grow-0 justify-between items-center text-center md:text-left">
      <TypeAnimation
        sequence={[
          550,
          "Jose",
          250,
          "Jose Purba",
          2500,
          "Jose Yolanda Purba",
          2500,
          () => {},
        ]}
        speed={10}
        wrapper="span"
        cursor={false}
        repeat={Infinity}
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
        a.group.active {
          color: rgb(13 148 136);
        }
      `}</style>
    </div>
  );
};

export default Header;
