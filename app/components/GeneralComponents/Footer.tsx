import Hover from "./Hover";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 py-6">
      <section className="flex justify-between items-center">
        <div>Ayush Kumar</div>
        <div>
          <ul className="flex gap-5">
            <li className="flex gap-2">
              <Image
                className="px-0"
                src="/linkedin.svg"
                alt="Linkedin"
                width={25}
                height={10}
              />
              <Hover
                href="https://www.linkedin.com/in/ayush-kumar-2125b9294/"
                isbutton={false}
                text="Linkedin"
              />
            </li>
            <li className="flex gap-2">
              <Image
                className="invert"
                src="/githubicon.svg"
                alt="Linkedin"
                width={20}
                height={10}
              />
              <Hover
                href="https://github.com/DeletedUser9"
                isbutton={false}
                text="GitHub"
              />
            </li>
            <li className="flex gap-2">
              <Mail />
              <Hover
                href="mailto:ayz29995@gmail.com"
                isbutton={false}
                text="Email"
              />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
