'use client';
import { useEffect, useState } from 'react';
import Karta from "@/app/_components/karta";

type Produkt = {
    id: number;
    src: string;
    marka: string;
    ilosc: number;
    cena: number;
};

export default function ProduktDolisty() {
    const [produkty, setProdukty] = useState<Produkt[]>([]);

    useEffect(() => {
        const fetchProdukty = async () => {
            const res = await fetch('/api/produkty');
            const data = await res.json();
            setProdukty(data);
        };
        fetchProdukty();
    }, []);

    return (
        <div className="content-cards">
            {produkty.map((p) => (
                <Karta
                    key={p.id}
                    id={p.id}
                    src={p.src}
                    name={p.marka}
                    count={p.ilosc}
                    price={p.cena}
                />
            ))}
        </div>
    );
}