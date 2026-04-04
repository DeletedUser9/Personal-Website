import Link from "next/link";

type HoverProps = {
  href: string;
  text: string;
  isbutton: boolean;
  className?: string;
  download?: string;
};

export default function Hover(
  props: HoverProps) {
  const isbuttonclass = props.isbutton ? props.className : "hover:text-green-300";

  return (
    <div>
      <Link className={isbuttonclass} download={props.download} href={props.href}>
        {props.text}
      </Link>
    </div>
  );
}
