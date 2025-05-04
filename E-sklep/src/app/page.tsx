// import { auth } from "@/server/auth";
// import { api } from "@/trpc/server";
// import Header from "./_components/header";
// import Footer from "./_components/footer";
// import Header2 from "./_components/header2";
// import Cursor from "./_components/Cursor";
'use client'
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import TextCarousel from "@/app/_components/TextCarousel";
import UserToggle from "@/app/_components/UserToggle";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";


export default async function Home() {
    function DisplayUserUi(): void {
        const userPfp = document.querySelector('.user-pfp') as HTMLElement | null;
        const login = document.querySelector('.bx-log-in') as HTMLElement | null;
        const logout = document.querySelector('.bx-help-circle') as HTMLElement | null;
        const settings = document.querySelector('.bx-cog') as HTMLElement | null;

        if (!userPfp || !login || !logout) return;

        userPfp.classList.toggle('active');

        const isVisible = login.classList.contains('show') && logout.classList.contains('show');

        if (isVisible) {
            login.classList.remove('show');
            logout.classList.remove('show');
        } else {
            login.classList.add('show');
            logout.classList.add('show');
        }
    }

    return (
        <>
            <Script src="https://unpkg.com/scrollreveal"/>

            <div className="header">
                <Header/>

                <div className="header-container">
                    <div className="side-bar">
                        <img src="facebook-logo-24.png" alt="facebook-logo"/>
                        <img src="instagram-logo-24.png" alt="instagram-logo"/>
                        <img src="twitter-logo-24.png" alt="twitter-logo"/>
                    </div>
                    <div className="about">
                        <div className="about-text">
                            <h2>JORDAN 1 RED</h2>
                            <p>RELESE DATE</p>
                            <p>2016-10-06</p>
                            <p>COLOR WAY</p>
                            <p>STARFISH-BLACK</p>
                        </div>
                        <div className="size">
                            <h5>SELECT SIZE (US)</h5>
                            <div className="sizes">
                                <div className="size-number">8</div>
                                <div className="size-number">8.5</div>
                                <div className="size-number">9</div>
                                <div className="size-number">9.5</div>
                                <div className="size-number">10</div>
                                <div className="size-number">10.5</div>
                                <div className="size-number">11</div>
                                <div className="size-number"> 11.5</div>
                                <div className="size-number">12</div>
                                <div className="size-number">12.5</div>
                            </div>
                        </div>
                        <div className="color">
                            <h5>SELECT COLOR</h5>
                            <div className="colors">
                                <div className="color-red"></div>
                                <div className="color-blue"></div>
                                <div className="color-green"></div>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <h1 className="nike-text">NIKE</h1>
                        <div className="container">
                            <Image
                                src="/redNIke-removebg-preview.png"
                                alt="description"
                                width={750}
                                height={750}
                                placeholder="empty"
                            />
                            <div className="video">
                                <div className="video-content">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="size-6 bx-play">
                                            <path fillRule="evenodd"
                                                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                    <p>Play video</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <TextCarousel/>
                </div>
            </div>
            <div className="body_items">
                <div className="item_1">
                    <img src="/fala.png" alt="Fala"/>
                </div>
                <div className="item_2">
                    <img src="/logo.png" alt="Nike-logo"/>
                </div>
                <div className="just_do_it">
                    <p>Just
                        Do
                        It
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="main">
                    <div className="left_col">
                        <div className="shoe_title">
                            <p>Nike Air Jordan</p>
                        </div>
                        <div className="line">
                            <hr/>
                        </div>
                        <div className="shoe_description">
                            <p>Nike Shoes E-commerce Web Template Shop - UpLabs, Nike introduces
                                new consumer website - oregonlive.com</p>
                        </div>
                        <div className="cart">
                            <button className="cart_btn">Add To Cart</button>
                            <p className="price">$197.99</p>
                        </div>
                        <div className="shop_box">
                            <div className="shop_item_container">
                                <div className="shoe_img_box">
                                    <img src="/2.png" alt="shoe2" className="shoe_img"/>
                                </div>
                                <div className="shoe_name_price">
                                    <h3>Nike Air Max</h3>
                                    <p>$169.99</p>
                                </div>
                                <div className="add_to_shop">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="shop_item_container">
                                <div className="shoe_img_box">
                                    <img src="/3.png" alt="shoe3" className="shoe_img"/>
                                </div>
                                <div className="shoe_name_price">
                                    <h3>Nike Air Force</h3>
                                    <p>$172.99</p>
                                </div>
                                <div className="add_to_shop">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_col">
                        <img src="/1.png" className="featured_img" alt="shoe1"/>
                        <div className="shopping_cart_btn">
                            <div className="add_to_shop">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="images">
                    <img
                        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/acc979db-e99d-488e-8791-7dcfcd7e2f37/air-jordan-1-ko-chicago-release-date.jpg"
                        alt="Left Image"/>
                    <img
                        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc5f548f-f349-43bb-b1e9-fdaf53407c82/air-jordan-1-ko-chicago-release-date.jpg"
                        alt="Right Image"/>
                </div>
                <div className="hero-text">
                    <p className="collection">Nike 24.7 Collection</p>
                    <h1>TAILORED FOR ALL-DAY COMFORT</h1>
                    <p className="subtext">All-new colours, polished looks, luxurious feels.</p>
                    <a href="#" className="shop-btn">Shop</a>
                </div>
            </div>

            <section className="featured-section">
                <h2>Featured</h2>
                <div className="featured-grid">
                    <div className="featured-left">
                        <img
                            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/acc979db-e99d-488e-8791-7dcfcd7e2f37/air-jordan-1-ko-chicago-release-date.jpg"
                            alt="Summer Ready"/>
                        <div className="text-overlay">
                            <p className="label">SUMMER READY</p>
                            <h3>Strength Takes Sweat</h3>
                            <div className="buttons">
                                <a href="#">Shop Men's</a>
                                <a href="#">Shop Women's</a>
                            </div>
                        </div>
                    </div>

                    <div className="featured-right">
                        <div className="grid-6">
                            <img
                                src="https://static.nike.com/a/images/w_960,c_limit/3f78a2ff-773e-430d-b312-c317e7607fa6/image.jpg"
                                alt="AIRMAX"/>
                            <img
                                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png"
                                alt="Shoe 1"/>
                            <img
                                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0a8281f4-b9fa-4424-82ac-f7e3f6b0c71e/WMNS+AIR+JORDAN+4+RETRO.png"
                                alt="Shoe 2"/>
                            <img
                                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7dc19c50-2dfa-4248-b0f3-ebdf05d2af82/AIR+ZOOM+SPIRIDON+CAGE+2.png"
                                alt="Model"/>
                            <div className="text-tile">
                                <p>In Your Air Max Era</p>
                                <h3>Max Out Your World</h3>
                                <div className="buttons">
                                    <a href="#">Shop Men's</a>
                                    <a href="#">Shop Women's</a>
                                </div>
                            </div>
                            <img
                                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6cca0b74-5991-45dd-9998-532ea5e11f09/AIR+MORE+UPTEMPO+LOW.png"
                                alt="Sneaker"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}