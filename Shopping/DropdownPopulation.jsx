import DisplayCart from './CartDisplay';
function AddStuff() {
  const { Button } = ReactBootstrap;

  const [itemList, setItemList] = React.useState([
    {
      text: "Crawfish",
      count: 1,
      image: "ShoppingImages/Crawfish.jpg",
    },
    {
      count: 0,
      text: "Pacman",
      image: "ShoppingImages/PacMan1.png",
    },
  ]);

  const modItem = (e, change) => {
    if (e.count==0 && change==-1){return};
    let newCount=itemList.map((item)=>
    {
      if(item.text==e.text) item.count+=change;
      return item;
    })
    setItemList(newCount);
  
  };
  

  return (
    <div>
      {itemList.map((obj, i) => (
        <div className="card" style={{ width: "25%" }}>
        
          <img
            src={obj.image}
            style={{ width: "80%", height: "80%" }}
            className="cartImage"
            alt="..."
          />
          <div className="cartItem">
            <h5 className="card-title" >{obj.text}</h5>
            <table><tr>
                <td><Button className="btn btn-primary" onClick={()=>modItem(obj, -1)}>-</Button></td>
                <td><h5 className="card-text" >{obj.count}</h5></td>
                <td><Button className="btn btn-primary" onClick={()=>modItem(obj, 1)}>+</Button></td>
            </tr></table>
          </div>
        </div>
      ))}
      <CartDisplay addToCart={itemList}></CartDisplay>
    </div>
  );
}
ReactDOM.render(<AddStuff />, document.getElementById("itemList"));
