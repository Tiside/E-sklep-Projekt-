'use client'
import "@/styles/productList.css";
import "@/styles/header.css"
import Karta from "@/app/_components/karta";
import Cursor from "@/app/_components/Cursor";
import UserToggle from "@/app/_components/UserToggle";
import Header from "@/app/_components/Header";
import {useEffect, useState} from "react";
import Footer from "@/app/_components/Footer";
import ProduktDolisty from "./produktDolisty";
import Link from "next/link";



export default function Listaproduktow() {
    useEffect(() => {
        const sortToggle = document.querySelector('.sort-toggle') as HTMLElement;
        const sortContent = document.querySelector('.sort-content') as HTMLElement;
        const sortArrow = sortToggle?.querySelector('svg');

        const toggleFilters = document.querySelector('.toggle-filters') as HTMLElement;
        const content = document.querySelector('.content') as HTMLElement;

        const lists = document.querySelectorAll('.list');

        if (sortToggle && sortContent && sortArrow) {
            sortToggle.addEventListener('click', () => {
                sortContent.classList.toggle('active');
                sortArrow.classList.toggle('rotate');
            });
        }

        lists.forEach(list => {
            list.addEventListener('click', () => {
                const options = list.nextElementSibling as HTMLElement;
                const svg = list.querySelector('svg');

                if (options && options.classList.contains('options')) {
                    if (options.style.maxHeight && options.style.maxHeight !== "0px") {
                        options.style.maxHeight = "0px";
                        svg?.classList.remove('rotate');
                    } else {
                        options.style.maxHeight = options.scrollHeight + "px";
                        svg?.classList.add('rotate');
                    }
                }
            });
        });

        if (toggleFilters && content) {
            toggleFilters.addEventListener('click', () => {
                content.classList.toggle('hide-sidebar');

                if (content.classList.contains('hide-sidebar')) {
                    toggleFilters.innerHTML = `
            Show Filters
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>`;
                } else {
                    toggleFilters.innerHTML = `
            Hide Filters
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>`;
                }
            });
        }


        return () => {
            sortToggle?.removeEventListener('click', () => {
            });
            lists.forEach(list => list.removeEventListener('click', () => {
            }));
            toggleFilters?.removeEventListener('click', () => {
            });
        };
    }, []);

    const texts = [
        "Get KING card for our shop",
        "Look for the best shoes and sneakers",
        "Members: Free shipping on orders over $50",
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const nextText = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
            setFade(false);
        }, 300);
    };

    const prevText = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
            setFade(false);
        }, 300);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            nextText();
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>

        <Header/>
        <div className="top-info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"
                 onClick={prevText}>
                <path fillRule="evenodd"
                      d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                      clipRule="evenodd"/>
            </svg>

            <div className={`text ${fade ? "fade" : ""}`}>
                {texts[currentIndex]}
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"
                 onClick={nextText}>
                <path fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"/>
            </svg>

        </div>
        <hr/>
        <div className="container">
            <div className="header">
                <h1>Men's Shoes & Sneakers</h1>
                <div className="filters-header">
                    <ul>
                        <li className="toggle-filters">
                            Hide Filters
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
                            </svg>
                        </li>
                        <li className="sort-toggle">
                            Sort by
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor" className="arrow">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </li>
                    </ul>


                    <div className="sort-content">
                        <ul>
                            <li>Featured</li>
                            <li>Newest</li>
                            <li>Price: High-Low</li>
                            <li>Price: Low-High</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="side-content">
                    <ul>
                        <li>Jordan</li>
                        <li>Lifestyle</li>
                        <li>Running</li>
                        <li>Basketball</li>
                        <li>Training & Gym</li>
                        <li>Walking</li>
                        <li>Soccer</li>
                    </ul>

                    <div className="side-lists">
                        <div className="list">
                            <p>Gender</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="size-6 arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>

                        </div>
                        <div className="options">
                            <label><input type="checkbox"/> Men</label>
                            <label><input type="checkbox"/> Women</label>
                            <label><input type="checkbox"/> Unisex</label>
                        </div>
                        <div className="list">
                            <p>Size</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="size-6 arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <div className="options">
                            <label><input type="checkbox"/> 36</label>
                            <label><input type="checkbox"/> 38</label>
                            <label><input type="checkbox"/> 40</label>
                        </div>
                        <div className="list">
                            <p>Brand</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="size-6 arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <div className="options">
                            <label><input type="checkbox"/> Nike Sport</label>
                            <label><input type="checkbox"/> Jordan</label>
                            <label><input type="checkbox"/> Nike By You</label>
                        </div>
                        <div className="list">
                            <p>Offers</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="size-6 arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <div className="options">
                            <label><input type="checkbox"/> See Price in Bag</label>
                            <label><input type="checkbox"/> Sale</label>
                        </div>
                        <div className="list">
                            <p>Color</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="size-6 arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <div className="options">
                            <label><input type="checkbox"/> Black</label>
                            <label><input type="checkbox"/> Blue</label>
                            <label><input type="checkbox"/> green</label>
                        </div>
                        <div className="list">
                            <p>Width</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="size-6 arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <div className="options">
                            <label><input type="checkbox"/> Regular</label>
                            <label><input type="checkbox"/> Wide</label>
                            <label><input type="checkbox"/> Extra Wide</label>
                        </div>
                        <div className="list">
                            <p>Height</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="size-6 arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <div className="options">
                            <label><input type="checkbox"/> Low Top</label>
                            <label><input type="checkbox"/> Mid Top</label>
                            <label><input type="checkbox"/> High Top</label>
                        </div>
                        <div className="list">
                            <p>Sports</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="size-6 arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <div className="options">
                            <label><input type="checkbox"/> Lifestyle</label>
                            <label><input type="checkbox"/> Perfomance</label>
                            <label><input type="checkbox"/> Running</label>
                        </div>
                    </div>
                </div>
                <div className="content-cards">
                    <ProduktDolisty/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
}