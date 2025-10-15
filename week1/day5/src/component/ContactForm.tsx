import { useState } from "react";

function ContactForm(){
    const[formData,setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value  
        }))
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Data yang disubmit: ",formData);
        alert(`Terima kasih${formData.firstName}, Data telah masuk.`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Formulir Kontak</h2>
            <div>
                <label>Nama Depan:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div>
                <label>Nama Belakang:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default ContactForm