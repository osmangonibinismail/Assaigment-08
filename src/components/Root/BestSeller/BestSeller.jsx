
const BestSeller = () => {

    return (
        <div className="pt-10">
            <div className="p-6 py-12 pt-10 pb-10 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" />50% Off
                        </h2>
                        <div>
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span>Plus free shipping! Use code:</span>
                                <span className="font-bold text-lg">OSMAN314</span>
                            </div>
                            <div className="font-bold">
                                valid date: 15-12-2024
                            </div>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 border-gray-400 dark:border-gray-600">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="pb-10 rounded-2xl pt-10 border border-gray-300">
                <div className="p-6 py-12 pt-5 pb-5 bg-gray-100 text-gray-900 dark:text-gray-50 grid">
                    <h1 className="text-start ">Atomic Habits</h1>
                    <h1 className="text-center">James Clear</h1>
                    <h1 className="text-end">Rating:4.9</h1>
                </div>
                <div className="p-6 py-12 pt-5 pb-5 bg-white text-gray-900 dark:text-gray-50 grid">
                    <h1 className="text-start">The Productive Muslim</h1>
                    <h1 className="text-center">Mohammed Faris</h1>
                    <h1 className="text-end">Rating:4.8</h1>
                </div>
                <div className="p-6 py-12 pt-5 pb-5 bg-gray-100 text-gray-900 dark:text-gray-50 grid">
                    <h1 className="text-start">Powerful Focus</h1>
                    <h1 className="text-center">Thibaut Meurisse</h1>
                    <h1 className="text-end">Rating:4.7</h1>
                </div>
                <div className="p-6 py-12 pt-5 pb-5 bg-bg-white text-gray-900 dark:text-gray-50 grid">
                    <h1 className="text-start">Immediate action</h1>
                    <h1 className="text-center">Thibaut Meurisse</h1>
                    <h1 className="text-end">Rating:4.9</h1>
                </div>
                <div className="p-6 py-12 pt-5 pb-5 bg-gray-100 text-gray-900 dark:text-gray-50 grid">
                    <h1 className="text-start">Master your emotion</h1>
                    <h1 className="text-center">Thibaut Meurisse</h1>
                    <h1 className="text-end">Rating:4.6</h1>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;