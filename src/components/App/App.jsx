import { useState } from "react";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import LoginForm from "../LoginForm/LoginForm";
import SearchBar from "../SearchBar/SearchBar";
import LoginFormk from "../LoginFormk/LoginFormk";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import { Formik } from "formik";
import UncontrolledForm from "../ControlledForm/ControlledForm";
import TestUseId from "../TestUseID/TestUseId";
import Test from "../TestUseID/Test";
import RegisterFormikForm from "../Formik/RegisterFormikForm";

const App = () => {
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);

  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  const handleChange = (evt) => {
    setHasAccepted(evt.target.value);
  };

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
      <p>Selected size:{coffeeSize}</p>
      <label>
        <input type="checkbox" name="terms" onChange={handleChange} />I accept
        terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
      <LoginFormk />
      <FeedbackForm />
      <UncontrolledForm />
      {/* <TestUseId /> */}
      <Test />
      <RegisterFormikForm />
    </div>
  );
};

export default App;
