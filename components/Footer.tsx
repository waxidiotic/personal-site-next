import Link from "next/link";
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
        <FaGithubSquare className="cursor-pointer h-7 w-7 hover:text-primary dark:hover:text-dark" />
      </Link>
      <Link href="https://twitter.com/alexbussey" passHref>
        <FaTwitterSquare className="cursor-pointer h-7 w-7 hover:text-primary dark:hover:text-dark" />
      </Link>
      <Link href="https://linkedin.com/in/alexbussey" passHref>
        <FaLinkedin className="cursor-pointer h-7 w-7 hover:text-primary dark:hover:text-dark" />
      </Link>
      <Link href="https://dev.to/waxidiotic" passHref>
        <FaDev className="cursor-pointer h-7 w-7 hover:text-primary dark:hover:text-dark" />
      </Link>
    </footer>
  );
}
