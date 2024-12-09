import { TfiTimer } from "react-icons/tfi";
import { SlFire } from "react-icons/sl";
const Recipe = ({ recipe,wantCookHandler }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return ( 
    <div className="p-4 lg:p-8 border-[#28282833] border-solid border-[1px] rounded-2xl">
      <figure className="">
        <img
          src={recipe_image}
          alt="Shoes"
          className="rounded-xl h-[150px] lg:h-[230px] w-[400px] mx-auto"
        />
      </figure>
      <div className="mt-6">
        <h2 className="mb-4 font-medium lg:font-semibold min-h-6 lg:h-full text-base lg:text-lg text-black text-left">{recipe_name}</h2>
        <p className="mb-4 text-[#878787] text-sm text-left">{short_description}</p>
        <hr />
        <h3 className="text-black font-normal lg:font-medium mt-5">Ingredients:{ingredients.length}</h3>
        <div className="mt-3 mb-5">
            <ul className="list-disc text-sm ml-4 space-y-1">
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
            </ul>
        </div>
        <hr />
        <div className="flex gap-10 items-center my-">
            <div className="flex items-center text-sm lg:text-base gap-2">
                <span><TfiTimer /></span>
                <p>{preparing_time}</p>
            </div>
            <div className="flex text-sm lg:text-base items-center gap-2">
                <span><SlFire /></span>
                <p className="">{calories}</p>
            </div>

        </div>
        <div className="card-actions">
            
          <button onClick={()=>wantCookHandler(recipe)} className="bg-green-400 mt-4 py-1 lg:py-2 px-4 lg:px-5 text-sm rounded-[50px] text-black">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
