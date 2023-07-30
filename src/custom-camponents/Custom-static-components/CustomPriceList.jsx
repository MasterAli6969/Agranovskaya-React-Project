function CustomPriceList(props) {
  const { priceListArray } = props;
  return (
    <div className="custom_prise_global_conteiner">
      {priceListArray.map((content) => (
        <ul className="custom_prise_list_conteiner" key={content.id}>
          <h1 className="custom_prise_title">{content.title}</h1>
          {content.priceListItemArray.map((item) => (
            <li className="custom_prise_item_conteiner" key={item.id}>
              <div className="custom_prise_item_conteiner_right">
                <p className="custom_prise_item_description">{item.name}</p>
              </div>
              <div className="custom_prise_item_conteiner_left">
                <p className="custom_prise_item_peise_text">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
export default CustomPriceList;
