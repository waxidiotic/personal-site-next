import { Options } from "./Options";

export function Nav() {
  return (
    <nav className="flex items-center justify-between h-12">
      <div className="text-2xl font-bold text-accent">Alex Bussey</div>
      <ul className="flex items-center space-x-8">
        <li>
          <Options />
        </li>
      </ul>
    </nav>
  );
}
