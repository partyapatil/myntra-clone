import Homeitem from "../componets/Homeitem"
import { useSelector } from "react-redux";
import Women from "../componets/Women";
function Home(){
const items=useSelector(store=>store.items);

return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id}>
            <Homeitem item={item} />
          
          
          </div>


        ))}
      </div>
    </main>
  );
}

export default Home;