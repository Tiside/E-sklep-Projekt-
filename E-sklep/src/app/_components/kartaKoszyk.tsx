"use client";
import { useEffect } from "react";
import Image from "next/image";
import type { przedmiot } from "../types/koszyk";


export default function KartaKoszyk(props:przedmiot) {
  useEffect(() => {
    // let btn = document.getElementById(`${props.id}`) as HTMLElement | null;
    let btn = document.querySelector(`.shopBtn[data-id="${props.id}"]`)
  
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
      <div key={props.id} className="container">
        <div className="card" data-color="yellow">
          <div className="imgBx">
              <img
                  src={props.src}
                  alt="nike-air-shoe"/>
          </div>
  <div className="contentBx">
      <h2>{props.name}</h2>
      <div className="size">
          <h3>Size :</h3>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
      </div>
      <div className="color">
          <h3>Color :</h3>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <button className="shopBtn" data-id={props.id} >Delete</button>
      
  </div>
  </div>
  <div className="product-cart-info">
  <div className="info-txt">
      <p className="price">{props.price}$</p>
      <p className="description">Stylish shoes perfect</p>
  </div>
  
  <div className="info-like">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           strokeWidth={1.5} stroke="currentColor" className="size-6 like">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
      </svg>
  </div>
  </div>
      </div>
  );
}