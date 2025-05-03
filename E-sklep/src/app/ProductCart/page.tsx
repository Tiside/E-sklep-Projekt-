'use client';
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import "@/styles/productCart.css";
import {useEffect, useState} from "react";

export default function ProductCart() {
    useEffect(() => {
        const detailsScroll = document.querySelector(".details-scroll") as HTMLElement | null;

        if (!detailsScroll) return;

        const handleWheel = (e: WheelEvent) => {
            const atTop = detailsScroll.scrollTop === 0;
            const atBottom = detailsScroll.scrollHeight - detailsScroll.scrollTop === detailsScroll.clientHeight;
            const scrollingDown = e.deltaY > 0;

            if ((scrollingDown && !atBottom) || (!scrollingDown && !atTop)) {
                e.preventDefault();
                detailsScroll.scrollBy({top: e.deltaY, behavior: "auto"});
            }
        };

        window.addEventListener("wheel", handleWheel, {passive: false});

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const viewDetailsLink = document.querySelector(".product-desc a") as HTMLAnchorElement | null;
            const hiddenPanel = document.querySelector(".product-details-hidden") as HTMLElement | null;
            const closeBtn = hiddenPanel?.querySelector(".close") as HTMLElement | null;

            const mainImage = document.querySelector(".product-main-image img") as HTMLImageElement | null;
            const productTitle = document.querySelector(".product-title") as HTMLElement | null;
            const productCategory = document.querySelector(".product-category") as HTMLElement | null;
            const productPrice = document.querySelector(".product-price") as HTMLElement | null;

            const hiddenImage = hiddenPanel?.querySelector(".hidden-image img") as HTMLImageElement | null;
            const hiddenTitle = hiddenPanel?.querySelector(".hidden-info h2") as HTMLElement | null;
            const hiddenCategory = hiddenPanel?.querySelector(".hidden-info h4:nth-of-type(1)") as HTMLElement | null;
            const hiddenPrice = hiddenPanel?.querySelector(".hidden-info h4:nth-of-type(2)") as HTMLElement | null;

            const handleClick = (e: Event) => {
                e.preventDefault();
                if (!mainImage || !hiddenImage || !productTitle || !hiddenTitle || !productCategory || !hiddenCategory || !productPrice || !hiddenPrice || !hiddenPanel) return;

                hiddenImage.src = mainImage.src;
                hiddenTitle.textContent = productTitle.textContent;
                hiddenCategory.textContent = productCategory.textContent;
                hiddenPrice.textContent = productPrice.textContent;

                hiddenPanel.style.display = "block";
                requestAnimationFrame(() => {
                    hiddenPanel.style.opacity = "1";
                    hiddenPanel.style.transform = "scale(1)";
                });
            };

            const handleClose = () => {
                if (!hiddenPanel) return;
                hiddenPanel.style.opacity = "0";
                hiddenPanel.style.transform = "scale(0.95)";
                setTimeout(() => {
                    hiddenPanel.style.display = "none";
                }, 300);
            };

            if (viewDetailsLink) viewDetailsLink.addEventListener("click", handleClick);
            if (closeBtn) closeBtn.addEventListener("click", handleClose);

            return () => {
                viewDetailsLink?.removeEventListener("click", handleClick);
                closeBtn?.removeEventListener("click", handleClose);
            };
        }, 0);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const thumbnails = Array.from(document.querySelectorAll(".thumbnail img")) as HTMLImageElement[];
        const mainImage = document.querySelector("#mainProductImage") as HTMLImageElement | null;
        const prevBtn = document.querySelector(".carausel-img-button .prev") as HTMLElement | null;
        const nextBtn = document.querySelector(".carausel-img-button .next") as HTMLElement | null;

        let currentIndex = 0;

        const updateMainImage = (index: number) => {
            if (!mainImage || !thumbnails[index]) return;

            mainImage.src = thumbnails[index].src;
            thumbnails.forEach((img) => img.classList.remove("active"));
            thumbnails[index].classList.add("active");
            currentIndex = index;
        };

        thumbnails.forEach((img, index) => {
            img.addEventListener("click", () => updateMainImage(index));
        });

        prevBtn?.addEventListener("click", () => {
            const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            updateMainImage(newIndex);
        });

        nextBtn?.addEventListener("click", () => {
            const newIndex = (currentIndex + 1) % thumbnails.length;
            updateMainImage(newIndex);
        });

        updateMainImage(currentIndex);

        return () => {
            thumbnails.forEach((img) => {
                img.replaceWith(img.cloneNode(true));
            });
            prevBtn?.replaceWith(prevBtn.cloneNode(true));
            nextBtn?.replaceWith(nextBtn.cloneNode(true));
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


    const scrollCarousel = (direction: number) => {
        const carousel = document.getElementById("carousel");
        if (carousel) {
            const scrollAmount = 270;
            carousel.scrollBy({left: scrollAmount * direction, behavior: "smooth"});
        }
    };

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
            <div className="product-container">
                <div className="product-images-content">
                    <div className="image-thumbnails">
                        <div className="thumbnail active"><img
                            src="https://static.nike.com/a/images/w_1280,q_auto,f_auto/acc979db-e99d-488e-8791-7dcfcd7e2f37/air-jordan-1-ko-chicago-release-date.jpg"
                            alt="thumb"/></div>
                        <div className="thumbnail"><img
                            src="https://static.nike.com/a/images/w_1280,q_auto,f_auto/34f9927d-cf2a-4bbb-8b37-81a30a2b4eea/air-jordan-1-ko-chicago-release-date.jpg"
                            alt="thumb"/></div>
                        <div className="thumbnail"><img
                            src="https://static.nike.com/a/images/w_320,q_auto,f_auto/15689333-39db-4107-a0f0-5bcbf6605be6/air-jordan-1-ko-chicago-release-date.jpg"
                            alt="thumb"/></div>
                        <div className="thumbnail"><img
                            src="https://static.nike.com/a/images/w_1280,q_auto,f_auto/4b312601-81e9-4ac3-9814-ecb3ef9439a6/air-jordan-1-ko-chicago-release-date.jpg"
                            alt="thumb"/></div>
                        <div className="thumbnail"><img
                            src="https://static.nike.com/a/images/w_1280,q_auto,f_auto/6c88e54f-e582-4df2-88bb-585a3ac65530/air-jordan-1-ko-chicago-release-date.jpg"
                            alt="thumb"/></div>
                        <div className="thumbnail"><img
                            src="https://static.nike.com/a/images/w_1280,q_auto,f_auto/fc5f548f-f349-43bb-b1e9-fdaf53407c82/air-jordan-1-ko-chicago-release-date.jpg"
                            alt="thumb"/></div>

                    </div>
                    <div className="product-main-image">
                        <img
                            src="https://static.nike.com/a/images/w_1280,q_auto,f_auto/acc979db-e99d-488e-8791-7dcfcd7e2f37/air-jordan-1-ko-chicago-release-date.jpg"
                            alt="" id="mainProductImage"/>
                        <div className="carausel-img-button">
                            <button className="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                                </svg>

                            </button>
                            <button className="next">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>


                <div className="product-details">
                    <div className="details-scroll">
                        <h1 className="product-title">Nike Air Jordan 1</h1>
                        <p className="product-category">Men's Shoes</p>
                        <p className="code">9/10</p>
                        <p className="product-price">$190</p>

                        <p className="color-label">Select Color</p>
                        <div className="color-swatches">
                            <div className="color-circle" style={{backgroundColor: 'black'}}></div>
                            <div className="color-circle" style={{backgroundColor: 'red'}}></div>
                            <div className="color-circle" style={{backgroundColor: 'navy'}}></div>
                            <div className="color-circle" style={{backgroundColor: 'green'}}></div>
                            <div className="color-circle" style={{backgroundColor: 'gray'}}></div>
                            <div className="color-circle" style={{backgroundColor: 'orange'}}></div>
                            <div className="color-circle" style={{backgroundColor: 'pink'}}></div>
                            <div className="color-circle" style={{backgroundColor: 'lightblue'}}></div>
                        </div>

                        <div className="sizes">
                            <p className="size-label">Select Size <span className="size-guide">Size Guide</span></p>
                            <div className="size-grid">
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
                        </div>

                        <button className="add-to-bag">Add to Bag</button>
                        <button className="favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                            </svg>
                            Favorite
                        </button>

                        <div className="shipping-info">
                            <p><strong>Shipping</strong>
                                <br/> <br/> You'll see our shipping options at checkout.
                            </p>
                        </div>

                        <div className="eco-note">
                            This product is made with at least 20% recycled content by weight
                        </div>

                        <div className="product-desc">
                            <p>
                                Inspired by the original AJ1, this mid-top edition maintains the iconic look you love
                                while
                                choice
                                colors and crisp leather give it a distinct identity.
                            </p>
                            <ul>
                                <li>Shoes: Red/Iron White/Black/Black</li>
                                <br/>
                                <li>Style: FJ0709-004</li>
                            </ul>
                            <a href="#">View Product Details</a>
                        </div>
                    </div>

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

            <div className="product-details-hidden">
                <div className="hidden-header">
                    <div className="hidden-image">
                        <img
                            src="https://aplug.pl/cdn/shop/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1698685002&width=600"
                            alt="Selected Product"/>
                    </div>
                    <div className="hidden-info">
                        <h4>Men's Shoes</h4>
                        <h2>Nike Air Jordan 1</h2>
                        <h4>190.00$</h4>
                    </div>
                </div>
                <div className="hidden-content">
                    <p>Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while
                        choice colors
                        and crisp leather give it a distinct identity
                    </p>
                    <h3>Benefits</h3>
                    <ul>
                        <li>Leather, synthetic leather and textile upper for a supportive feel.</li>
                        <li>Foam midsole and Nike Air cushioning provide lightweight comfort.</li>
                        <li>Rubber outsole with pivot circle gives you durable traction.</li>
                    </ul>
                    <h3>Product Details</h3>
                    <ul>
                        <li>Shown: White/Rust Pink/Black</li>
                        <li>Style: DQ8426-100</li>
                    </ul>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor"
                     className="size-6 close">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
            </div>
            <Footer/>
        </>
    );
}