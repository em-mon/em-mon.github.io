import Gallery from './Gallery.tsx'

export default function Home() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="mr-10 ml-15">
                <Gallery />
            </div>
            <div className="mr-10 w-2/3 h-150">
                <div className="">
                    <h1>
                        Hello!
                    </h1>
                    <p className="pl-10 pt-5">
                        Short intro/message
                    </p>
                </div>
            </div>
        </div>
    );
}