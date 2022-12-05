import Image from 'next/image'
import Link from 'next/link'
import { IProjectInfo } from '../types/projectInfo'

export default function ProjectCard({
  title,
  text,
  tagsArray,
  githubLink,
  liveLink,
  imageSrc,
}: IProjectInfo) {
  const tags = tagsArray.map((tag) => {
    return (
      <li key={tag} className={`px-4 py-2 rounded-xl text-xs ${tag}`}>
        {tag}
      </li>
    )
  })

  return (
    <div
      data-type='projectCard'
      className='lg:max-w-[45%] shadow-xl pb-8 rounded-sm'
    >
      <Link href='https://forex-trading-application.onrender.com/'>
        <Image
          className='rounded'
          src={imageSrc}
          alt='screen capture of a website'
        />
      </Link>
      <div className='flex flex-col mt-3 px-4'>
        <h2 className='font-medium text-xl self-center'>{title}</h2>
        <p className='mt-4 text-md'>{text}</p>
        <div
          data-type='projectCard__links'
          className='px-4 flex gap-4 mt-6 self-center'
        >
          <Link
            href={githubLink}
            className='flex text-xs tracking-wider items-center w-30 h-10 gap-3 px-4 py-2 bg-slate-800/70 text-white rounded-lg'
          >
            <svg
              className='fill-white h-[24px] w-[24px]'
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
            </svg>
            Github Link
          </Link>

          <Link
            className='flex text-xs tracking-wider  gap-4 w-30 h-10 items-center  px-4 py-2  bg-blue-600 text-white rounded-lg'
            href={liveLink}
          >
            <svg
              className='h-[24px] w-[24px] fill-white'
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M13.586 0v3.172H7.523a4.528 4.528 0 0 0-3.018 1.305 4.498 4.498 0 0 0-1.333 2.99v11.326H0V7.509a7.472 7.472 0 0 1 2.204-5.305A7.471 7.471 0 0 1 4.588.589 7.432 7.432 0 0 1 7.51 0Zm5.207 0v3.158H15.62V0ZM24 0v3.158h-3.172V0Zm0 5.207v3.172h-3.172V5.207Zm0 5.207v3.172h-3.172v-3.172Zm0 5.207v3.172h-3.172V15.62Zm0 5.207V24h-3.172v-3.172Zm-5.207 0V24H15.62v-3.172Zm-5.207 0V24h-3.172v-3.172Zm-5.207 0V24H5.207v-3.172Zm-5.221 0V24H0v-3.172Z' />
            </svg>
            Live Demo
          </Link>
        </div>
        <div
          data-type='projectCard__tags'
          className='mt-8 text-white self-center'
        >
          <ul className='flex gap-2 flex-wrap'>{tags}</ul>
        </div>
      </div>
    </div>
  )
}
