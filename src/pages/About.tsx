import '../App.css'

function About() {

    return (

        <div className="w-screen h-screen md:w-auto bg-primary font-poppins text-secondary ">
            <div className=''>
                <p className='font-regulrar p-16 text-2xl max-mobile:text-xl max-tablet:p-10 max-sm:text-lg'>Sobre Mim</p>
            </div>
            <div className='flex flex-col justify-between item-start space-y-24 content-center px-16 text-2xl max-mobile:text-xl max-sm:text-lg'>
                <p className='text-center w-3/5'>Atualmente estudo Fullstack, aprimorando minhas habilidades na criação de interfaces</p>
                <p className='text-center w-3/5 ml-auto'>Atualmente estudo Fullstack, aprimorando minhas habilidades na criação de interfaces</p>
            </div>
        </div>

    )
}

export default About