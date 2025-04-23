import React from "react";
import SectionParagraph from "../components/SectionParagraph";

const Footer = () => {
  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.8 0.740723H14.2C17.4 0.740723 20 3.34072 20 6.54072V14.9407C20 16.479 19.3889 17.9542 18.3012 19.0419C17.2135 20.1297 15.7383 20.7407 14.2 20.7407H5.8C2.6 20.7407 0 18.1407 0 14.9407V6.54072C0 5.00247 0.61107 3.52721 1.69878 2.4395C2.78649 1.35179 4.26174 0.740723 5.8 0.740723ZM5.6 2.74072C4.64522 2.74072 3.72955 3.12001 3.05442 3.79514C2.37928 4.47027 2 5.38594 2 6.34072V15.1407C2 17.1307 3.61 18.7407 5.6 18.7407H14.4C15.3548 18.7407 16.2705 18.3614 16.9456 17.6863C17.6207 17.0112 18 16.0955 18 15.1407V6.34072C18 4.35072 16.39 2.74072 14.4 2.74072H5.6ZM15.25 4.24072C15.5815 4.24072 15.8995 4.37242 16.1339 4.60684C16.3683 4.84126 16.5 5.1592 16.5 5.49072C16.5 5.82224 16.3683 6.14019 16.1339 6.37461C15.8995 6.60903 15.5815 6.74072 15.25 6.74072C14.9185 6.74072 14.6005 6.60903 14.3661 6.37461C14.1317 6.14019 14 5.82224 14 5.49072C14 5.1592 14.1317 4.84126 14.3661 4.60684C14.6005 4.37242 14.9185 4.24072 15.25 4.24072ZM10 5.74072C11.3261 5.74072 12.5979 6.26751 13.5355 7.20519C14.4732 8.14287 15 9.41464 15 10.7407C15 12.0668 14.4732 13.3386 13.5355 14.2763C12.5979 15.2139 11.3261 15.7407 10 15.7407C8.67392 15.7407 7.40215 15.2139 6.46447 14.2763C5.52678 13.3386 5 12.0668 5 10.7407C5 9.41464 5.52678 8.14287 6.46447 7.20519C7.40215 6.26751 8.67392 5.74072 10 5.74072ZM10 7.74072C9.20435 7.74072 8.44129 8.05679 7.87868 8.6194C7.31607 9.18201 7 9.94507 7 10.7407C7 11.5364 7.31607 12.2994 7.87868 12.862C8.44129 13.4247 9.20435 13.7407 10 13.7407C10.7956 13.7407 11.5587 13.4247 12.1213 12.862C12.6839 12.2994 13 11.5364 13 10.7407C13 9.94507 12.6839 9.18201 12.1213 8.6194C11.5587 8.05679 10.7956 7.74072 10 7.74072Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg
          width="11"
          height="21"
          viewBox="0 0 11 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 12.2407H9.5L10.5 8.24072H7V6.24072C7 5.21072 7 4.24072 9 4.24072H10.5V0.880723C10.174 0.837723 8.943 0.740723 7.643 0.740723C4.928 0.740723 3 2.39772 3 5.44072V8.24072H0V12.2407H3V20.7407H7V12.2407Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "#",
      icon: (
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6 3.56072C11.9166 2.78025 11.5399 1.77812 11.54 0.740723H8.45003V13.1407C8.4267 13.8119 8.14355 14.4478 7.66034 14.9142C7.17713 15.3806 6.53163 15.6411 5.86003 15.6407C4.44003 15.6407 3.26003 14.4807 3.26003 13.0407C3.26003 11.3207 4.92003 10.0307 6.63003 10.5607V7.40072C3.18003 6.94072 0.160034 9.62072 0.160034 13.0407C0.160034 16.3707 2.92003 18.7407 5.85003 18.7407C8.99004 18.7407 11.54 16.1907 11.54 13.0407V6.75072C12.793 7.65057 14.2974 8.13337 15.84 8.13072V5.04072C15.84 5.04072 13.96 5.13072 12.6 3.56072Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  const footerSections = [
    {
      title: "OUR SERVICES",
      items: [
        { text: "Residential Cleaning", href: "/residentail-cleaning" },
        { text: "AirBnB Cleaning", href: "/airBnB-cleaning" },
        { text: "Commercial Cleaning", href: "/commercial-cleaning" },
      ],
      className: "w-fit pl-15",
    },
    {
      title: "BUSINESS HOURS",
      items: [
        { text: "Monday - Friday: 8AM - 6PM" },
        { text: "Saturday: 9AM - 3PM" },
        { text: "Sunday: 9AM - 1PM" },
      ],
    },
  ];

  return (
    <footer className="footer-section bg-blackbg pt-10 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
        <div>
          <img
            src="../images/logo-white.webp"
            width={114}
            height={64}
            className="w-38 h-auto"
            alt="website-logo"
            loading="eager"
          />
          <SectionParagraph
            color="text-white"
            align="text-left"
            size="text-sm 2xl:text-base"
            spacing="mt-1"
            text="Tidy Co+ is a trusted cleaning company on the Sunshine Coast,
            dedicated to delivering high-quality, eco-friendly cleaning for
            homes and businesses. Our skilled team uses advanced tools and
            sustainable products to ensure spotless, welcoming spaces tailored
            to each client’s needs. With a commitment to top-quality,
            flexibility, and maintaining trust, Tidy Co+ proudly serves Sunshine
            Coast residents and businesses, making professional cleaning easy,
            reliable, and accessible."
          />
        </div>
        {footerSections.map((section, index) => (
          <div key={index} className={section.className || ""}>
            <h4 className="text-xl font-bold">{section.title}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  {section.title === "OUR SERVICES" && item.href ? (
                    <a href={item.href}>{item.text}</a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>

            {section.title === "BUSINESS HOURS" && (
              <>
                <h4 className="text-xl font-bold mt-6">FOLLOW US</h4>
                <div className="flex space-x-4 mt-4">
                  {socialLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="bg-black text-center py-4 mt-10">
        <p className="text-sm">
          © Copyright {new Date().getFullYear()} tidy co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
