import React, { useEffect } from "react";

function Navbar() {
  const handleBurgerClick = () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector("header");
      // console.log(window.pageYOffset);

      if (window.pageYOffset > header.offsetTop) {
        header.classList.add("nav-fixed");
      } else {
        header.classList.remove("nav-fixed");
      }
    };
  }, []);
  return (
    <>
      <header className="bg-transparent top-0 absolute left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="text-lg font-bold text-primary block py-6"
              >
                Ma'mun Amri
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                onClick={handleBurgerClick}
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex space-y-2">
                  <li
                    className="group hover:cursor-pointer"
                    onClick={handleBurgerClick}
                  >
                    <a
                      href="#home"
                      className="group-hover:text-primary py-2 mx-8 lg:font-medium text-base text-dark"
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className="group hover:cursor-pointer"
                    onClick={handleBurgerClick}
                  >
                    <a
                      href="#about"
                      className="group-hover:text-primary py-2 mx-8 lg:font-medium text-base text-dark"
                    >
                      About
                    </a>
                  </li>
                  <li
                    className="group hover:cursor-pointer"
                    onClick={handleBurgerClick}
                  >
                    <a
                      href="#skill"
                      className="group-hover:text-primary py-2 mx-8 lg:font-medium text-base text-dark"
                    >
                      Skills
                    </a>
                  </li>
                  <li
                    className="group hover:cursor-pointer"
                    onClick={handleBurgerClick}
                  >
                    <a
                      href="#project"
                      className="group-hover:text-primary py-2 mx-8 lg:font-medium text-base text-dark"
                    >
                      Projects
                    </a>
                  </li>
                  {/* <li className="group hover:cursor-pointer">
                    <a
                      href="#contact"
                      className="group-hover:text-primary py-2 mx-8 lg:font-medium text-base text-dark"
                    >
                      Contact
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
