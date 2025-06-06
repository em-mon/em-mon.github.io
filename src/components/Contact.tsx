import Fireworks from './Fireworks'

export default function Contact() {
    return (
        <div className="relative">
            <Fireworks />
            <div className="h-1/2 pt-50 pb-100 flex flex-col justify-center items-center space-y-5 relative z-10">
                <div className="inset-shadow-stone-600 inset-shadow-sm  bg-stone-200 rounded-md w-1/2 justify-center flex p-5">
                    <h1>Let's connect!</h1>
                </div>
                <div id="contact-logos" className="flex w-2/3 justify-center pt-10 pb-10 items-center space-x-10">
                    <a href="https://www.linkedin.com/in/emma-montero/" target="_blank" className="inset-shadow-indigo-600 inset-shadow-sm bg-[url('./media/linkedin.png')] bg-cover w-20 h-20 rounded-full"></a>
                    <a href="https://github.com/em-mon" target="_blank" className="bg-[url('./media/github.png')] bg-cover w-20 h-20 rounded-full"></a>
                    <a href="https://app.joinhandshake.com/profiles/urxpfc" target="_blank" className="inset-shadow-indigo-600 inset-shadow-sm bg-[url('./media/handshake.png')] bg-cover w-20 h-20 rounded-full"></a>
                    <a href="mailto:emmamarimontero@gmail.com" target="_blank" className="inset-shadow-indigo-600 inset-shadow-sm bg-[url('./media/gmail.png')] bg-cover w-20 h-20 rounded-full"></a>
                </div>
            </div>
        </div>
    );
}