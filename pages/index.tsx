import Head from 'next/head'
import CurriculoSection from '../components/sections/CurriculoSection'
import ProjectsSection from '../components/sections/ProjectsSection'

import Drawer from '../components/Drawer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Drawer>
        <main>
          <ProjectsSection />
          <CurriculoSection />
        </main>
      </Drawer>
    </>
  )
}
