import { Press_Start_2P } from 'next/font/google'

  const  pressStart2P = Press_Start_2P({
        subsets: ['latin'],
        weight: '400',
    });

    type SectionHeaderProps = {
        title: string;
    }

export default function SectionHeader({title}: SectionHeaderProps) {
  return (
    <div className='flex items-center gap-6 py-6'>
      <div className="relative w-full border-t border-4 border-white grow "/> 
        <h2 className={`${pressStart2P.className} text-3xl leading-none text-green-400/90`}>
          {title}
        </h2> 
      <div className="relative w-full border-t border-4 border-white grow"/> 
    </div>
  )
}
