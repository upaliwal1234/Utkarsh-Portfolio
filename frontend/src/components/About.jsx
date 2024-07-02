function About() {
    return (
        <div id="about" className="w-full bg-black text-white px-4 py-6 sm:px-10 sm:py-8 md:px-32 md:py-20">
            <div className="max-w-[900px]">
                <h1 className="text-4xl sm:text-6xl text-gray-400">Introduction</h1>
                <p className="font-sans text-lg sm:text-xl text-gray-100">I&apos;m a dedicated full stack web developer with a strong focus on the MERN stack. My journey in web development has been fueled by a passion for technology and a desire to create impactful digital experiences. With a comprehensive understanding of both front-end and back-end technologies, I build applications that are not only visually appealing but also highly functional and user-centric.</p>
            </div>
            <div className="flex gap-8 justify-center flex-wrap mt-14 font-sans">
                <div className="border border-gray-200 rounded-lg w-[250px] p-4">
                    <h1 className="text-2xl mb-4 font-bold">React.js</h1>
                    <p className="text-gray-200 text-sm font-extralight text-justify">React.js is my go-to library for developing dynamic and responsive user interfaces. I create reusable components and manage state effectively using hooks and context API, resulting in applications that are not only fast but also maintainable and scalable.</p>
                </div>
                <div className="border border-gray-200 rounded-lg w-[250px] p-4">
                    <h1 className="text-2xl mb-4 font-bold">Express.js</h1>
                    <p className="text-gray-200 text-sm font-extralight text-justify">As a core part of the MERN stack, Express.js allows me to build powerful server-side applications. I utilize its middleware capabilities to handle routing, manage sessions, and integrate APIs, ensuring a seamless flow of data between the server and client.</p>
                </div>
                <div className="border border-gray-200 rounded-lg w-[250px] p-4">
                    <h1 className="text-2xl mb-4 font-bold">Node.js</h1>
                    <p className="text-gray-200 text-sm font-extralight text-justify">Node.js empowers me to build scalable network applications with non-blocking I/O operations. I use Node.js to create efficient server-side logic, handle asynchronous programming, and develop RESTful APIs that communicate seamlessly with the front end.</p>
                </div>
                <div className="border border-gray-200 rounded-lg w-[250px] p-4">
                    <h1 className="text-2xl mb-4 font-bold">MongoDB</h1>
                    <p className="text-gray-200 text-sm font-extralight text-justify">I leverage MongoDB&apos;s flexible schema and scalability to design and manage databases that efficiently handle large volumes of data. My expertise includes creating robust database architectures, implementing CRUD operations, and optimizing performance for high-load environments.</p>
                </div>
            </div>
        </div>
    )
}

export default About