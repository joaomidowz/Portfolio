import '../App.css'

function About() {

    return (

        <div className="w-screen h-screen md:w-auto bg-primary font-atkinson text-secondary max-phone:h-100 max-phone:rounded-t-3xl max-phone:shadow-phone">
            <div className=''>
                <p className='font-black text-2xl max-mobile:text-xl max-phone:text-lg p-16 max-mobile:text-xl max-tablet:p-6 max-sm:text-lg max-phone:text-lg'>Sobre Mim</p>
            </div>
            <div className='flex flex-col justify-between item-start space-y-24 content-center px-10 text-3xl max-mobile:text-xl max-sm:text-lg max-phone:text-sm max-mobile:py-10'>
                <p className='text-center  max-phone:w-full'>Sou o João Gabriel, tenho vinte anos e estou atuando na área de programação e de TI há um ano e estudo faze dois anos. Atualmente faço parte do time de TI da empresa Garra.</p>
                <p className='text-center  ml-auto max-phone:w-full'>Nesse momento venho me dedicando ao estudo para me tornar Fullstack, aprimorando, assim,  minhas habilidades na criação de interfaces.</p>
            </div>
        </div>

    )
}

export default About