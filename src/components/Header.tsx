export default function Header() {
    return (
        <nav id="header-links" className="inset-shadow-stone-800 inset-shadow-sm fixed top-0 left-0 w-full z-50 bg-stone-400 flex justify-center items-center h-20 p-4 text-stone-200 space-x-4">
            <a href="#home"><p>Home</p></a>
            <div/>
            <a href="#about"><p>About</p></a>
            <div/>
            <a href="#experiences"><p>Experiences</p></a>
            <div/>
            <a href="#contact"><p>Contact</p></a>
        </nav>
    );
}