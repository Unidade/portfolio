export default function CurriculoSection() {
  return (
    <section className='mt-16'>
      <h2 className='text-2xl font-bold'>Habilidades Técnicas</h2>
      <div className='mt-4 pl-4'>
        <ul className='space-y-2 list-disc'>
          <li className='space-x-2'>
            <span className='font-medium text-lg'>
              Linguagens de Programação:
            </span>
            <span>Javascript,</span>
            <span>Typescript,</span>
            <span>HTML,</span>
            <span>CSS</span>
          </li>
          <li className='space-x-2'>
            <span className='font-medium text-lg'>Frameworks:</span>
            <span>React,</span>
            <span>NextJS,</span>
            <span>Express,</span>
            <span>NextAuth</span>
            <span>Mongoose,</span>
            <span>Prisma,</span>
            <span>TailwindCSS,</span>
            <span>MaterialUI</span>
          </li>
          <li className='space-x-2'>
            <span className='font-medium text-lg'>Banco de Dados:</span>
            <span>MongoDB,</span>
            <span>PostgreSQL</span>
          </li>
          <li className='space-x-2'>
            <span className='font-medium text-lg'>DevTools:</span>
            <span>VSC,</span>
            <span>Git,</span>
            <span>GitKraken,</span>
            <span>Postman [Criação de mock API / Documentação de RestAPI]</span>
          </li>
          <li className='space-x-2'>
            <span className='font-medium text-lg'>Metodologias:</span>
            <span>Scrum,</span>
            <span>Test Driven Development,</span>
            <span>GitFlow</span>
          </li>
        </ul>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-bold'>Perfil</h2>
        <p className='mt-4 leading-6'>
          Sou uma pessoa que sempre está em busca de desafios e de aprimorar
          minhas habilidades. Meu dia-a-dia consiste em ler bastante
          documentação e aplicar os conhecimento realizando algum projeto,
          realizando algum projeto na plataforma FrontendMentor. Tenho
          facilidade em colaborar em equipe, de ser proativo e me dedicar para
          alcançar algum objetivo.
        </p>
      </div>
    </section>
  )
}
