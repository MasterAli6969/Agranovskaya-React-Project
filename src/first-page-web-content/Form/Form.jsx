import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [formState, setFormState] = useState({
    name: "",
    number: "",
  });

  const handleDataName = (e) => {
    setFormState((formState) => ({
      ...formState,
      name: e.target.value,
    }));
  };

  const handleDataNumber = (e) => {
    setFormState((formState) => ({
      ...formState,
      number: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <div className="div_form_title_conteiner_global">
      <div className="div_form_title_conteiner">
        <div className="div_title_conteiner">
          <h1 className="form_title_1">
            Если остались вопросы, оставьте заявку
          </h1>
          <p className="form_title_2">Мы свяжемся с Вами в ближайшее время</p>
        </div>
        <form className="div_form_conteiner" onSubmit={handleSubmit}>
          <input
            className="form_input"
            type="text"
            placeholder="Имя"
            onChange={handleDataName}
          />
          <input
            className="form_input"
            type="text"
            placeholder="Номер телефона"
            onChange={handleDataNumber}
          />
          <button className="form_buttom" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
