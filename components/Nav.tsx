import Link from "next/link";

import { Options } from "./Options";

export function Nav() {
  return (
    <nav className="flex items-center justify-between h-12">
      <Link passHref href="/">
        <div className="text-2xl font-bold text-accent cursor-pointer">
          Alex Bussey
        </div>
      </Link>
      <ul className="flex items-center space-x-8">
        <Link href="/resume" passHref>
          <span className="text-accent border-accent rounded-md border-2 py-2 px-4 cursor-pointer hover:text-dark hover:bg-accent dark:hover:text-primary">
            Resumé
          </span>
        </Link>
        <li>
          <Options />
        </li>
      </ul>
    </nav>
  );
}
