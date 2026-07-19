import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-[#262930] bg-black px-[8vw] py-7 text-center text-[15px] text-white">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
