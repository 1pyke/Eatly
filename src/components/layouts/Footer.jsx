import { Typography } from "@material-tailwind/react";
import styles from "./footer.module.css";

const LINKS = [
  {
    title: "About",
    items: ["About us", "Features", "News & Blog"],
  },
  {
    title: "Movement",
    items: ["What Eatly", "Support Us"],
  },
  {
    title: "Company",
    items: ["Why Eatly", "Capital", "Security"],
  },
  {
    title: "Support",
    items: ["FAQs", "Support Center", "Contact Us"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={`relative w-full mt-32 ${styles.footer}`}>
      <div className="mx-auto w-full max-w-7xl px-8 py-16">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          {/* Heading */}
          <Typography
            variant="h5"
            className={`mb-6 ${styles.typographyHeading}`}
          >
            Eatly <br />
            <span className="text-gray-400 text-lg">
              We have a mission to <br /> make people around the <br /> world
              better through <br /> a healthier diet
            </span>
          </Typography>

          {/* Links */}
          <div className="grid grid-cols-4 justify-between gap-4 mb-8">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                {/* Link Title */}
                <Typography
                  className={`mb-3 font-bold ${styles.typographyLinks}`}
                >
                  {title}
                </Typography>

                {/* Link Items */}
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          {/* Copyright */}
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="/#">Eatly</a>. All Rights Reserved.
          </Typography>

          {/* Additional Links */}
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              Terms & Agreements
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              Privacy Policy
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
