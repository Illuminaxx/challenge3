import iconContent from '../assets/Content.png';
import wrapperImg from '../assets/Image Wrapper.png';

const Header = () => {
    return (
        <>
            <div className="text-center mt-300 rounded-61.91 border border-gray pt-9.91 pr-19.81 pb-9.91 pl-19.81">
                <p className="font-montserrat text-other-white leading-26 font-normal">We just raised $20M in Series B. Learn more</p>
            </div>
            <h1 className="text-80 font-medium leading-80 font-montserrat tracking-t text-center mt-10 w-960 h-160 bg-gradient-to-r from-white-variant via-white-variant to-white-opaque bg-clip-text text-transparent"><span>Modern analytics</span><br />
                <span>for the modern world</span>
            </h1>
            <p className="text-18 font-montserrat font-normal leading-28.8 text-other-gray w-600 h-58 text-center mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>

            <div className="flex gap-4 pt-16 mt-6 mb-20">
                <button className="bg-white text-black text-16 font-normal leading-24 py-3 px-6 rounded-60 shadow-lg hover:shadow transition-shadow duration-300 ease-in-out">
                    <a href="http://" className="font-montserrat font-normal font-16 leading-24 text-black">Download the app</a>
                </button>
                <button className="border border-white text-white-cream text-16 font-normal leading-24 py-3 px-6 rounded-60">
                    <a href='#' className="font-montserrat font-normal font-16 leading-24">Talk to an expert</a>
                </button>
            </div>
            <div>
                <img src={wrapperImg} />
            </div>
            <div className="pt-10 pb-10">
                <h2 className="text-center text-white-opa font-montserrat text-20 font-medium">Trusted by teams at over <span className="font-graphik text-20 font-semibold">1,000</span> of the world's leading organizations</h2>
                <div className='mt-40'>
                    <img src={iconContent} alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;
