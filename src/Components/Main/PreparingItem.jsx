import React from 'react';
import { FaFire } from "react-icons/fa";


const PreparingItem = ({item,num}) => {
    const { recipe_name, calories, preparing_time } = item;
    return (
        <tr>
        <th>{num+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} Minutes</td>
        <td>{calories} Calories</td>
        <td><button className='btn bg-gray-200 rounded-full text-black px-4 border-none '>Cooking <FaFire className='text-yellow-400'></FaFire> </button></td>
      </tr>
    );
};

export default PreparingItem;