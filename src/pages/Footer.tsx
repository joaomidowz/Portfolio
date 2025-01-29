import { useState } from 'react'
import '../App.css'

function Footer() {
    const [copied, setCopied] = useState(false);
    const email = 'jgcustodio2005@gmail.com';
    setTimeout(() => setCopied(false), 2000);
    return (


        <div className="h-96 w-screen  md:w-auto bg-primary font-poppins text-secondary p-20 flex flex-col justify-between items-center ">

            <div className='p-4 bg-secondary h-28 max-w-[970px] flex rounded-3xl justify-between items-center p-10 space-x-28 max-laptop:space-x-14 max-tablet:space-x-5'>
                <p className='text-2xl font-extralight italic text-primary max-laptop:text-xl max-tablet:text-sm'>Vamos trabalhar juntos!</p>
                <div className='flex flex-row'>
                    <button className='w-32 h-12 bg-primary text-secondary italic font-medium text-lg rounded-2xl -mr-12 relative drop-shadow-2xl max-laptop:text-sm max-laptop:w-16'
                        onClick={async () => {
                            await navigator.clipboard.writeText(email)
                            setCopied(true)
                        }}><span id='email' className='text-shadow'>{copied ? 'Copiado!' : 'Copiar!'}</span></button>
                    <span className='font-medium text-lg rounded-2xl bg-white h-12 w-96 flex items-center justify-center email max-laptop:text-sm max-laptop:w-80'>jgcustodio2005@gmail.com</span>
                </div>
            </div>

            <div className='text-2xl font-medium'>
                <p>Desenvolvido por <span className='font-black'>João Midowz</span></p>
                <div className='flex flex-row justify-center space-x-10'>
                    <a href="https://bit.ly/4gikrSU">
                    <img className='' src="LinkedInMenor.png" alt="" />
                    </a>
                    <a href="https://github.com/joaomidowz">
                    <img className='' src="GitHubMenor.png" alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer