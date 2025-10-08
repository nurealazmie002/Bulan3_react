import { useState } from "react";

function FormLogin() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  

  const handlePhone = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (!value.includes("+62")) {
      setPhoneError("Nomor harus dimulai dengan +62");
    } else if (value.length < 8) {
      setPhoneError("Nomor minimal 8 karakter");
    } else {
      setPhoneError("");
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError("Password minimal 8 karakter");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneError && !passwordError && phone && password) {
      alert(" Berhasil login");
    } else {
      alert(" Gagal login — periksa input Anda");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-16 p-6 bg-white rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Login
      </h2>

     
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Nomor Telepon
        </label>
        <input
          type="text"
          placeholder="+62"
          value={phone}
          onChange={handlePhone}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            phoneError
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        />
        {phoneError && (
          <p className="mt-1 text-sm text-red-500">{phoneError}</p>
        )}
      </div>

      
      <div>
        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={handlePassword}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            passwordError
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        />
        {passwordError && (
          <p className="mt-1 text-sm text-red-500">{passwordError}</p>
        )}
      </div>

     <p className="text-center text-sm text-gray-500">phone: {phone} || password: {password}</p>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>
      
    </form>
  );
}

export default FormLogin;
