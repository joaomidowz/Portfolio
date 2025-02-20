import { useState } from 'react'
import '../App.css'

function Footer() {
    const [copied, setCopied] = useState(false);
    const email = 'jgcustodio2005@gmail.com';
    setTimeout(() => setCopied(false), 2000);
    return (


        <div className="h-96 w-screen md:w-auto bg-primary font-poppins text-secondary p-10 flex flex-col justify-between items-center max-phone:shadow-phone">

            <div className='block p-4 bg-secondary h-28 max-w-[970px] flex rounded-3xl justify-between items-center p-10 space-x-28 max-laptop:space-x-14 max-tablet:space-x-5 max-sm:space-x-3 max-phone:hidden'>
                <p className='text-2xl font-extralight italic text-primary max-laptop:text-xl max-tablet:text-sm max-sm:text-sm'>Vamos trabalhar juntos!</p>
                <div className='flex flex-row '>
                    <button className='w-32 h-12 bg-primary text-secondary italic font-medium text-lg rounded-2xl -mr-12 relative drop-shadow-2xl max-laptop:text-sm max-laptop:w-16 max-sm:text-sm'
                        onClick={async () => {
                            await navigator.clipboard.writeText(email)
                            setCopied(true)
                        }}><span id='email' className='text-shadow '>{copied ? 'Copiado!' : 'Copiar!'}</span></button>
                    <span className='font-medium text-lg rounded-2xl bg-white h-12 w-96 flex items-center justify-center email max-laptop:text-sm max-laptop:w-80 max-sm:text-sm max-sm:w-72 max-sm:pl-5'>jgcustodio2005@gmail.com</span>
                </div>
            </div>

            <div className='hidden max-phone:block'>
                <div className='flex flex-col items-center space-y-3'>
                    <p className='text-lg font-medium italic text-secundary text-medium'>Vamos trabalhar juntos!</p>
                    <span className='font-medium text-medium rounded-2xl bg-white py-3 px-3 flex items-center justify-center email '>jgcustodio2005@gmail.com</span>
                    <button className='text-sm py-2 px-5 bg-secondary text-primary italic font-medium text-lg rounded-2xl drop-shadow-2xl'
                        onClick={async () => {
                            await navigator.clipboard.writeText(email)
                            setCopied(true)
                        }}><span id='email' className='text-shadow '>{copied ? 'Copiado!' : 'Copiar!'}</span></button>
                </div>
            </div>

            <div className='text-medium max-sms:text-xs flex flex-col items-center space-y-2'>
                <div className='flex flex-col space-y-2 items-center'>
                    <p>Desenvolvido por</p>
                    <img src="LogoRedonda.svg" alt="Logo-João-Midowz" className='w-32 max-mobile:w-24' />
                </div>
                <div className='flex flex-row justify-center space-x-10 max-phone:space-x-4'>
                    <a href="https://bit.ly/4gikrSU">
                        <img className='w-16 max-phone:w-10' src="Linkedin.svg" alt="" />
                    </a>
                    <a href="https://github.com/joaomidowz">
                        <img className='w-16 max-phone:w-10' src="Github.svg" alt="" />
                    </a>
                    <a href="https://github.com/joaomidowz">
                        <img className='w-14 max-phone:w-10' src="GoogleDocs.svg" alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer