import Link from 'next/link';

type HoverProps = {
    href: string;
    text: string;
    isbutton: boolean;
    className?: string;
    download?: string
    
    
}

export default function Hover( {href, text, isbutton, className, download}: HoverProps) {

    const isbuttonclass = isbutton ? className  : "hover:text-green-300";
    
  return (
    <div>
      <Link className={isbuttonclass} download={download} href={href}>{text}</Link>
    </div>
  )
}
