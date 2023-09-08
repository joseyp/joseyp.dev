import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Jose Purba",
};

export const getStaticProps = () => {
  return {
    props: {
      pageId: "projects",
    },
  };
}

const Projects = () => {
  return (
    <div className="w-full flex-grow">
      Sorry, this page is still under constructions.
    </div>
  );
};

export default Projects;
