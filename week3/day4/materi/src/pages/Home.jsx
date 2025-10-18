function Home() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('http://upload.lexxganz.my.id/uploads/pexels-chaitaastic-2093323%20(1).jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-[1] text-white px-6 pt-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 transition-transform duration-300 hover:scale-105">
          Selamat Datang di
          <br />
          <span className="text-yellow-400">Website hasil Tugas</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-10 mx-auto">
          Ini adalah website tugas Week 3 Day 4
        </p>
      </div>
      
    </section>
  );
}

export default Home;
