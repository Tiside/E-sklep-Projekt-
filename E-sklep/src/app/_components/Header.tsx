'use client'
import Image from "next/image";
import Link from "next/link";
import UserToggle from "@/app/_components/UserToggle";
import "@/styles/header.css"

import {useEffect, useState} from "react";


export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [koszykCount, setKoszykCount] = useState(0);

    useEffect(() => {
        const login = localStorage.getItem('login')
        setIsLoggedIn(!!login)
    }, [])

    useEffect(() => {
        const koszyk = localStorage.getItem('koszyk')
        setKoszykCount(koszyk ? JSON.parse(koszyk).length : 0)
    }, [koszykCount])

    useEffect(() => {
        const configs = [
            {
                box: document.querySelector(".item-cart-add") as HTMLElement | null,
                closeBtn: document.querySelector(".close-cart") as HTMLElement | null
            },
            {
                box: document.querySelector(".item-like-add") as HTMLElement | null,
                closeBtn: document.querySelector(".close-like") as HTMLElement | null
            }
        ];

        const timeouts: NodeJS.Timeout[] = [];

        configs.forEach(({ box, closeBtn }) => {
            if (!box || !closeBtn) return;

            const hide = () => {
                box.style.display = "none";
            };

            box.style.display = "block";
            const timeout = setTimeout(hide, 5000);
            timeouts.push(timeout);

            closeBtn.addEventListener("click", hide);

            return () => {
                closeBtn.removeEventListener("click", hide);
            };
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <>
            <div className="nav">
                {searchOpen && (
                    <div className="search-overlay">
                        <div className="search-bar-expanded">
                            <input type="text" placeholder="Search for products..."/>
                            <svg
                                onClick={() => setSearchOpen(false)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 cursor-pointer"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>
                    </div>
                )}
                <div className="nav-content">
                    <div className="logo">
                        <a href="/"><Image src="/shoe-king-removebg-preview.png" alt="logo" width={200}
                                           height={200}/></a>
                    </div>
                    <div className="center-nav">
                        <ul>
                            <li><a href="#">NEW RELEASES</a></li>
                            <li><a href="#">MEN</a></li>
                            <li><a href="#">WOMEN</a></li>
                            <li><a href="#">KIDS</a></li>
                            <li><a href="#">CUSTOMIZE</a></li>
                            <li><a href="/Listaproduktow">PRODUCT LIST</a></li>
                        </ul>
                    </div>
                    <div className="user-container">
                        <svg
                            onClick={() => setSearchOpen(true)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 search"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                        </svg>
                        <div className="like-content z-10">
                            <Link href="/Favorites">
                                <div    >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-8 bx-heart">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                    </svg>
                                </div>
                                <div className="like-number">
                                    {/* <!-- liczba zmieniajaca sie wedlug liczby dodanych przedmiotow do likow(Jezeli nie ma zadnych przedmiotow to like number jest wylaczane (display: block;)) --> */}
                                    1
                                </div>
                            </Link>
                        </div>
                        <div className="cart-content size-8 static z-10">
                            <Link href="/Koszyk">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-8 cart" >
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                                    </svg>

                                </div>
                                <div className="cart-number">
                                    {koszykCount}
                                </div>
                            </Link>
                        </div>
                        <div className="user">
                            <div className="user-pfp">
                                {isLoggedIn ? (
                                    <a href="/Logout">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-6 bx-log-in">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/>
                                        </svg>
                                    </a>
                                ):(
                                    <a href="/Login">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-6 bx-log-in">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/>
                                        </svg>
                                    </a>
                                )}
                                
                                {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">*/}
                                {/*  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />*/}
                                {/*</svg>*/}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6 bx-help-circle">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6 orders">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"/>
                                </svg>
                            </div>
                            <UserToggle/>
                        </div>
                    </div>

                </div>
                {/*  <div className="item-cart-add">
                    <div className="item-cart-container">
                        <div className="item-cart-check">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>Added to Cart</p>
                        </div>
                        <div className="item-cart-content">
                            <img src="https://aplug.pl/cdn/shop/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1698685002&width=600" alt=""/>
                            <div className="item-cart-content-info">
                                <h3>Shoes Name</h3>
                                <p>Men's shoes</p>
                                <p>Size 42</p>
                                <p>499 $</p>
                            </div>
                        </div>
                        <Link href="/Koszyk">
                            <button className="btn-view-cart">View Cart(1)</button>
                        </Link>
                        <button className="btn-checkout-cart">Checkout</button>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth="1.5" stroke="currentColor"
                         className="size-8 close-cart">
                        <circle className="progress-ring" cx="12" cy="12" r="10" stroke="gray" strokeWidth="2" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div className="item-like-add">
                    <div className="item-like-container">
                        <div className="item-like-check">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>Added to Favorites</p>
                        </div>
                        <div className="item-like-content">
                            <img src="https://aplug.pl/cdn/shop/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1698685002&width=600" alt=""/>
                            <div className="item-cart-content-info">
                                <h3>Shoes Name</h3>
                                <p>Men's shoes</p>
                                <p>Size 42</p>
                                <p>499 $</p>
                            </div>
                        </div>
                        <Link href="/Favorites">
                            <button className="btn-view-like">View Favorites(1)</button>
                        </Link>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth="1.5" stroke="currentColor" className="size-8 close-like">
                        <circle className="progress-ring" cx="12" cy="12" r="10" stroke="gray" strokeWidth="2" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div> */}
            </div>
        </>
    );
}