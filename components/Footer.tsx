import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center mt-40 space-x-4 text-sm text-accent">
      <span className="hover:underline">
        <Link href="https://github.com/waxidiotic">GitHub</Link>
      </span>
      <span className="hover:underline">
        <Link href="https://twitter.com/alexbussey">Twitter</Link>
      </span>
      <span className="hover:underline">
        <Link href="https://linkedin.com/in/alexbussey">LinkedIn</Link>
      </span>
    </footer>
  );
}
