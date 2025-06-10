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
                    <p className="bg-stone-300 p-5 !text-stone-500 rounded-md">
                        My name is Emma and I'm a rising junior in college studying  <span className="text-stone-600 font-bold">Computer Science</span>. 
                        My career interests span across <span className="text-stone-600 font-bold">software development, data science, and robotics</span>, 
                        and I actively pursue these interests through coursework, extracurricular projects, 
                        and personal work. When I'm not on my computer, I love practicing for dance performances 
                        with Rice Kasama, experimenting with and listening to music, and playing volleyball with friends.
                    </p>
                    <p className="mt-8 bg-stone-700 p-5 rounded-full"> 
                        I'm always looking for new ways to learn and grow, so feel free to reach out!!
                    </p>
                </div>
            </div>
        </div>
    );
}