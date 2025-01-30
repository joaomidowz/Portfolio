import '../App.css'

function Tech() {

    return (

        <div className="w-screen h-screen md:w-auto bg-secondary font-poppins text-primary p-5">

            <div className='flex'>
                <h1 className='font-black text-2xl p-14 max-mobile:text-xl'>Técnologias</h1>
            </div>
            <div className='flex justify-center items-center h-full -mt-32'>
                <img src="Elipse.svg" alt="elipse" className='max-w-[450px] max-h-[450px]  max-mobile:max-w-[300px] max-mobile:max-h-[300px]' />
            </div>
        </div>

    )
}

export default Tech