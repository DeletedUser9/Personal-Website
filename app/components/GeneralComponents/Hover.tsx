"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";

type HoverProps = {
  href: string;
  text: string;
  isbutton: boolean;
  className?: string;
  download?: string;
};

export default function Hover(props: HoverProps) {
  const lenis = useLenis();
  const isbuttonclass = props.isbutton
    ? props.className
    : "hover:text-green-300";

  const isHashLink = props.href.startsWith("#");

  return (
    <div>
      {isHashLink ? (
        <a
          className={isbuttonclass}
          href={props.href}
          onClick={(e) => {
            e.preventDefault();
            lenis?.scrollTo(props.href);
          }}
        >
          {props.text}
        </a>
      ) : (
        <Link
          className={isbuttonclass}
          download={props.download}
          href={props.href}
        >
          {props.text}
        </Link>
      )}
    </div>
  );
}
