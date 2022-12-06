import ProjectCard from '../ProjectCard'
import { projects } from '../../data/projects'

const cards = projects.map((project) => (
  <ProjectCard key={project.title} {...project} />
))

export default function ProjectsSection() {
  return (
    <section
      id='projetos'
      data-type='projectCardWrapper'
      className='flex flex-wrap px-4 gap-14 justify-between'
    >
      {cards}
      {cards}
      {cards}
      {cards}
    </section>
  )
}
