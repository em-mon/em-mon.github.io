import SWE from './SWE.tsx'
import DS from './DS.tsx'
import Robotics from './Robotics.tsx'

export default function About() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex justify-between items-center text-center w-3/4 space-x-3">
                <div className="rounded-md inset-shadow-stone-600 inset-shadow-sm intro bg-stone-300 flex-1 flex-col justify-center items-center h-100">
                    <div className="icons bg-[url('/media/laptop.png')] bg-cover w-10 h-10"></div>
                    <p className="!text-stone-700">Software Engineering</p>
                    <h3 className="mt-2 ml-2 pr-3">I'm fascinated by how software can power solutions at any 
                        scale and enjoy building clean, functional systems. I am always looking to deepen 
                        my understanding of software design, development, and deployment.</h3>
                    <br></br>
                    <h3 className="ml-2 pr-3">Related technical skills and tools I'm familiar with:</h3>
                    <SWE />
                </div>
                <div className="rounded-md inset-shadow-stone-600 inset-shadow-sm intro bg-stone-300 flex-1 flex-col justify-center items-center h-100">
                    <div className="icons bg-[url('./media/data.png')] bg-cover w-10 h-10"></div>
                    <p className="!text-stone-700">Data Science</p>
                    <h3 className="mt-2 ml-2 pr-3">I'm drawn to the way data can uncover patterns and guide impactful 
                        decisions. I enjoy exploring data, building models, and finding creative ways to make insights 
                        actionable through analytics and visualization. </h3>
                    <br></br>
                    <h3 className="ml-2 pr-3">Related technical skills and tools I'm familiar with:</h3>
                    <DS />
                </div>
                <div className="rounded-md inset-shadow-stone-600 inset-shadow-sm intro bg-stone-300 flex-1 flex-col justify-center items-center h-100">
                    <div className="icons bg-[url('./media/robot.png')] bg-cover w-10 h-10"></div>
                    <p className="!text-stone-700">Robotics</p>
                    <h3 className="mt-2 ml-2 pr-3">I love the intersection of hardware and software in robotics. It's exciting to 
                        work on systems where code directly affects movement. I'm especially interested in sensor 
                        integration, autonomy, and solving real-world challenges.</h3>
                    <br></br>
                    <h3 className="ml-2 pr-3">Related technical skills and tools I'm familiar with:</h3>
                    <Robotics />
                </div>
            </div>
        </div>
    );
}