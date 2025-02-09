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
      setErrorMessage("Please provide a valid email address");
      return;
    }
  };

  return (
    <section className="flex-col md:flex md:w-full md:items-center md:justify-start">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center px-8 md:w-2/3 md:flex-row md:gap-4"
      >
        <div className="flex w-full flex-col items-center md:items-start">
          <input
            type="text"
            value={emailValue}
            placeholder="Tu correo electrónico..."
            onChange={handleInputChange}
            className={`w-full rounded-full border px-4 py-3 placeholder:text-pale-blue md:mb-0 md:basis-2/3 ${isEmailValid ? "border-pale-blue" : "border-light-red"}`}
          />

          <div>
            <p className="mb-5 pt-1 text-xs text-light-red md:px-4 md:pt-2">
              {errorMessage}
            </p>
          </div>
        </div>
        <button
          type="submit"
          onSubmit={handleSubmit}
          className=" w-full rounded-full bg-blue py-3 text-white md:basis-1/3"
        >
          Notificame
        </button>
      </form>
    </section>
  );
};

export default Form;
