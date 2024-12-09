import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center mb-12">
            <div>
                <h2 className="text-2xl lg:text-4xl font-extrabold text-black">Recipe Calories</h2>
            </div>
            <div>
                <ul className="flex gap-6 lg:gap-10 list-none text-[#150B2BB3] text-sm lg:text-base">
                    <li className="hover:underline hover:cursor-pointer">Home</li>
                    <li className="hover:underline hover:cursor-pointer">About</li>
                    <li className="hover:underline hover:cursor-pointer">Recipes</li>
                    <li className="hover:underline hover:cursor-pointer">Search</li>
                </ul>
            </div>
            <div className="relative">
                <span className="absolute top-[10px] lg:top-4 ml-4 text-[#150B2BB3]"><AiOutlineSearch /></span>
                <input className="rounded-full text-sm lg:text-base mr-10 lg:mr-12 pl-10 w-[160px] lg:w-[250px] lg:pr-5 py-[6px] lg:py-3 border-none bg-[#150B2B08]  placeholder:text-[#150B2BB3]" placeholder="search" type="text" />
                <span className="absolute top-4 lg:top-6 right-0 text-xl transform -translate-y-1/2 bg-green-400 text-black rounded-full flex items-center justify-center p-1 lg:p-2 "><CgProfile /></span>
            </div>
        </div>
    );
};

export default Navbar;