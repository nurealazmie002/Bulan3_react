function About() {
  return (
    <section className="container mx-auto px-6 py-12 sm:py-16 lg:py-24 ">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 pt-10 pb-10">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 pt-10">
            Hi, I'm Naufal Hibatullah
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            A passionate designer and visual storyteller, I craft compelling
            experiences that resonate with audiences. Explore my portfolio to
            see how creativity meets strategy in every project.
          </p>
        </div>

        <div className="w-2/6 lg:w-2/5 max-w-md">
          <div className="aspect-square overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://i.pinimg.com/736x/9b/f0/16/9bf0162fc8447face87adab20b0b08e9.jpg"
              alt="Naufal Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="text-center mb-10 pt-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About Me
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          I’m passionate about creating meaningful user experiences through
          design and technology. My journey focuses on building responsive,
          accessible, and visually engaging interfaces.
        </p>
      </div>


      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 text-gray-800">
        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-bold text-lg mb-2">Education</h3>
          <p>Informatics Engineering Student at XYZ University</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-bold text-lg mb-2">Experience</h3>
          <p>Worked on multiple frontend & UI design projects</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-bold text-lg mb-2">Skills</h3>
          <p>React, TailwindCSS, JavaScript, Figma</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-bold text-lg mb-2">Motto</h3>
          <p>FORTIS FORTUNA ADIUVAT</p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          My Career Journey
        </h2>

        <div className="relative border-l-4 border-blue-500 ml-4">
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border-2 border-white"></div>
            <h3 className="text-xl font-semibold text-gray-900">
              2020 – Junior Designer
            </h3>
            <p className="text-gray-600">
              Started as a junior graphic designer, learning layout principles
              and digital illustration.
            </p>
          </div>

          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border-2 border-white"></div>
            <h3 className="text-xl font-semibold text-gray-900">
              2022 – UI/UX Designer
            </h3>
            <p className="text-gray-600">
              Transitioned into UI/UX design, focusing on user research and
              prototyping web interfaces.
            </p>
          </div>


          <div className="ml-6">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border-2 border-white"></div>
            <h3 className="text-xl font-semibold text-gray-900">
              2024 – Frontend Developer
            </h3>
            <p className="text-gray-600">
              Expanded into frontend development with React and TailwindCSS to
              bring designs to life.
            </p>
          </div>
        </div>
      </div>

    </section>


  );
}

export default About;
