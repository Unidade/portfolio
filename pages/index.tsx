import Head from 'next/head'
import CurriculoSection from '../components/sections/CurriculoSection'
import ProjectsSection from '../components/sections/ProjectsSection'

import Drawer from '../components/Drawer'
import { GetStaticProps } from 'next'
import { getProjects } from 'utils/getProjects'

export default function Home({ projects = [] }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Drawer>
        <ProjectsSection projects={projects} />
        <CurriculoSection />
      </Drawer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getProjects()

  return {
    props: {
      projects,
    },
  }
}
