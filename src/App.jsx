import { useState } from "react";
import "./App.css";
import Banner from "./Components/Header/Banner";
import Nav from "./Components/Header/Nav";
import CookingTable from "./Components/Main/CookingTable";
import OurRecipes from "./Components/Main/OurRecipes";
import Recipes from "./Components/Main/Recipes";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [wantCook, setWantCook] = useState([]);
  const [currentCookItems,setCurrentCookItems]=useState([])

  const wantToCook = (recipe) => {
    if (wantCook.includes(recipe)) {
      toast.error("Already Exist");
    } else {
      const newWantCook = [...wantCook, recipe];
      setWantCook(newWantCook);
    }
  };

  const currentCook=(newCook)=>{
  
   const newWantToCook=wantCook.filter(cook=> cook !==newCook)
   setWantCook(newWantToCook)
    
   const newCurrentCookItems=[...currentCookItems,newCook]
   setCurrentCookItems(newCurrentCookItems)
    
    

  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto mt-8">
        <Nav></Nav>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
        <div className="flex justify-between items-start gap-16">
          <Recipes wantToCook={wantToCook}></Recipes>
          <CookingTable 
          currentCookItems={currentCookItems}
          wantCook={wantCook}
          currentCook={currentCook}
          ></CookingTable>
        </div>
      </div>
    </>
  );
}

export default App;
