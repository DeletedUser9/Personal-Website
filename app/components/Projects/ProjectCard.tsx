import projectData from '../../data/projects.json'
import Image from 'next/image'
import Hover from '../GeneralComponents/Hover'

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {projectData.map((project) => (
        <div
          key={project.name}
          className="w-full rounded-2xl border border-white/20 bg-black/40 p-6 shadow-lg"
        >
          <div className="flex h-full flex-col items-center gap-4 text-center">
            <h3 className="text-2xl font-bold">{project.name}</h3>

            <Image
              src={project.image}
              alt={project.name}
              width={700}
              height={400}
              className="w-full rounded-xl object-cover"
            />

            <p className="text-gray-300">
              {project.description}
            </p>

            <div className="mt-auto pt-2">
              <Hover
                text="View Project"
                isbutton={true}
                href={project.live}
                className="text-black text-lg bg-green-400 px-4 py-2 rounded-md hover:bg-green-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}