import React, { useState } from "react";

const Form = () => {
  const [emailValue, setEmailValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();

    const inputValue = e.target.value;

    setEmailValue(inputValue);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setIsEmailValid(isValid);

    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid) {
      setErrorMessage("Por favor, introduce un correo electrónico válido.");
      return;
    }

    // Here you can add the logic to handle the subscription, e.g., sending the email to a server.
    console.log("Email submitted:", emailValue);
  };

  return (
    <section className="flex md:flex md:w-full md:items-center md:justify-start">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center px-8 md:w-full md:gap-2"
      >
        <input
          type="text"
          value={emailValue}
          placeholder="email.."
          onChange={handleInputChange}
          className={`w-48 rounded-full border px-2 py-1 placeholder:text-black text-sm ${
            isEmailValid ? "border-black" : "border-black"
          }`}
        />

        <button
          type="submit"
          className="rounded-full bg-black py-1 px-4 text-white text-sm"
        >
          Suscribete
        </button>
      </form>

      <div>
        <p className="mb-5 pt-1 text-xs text-light-red md:px-2 md:pt-2">
          {errorMessage}
        </p>
      </div>
    </section>
  );
};

export default Form;