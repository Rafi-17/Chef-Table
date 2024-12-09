
const Cooking = ({recipe,index}) => {
    const { recipe_name, preparing_time, calories } = recipe;
    return (
        <tr className="relative space-y-8">
            <th>{index+1}</th>
            <td className="text-sm">{recipe_name}</td>
            <td className="text-sm">{preparing_time}</td>
            <td className="text-sm">{calories}</td>
        </tr>
    );
};

export default Cooking;