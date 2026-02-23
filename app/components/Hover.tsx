import React from 'react'
import Link from 'next/link';

type HoverProps = {
    href: string;
    text: string;
    isbutton: boolean;
    
}

export default function Hover( {href, text, isbutton}: HoverProps) {

    const isbuttonclass = isbutton ? "text-green-300 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600" : "hover:text-green-300";
    
  return (
    <div>
      <Link className={isbuttonclass} href={href}>{text}</Link>
    </div>
  )
}
