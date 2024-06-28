import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {

    }
    return (
        <div id="contact" className="border h-[500px] flex justify-center w-full bg-white py-10 px-2 sm:px-10 md:px-32">
            <div className=" w-full max-w-[650px] p-2 sm:p-4 rounded-md">
                <div>
                    <h1 className="text-4xl">Get in touch</h1>
                </div>
                <form className="text-xl" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name">Your Name</label>
                        <input onChange={handleChange} value={formData.name} className="p-1 focus:outline-1 focus:outline-black ring-black border border-black rounded font-light font-sans text-md" type="text" name="name" id="name" placeholder="Utkarsh Paliwal" />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="email">Your Email</label>
                        <input onChange={handleChange} value={formData.email} className="p-1 focus:outline-1 focus:outline-black ring-black border border-black rounded font-light font-sans text-md" type="text" name="email" id="email" placeholder="utkarsh@example.com" />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="message">Your Message</label>
                        <textarea onChange={handleChange} value={formData.message} className="p-1 focus:outline-1 min-h-[120px] max-h-[120px] focus:outline-black ring-black border border-black rounded font-light font-sans text-md" type="text" name="message" id="message" placeholder="Type your message here..." ></textarea>
                    </div>
                    <div className="mt-2">
                        <button type="submit" className="w-32 h-10 border-black border hover:bg-black hover:text-white rounded">
                            <h1 className="text-xl font-sans hover:transition transition duration-700">Send</h1>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact