export default function About() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex justify-between items-center text-center w-3/4">
                <div className="inset-shadow-stone-600 inset-shadow-sm intro bg-stone-300 flex-1 flex-col justify-center items-center border-r-1 h-100">
                    <h2 className="mt-6">Software Engineering</h2>
                    <p className="mt-10">description</p>
                </div>
                <div className="inset-shadow-stone-600 inset-shadow-sm intro bg-stone-300 flex-1 flex-col justify-center items-center border-r-1 h-100">
                    <h2 className="mt-6">Data Science</h2>
                    <p className="mt-10">description</p>
                </div>
                <div className="inset-shadow-stone-600 inset-shadow-sm intro bg-stone-300 flex-1 flex-col justify-center items-center h-100">
                    <h2 className="mt-6">Robotics</h2>
                    <p className="mt-10">description</p>
                </div>
            </div>
        </div>
    );
}