import { IoMdTime } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";

const Recipe = ({ recipe, wantToCook }) => {
  const {
    recipe_name,
    ingredients,
    short_description,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  return (
    <div>
      <div className="card bg-[#FCEFCB] text-black  shadow-sm p-5">
        <figure>
          <img src={recipe_image} alt="Food Items" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {recipe_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{short_description}</p>
          <div>
            <h2 className="text-xl font-bold mb-2">
              Ingredients : {ingredients.length}
            </h2>
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </div>

          <div className="card-actions justify-start gap-10">
            <div className="badge badge-outline">
              <IoMdTime className="text-xl text-[#FE7743]"></IoMdTime>
              {preparing_time} minutes
            </div>
            <div className="badge badge-outline">
              {" "}
              <FaFireAlt className="text-lg text-[#E9A319]"></FaFireAlt>{" "}
              {calories} calories
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                wantToCook(recipe);
              }}
              className="btn bg-[#0BE58A] text-black rounded mt-2"
            >
              want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
