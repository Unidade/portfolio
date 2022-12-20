import { IProjectInfo } from '../../types/projectInfo'
import homeAwayScreenCapture from 'public/homeAwayScreenShot.png'

export const homeAway: IProjectInfo = {
  title: 'HomeAway',
  text: 'Desenvolvimento de um web app similar ao Airbn, no qual os usuários podem realizar listagem de imóveis, visualizar os imoveis listados, favoritar imóveis e realizar reservas.O projeto foi desenvolvido utilizando o framework NextJS, com o banco de dados PostgreSQL  e o ORM Prisma, além de utilizar o Next-Auth para autenticação e autorização de usuários, Supabase para armazenamento de imagens e o TailwindCSS para estilização.',
  githubLink: 'https://github.com/Unidade/home-away/',
  liveLink: 'https://home-away.ninja/',
  tagsArray: [
    'react',
    'typescript',
    'prisma',
    'postgreSQL',
    'nextJS',
    'tailwindCSS',
    'next-auth',
    'oAuth',
    'supabase',
  ],
  imageSrc: homeAwayScreenCapture,
}
