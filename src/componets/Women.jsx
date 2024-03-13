

import woslice from "../store/womenslice";
import React, { useState, useEffect } from "react";

import { womenActions } from "../store/womenslice";
import { useDispatch, useSelector } from "react-redux";
import bagSlice, { bagActions } from "../store/bagSlice";
// import { sdata } from "./Homeitem";
const Women = ({item,price}) => {
  console.log(item)
  console.log(price)
  const[ss,set]=useState();
  // console.log(ss)
  const items = useSelector((store) => store.items);
//   const [filteredItems, setFilteredItems] = useState([]);
const w=useSelector((s=>s.women))
console.log(w)

const dispatch=useDispatch();
// useEffect(()=>{
//   dispatch(womenActions.filterItemsByType())


// })
useEffect(() => {

  dispatch(womenActions.filterItemsByType(items));
}, [dispatch]);

const bagitem=useSelector((store)=>store.women)
console.log(bagitem)
const [filteredItems, setFilteredItems] = useState(bagitem);

const elementfound=w.indexOf(items.id)>=0;


const handaladdbag=(e)=>{
    dispatch(womenActions.addtobag({items,e}));
console.log(e)
console.log(items)
}

const handalremove=()=>{
    dispatch(womenActions.removefrombag(items.id));
}


console.log(filteredItems)
    return (
        <>
        <h1>women</h1>
        {w.map((item) => (

        <div key={item.id} className="item-container">
          {/* ... rest of the code */}
{/* {set(item.id)} */}
          <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
            {/* {item.rating.stars} ⭐ | {item.rating.count} */}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementfound ?         <button type="button" className="btn btn-success btn-add-bag den" onClick={()=>handaladdbag(item)}>Remove</button> :  
              <button type="button" className="btn btn-success btn-add-bag" onClick={()=>handaladdbag(item.id)}>Success</button>


        }
        </div> 
      ))}
            
        {/* <>
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
   
        </div>
      </> */}
  
        </>
    )
}
export default Women;

///////////


// import { useDispatch, useSelector } from "react-redux";
// import { bagActions } from "../store/bagSlice";
// import Women from "./Women";
// import { womenActions } from "../store/womenslice";

// function Homeitems({item}){
// const data=item;

// console.log(data)
// const dataa=useSelector(s=>s.items)
//     const dispatch=useDispatch();

// dispatch(womenActions.senddata(data))
//     const bagitem=useSelector((store)=>store.bag)
//     // const elementfound=bagitem.indexOf(item.id)>=0;
// // console.log(elementfound)

//     const handaladdbag=()=>{
//         dispatch(bagActions.addtobag(item.id));

//     }

//     const handalremove=()=>{
//         dispatch(bagActions.removefrombag(item.id));

//     }
//     return(

//         <>
//         <div className="item-container">
//         <img className="item-image" src={item.image} alt="item image" />
//         <div className="rating">
//             {item.rating.stars} ⭐ | {item.rating.count}
//         </div>
//         <div className="company-name">{item.company}</div>
//         <div className="item-name">{item.item_name}</div>
//         <div className="price">
//             <span className="current-price">Rs {item.current_price}</span>
//             <span className="original-price">Rs {item.original_price}</span>
//             <span className="discount">({item.discount_percentage}% OFF)</span>
//         </div>
//         {/* {elementfound ?         <button type="button" class="btn btn-success btn-add-bag den" onClick={handalremove}>Remove</button> :  
//               <button type="button" class="btn btn-success btn-add-bag" onClick={handaladdbag}>Success</button>


//         } */}
//         </div>
     
//       </>
//     )

// }
// // export const sdata=data;
//  export default Homeitems;

