import Link from 'next/link';

type HoverProps = {
    href: string;
    text: string;
    isbutton: boolean;
    className?: string;
    
    
}

export default function Hover( {href, text, isbutton, className}: HoverProps) {

    const isbuttonclass = isbutton ? className  : "hover:text-green-300";
    
  return (
    <div>
      <Link className={isbuttonclass} href={href}>{text}</Link>
    </div>
  )
}
