
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import Women from "./Women";
import { womenActions } from "../store/womenslice";

function Homeitems({item}){
const data=item;

console.log(data)

    const dispatch=useDispatch();

dispatch(womenActions.senddata(data))
    const bagitem=useSelector((store)=>store.bag)
    const elementfound=bagitem.indexOf(item.id)>=0;
console.log(elementfound)

    const handaladdbag=()=>{
        dispatch(bagActions.addtobag(item.id));

    }

    const handalremove=()=>{
        dispatch(bagActions.removefrombag(item.id));

    }
    return(

        <>
        <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementfound ?         <button type="button" class="btn btn-success btn-add-bag den" onClick={handalremove}>Remove</button> :  
              <button type="button" class="btn btn-success btn-add-bag" onClick={handaladdbag}>Success</button>


        }
        </div>
     
      </>
    )

}
// export const sdata=data;
 export default Homeitems;

