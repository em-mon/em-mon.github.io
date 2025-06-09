export default function Gallery() {
    return (
        <div className="flex-col flex">
            <div className="flex flex-col items-center mt-5">
            <div id="me" className="bg-[position:50%_70%] bg-[url('./media/profile_picture.jpeg')] bg-cover border-6 w-80 h-100"></div>
                <p className="mt-4"></p>
            </div>
            <div className="mt-4 flex justify-center items-center mb-5">
                <div className="mr-10 w-20 h-25"></div>
                <div className="mr-10 w-20 h-25"></div>
                <div className="mr-10 w-20 h-25"></div>
                <div className="mr-10 w-20 h-25"></div>
                <div className="mr-10 w-20 h-25"></div>
                <div className="w-20 h-25"></div>
            </div>
        </div>
    );
}