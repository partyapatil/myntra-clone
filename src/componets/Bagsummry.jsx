

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Bagsummry({}){
  const  bagitems=useSelector(state=>state.bag)
  const items=useSelector(state=>state.items)
const finalitems=items.filter(item=>{
    const itemindex=bagitems.indexOf(item.id);
    return itemindex >=0;
})
  
  let totalItem = bagitems.length;
  console.log(totalItem)
  let totalMRP = 0;
  let totalDiscount = 0;
const CONVENIENCE_FEES=99;

finalitems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  

   

    return (
        <>
        <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value">-₹{totalDiscount}</span>
    </div>
    <div classNameName="price-item">
      <span classNameName="price-item-tag">Convenience Fee</span>
   
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  { totalItem !==0 ? (<Link to="/payment" > <button className="btn-place-order">
 <div className="css-xjhrni" >PLACE ORDER</div>
  </button></Link>) :(<Link to={"/"}><button className="btn-place-order">
 <div className="css-xjhrni" >Add item</div>
  </button></Link> )
}
    
     {/* {totalItem !== 0 ? (
        <Link to="/payment">
          <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
        </Link>
      ) : (
        <p>No items in the bag</p>
      )} */}
  
  </>
    )
}
export default Bagsummry;