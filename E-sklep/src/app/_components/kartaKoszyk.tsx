"use client";
import "@/styles/globals.css";
import { useEffect } from "react";
import Image from "next/image";
import type { przedmiot } from "../types/koszyk";


export default function KartaKoszyk(props:przedmiot) {
  useEffect(() => {
    // let btn = document.getElementById(`${props.id}`) as HTMLElement | null;
    let btn = document.querySelector(`.btnDelete[data-id="${props.id}"]`)
  
    function usunZKoszyka() {
      if (!window.localStorage.koszyk) {
        localStorage.setItem('koszyk', '[]');
      }
  
      let koszyk = JSON.parse(window.localStorage.getItem('koszyk')!);
  
      // Filtrowanie elementów – usuwamy ten, który ma takie samo id jak props.id
      koszyk = koszyk.filter((item: any) => item.id !== props.id);
  
      window.localStorage.setItem('koszyk', JSON.stringify(koszyk));
  
      alert("Usunięto z koszyka");
      window.location.reload();
  
      btn?.removeEventListener('click', usunZKoszyka);
    }
  
    btn?.addEventListener('click', usunZKoszyka);
  
    // Czyszczenie po odmontowaniu komponentu
    return () => {
      btn?.removeEventListener('click', usunZKoszyka);
    };
  }, [props.id]);
    
  return (
    <div key={props.id} className="like-item-main">
        <div className="like-item">
            <div className="image-item">
                <img
                    src={props.src}
                    alt=""/>
            </div>
            <div className="info-item">
                <h3>{props.name}</h3>
                <p>Men's Shoes</p>
                <p>Color: <span className="to-change-color">Select</span></p>
                <p>Size: <span className="to-change-size">Select</span></p>
            </div>
            <div className="price">
                <p>{props.price}$</p>
            </div>
        </div>
        <div className="item-count">
          <div className="btnDelete" data-id={props.id}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor" className="size-6" >
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
            </svg>
          </div>
            <p>1</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
        </div>
    </div>
  );
}