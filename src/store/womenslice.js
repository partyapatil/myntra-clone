import { createSlice} from "@reduxjs/toolkit"
import { DEFAULT_ITEMS } from "../data/items";

  const woslice = createSlice({
    // ... other slice configuration
    name:"women",
    initialState:DEFAULT_ITEMS,
    reducers: {
      

      filterItemsByType: (state, action) => {
       let aa=action.payload
      //  aa.filter      
      // console.log(aa)
let p= aa.filter((i)=>i.type ==="female")
    console.log(p)
return p
    // const a=state.filteredItems = state.filter((i) => i.type ==="female");
    //    console.log(a)
    //     return a
    // },
        // Action payload can be used to dynamically set the type to filter
        // const filterType = action.payload==="female";
  
       
       
        // state.filteredItems = state.items.filter((i) => i.type === filterType);
     
    },
      // ... other reducers
//       addtobag:(state,action)=>{
//         // state.push(action.payload)
//         let aa=action.payload
// console.log(aa)
//         // return state=state.filter((i)=>i.type===aa)

    
//       },
addtobag: (state, action) => {
  // Add the item to the state
  // state.push(action.payload);
  
  // Remove the item with the specified ID
  const newItem = action.payload.items;
  const e=action.payload.e

  // Remove the item with the same ID from the state

 
  let p = newItem.filter((item) => item.id !== e && item.type==="female");
console.log(p)


  return p ;
},
    removefrombag:(state,action)=>{
       
      // state  state.filter(itemId=>itemId !== action.payload);
       return
    },
    senddata:(state,action)=>{

      console.log(action.payload)
      return action.payload
    }
    },
  });

  export const womenActions=woslice.actions;
  export default woslice;