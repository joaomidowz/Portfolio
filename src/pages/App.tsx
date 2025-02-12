import '../App.css'

function App() {

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({behavior: "smooth"})
  }
}

  return (

    <div className="w-screen h-screen bg-primary p-5 font-poppins max-phone:h-100">
      <header className='p-3 max-sm:p-0.5'>
        <nav className='flex justify-end gap-10 max-mobile:gap-3 max-sm:gap-2 max-phone:text-xs max-phone:justify-between max-phone:px-1'>
          <button onClick={() => scrollToSection('tech')} className='px-5 py-4 text-primary bg-secondary rounded max-mobile:text-sm max-mobile:px-2 max-mobile:py-2 max-phone:text-xs max-phone:w-20 max-phone:h-8 max-phone:p-0'>Tecnologias</button>
          <button onClick={() => scrollToSection('about')} className='px-5 py-4 text-primary bg-secondary rounded max-mobile:text-sm max-mobile:px-2 max-mobile:py-2 max-phone:text-xs max-phone:w-20 max-phone:h-8 max-phone:p-0'>Sobre</button>
          <button onClick={() => scrollToSection('portfolio')} className='px-5 py-4 text-primary bg-secondary rounded max-mobile:text-sm max-mobile:px-2 max-mobile:py-2  max-phone:text-xs max-phone:w-20 max-phone:h-8 max-phone:p-0'>Projetos</button>
        </nav>
      </header>

      <div className='mt-20 -ml-20 flex flex-col items-center max-phone:ml-auto max-phone:mt-10'>

      <div className="w-full max-w-4xl flex justify-start mr-32 max-laptop:ml-56 max-tablet:-mr-20 max-mobile:-mr-0 max-sm:mr-6 max-phone:ml-20 max-sms:ml-10">
          <p className="text-4xl text-secondary font-regular max-laptop:text-3xl max-tablet:text-2xl max-mb:text-xl max-phone:text-base">Olá, me chamo João 👋</p>
        </div>

        <div className='flex justify-self-center items-baseline  gap-4 ml-28 -mt-10 drop-shadow-lg  max-laptop:ml-20 max-tablet:-mt-6 max-sm:-mt-4 max-sm:ml-10 max-sm:gap-2 max-phone:gap-1 max-phone:ml-2'>
          <p className='text-Header text-secondary drop-shadow-xl font-extrabold max-laptop:text-Header2 max-tablet:text-Header3 max-sm:text-7xl max-phone:text-5xl'>Fullstack</p>
          <a href="https://bit.ly/4gikrSU"><img src="/LinkedIn.svg" alt="Linkedin" className='h-28 w-28 max-laptop:h-20 max-laptop:w-20 max-tablet:h-16 max-tablet:w-16 max-sm:w-12 max-sm:pt-5 max-phone:w-auto max-phone:h-12 ' /></a>
          <a href="https://github.com/joaomidowz"><img src="/GitHub.svg" alt="GitHub" className='h-28 w-28 max-laptop:h-20 max-laptop:w-20 max-tablet:h-16 max-tablet:w-16 max-sm:w-12 max-sm:pt-5 max-phone:w-auto max-phone:h-12 ' /></a>
          <a href="https://bit.ly/3Cv2uPK"><img src="/Google Docs.svg" alt="Google Docs" className='h-28 w-28 max-laptop:h-20 max-laptop:w-20 max-tablet:h-16 max-tablet:w-16 max-sm:w-12 max-sm:pt-5 max-phone:w-auto max-phone:h-12 ' /></a>
        </div>
        <div className='flex justify-self-center items-baseline drop-shadow-xl -mt-[95px] max-laptop:-mt-20 max-tablet:-mt-14 max-sm:mt-0'>
        <p className='text-Header  text-secondary drop-shadow-xl font-extrabold max-laptop:text-Header2 max-tablet:text-Header3 max-sm:text-7xl max-phone:text-5xl'>Developer</p>
        </div>
      </div>
    </div>

  )
}

export default App
