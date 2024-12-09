import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import WantCook from "../WantCook/WantCook";
import Cooking from "../Cooking/Cooking";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantcook, setWantcook] = useState([]);
  const [cooking, setCooking] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const wantCookHandler = (recipe) => {
    const newWantcook = [...wantcook, recipe];
    setWantcook(newWantcook);
  };
  const preparingHandler=recipe=>{
    const newWantCook=wantcook.filter(rec=>rec.recipe_id!==recipe.recipe_id);
    setWantcook(newWantCook);
    const newCooking=[...cooking,recipe];
    setCooking(newCooking);
  }
  return (
    <div className="mt-12">
      <h2 className="text-center font-semibold text-4xl text-black">
        Our Recipes
      </h2>
      <p className="w-[650px] lg:w-[830px] mx-auto mt-6">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <div className="flex w-full gap-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-2/5 lg:w-2/3">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              wantCookHandler={wantCookHandler}
              recipe={recipe}
            ></Recipe>
          ))}
        </div>
        <div className="w-3/5 lg:w-1/3 max-h-max border-[#28282833] border-solid border-[1px] rounded-2xl py-8">
          <div className="mb-8">
            <h2 className="text-center mb-2 text-black font-medium text-base lg:text-lg">
              Want to cook:{wantcook.length}
            </h2>
            <div className="w-2/3 mx-auto mb-4"><hr /></div>
            <div className="">
              <table className="">
                {/* head */}
                <thead>
                  <tr className="space-y-6">
                    <th className="w-12"></th>
                    <th className="w-[112px] text-left text-sm font-normal">Name</th>
                    <th className="w-[60px] text-left text-sm font-normal">Time</th>
                    <th className="w-14 text-left text-sm font-normal">Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="">
                    {
                        wantcook.length>0 && wantcook.map((recipe,idx) => (<WantCook preparingHandler={preparingHandler} key={idx} index={idx} recipe={recipe}></WantCook>))
                    }
                </tbody>
              </table>
            </div>
                
        </div>
          <div>
            <h2 className="text-center mb-2 text-black font-medium text-base lg:    text-lg">
              Currently cooking:{cooking.length}
            </h2>
            <div className="w-2/3 mx-auto mb-4"><hr /></div>
            <div className="">
              <table className="">
                {/* head */}
                <thead>
                  <tr className="space-y-6">
                    <th className="w-12"></th>
                    <th className="w-[140px] text-left text-sm font-normal">Name</th>
                    <th className="w-[95px] text-left text-sm font-normal">Time</th>
                    <th className="w-[90px] text-left text-sm font-normal">Calories</th>
                  </tr>
                </thead>
                <tbody className="bg-[#28282805]">
                    {
                        cooking.length>0 && cooking.map((recipe,idx)=><Cooking recipe={recipe} key={idx} index={idx}></Cooking>)
                    }
                </tbody>
              </table>
            </div>                
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
