"use client";
import {useEffect} from "react";
import Image from "next/image";
import type {przedmiot} from "../types/koszyk";


export default function Karta(props: przedmiot) {
    useEffect(() => {
        let btn = document.getElementById(`${props.id}`) as HTMLElement | null;
        btn?.addEventListener('click', function sprawdzenie() {
                if (!window.localStorage.koszyk) {
                    localStorage.setItem('koszyk', '[]')
                }
                let koszyk = JSON.parse(window.localStorage.getItem('koszyk')!)

                koszyk.push({
                    id: props.id,
                    name: props.name,
                    src: props.src,
                    count: props.count
                })
                window.localStorage.setItem('koszyk', JSON.stringify(koszyk))

                btn.removeEventListener('click', sprawdzenie)
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
        // <div key={props.id} className="container">
        //   <div className="card">
        //     <div className="imgBx">
        //       <Image
        //         src={props.src}
        //         alt={props.name}
        //         width={500}
        //         height={500}
        //       />
        //     </div>
        //     <div className="contentBx">
        //       <h2>{props.name}</h2>
        //       <div className="size">
        //         <h3>Rozmiar :</h3>
        //         <span>7</span>
        //         <span>8</span>
        //         <span>9</span>
        //         <span>10</span>
        //       </div>
        //       <div className="color">
        //         <h3>Kolor :</h3>
        //         <span className=" colorChange" id="yellowButton">.</span>
        //         <span className=" colorChange" id="blueButton">.</span>
        //         <span className=" colorChange" id="whiteButton">.</span>
        //       </div>
        //       <button className="shopBtn" id={`${props.id}`}>Kup teraz</button>
        //     </div>
        //   </div>
        // </div>
        <div className="container-card">
            <div className="card" data-color="red">
                <div className="imgBx">
                    <Image
                        src="https://aplug.pl/cdn/shop/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1698685002&width=600"
                        alt="nike-air-shoe"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="contentBx">
                    <h2>Nike Shoes</h2>
                    <div className="size">
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div className="color">
                        <h3>Color:</h3>
                    </div>
                    <div className="color">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <button className="shopBtn">Buy Now</button>
                    <button className="shopBtn">Add To Cart</button>
                </div>
            </div>
            <div className="product-cart-info">
                <div className="info-txt">
                    <p className="price">399$</p>
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