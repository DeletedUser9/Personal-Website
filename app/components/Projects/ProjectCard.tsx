import projectData from '../../data/projects.json'
import Link from 'next/link'
import Image from 'next/image'
import Hover from '../GeneralComponents/Hover'


export default function ProjectCard() {
  return (
    <div>
      {projectData.map((project) => (
        <div key={project.name} className='flex flex-row gap-10 outline-1 outline-gray-300 rounded-lg py-3 p-5'>
          <div className='flex flex-col gap-3'>
              <span className='text-2xl font-bold'>{project.name}</span>
              <Image src={project.image} alt={project.name} width={400} height={300} className='rounded-lg'/>
              <p className='text-gray-300'>{project.description}</p>
              <Hover text='View Project' isbutton={true} href={project.live} className=' text-black text-lg bg-green-400 px-4 rounded-md hover:bg-green-500"'/>
                
          </div>
        </div>

      ))}
        
    </div>
  )
}
