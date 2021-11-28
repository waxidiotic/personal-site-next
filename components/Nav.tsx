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
          <div className="relative flex items-center">
            <button
              className="w-4 h-4 rounded bg-construction-accent"
              id="color-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            />
          </div>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-construction-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}
