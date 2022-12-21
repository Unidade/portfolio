export default function CurriculoSection() {
  return (
    <section className='mt-16' id='curriculo'>
      <h2 className='text-2xl font-bold'>Habilidades Técnicas</h2>
      <div className='mt-4 pl-4'>
        <ul className='space-y-4 list-disc'>
          <li>
            <div className='flex flex-wrap md:text-lg gap-1'>
              <span className='font-medium'>Linguagens de Programação:</span>
              <span>Javascript,</span>
              <span>Typescript,</span>
              <span>HTML,</span>
              <span>CSS</span>
            </div>
          </li>
          <li>
            <div className='flex flex-wrap md:text-lg  gap-1'>
              <span className='font-medium '>Frameworks:</span>
              <span>React,</span>
              <span>NextJS,</span>
              <span>Express,</span>
              <span>NextAuth</span>
              <span>Mongoose,</span>
              <span>Prisma,</span>
              <span>Jest,</span>
              <span>TailwindCSS,</span>
              <span>MaterialUI</span>
            </div>
          </li>
          <li>
            <div className='flex flex-wrap md:text-lg gap-1'>
              <span className='font-medium '>Banco de Dados:</span>
              <span>MongoDB,</span>
              <span>PostgreSQL</span>
            </div>
          </li>
          <li>
            <div className='flex flex-wrap md:text-lg gap-1'>
              <span className='font-medium '>DevTools:</span>
              <span>VSC,</span>
              <span>Git,</span>
              <span>GitKraken,</span>
              <span>
                Postman [Criação de mock API / Documentação de RestAPI]
              </span>
            </div>
          </li>
          <li>
            <div className='flex flex-wrap md:text-lg gap-1'>
              <span className='font-medium '>Metodologias:</span>
              <span>Scrum,</span>
              <span>Test Driven Development,</span>
              <span>GitFlow</span>
            </div>
          </li>
        </ul>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-bold'>Perfil</h2>
        <p className='mt-4 leading-8'>
          Eu sou uma pessoa apaixonada por desafios e sempre estou em busca de
          formas de aperfeiçoar minhas habilidades. No meu dia a dia, dedico
          tempo para ler documentação e aplicar o que aprendo em projetos
          práticos, como os que realizo na plataforma FrontendMentor ou em
          projetos pessoais. Ademais, sou uma pessoa proativa e dedicada, que se
          esforça para alcançar seus objetivos e e gosta de trabalhar em equipe
          para conquistar um objetivo comum.
        </p>
      </div>
      <div className='text-center'>
        <button className='mt-8 px-4 py-2 bg-slate-600 text-white rounded'>
          Resumo em PDF
        </button>
      </div>
    </section>
  )
}
