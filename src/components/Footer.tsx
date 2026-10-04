import { content } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl justify-between border-t ...
      <span>© 2026 {content.name}</span>
      <span>Built with curiosity + code.</span>
    </footer>
  );
}