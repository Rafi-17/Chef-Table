import bannerBg from '../../../public/images/bannerBg.jpg'
const Banner = () => {
    return (
        <div className="hero h-[450px] lg:h-[600px] w-full rounded-3xl overflow-hidden"  style={{backgroundImage: `linear-gradient(0deg, rgba(21, 11, 43, 0.9), rgba(21, 11, 43, 0) 100%),url(${bannerBg})`,}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="">
            <h1 className="mb-5 text-3xl lg:text-5xl text-white font-bold w-[550px] lg:w-[900px] mx-auto">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5 w-[600px] lg:w-[935px] mx-auto text-white">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer
            </p>
            <button className="text-sm lg:text-base px-6 lg:px-8 py-2 lg:py-4 rounded-[50px] text-black bg-[#0BE58A] mr-8">Explore Now</button>
            <button className='border-white text-white border-solid text-sm lg:text-base px-6 lg:px-8 py-2 lg:py-4 bg-transparent border-[1px] rounded-[50px]'>Our Feedback</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;