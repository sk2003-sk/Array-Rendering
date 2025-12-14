import "./App.css";
import ItemCard from "./component/ItemCard";

import Data from "./data";

function App() {
  return (
    <div id="root">
      <h1 className="main-heading">
        Restaurants with online food delivery in Bangalore
      </h1>
      <button>
        Sort By{" "}
        <i>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-down-arrow-icon-svg-download-png-15659.png?f=webp&w=512"
            alt=""
          />
        </i>{" "}
      </button>

      <div className="restaurents">
        {Data.map((item, index) => (
          <ItemCard key={index} items={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
