import "./test.css";
import CastomUl from "./custom-camponents/Custom-static-components/CastomUl";
function TestCustom() {
  const ulArray = [
    "Опыт работы более 27 лет",
    "Образование: МГИМО (У) МИД РФ (Международное право), Германия, Нидерланды",
    "Опыт работы: с 1997 года в нефтяной области, затем юридический отдел крупного англо-американского холдинга и 8 лет в большом семейном офисе, команда с 8 до 70 человек, обеспечение деятельности российских и иностранных холдингов, а также решение частных вопросов их владельцев и их семей",
    "Уникальный опыт работы в РФ и ведущих странах по финтех и цифровым проектам, специалист по регулированию новых технологий, в т.ч. блокчейн-проектов с 2010 г., токенизации активов и предметов искусства, среди проектов — создание NFT для Эрмитажа, эксклюзивный юридический представитель крупнейшей мировой криптовалютной биржи Binance в России (до 03.22)",
    "Член Экспертного совета при рабочей группе по цифровой экономике при ГосДуме РФ, экспертного совета СКОЛКОВО, РСПП, Рабочей группы BRICS по платежам, участие в разработке главных законов в области цифровых финансовых активов и цифровых валют в России Приглашенный профессор",
    "ВШЭ (инвестиционные платформы, финтех), МГИМО, СПбГУ и др., лектор для сотрудников ЦБ РФ, ВТБ, Райффайзенбанка.; постоянный спикер мероприятий Blockchain Life, TechWeek Сколково и др. ",
    "Рейтинг ведущих экспертов Chambers FinTech Guide, The Legal 500 и Best Lawyers Языки: английский, немецкий, французский, итальянский, испанский",
  ];
  return <CastomUl ulArray={ulArray} />;
}
export default TestCustom;
