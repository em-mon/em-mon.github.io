import Gallery from './Gallery.tsx'

export default function Home() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="mr-15 ml-20">
                <Gallery />
            </div>
            <div className="mr-5 w-2/3 h-150">
                <div className="">
                    <h1>
                        Hello!
                    </h1>
                    <p className="pl-10 pt-5">
                        Short intro/message
                    </p>
                </div>
                <div className="flex justify-between items-center border-2 h-70 mt-15 mr-10 text-center w-full">
                    <div className="intro bg-stone-300 flex-1 flex-col justify-center items-center border-r-1 h-69">
                        <h2 className="mt-6">Software Engineering</h2>
                        <p className="mt-10">description</p>
                    </div>
                    <div className="intro bg-stone-300 flex-1 flex-col justify-center items-center border-r-1 h-69">
                        <h2 className="mt-6">Data Science</h2>
                        <p className="mt-10">description</p>
                    </div>
                    <div className="intro bg-stone-300 flex-1 flex-col justify-center items-center h-69">
                        <h2 className="mt-6">Robotics</h2>
                        <p className="mt-10">description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}