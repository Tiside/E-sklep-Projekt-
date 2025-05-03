'use client'
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import "@/styles/ulubione.css"
import Link from "next/link";

export default function Favorites() {
    return (
        <>
            <Header/>
            <div className="favorites-content">
                <Link href="/ProductCart">
                    <div className="container-card">
                        <div className="card" data-color="yellow">
                            <div className="imgBx">
                                <img
                                    src="https://drop-up.pl/cdn/shop/files/drop-up.pl-Air-Jordan-4-Retro-_Thunder_-_2023_-1.png?v=1717147908"
                                    alt="nike-air-shoe"/>
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
                                    <h3>Color :</h3>
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
                </Link>
            </div>


            <Footer/>
        </>
    );
}