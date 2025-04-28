const CookingItem = ({ item, num,currentCook}) => {
  const { recipe_name, calories, preparing_time } = item;

  return (
    <tr className="border-b-2">
      <th>{num + 1}</th>
      <td>{recipe_name}</td>
      <td> {preparing_time} Minutes</td>
      <td>{calories} Calories</td>
      <td>
        <button onClick={()=>currentCook(item)} className="btn bg-[#F1BA88] border-none rounded-full px-6 text-black">
          Preparing
        </button>
      </td>
    </tr>
  );
};

export default CookingItem;
