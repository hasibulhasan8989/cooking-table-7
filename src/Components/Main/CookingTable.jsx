
import CookingItem from "./CookingItem";
import PreparingItem from "./PreparingItem";

const CookingTable = ({ wantCook,currentCook,currentCookItems }) => {

   const times=currentCookItems.map(ie=>ie.preparing_time)
    let xxx=0;
   for(let time of times){
     xxx=xxx+time
   }
   console.log(xxx)

   const calories=currentCookItems.map(ie=>ie.calories)
    let yyy=0;
   for(let calorie of calories){
     yyy=yyy+calorie
   }
   console.log(yyy)


  return (
    <div className="min-h-[685px] w-1/3 border bg-[#FFB38E] p-10 text-black font-semibold rounded-4xl">
      <h1 className="border-b-2 p-2 text-center font-bold text-2xl">
        Want to cook :{wantCook.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-[#C5172E]">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {wantCook.map((item, idx) => (
              <CookingItem item={item} key={idx} currentCook={currentCook}  num={idx}></CookingItem>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="border-b-2 p-4 text-center font-bold text-2xl">
        Currently cooking: {currentCookItems.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-[#C5172E]">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
           {
            currentCookItems.map((item,idx)=><PreparingItem item={item} num={idx} key={idx} ></PreparingItem>)
           }
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex flex-col items-end">
        <h1>Total Time ={xxx}</h1>
        <h2>Total Calories = {yyy}</h2>
      </div>
      

    </div>
  );
};

export default CookingTable;
