export function DisplayCart(){
  
    const [currentCart, setCurrentCart]=React.useState([
    {
        image: "ShoppingImages/PacMan1.png",

    },
    ]);

    const addToCart=(obj)=>{
        let newCart=currentCart.map((item)=>{
            if(item.text==obj.text) item.count+=1;
            return item;
        })
        if( obj.count==1)
        {
            setCurrentCart([...currentCart, obj]);
        }
        else{
            setCurrentCart(newCart);
        }
        
    };

    return(
        <div>
         {currentCart.map((obj, i)=> (
             <div>
                 <img src={obj.image}></img>
             </div>
         ))}
        </div>
    );
}

ReactDOM.render(<DisplayCart />, document.getElementById("cart"));