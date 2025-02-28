import "../App.css";
import { motion } from "framer-motion";

function App() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen h-screen  bg-primary p-5 font-atkinson max-phone:h-100">
      <header className='p-3 max-sm:p-0.5'>
        <nav className='flex justify-end gap-10 max-mobile:gap-3 max-sm:gap-2 max-phone:text-xs max-phone:justify-between max-phone:px-10'>
          <button onClick={() => scrollToSection('tech')} className='transition-transform duration-300 ease-out hover:scale-105 active:scale-90 px-5 py-4 text-primary bg-secondary rounded max-mobile:text-sm max-mobile:px-2 max-mobile:py-2 max-phone:text-xs max-phone:w-20 max-phone:h-8 max-phone:p-0'>Tecnologias</button>
          <button onClick={() => scrollToSection('about')} className='transition-transform duration-300 ease-out hover:scale-105 active:scale-90 px-5 py-4 text-primary bg-secondary rounded max-mobile:text-sm max-mobile:px-2 max-mobile:py-2 max-phone:text-xs max-phone:w-20 max-phone:h-8 max-phone:p-0'>Sobre</button>
          <button onClick={() => scrollToSection('portfolio')} className='transition-transform duration-300 ease-out hover:scale-105 px-5 py-4 text-primary bg-secondary rounded max-mobile:text-sm max-mobile:px-2 max-mobile:py-2  max-phone:text-xs max-phone:w-20 max-phone:h-8 max-phone:p-0'>Projetos</button>
        </nav>
      </header>

      <div className='mt-20 -ml-20 flex flex-col items-center max-phone:ml-auto max-phone:mt-14'>

        <div className="w-full max-w-4xl flex justify-start ml-48 max-laptop:ml-56 max-tablet:-mr-20 max-mobile:-mr-0 max-sm:mr-6 max-phone:ml-28 max-sms:ml-8">
          <p className="text-4xl text-secondary font-regular max-laptop:text-3xl max-tablet:text-2xl max-mb:text-xl max-phone:text-base">Olá, me chamo João
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [50, 10, 30] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block ml-1 max-phone:ml-1"
              style={{ originY: 1 }} // Define a origem da rotação na parte superior
            >
              👋
            </motion.div>
          </p>
        </div>

        <div className='flex justify-self-center items-baseline  gap-4 ml-16 -mt-10 drop-shadow-lg  max-laptop:ml-20 max-tablet:-mt-6 max-sm:-mt-4 max-sm:ml-10 max-sm:gap-2 max-phone:gap-1 max-phone:mr-10 max-phone:-mt-3'>
          <p className='text-Header2 text-secondary drop-shadow-xl font-extrabold max-laptop:text-Header2 max-tablet:text-Header3 max-sm:text-7xl max-phone:text-5xl'>Fullstack</p>
          <div className='flex flex-row items-center justify-center gap-1 '>
            <a href="https://bit.ly/4gikrSU"><img src="/Linkedin.svg" alt="Linkedin" className='w-20 max-tablet:w-16 max-phone:h-12 transition-transform duration-300 ease-out hover:scale-105 active:scale-90' /></a>
            <a href="https://github.com/joaomidowz"><img src="/Github.svg" alt="GitHub" className='w-20 max-tablet:w-16 max-phone:h-12 transition-transform duration-300 ease-out hover:scale-105 active:scale-90' /></a>
            <a href="https://bit.ly/3Cv2uPK"><img src="/GoogleDocs.svg" alt="Google Docs" className='w-18 max-tablet:w-16 max-phone:h-12 transition-transform duration-300 ease-out hover:scale-105 active:scale-90' /></a>
          </div>
        </div>
        <div className='flex justify-self-center items-baseline drop-shadow-xl -mt-20 max-laptop:-mt-20 max-tablet:-mt-14 max-sm:mt-0'>
          <p className='text-Header2 text-secondary drop-shadow-xl font-extrabold max-laptop:text-Header2 max-tablet:text-Header3 max-sm:text-7xl max-phone:text-5xl'>Developer</p>
        </div>
      </div>
      <div className='flex flex-col items-center '>
        <img src="Logo.svg" alt="Logo-Principal" className='-mt-5 max-mobile:w-40 max-phone:pt-10' />
      </div>
    </div>
  );
}

export default App;
