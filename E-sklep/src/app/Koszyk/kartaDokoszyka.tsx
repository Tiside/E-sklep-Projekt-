'use client';

import {useEffect, useState} from "react";
import type {przedmiot} from "@/app/types/koszyk";
import KartaKoszyk from "../_components/kartaKoszyk";

export default function KartaDoKoszyka() {
    const [koszyk, setKoszyk] = useState<przedmiot[]>([]); // Initialize as an empty array

    useEffect(() => {
        if (typeof window !== "undefined") { // Ensure it's running in the browser
            const storedKoszyk = localStorage.getItem('koszyk');
            if (storedKoszyk) {
                try {
                    setKoszyk(JSON.parse(storedKoszyk)); // Parse and update state
                } catch (error) {
                    console.error("Error parsing localStorage:", error);
                    setKoszyk([]); // Reset if there's an error
                }
            }
        }
    }, []); // Runs only once when the component mounts

    return (
        <div className="cart-like">
            {koszyk.map((p: przedmiot, index: number) => (
                <KartaKoszyk key={index} id={p.id} name={p.name} src={p.src} price={p.price} count={p.count}/>
            ))}
        </div>
    );
}
   