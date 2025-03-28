"use client";
import { useEffect } from "react";
import Image from "next/image";
import type { przedmiot } from "../types/koszyk";


export default function Karta(props:przedmiot) {
  useEffect(() => {
    let btn = document.getElementById(`${props.id}`) as HTMLElement | null;
      btn?.addEventListener('click',function sprawdzenie() {
        if(!window.localStorage.koszyk){
          localStorage.setItem('koszyk', '[]')
        }
        let koszyk = JSON.parse(window.localStorage.getItem('koszyk')!)

        koszyk.push({
          id:props.id,
          name:props.name,
          src:props.src,
          count: props.count
        })
        window.localStorage.setItem('koszyk',JSON.stringify(koszyk))

        btn.removeEventListener('click',sprawdzenie)
      }
    )


    // te koloki jakos wymysle
    // let colorChange = document.querySelectorAll('.colorChange');

    // colorChange.forEach((c)=>{
    //   c.addEventListener('click',()=>{
        
    //   })
    // })
    
  })
  return (
    <div key={props.id} className="container">
      <div className="card">
        <div className="imgBx">
          <Image
            src={props.src}
            alt={props.name}
            width={500}
            height={500}
          />
        </div>
        <div className="contentBx">
          <h2>{props.name}</h2>
          <div className="size">
            <h3>Rozmiar :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Kolor :</h3>
            <span className=" colorChange" id="yellowButton">.</span>
            <span className=" colorChange" id="blueButton">.</span>
            <span className=" colorChange" id="whiteButton">.</span>
          </div>
          <button className="shopBtn" id={`${props.id}`}>Kup teraz</button>
        </div>
      </div>
    </div>
  );
}