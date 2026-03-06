import Link from 'next/link';

type HoverProps = {
    href: string;
    text: string;
    isbutton: boolean;
    classname?: string;
    
    
}

export default function Hover( {href, text, isbutton, classname}: HoverProps) {

    const isbuttonclass = isbutton ? classname  : "hover:text-green-300";
    
  return (
    <div>
      <Link className={isbuttonclass} href={href}>{text}</Link>
    </div>
  )
}
