import Link from "next/link";
import { forwardRef } from "react";
import {
  FaDev,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex justify-center mt-40 space-x-4 text-sm text-accent">
      <Link href="https://github.com/waxidiotic" passHref>
        <a>
          <FaGithubSquare className="cursor-pointer h-7 w-7 hover:text-primary dark:hover:text-dark" />
        </a>
      </Link>
      <Link href="https://twitter.com/alexbussey" passHref>
        <a>
          <FaTwitterSquare className="cursor-pointer h-7 w-7 hover:text-primary dark:hover:text-dark" />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/alexbussey" passHref>
        <a>
          <FaLinkedin className="cursor-pointer h-7 w-7 hover:text-primary dark:hover:text-dark" />
        </a>
      </Link>
      <Link href="https://dev.to/waxidiotic" passHref>
        <a>
          <FaDev className="cursor-pointer h-7 w-7 hover:text-primary dark:hover:text-dark" />
        </a>
      </Link>
    </footer>
  );
}
