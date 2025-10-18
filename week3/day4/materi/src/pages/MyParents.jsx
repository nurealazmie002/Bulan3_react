function MyParents() {
  return (
    <section className="text-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-6 rounded-2xl shadow-md max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
        👨‍👩‍👧 My Parents
      </h1>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            My Father
          </h2>
          <p className="text-gray-600">
            Feri Eriyadi — The greatest hero in my life 💪
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            My Mother
          </h2>
          <p className="text-gray-600">
            Eni Isnawati — The most kind person in my life 💖
          </p>
        </div>
      </div>
    </section>
  );
}

export default MyParents;
