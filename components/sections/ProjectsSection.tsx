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
      className='flex mt-8 flex-wrap gap-14 justify-between'
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  )
}
