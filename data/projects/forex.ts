import { IProjectInfo } from '../../types/projectInfo'
import forexScreenCapture from '../../public/forex_application.png'

export const forex: IProjectInfo = {
  title: 'Forex Trading App',
  text: 'Projeto full-stack para simular trades entre moedas e criptos, possuindo atualização em tempo real das taxas de câmbios por meio do consumo da API Twelvedata.',
  githubLink: 'https://forex-trading-application.onrender.com/',
  liveLink: 'https://github.com/Unidade/Forex-trading-application',
  tagsArray: [
    'react',
    'typescript',
    'mongoDB',
    'express',
    'jest',
    'materialUI',
  ],
  imageSrc: forexScreenCapture,
}
