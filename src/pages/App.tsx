import '../App.css'

function App() {

  return (

    <div className="w-screen h-screen bg-primary p-5 font-poppins ">
      <header className='p-3'>
        <nav className='flex justify-end gap-10'>
          <button className='w-[150px] h-[60px] text-primary bg-secondary rounded-lg'>Sobre</button>
          <button className='w-[150px] h-[60px] text-primary bg-secondary rounded-lg '>Projetos</button>
          <button className='w-[150px] h-[60px] text-primary bg-secondary rounded-lg'>Tecnologias</button>
        </nav>
      </header>

      <div className='mt-20 -ml-20 flex flex-col items-center '>

      <div className="w-full max-w-4xl flex justify-start mr-32">
          <p className="text-4xl text-secondary font-regular">Olá, me chamo João 👋</p>
        </div>

        <div className='flex justify-self-center items-baseline  gap-4 -mr-[45px] -mt-[40px] drop-shadow-lg  '>
          <p className='text-Header text-secondary drop-shadow-xl font-extrabold'>Fullstack</p>
          <img src="/LinkedIn.png" alt="Linkedin" className='h-[90px] w-[90px] lign-baseline ' />
          <img src="/GitHub.png" alt="GitHub" className='h-[90px] w-[90px] lign-baseline' />
          <img src="/Google Docs.png" alt="Google Docs" className='h-[90px] w-[90px] lign-baseline' />
        </div>
        <div className='flex justify-self-center items-baseline drop-shadow-xl -mt-[95px]'>
        <p className='text-Header  text-secondary drop-shadow-xl font-extrabold'>Developer</p>
        </div>
      </div>
    </div>

  )
}

export default App
