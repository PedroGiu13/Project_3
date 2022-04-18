import "../styles/menu.css";

const MenuItem = (props) => {
  const alertMessage = () =>{
    alert('No se pueden realizar compras')
  }


  return (
    <div className="menu-item">
      <div className="menu-item__content">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <h3>${props.price}</h3>
        <button onClick={alertMessage}>Comprar</button>
      </div>
    </div>
  );
};

export default MenuItem;
