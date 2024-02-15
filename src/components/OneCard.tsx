const OneCard = () => {
    return (
        <div className="text-white mt-60">
            <div className="bg-violet backdrop-filter backdrop-blur-lg rounded-20 p-6 custom-shadow hover:shadow-2xl transition w-1200 h-440 flex flex-col items-center justify-center  mx-auto">
                <h3 className="font-bold text-48 text-white-cream font-montserrat leading-57.6 mb-3 text-center">Our powerful analytics provides invaluable insights.</h3>
                <p className="text-center mt-6 text-white-cream font-montserrat text-18">Unlock the power of data with our cutting-edge analytics product. Get instant<br/> insights with our user-friendly Analytics Dashboard, and take advantage of our<br/> innovative digital credit tokens to reward your customers and incentivize<br/> engagement. </p>
                <div className="mt-6 border border-white rounded-60 pt-12 pr-24 pb-12 pl-24 font-montserrat font-normal text-16 leading-6">
                    <a href="#">Download app</a>
                </div>
            </div>
        </div>
    );
}

export default OneCard;