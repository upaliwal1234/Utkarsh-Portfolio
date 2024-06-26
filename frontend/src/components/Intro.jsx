import Typewriter from 'typewriter-effect'
function Intro() {
    return (
        <div id="intro" className="w-full h-[150px] sm:h-[300px] my-14 sm:my-20 p-32">
            <div className='text-5xl sm:text-8xl w-full flex flex-col items-center mx-auto'>
                <Typewriter
                    // onInit={(typewriter) => {
                    //     typewriter.typeString('Hi, I am Utkarsh!')
                    //         .pauseFor(2500)
                    //         .deleteAll()
                    //         .start();
                    // }}
                    // options={{ loop: true }}
                    options={{
                        strings: ['Hi, I am Utkarsh', 'Welcome to my website'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    )
}

export default Intro