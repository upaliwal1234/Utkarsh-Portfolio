import { FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <footer className="w-full h-[180px] bg-black text-white text-center py-[12px]">
            <div className="flex justify-center items-center">
                <div className="text-center flex flex-col max-w-[400px]">
                    <h3 className="text-2xl text-gray-300 font-bold">Connect with Me</h3>
                    <div className="flex flex-row justify-center gap-3 my-5">
                        <div className="hover:scale-125 transition duration-300">
                            <a href="https://github.com/upaliwal1234" target="_blank" rel="noopener noreferrer">
                                <FaGithub fill="white" className="w-10 h-10" />
                            </a>
                        </div>
                        <div className="hover:scale-125 transition duration-300">
                            <a href="https://www.linkedin.com/in/utkarshpaliwal1234/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin fill="white" className="w-10 h-10" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-light">
                <p>&copy; 2024 Utkarsh Paliwal. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer