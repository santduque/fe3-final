import React from "react";
import { useState } from "react";


const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  const [validation, setValidation] = useState(false)

  const validateName = () => {
    let nameUser = values.name
    if (nameUser.length <= 5) {
      return alert("El primer campo es inválido, por favor verificarlo")
    }
    return true
  }

  const validateEmail = () => {
    let emailUser = values.email.split("@")
    if (emailUser.length < 2){
      return alert("Email incorrecto, debe contener una '@' y una extension valida como '.com'")
    }
    let dotCom = emailUser[1].split(".")
    if (dotCom.length < 2) {
      return alert("Email incorrecto, debe contener una '@' y una extension valida como '.com'")
    }
    return true
  }

  const handleChange = (e) => {
    const {target} = e
    const {name, value} = target

    const newValues = {
      ...values,
      [name]:value,
    }
    setValues(newValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let nameValidation = validateName()
    let emailValidation = validateEmail()
    
    if (nameValidation && emailValidation) {
      setValidation(true)
    }
  }

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Fullname" className="input-form" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="input-form" onChange={handleChange} />
        <button type="submit" className="btn-form">Enviar</button>
      </form>
      {validation ? <h2>Gracias {values.name}, te contactaremos cuando antes vía email</h2> : ""}
    </div>
  );
};

export default Form;