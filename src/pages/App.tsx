import '../App.css'

function App() {

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({behavior: "smooth"})
  }
}

  return (

    <div className="w-screen h-screen bg-primary p-5 font-poppins ">
      <header className='p-3'>
        <nav className='flex justify-end gap-10'>
          <button onClick={() => scrollToSection('tech')} className='w-[150px] h-[60px] text-primary bg-secondary rounded-lg  max-tablet:h-[40px]'>Sobre</button>
          <button onClick={() => scrollToSection('about')} className='w-[150px] h-[60px] text-primary bg-secondary rounded-lg  max-tablet:h-[40px]'>Projetos</button>
          <button onClick={() => scrollToSection('portfolio')} className='w-[150px] h-[60px] text-primary bg-secondary rounded-lg  max-tablet:h-[40px]'>Tecnologias</button>
        </nav>
      </header>

      <div className='mt-20 -ml-20 flex flex-col items-center '>

      <div className="w-full max-w-4xl flex justify-start mr-28 max-laptop:ml-60 max-tablet:ml-[394px] ">
          <p className="text-4xl text-secondary font-regular max-laptop:text-3xl max-tablet:text-2xl">Olá, me chamo João 👋</p>
        </div>

        <div className='flex justify-self-center items-baseline  gap-4 -mr-[45px] -mt-[40px] drop-shadow-lg  max-laptop:-mr-[110px] max-tablet:-mr-14'>
          <p className='text-Header text-secondary drop-shadow-xl font-extrabold max-laptop:text-Header2 max-tablet:text-Header3'>Fullstack</p>
          <a href="https://bit.ly/4gikrSU"><img src="/LinkedIn.png" alt="Linkedin" className='h-20 w-20 max-tablet:h-16 max-tablet:w-16' /></a>
          <a href="https://github.com/joaomidowz"><img src="/GitHub.png" alt="GitHub" className='h-20 w-20 max-tablet:h-16 max-tablet:w-16' /></a>
          <a href="https://bit.ly/3Cv5uPK"><img src="/Google Docs.png" alt="Google Docs" className='h-20 w-20 max-tablet:h-16 max-tablet:w-14' /></a>
        </div>
        <div className='flex justify-self-center items-baseline drop-shadow-xl -mt-[95px] max-laptop:-mt-20 max-tablet:-mt-14'>
        <p className='text-Header  text-secondary drop-shadow-xl font-extrabold max-laptop:text-Header2 max-tablet:text-Header3'>Developer</p>
        </div>
      </div>
    </div>

  )
}

export default App
