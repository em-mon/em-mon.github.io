export default function Gallery() {
    return (
        <div className="flex-col flex">
            <div className="flex flex-col items-center mt-5">
                <div id="me" className="border-2 w-80 h-100"></div>
                <p className="mt-4">**Click an image</p>
            </div>
            <div className="mt-4 flex justify-center items-center mb-5">
                <div className="border-2 mr-10 w-20 h-25"></div>
                <div className="border-2 mr-10 w-20 h-25"></div>
                <div className="border-2 mr-10 w-20 h-25"></div>
                <div className="border-2 mr-10 w-20 h-25"></div>
                <div className="border-2 mr-10 w-20 h-25"></div>
                <div className="border-2 w-20 h-25"></div>
            </div>
        </div>
    );
}