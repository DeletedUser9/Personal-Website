import SectionHeader from "../GeneralComponents/SectionHeader"
import ProjectCard from "./ProjectCard"

export default function About() {
  return (
    <div className='px-6 py-12 text-white'>
        <SectionHeader title="Projects"/> 
        <div className="mt-10 flex flex-col gap-10">
            <ProjectCard />
        </div>
        
    </div>
  )
}
