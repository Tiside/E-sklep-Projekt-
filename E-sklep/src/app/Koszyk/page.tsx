'use client'
import "@/styles/cart.css";
import {any, number} from "zod";
import KartaDoKoszyka from "./kartaDokoszyka";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import {useEffect} from "react";

export default function Kontakt() {
    const scrollCarousel = (direction: number) => {
        const carousel = document.getElementById('carousel');
        if (carousel) {
            const scrollAmount = 270;
            carousel.scrollBy({left: scrollAmount * direction, behavior: 'smooth'});
        }
    };

    useEffect(() => {
        const promoToggle = document.querySelector(".sumary-promo") as HTMLElement | null;
        const promoField = document.querySelector(".promo-field") as HTMLElement | null;

        promoToggle?.addEventListener("click", () => {
            promoToggle.classList.toggle("open");
            if (promoField) {
                promoField.style.display = promoField.style.display === "flex" ? "none" : "flex";
            }
        });

        const changeSizeBtns = document.querySelectorAll(".to-change-size") as NodeListOf<HTMLSpanElement>;
        const changeColorBtns = document.querySelectorAll(".to-change-color") as NodeListOf<HTMLSpanElement>;

        const changeSizePopup = document.querySelector(".change-size") as HTMLElement | null;
        const changeColorPopup = document.querySelector(".change-color") as HTMLElement | null;

        const closeBtns = document.querySelectorAll(".change-size .close, .change-color .close") as NodeListOf<SVGElement>;

        const sizeImg = document.querySelector(".change-size .change-image img") as HTMLImageElement | null;
        const colorImg = document.querySelector(".change-color .change-image img") as HTMLImageElement | null;

        function getProductImageFromClickedElement(clickedEl: HTMLElement): string | null {
            const card = clickedEl.closest(".cart-item") || clickedEl.closest(".like-item");
            if (!card) return null;
            const img = card.querySelector("img") as HTMLImageElement | null;
            return img ? img.src : null;
        }

        changeSizeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const imgSrc = getProductImageFromClickedElement(btn);
                if (imgSrc && sizeImg) sizeImg.src = imgSrc;
                if (changeSizePopup) changeSizePopup.style.display = "flex";
            });
        });

        changeColorBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const imgSrc = getProductImageFromClickedElement(btn);
                if (imgSrc && colorImg) colorImg.src = imgSrc;
                if (changeColorPopup) changeColorPopup.style.display = "flex";
            });
        });

        closeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                if (changeSizePopup) changeSizePopup.style.display = "none";
                if (changeColorPopup) changeColorPopup.style.display = "none";
            });
        });

        return () => {
            promoToggle?.removeEventListener("click", () => {
            });
            changeSizeBtns.forEach(btn => btn.removeEventListener("click", () => {
            }));
            changeColorBtns.forEach(btn => btn.removeEventListener("click", () => {
            }));
            closeBtns.forEach(btn => btn.removeEventListener("click", () => {
            }));
        };
    }, []);
    return (
        <>
            <Header/>
            <div className="cart-container">
                <div className="cart-content">
                    <div className="cart-main">
                        <div className="cart-items">
                            <h2>Cart</h2>
                            <div className="cart-item-main">
                                <div className="cart-item">
                                    <div className="image-item">
                                        <img
                                            src="https://aplug.pl/cdn/shop/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1698685002&width=600"
                                            alt=""/>
                                    </div>
                                    <div className="info-item">
                                        <h3>Nike Air Jordan 1</h3>
                                        <p>Men's Shoes</p>
                                        <p>Color: <span className="to-change-color">Red/Black/White</span></p>
                                        <p>Size: <span className="to-change-size">42 / 30</span></p>
                                    </div>
                                    <div className="price">
                                        <p>199.00$</p>
                                    </div>
                                </div>
                                <div className="item-count">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                    </svg>
                                    <p>1</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                </div>
                            </div>
                            <hr/>
                            <div className="cart-item-main">
                                <div className="cart-item">
                                    <div className="image-item">
                                        <img
                                            src="https://aplug.pl/cdn/shop/files/nike-air-max-plus-tn-marseille-1.png?v=1713750782"
                                            alt=""/>
                                    </div>
                                    <div className="info-item">
                                        <h3>Nike Vapor MAX</h3>
                                        <p>Men's Shoes</p>
                                        <p>Color: <span className="to-change-color">Blue/White</span></p>
                                        <p>Size: <span className="to-change-size">42 / 30</span></p>
                                    </div>
                                    <div className="price">
                                        <p>199.00$</p>
                                    </div>
                                </div>
                                <div className="item-count">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                    </svg>
                                    <p>1</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="cart-summary">
                            <h2>Summary</h2>
                            <div className="sumary-promo">
                                <p>Do you have a Promo Code?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="size-6 arrow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className="promo-field">
                                <input type="text" placeholder="Enter promo code"/>
                                <button className="promo-use">Use</button>
                            </div>
                            <div className="sub-total">
                                <p>Subtotal</p>
                                <p>400$</p>
                            </div>
                            <div className="shipping">
                                <p>Estimated Shipping & Handing</p>
                                <p>Free</p>
                            </div>
                            <div className="tax">
                                <p>Estimated Tax</p>
                                <p>-</p>
                            </div>
                            <hr/>
                            <div className="total">
                                <p>Total</p>
                                <p>400$</p>
                            </div>
                            <hr/>
                            <p className="free-shipping-text">You've earned <strong>Free Shipping!</strong></p>
                            <div className="shipping-progress">
                                <div className="shipping-bar">
                                    <div className="filled"></div>
                                </div>
                                <p className="threshold">$50</p>
                            </div>


                            <button className="checkout-btn">Checkout</button>
                            <button className="paypal-btn">
                                <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal"/>
                            </button>

                            <p className="checkout-note">
                                By selecting one of the above payment options,<br/>
                                you confirm that you have read, understand, and agree to<br/>
                                Nike’s Terms of Use, Terms of Sale and Return Policy, and<br/>
                                acknowledge Nike’s Privacy Policy.
                            </p>
                        </div>
                    </div>
                    <div className="cart-like">
                        <h2>Favorites</h2>
                        <div className="like-item-main">
                            <div className="like-item">
                                <div className="image-item">
                                    <img
                                        src="https://aplug.pl/cdn/shop/files/nike-air-max-plus-tn-marseille-1.png?v=1713750782"
                                        alt=""/>
                                </div>
                                <div className="info-item">
                                    <h3>Nike Vapor MAX</h3>
                                    <p>Men's Shoes</p>
                                    <p>Color: <span className="to-change-color">Select</span></p>
                                    <p>Size: <span className="to-change-size">Select</span></p>
                                    <button className="add-cart-item">Add to Cart</button>
                                </div>
                                <div className="price">
                                    <p>199.00$</p>
                                </div>
                            </div>
                            <div className="item-count">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                </svg>
                                <p>1</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="all-likes">View all Favotites</p>
                </div>
            </div>
            <div className="carousel-container">
                <div className="carousel-header">
                    <h2>You Might Also Like</h2>
                    <div className="nav-buttons">
                        <button className="carousel-btn prev" onClick={() => scrollCarousel(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"/>
                            </svg>
                        </button>

                        <button className="carousel-btn next" onClick={() => scrollCarousel(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="carousel" id="carousel">
                    <div className="carousel-item">
                        <img
                            src="https://drop-up.pl/cdn/shop/files/drop-up.pl-Jordan-1-Mid-SE-Ice-Blue-_2023_-1.png?v=1717151657"
                            alt="Jordan"/>
                        <p><strong>Jordan Air 1</strong><br/><span>Men's Shoes</span><br/>$100.00</p>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://drop-up.pl/cdn/shop/files/drop-up.pl-Jordan-1-Mid-SE-Ice-Blue-_2023_-1.png?v=1717151657"
                            alt="Nike Solo"/>
                        <p><strong>Nike Air Jordan 1</strong><br/><span>Men's Shoes</span><br/>$145.00</p>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://static.nike.com/a/images/w_1280,q_auto,f_auto/55b488b9-7ffd-47a6-8192-049ec2fd702f/air-jordan-iv-black-cat-release-date.jpg"
                            alt="Nike Tech"/>
                        <p><strong>Nike Air Jordan 4 Black Cat</strong><br/><span>Men's Shoes</span><br/>$130.00</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://owcastore.pl/wp-content/uploads/2023/06/dada3qw4q2-1.png" alt="Nike Tech"/>
                        <p><strong>Nike Air Jordan 1 High</strong><br/><span>Men's Shoes</span><br/>$130.00</p>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://drop-up.pl/cdn/shop/files/drop-up.pl-Air-Jordan-4-Retro-_Thunder_-_2023_-1.png?v=1717147908"
                            alt="Nike Tech"/>
                        <p><strong>Nike Air Jordan 4 Thunder</strong><br/><span>Men's Shoes</span><br/>$130.00</p>
                    </div>
                </div>
            </div>

            <div className="change-size">
                <div className="change-image">
                    <img
                        src="https://aplug.pl/cdn/shop/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1698685002&width=600"
                        alt=""/>
                </div>
                <div className="change-info">
                    <h4>Men's Shoes</h4>
                    <h2>Nike Air Jordan 1</h2>
                    <h4>190.00$</h4>
                    <h4>Select Size</h4>
                    <div className="size-to-change">
                        <div className="size">36 / 30</div>
                        <div className="size">36.5 / 30.5</div>
                        <div className="size">37 / 31</div>
                        <div className="size">37.5 / 31.5</div>
                        <div className="size">38 / 32</div>
                        <div className="size">38.5 / 32.5</div>
                        <div className="size">39 / 33</div>
                        <div className="size">39.5 / 33.5</div>
                        <div className="size">40 / 34</div>
                        <div className="size">40.5 / 34.5</div>
                        <div className="size">41 / 35</div>
                        <div className="size">41.5 / 35.5</div>
                        <div className="size">42 / 36</div>
                        <div className="size">42.5 / 36.5</div>
                        <div className="size">43 / 37</div>
                        <div className="size">43.5 / 37.5</div>
                        <div className="size">44 / 38</div>
                        <div className="size">44.5 / 38.5</div>
                        <div className="size">45 / 39</div>
                        <div className="size">45.5 / 39.5</div>
                        <div className="size">46 / 40</div>
                    </div>
                    <button className="change-btn">Update Size</button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-8 close">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
            </div>

            <div className="change-color">
                <div className="change-image">
                    <img
                        src="https://aplug.pl/cdn/shop/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1698685002&width=600"
                        alt="Selected Product"/>
                </div>
                <div className="change-info">
                    <h4>Men's Shoes</h4>
                    <h2>Nike Air Jordan 1</h2>
                    <h4>190.00$</h4>
                    <h4>Select Size</h4>
                    <div className="color-to-change">
                        <div className="color">Blue</div>
                        <div className="color">Red</div>
                        <div className="color">Black</div>
                        <div className="color">Green</div>
                        <div className="color">Purple</div>
                        <div className="color">Yellow</div>
                        <div className="color">Orange</div>
                        <div className="color">Light Blue</div>
                        <div className="color">Gray</div>
                        <div className="color">White</div>
                        <div className="color">Pink</div>
                    </div>
                    <button className="change-btn">Update Color</button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-8 close">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
            </div>
            <Footer/>
        </>
    )
}