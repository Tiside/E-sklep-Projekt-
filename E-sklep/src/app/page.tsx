
// import { auth } from "@/server/auth";
// import { api } from "@/trpc/server";
// import Header from "./_components/header";
// import Footer from "./_components/footer";
// import Header2 from "./_components/header2";
// import Cursor from "./_components/Cursor";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import TextCarousel from "@/app/_components/TextCarousel";
import UserToggle from "@/app/_components/UserToggle";




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
        <Script src="https://unpkg.com/scrollreveal" />

        <div className="header">
          <div className="nav">
            <div className="logo">
              <Image src="/shoe-king-removebg-preview.png" alt="logo" width={200} height={200} />
            </div>
            <div className="center-nav">
              <ul>
                <li><a href="#">NEW RELEASES</a></li>
                <li><a href="#">MEN</a></li>
                <li><a href="#">WOMEN</a></li>
                <li><a href="#">KIDS</a></li>
                <li><a href="#">CUSTOMIZE</a></li>
                <li><a href="/Koszyk">CART</a></li>
                <li><a href="/Listaproduktow">PRODUCT LIST</a></li>
              </ul>
            </div>
            <div className="user-container">
              {/* <!-- Jezeli bedzie min jeden produkt zamienia sie na ta ikonke na dole -->
                    <!-- <i className='bx bxs-heart' ></i> --> */}
              <div className="like-content">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 bx-heart" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

                <div className="like-number">
                  {/* <!-- liczba zmieniajaca sie wedlug liczby dodanych przedmiotow do likow(Jezeli nie ma zadnych przedmiotow to like number jest wylaczane (display: block;)) --> */}
                  1
                </div>
              </div>
              <div className="user">
                <div className="user-pfp">
                  <Link href="/Login">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bx-log-in">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                  </Link>
                  {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">*/}
                  {/*  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />*/}
                  {/*</svg>*/}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bx-help-circle">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <UserToggle />
              </div>
            </div>
          </div>

          <div className="header-container">
            <div className="side-bar">
              <img src="facebook-logo-24.png" alt="facebook-logo" />
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
                  <div className="color-red" ></div>
                  <div className="color-blue" ></div>
                  <div className="color-green" ></div>
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
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 bx-play">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg></button>
                    <p>Play video</p>
                  </div>
                </div>
              </div>

            </div>
            <TextCarousel />
          </div>
        </div>





        </>
  );
}