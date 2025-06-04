export default function About() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-stone-200 flex flex-col w-2/3 justify-center">
                <div className="flex items-center pt-5 pb-5 pl-5">
                    <h1 className="">Education and Accomplishments:</h1>
                </div>
                <div className="flex">
                    <div className="border-t-2 border-r-2 border-stone-300 p-10 h-100 w-1/2">
                        <h2>High School</h2>
                    </div>
                    <div className="border-t-2 border-stone-300 p-10 h-100 w-1/2">
                        <h2>University</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}