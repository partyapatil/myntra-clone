import { useSelector } from "react-redux";
import Bagitem from "../componets/Bagitem";
import Bagsummry from "../componets/Bagsummry";

function Bag(){
   
    const  bagitems=useSelector(state=>state.bag)
const items=useSelector(state=>state.items)
const finalitems=items.filter(item=>{
    const itemindex=bagitems.indexOf(item.id);
    return itemindex >=0;
})
return(
   
    <main>
         <div className="bag-page">
        <div className="bag-items-container">
            {finalitems.map(item=><Bagitem item={item}/>)}



        </div>
            <Bagsummry></Bagsummry>
        </div>
    </main>
    
)
}
export default Bag;














// <div className="items-container">
// </div> 