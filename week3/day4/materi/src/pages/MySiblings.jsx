function MySiblings() {
  return (
    <section className="text-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-6 rounded-2xl shadow-md max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
        👬 My Siblings
      </h1>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Faris Saifullah
          </h2>
          <p className="text-gray-600">My strong boy 💪</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Afif Aulian
          </h2>
          <p className="text-gray-600">The naughty one 😄</p>
        </div>
      </div>
    </section>
  );
}

export default MySiblings;
