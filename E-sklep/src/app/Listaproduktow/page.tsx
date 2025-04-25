import "@/styles/styles.css";
import Karta from "@/app/_components/karta";
import Cursor from "@/app/_components/Cursor";


export default function Listaproduktow(){
    const produkty = [
        {
            "id":1,
            "Marka":'Nike',
            "src":"/redNIke-removebg-preview.png",
        },
        {
            "id":2,
            "Marka":'Nikeamogus',
            "src":"/redNIke-removebg-preview.png",
        },
        {
            "id":3,
            "Marka":'Nik eAmogus BUt',
            "src":"/redNIke-removebg-preview.png",
        }
    ]
    
    return(
        <>
        <Cursor/>
        Lista produktow
        <div className="flex flex-row">
            {produkty.map((p) => (
                        <Karta key={p.id} id={p.id} src={p.src} name={p.Marka} />
                    ))}
        </div>
        </>
    );
}