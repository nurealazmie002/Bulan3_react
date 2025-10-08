import { useState } from "react";

function ProfileCard() {
  const [name, setName] = useState<string>("Naufal");
  const [age, setAge] = useState<number>(20);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = () => {
    setIsEditing(false);
    alert("Profil berhasil disimpan!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Kartu Profil</h2>

        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Nama:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-slate-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Umur:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full border-2 border-slate-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 active:scale-95 transition"
            >
              Simpan
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Nama:</span> {name}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Umur:</span> {age}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 active:scale-95 transition"
            >
              Edit Profil
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default ProfileCard;
