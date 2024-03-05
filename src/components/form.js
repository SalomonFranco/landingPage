import React, { useState } from "react";

const Form = () => {
  const [emailValue, setEmailValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmailValue(inputValue);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setIsEmailValid(isValid);

    setErrorMessage("");

    console.log({ emailValue });
  };

  const handleSubmit = (e) => {
    console.log("handle submit called");
    e.preventDefault();

    if (!isEmailValid) {
      console.log("Please provide a valid email address");
      setErrorMessage("Please provide a valid email address");
      return;
    }

    // Continue with form submission logic or other actions
    console.log("Form submitted with email:", emailValue);
  };

  return (
    <section>
      <div className="md:flex md:items-center md:justify-center">
        <form
          onSubmit={handleSubmit}
          className="px-8 md:flex md:w-2/3 md:flex-row md:items-center md:justify-center md:gap-4"
        >
          <input
            type="email"
            value={emailValue}
            placeholder="Your email address..."
            onChange={handleInputChange}
            className="mb-4 w-full md:basis-2/3 rounded-full border border-pale-blue px-4 py-3 placeholder:text-pale-blue md:mb-0"
          />
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="w-full md:basis-1/3 rounded-full bg-blue py-3 text-white"
          >
            Notify Me
          </button>
        
        </form>
        <div>
          <p className="text-black">{errorMessage}</p>
          </div>
      </div>
    </section>
  );
};

export default Form;
