import logoImg from '../assets/brand.png';

const Navbar = () => {
    return (
        <nav className="bg-black-opaq absolute top-28 left-8 right-8 rounded-25 flex items-center justify-between p-4">
            <img src={logoImg} alt="Vaultflow logo" />
            <div className="flex items-center gap-8">
                <a href="#features" className="font-montserrat font-normal font-16 leading-24 text-white hover:text-gray-300 transition duration-300 ease-in-out">Features</a>
                <a href="#" className="font-montserrat font-normal font-16 leading-24 text-white hover:text-gray-300 transition duration-300 ease-in-out">Pricing</a>
                <a href="#" className="font-montserrat font-normal font-16 leading-24 text-white hover:text-gray-300 transition duration-300 ease-in-out">About us</a>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-50 shadow hover:shadow-lg transition duration-300 ease-in-out">
                <a href="#" className="font-montserrat font-normal font-16 leading-24 text-black">Download the app</a>
            </button>
        </nav>
    );
}

export default Navbar