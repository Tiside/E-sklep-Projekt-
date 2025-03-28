export default function Header(){
    return(
        <div className="flex-col bg-gray-200 h-screen w-1/5">
            <h1 className="">
                tu jest header
            </h1>
            <nav className="flex-col">
                <a href="/Koszyk" className="w-full">Koszyk</a> <br />
                <a href="/Listaproduktow" className="w-full">Listaproduktow</a>
            </nav>
        </div>
    );
}