

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="images/banner.png" className="max-w-sm rounded-lg shadow-2xl bg-base-200" />
                    <div >
                        <h1 className="text-5xl font-bold pb-10">Books to freshen up <br /> your bookself</h1>
                        <button className="btn glass bg-green-300 ">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;