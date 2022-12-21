import { StaticImageData } from 'next/image'

export interface IProjectInfo {
  title: string
  text: string
  githubLink: string
  liveLink: string
  tagsArray: string[]
  imageSrc: StaticImageData
}
