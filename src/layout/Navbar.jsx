import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formContainer = useRef();
  const buttonRef = useRef();
  const [isMenu, setMenu] = useState(false);
  const {pathname} = useLocation()

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  const handleToggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        formContainer.current &&
        !formContainer.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        handleCloseForm();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isFormVisible || isMenu) {
      document.body.classList.add("InView");
    } else {
      document.body.classList.remove("InView");
    }
  }, [isFormVisible, isMenu]);

  useEffect(()=>{
    setIsFormVisible(false)
  },[pathname])

  return (
    <nav
      className={`bg-white transition-transform z-40 duration-300 ${
        isVisible ? "translate-y-0 shadow-md" : "-translate-y-full"
      } sticky top-0 left-0 w-full`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to='/' className="size-fit inline-block">
          <img
            src="../images/logo.webp"
            width={114}
            height={64}
            className="w-32 h-auto"
            alt="website-logo"
            loading="eager"
          />
        </Link>
        <div className="flex items-center gap-3 lg:gap-5">
          <div
            className={`${
              isMenu ? "h-fit py-8" : "h-0 py-0"
            } absolute overflow-hidden top-full duration-300 w-full px-5 lg:h-fit lg:p-0 bg-white left-0 flex flex-col lg:static lg:flex-row lg:items-center gap-6`}
          >
            {["Quote", "About Us", "Work With Us", "FAQ", "Contact"].map(
              (link, index) => (
                <Link
                  className="text-base text-black-heading font-normal"
                  key={link + index}
                >
                  {link}
                </Link>
              )
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="lg:relative">
              <button
                ref={buttonRef}
                onClick={handleToggleForm}
                className="cursor-pointer bg-black border-2 border-[#b9b9b9] inline-flex justify-center size-9 p-2 rounded-full"
              >
                {!isFormVisible ? (
                  <svg
                    catalog="icon"
                    className="size-full"
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                      fill="white"
                    />
                    <path
                      d="M16 15.5C16 17.985 16 20 8 20C0 20 0 17.985 0 15.5C0 13.015 3.582 11 8 11C12.418 11 16 13.015 16 15.5Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <X color="white" className="size-full" />
                )}
              </button>
              {isFormVisible && (
                <div
                  ref={formContainer}
                  className="p-6 absolute left-1/2 -translate-x-1/2 top-[110%] lg:top-[250%] bg-white rounded-2xl shadow-md w-[90%] lg:w-96"
                >
                  <span
                    style={{
                      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    }}
                    className="w-8 h-6 hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 bg-white"
                  />
                  <h2 className="text-2xl font-bold text-black-heading text-center mb-4">
                    Sign In
                  </h2>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        className="mt-1 block w-full px-3 text-base py-2 border border-gray rounded-lg outline-primary"
                        placeholder="Email Address"
                        autoComplete="Email-Address"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="mt-1 block w-full px-3 py-2 text-base border border-gray rounded-lg outline-primary"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </div>
                    <div className="flex justify-end mb-4">
                      <a
                        href="#"
                        className="text-sm text-[#868686] hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <Button text="Login" width="w-full" />
                  </form>
                  <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray" />
                    <span className="mx-2 text-[#868686]">OR</span>
                    <hr className="flex-grow border-gray" />
                  </div>
                  <button className="w-full flex items-center justify-center border border-gray py-2 px-4 text-black-content rounded-lg cursor-pointer">
                    <img
                      src="../images/google.svg"
                      alt="Google"
                      className="w-5 h-5 mr-2"
                    />
                    Login with Google
                  </button>
                  <p className="text-center text-sm text-black-heading mt-4">
                    Don’t have an Account?{" "}
                    <Link
                      to="/signup"
                      className="text-primary font-bold hover:underline"
                    >
                      SIGN UP
                    </Link>
                  </p>
                </div>
              )}
            </div>
            <Button isShow="hidden lg:block" text="Book Now" />
          </div>
          <button
            onClick={handleMenu}
            className="cursor-pointer block lg:hidden"
          >
            {isMenu ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
