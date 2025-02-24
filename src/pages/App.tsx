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
    <div className="w-screen h-screen max-phone:h-[400px] bg-primary p-5 font-atkinson max-phone:h-100">
      <header className="p-3 max-sm:p-0.5">
        <nav className="flex justify-end gap-10 max-mobile:gap-3 max-sm:gap-2 max-phone:text-xs max-phone:justify-between max-phone:px-9 max-phone:mr-0.5 max-phone:ml-1">
          <button
            onClick={() => scrollToSection("tech")}
            className="px-5 py-4 text-primary bg-secondary rounded max-mobile:text-sm max-mobile:px-2 max-mobile:py-2 max-phone:text-xs max-phone:w-20 max-phone:h-8 max-phone:p-0"
          >
            Tecnologias
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="px-5 py-4 text-primary bg-secondary rounded max-mobile:text-sm max-mobile:px-2 max-mobile:py-2 max-phone:text-xs max-phone:w-20 max-phone:h-8 max-phone:p-0"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="px-5 py-4 text-primary bg-secondary rounded max-mobile:text-sm max-mobile:px-2 max-mobile:py-2  max-phone:text-xs max-phone:w-20 max-phone:h-8 max-phone:p-0"
          >
            Projetos
          </button>
        </nav>
      </header>

      <div className="mt-20 -ml-20 flex flex-col items-center max-phone:ml-auto max-phone:mt-14">
        <div className="mr-[330px] max-laptop:-ml-[55px] max-tablet:mr-56 max-mobile:mr-42 max-sm:mb-2 max-phone:mr-[78px]">
          <p className="text-4xl text-secondary font-regular max-laptop:text-3xl max-tablet:text-2xl max-mb:text-xl max-phone:text-base">
            Olá, me chamo João
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [50, 10, 30] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block ml-4 max-phone:ml-1"
            >
              👋
            </motion.div>
          </p>
        </div>

        <div className="flex justify-self-center items-baseline gap-4 -mt-10 drop-shadow-lg max-tablet:-mt-6 max-sm:-mt-4 max-sm:gap-2 max-phone:gap-1 max-phone:-mt-3">
          <p className="text-Header2 text-secondary drop-shadow-xl font-extrabold max-laptop:text-Header2 max-tablet:text-Header3 max-sm:text-7xl max-phone:text-5xl">
            Fullstack
          </p>
          <div className="flex flex-row items-center justify-center gap-1 w-48 max-tablet:w-36 max-phone:w-24">
            <a href="https://bit.ly/4gikrSU" target="_blank">
              <img src="/Linkedin.svg" alt="Linkedin" className="" />
            </a>
            <a href="https://github.com/joaomidowz" target="_blank">
              <img src="/Github.svg" alt="GitHub" className="" />
            </a>
            <a
              download={"curriculoJoao.pdf"}
              href=""
              //href="https://wa.me/5545999296981?text=Ola%20gostaria%20de%20conhecer%20mais%20sobre%20voc%C3%AA%21"
              target="_blank"
            >
              <img src="/GoogleDocs.svg" alt="Google Docs" className="" />
            </a>
          </div>
        </div>
        <div className="flex justify-self-center items-baseline drop-shadow-xl -mt-20 max-laptop:-mt-20 max-tablet:-mt-14 max-sm:mt-0">
          <p className="text-Header2 text-secondary drop-shadow-xl font-extrabold max-laptop:text-Header2 max-tablet:text-Header3 max-sm:text-7xl max-phone:text-5xl">
            Developer
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center max-sm:mt-16 max-phone:mt-2">
        <img
          src="Logo.svg"
          alt="Logo-Principal"
          className="-mt-5 max-mobile:w-40 max-phone:w-32 max-phone:pt-10"
        />
      </div>
    </div>
  );
}

export default App;
