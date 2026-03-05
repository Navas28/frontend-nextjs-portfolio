import React from "react";

const Footer = () => {
    return (
        <footer className="">
            <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                    <a
                        href="#home"
                        className="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Home
                    </a>

                    <a
                        href="#education"
                        className="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Education
                    </a>

                    <a
                        href="#experience"
                        className="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Experience
                    </a>

                    <a
                        href="#skills"
                        className="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Projects
                    </a>
                   
                </div>

                <p className="mt-6 text-md text-white lg:mt-0 dark:text-black">
                    © {new Date().getFullYear()} Navas. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
