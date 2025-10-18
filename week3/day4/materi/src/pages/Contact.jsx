import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


function Contact() {
  return (
    <section className="container mx-auto px-6 py-12 sm:py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 pt-10">
          Contact Me
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to
          say hello!
        </p>
      </div>


      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        <div className="lg:w-1/2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700">nurealazmie002@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-700">Lampung, Indonesia</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">My Social Media</h3>
            <div className="flex gap-6 text-5xl">
              <a
                href="https://www.linkedin.com/in/nureal-azmie-8a6637378/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/nurealazmie002"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-black transition-transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/nureal_azmie/"
                target="_blank"
                rel="noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <form className="lg:w-1/2 bg-blue-50 p-8 rounded-2xl shadow-md space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Nama kamu..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="@gmail..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Masukkan Pesan..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
