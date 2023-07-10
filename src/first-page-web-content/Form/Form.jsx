import "./Form.css";
function Form() {
  return (
    <div className="div_form_title_conteiner_global">
      <div className="div_form_title_conteiner">
        <div className="div_title_conteiner">
          <h1 className="form_title_1">
            Если остались вопросы, оставьте заявку
          </h1>
          <p className="form_title_2">Мы свяжемся с Вами в ближайшее время</p>
        </div>

        <form className="div_form_conteiner" action="">
          <input className="form_input" type="text" placeholder="Имя" />
          <input className="form_input" type="text" placeholder="Номер телефона" />
          <button className="form_buttom">Отправить</button>
        </form>
      </div>
    </div>
  );
}
export default Form;
