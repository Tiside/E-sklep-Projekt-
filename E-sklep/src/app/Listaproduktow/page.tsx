'use client'
import "@/styles/productList.css";
import "@/styles/header.css"
import Karta from "@/app/_components/karta";
import Cursor from "@/app/_components/Cursor";
import UserToggle from "@/app/_components/UserToggle";
import Header from "@/app/_components/Header";
import {useEffect, useState} from "react";
import Footer from "@/app/_components/Footer";


export default function Listaproduktow() {
    const produkty = [
        {
            "id": 1,
            "Marka": 'Nike',
            "src": "/redNIke-removebg-preview.png",
        },
        {
            "id": 2,
            "Marka": 'Nikeamogus',
            "src": "/redNIke-removebg-preview.png",
        },
        {
            "id": 3,
            "Marka": 'Nik eAmogus BUt',
            "src": "/redNIke-removebg-preview.png",
        }
    ]
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>`;
                } else {
                    toggleFilters.innerHTML = `
            Hide Filters
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>`;
                }
            });
        }

        // Очистка событий когда компонент демонтируется (best practice в React)
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
        }, 300); // Fade duration
    };

    const prevText = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
            setFade(false);
        }, 300);
    };

    // 🚀 Автоматическая смена текста каждые 5 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            nextText();
        }, 5000); // 5000ms = 5s

        return () => clearInterval(interval); // Чистим таймер при размонтировании
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
                                     stroke-width="1.5"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
                                </svg>
                            </li>
                            <li className="sort-toggle">
                                Sort by
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="arrow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
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
                        <div className="container-card">
                            <div className="card" data-color="red">
                                <div className="imgBx">
                                    <img
                                        src="https://aplug.pl/cdn/shop/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1698685002&width=600"
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
                        <div className="container-card">
                            <div className="card" data-color="green-lime">

                                <div className="imgBx">
                                    <img src="https://assets.codepen.io/4164355/shoes.png" alt="nike-air-shoe"/>
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
                        <div className="container-card">
                            <div className="card" data-color="light-blue">

                                <div className="imgBx">
                                    <img
                                        src="https://aplug.pl/cdn/shop/files/nike-air-max-plus-tn-marseille-1.png?v=1713750782"
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
                        <div className="container-card">
                            <div className="card" data-color="white">

                                <div className="imgBx">
                                    <img
                                        src="https://static.nike.com/a/images/t_default/57558712-5ebe-4abb-9984-879f9e896b4c/W+AIR+FORCE+1+%2707+FLYEASE.png"
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
                        <div className="container-card">
                            <div className="card" data-color="skyblue">

                                <div className="imgBx">
                                    <img
                                        src="https://drop-up.pl/cdn/shop/files/drop-up.pl-Jordan-1-Mid-SE-Ice-Blue-_2023_-1.png?v=1717151657"
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
                        <div className="container-card">
                            <div className="card" data-color="gray">

                                <div className="imgBx">
                                    <img src="https://owcastore.pl/wp-content/uploads/2023/06/dada3qw4q2-1.png"
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
                        <div className="container-card">
                            <div className="card" data-color="black">

                                <div className="imgBx">
                                    <img
                                        src="https://static.nike.com/a/images/w_1280,q_auto,f_auto/55b488b9-7ffd-47a6-8192-049ec2fd702f/air-jordan-iv-black-cat-release-date.jpg"
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

                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}