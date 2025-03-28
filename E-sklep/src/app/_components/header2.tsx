export default function Header2(){
    return(
        <header className=" flex-col w-full bg-gray-200">
            <h1>
                Glowny header
            </h1>
            <nav className="flex justify-end items-end w-full">
                <a href="#" className="link text-red-900 mr-2">przej1</a>
                <a href="#" className="link text-red-900 mr-2">przej2</a>
                <a href="#" className="link text-red-900 mr-2">przej3</a>
            </nav>
        </header>
    );
}