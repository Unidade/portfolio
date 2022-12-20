import { IProjectInfo } from '../../types/projectInfo'
import homeAwayScreenCapture from 'public/homeAwayScreenShot.png'

export const blog: IProjectInfo = {
  title: 'Personal Blog',
  text: 'A statically generated blog example using Next.js, Markdown, and TypeScript',
  githubLink: 'https://github.com/Unidade/personal-blog',
  liveLink: 'https://unidade-blog.vercel.app/',
  tagsArray: [
    'react',
    'typescript',
    'markdown',
    'nextJS',
    'tailwindCSS',
    'remark',
    'remark-html',
  ],
  imageSrc: homeAwayScreenCapture,
}
