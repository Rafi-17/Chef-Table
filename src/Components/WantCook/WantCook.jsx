const WantCook = ({ recipe, index, preparingHandler }) => {
  const { recipe_name, preparing_time, calories } = recipe;
  return (
          <tr className="relative space-y-8">
            <th>{index+1}</th>
            <td className="text-sm">{recipe_name}</td>
            <td className="text-sm">{preparing_time}</td>
            <td className="text-sm">{calories}</td>

            <th  onClick={()=>preparingHandler(recipe)}><button className="text-black py-1 px-2 text-xs bg-green-400 rounded-[50px] absolute -right-28 top-2">Preparing</button></th>
          </tr>
  );
};

export default WantCook;
