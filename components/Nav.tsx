import { Options } from "./Options";

export function Nav() {
  return (
    <nav className="flex items-center justify-between h-12">
      <div className="text-2xl font-bold text-construction-accent">
        Alex Bussey
      </div>
      <ul className="flex items-center space-x-8">
        <li>
          <a
            className="bg-gradient-to-r from-construction-accent to-construction-accent bg-growing-underline"
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-construction-accent to-construction-accent bg-growing-underline"
            href="/uses"
          >
            Uses
          </a>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-construction-accent to-construction-accent bg-growing-underline"
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li>
          <Options />
        </li>
      </ul>
    </nav>
  );
}
