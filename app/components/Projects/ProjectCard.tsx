import projectData from '../../data/projects.json'
import Image from 'next/image'
import Hover from '../GeneralComponents/Hover'
import Link from 'next/link'

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {projectData.map((project) => (
        <div
          key={project.name}
          className="w-full rounded-2xl border border-white/20 bg-black/40 p-6 shadow-lg"
        >
          <div className="flex h-full flex-col items-center gap-4 text-center">
            <h3 className="pixel-font text-lg py-5 ">{project.name}</h3>
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={250}
              className="rounded-xl object-cover"
            />
            <p className='text-green-300 font-bold'
            >
              {project.Stack}
            </p>
            <p className="text-gray-300">
              {project.description}
            </p>
            <div className="flex gap-5 mt-auto pt-2">
              <Hover
                text="View Project"
                isbutton={true}
                href={project.live}
                className="text-black text-lg bg-green-400 px-4 py-2 rounded-md hover:bg-green-500"
              />
              <Link href={project.repo}>
                <Image className="invert" src="/githubicon.svg" alt="GitHub" width={30} height={20} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}