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
            <Footer/>
        </>
    );
}