import { ProjectCard } from 'components/ProjectCard'
import { IProjectInfo } from 'types/projectInfo'

export default function ProjectsSection({
  projects = [],
}: {
  projects: IProjectInfo[]
}) {
  return (
    <section
      id='projetos'
      className='flex mt-8 flex-wrap gap-4 md:gap-8 justify-between'
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  )
}
