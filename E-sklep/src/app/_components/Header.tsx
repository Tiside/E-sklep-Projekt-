import Image from "next/image";
import Link from "next/link";
import UserToggle from "@/app/_components/UserToggle";
import "@/styles/header.css"

import UserUi from "@/app/_components/UserUi";
import {useEffect, useState} from "react";


export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
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
                        <div className="like-content">
                            <Link href="/Favorites">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-8 bx-heart">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                </svg>
                            </Link>

                            <div className="like-number">
                                {/* <!-- liczba zmieniajaca sie wedlug liczby dodanych przedmiotow do likow(Jezeli nie ma zadnych przedmiotow to like number jest wylaczane (display: block;)) --> */}
                                1
                            </div>

                        </div>
                        <div className="cart-content">
                            <Link href="/Koszyk">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-8 cart">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                                </svg>
                            </Link>
                            <div className="cart-number">
                                {/* <!-- liczba zmieniajaca sie wedlug liczby dodanych przedmiotow do likow(Jezeli nie ma zadnych przedmiotow to like number jest wylaczane (display: block;)) --> */}
                                2
                            </div>
                        </div>
                        <div className="user">
                            <div className="user-pfp">
                                <Link href="/Login">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-6 bx-log-in">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/>
                                    </svg>
                                </Link>
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

            </div>
        </>
    );
}