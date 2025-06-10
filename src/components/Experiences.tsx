export default function Experiences() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center space-y-5">
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center h-90 w-4/5">
                    <div className="flex pb-5">
                        <h1 className="">Works in progress...</h1>
                    </div>
                    <div className="flex">
                        <div className="h-60 w-full">
                            <div className="project">
                                <div className="flex border-b-1 border-stone-700 pb-1">
                                    <h3 className="mt-1 font-bold">2025 eBay ML Contest</h3>
                                    <a className="ml-6 bg-[url('./media/github_logo.png')] bg-cover"></a>
                                </div>
                                <p>Me and one other are developing a NER model to extract key product details from German marketplace listings for motor vehicle parts. This project sharpens my NLP skills, explores international e-commerce data, and tackles a real-world machine learning challenge with industry relevance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center h-90 w-4/5">
                    <div className="flex pb-5">
                        <h1 className="">Past projects...</h1>
                    </div>
                    <div className="flex">
                        <div className="h-60 w-full">
                            <div className="project">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}