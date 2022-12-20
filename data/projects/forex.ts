import { IProjectInfo } from 'types/projectInfo'
import forexScreenCapture from 'public/forex_application.png'

export const forex: IProjectInfo = {
  title: 'Forex Trading App',
  text: 'Projeto full-stack tem como objetivo simular trades entre moedas e criptomoedas, utilizando Websockets da Twelvedata para obter atualizações em tempo real das taxas de câmbio. O projeto é acessado através de um servidor Express conectado ao banco de dados MongoDB Atlas. O frontend foi desenvolvido em Typescript, React e MaterialUI e testes unitários são realizados com a ferramenta Jest.',
  githubLink: 'https://forex-trading-application.onrender.com/',
  liveLink: 'https://github.com/Unidade/Forex-trading-application',
  tagsArray: [
    'react',
    'typescript',
    'mongoDB',
    'express',
    'jest',
    'materialUI',
    'websocket',
    'restAPI',
  ],
  imageSrc: forexScreenCapture,
}
