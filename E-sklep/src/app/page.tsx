
// import { auth } from "@/server/auth";
// import { api } from "@/trpc/server";
// import Header from "./_components/header";
// import Footer from "./_components/footer";
// import Header2 from "./_components/header2";
// import Cursor from "./_components/Cursor";
import Image from "next/image";
import Script from "next/script";


export default async function Home() {
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
                <li>NEW RELEASES</li>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>CUSTOMIZE</li>
                <a href="/Koszyk" className="z-50">Koszyk</a>
                <a href="/Listaproduktow" className="z-50">Listaproduktow</a>
              </ul>
            </div>
            <div className="user-container">
              {/* <!-- Jezeli bedzie min jeden produkt zamienia sie na ta ikonke na dole -->
                    <!-- <i className='bx bxs-heart' ></i> --> */}
              <div className="like-content">
                <i className='bx bx-heart'></i>
                <div className="like-number">
                  {/* <!-- liczba zmieniajaca sie wedlug liczby dodanych przedmiotow do likow(Jezeli nie ma zadnych przedmiotow to like number jest wylaczane (display: block;)) --> */}
                  1
                </div>
              </div>
              <div className="user">
                <div className="user-pfp">
                  <a href="login.html"><i className='bx bx-log-in'></i></a>
                  <i className='bx bx-help-circle'></i>
                </div>
              </div>
            </div>
          </div>

          <div className="header-container">
            <div className="side-bar">
              <i className='bx bxl-facebook'></i>
              <i className='bx bxl-instagram' ></i>
              <i className='bx bxl-twitter' ></i>
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
                <Image src="/redNIke-removebg-preview.png" alt="" width={200} height={200}/>
                <div className="video">
                  <div className="video-content">
                    <button><i className='bx bx-play'></i></button>
                    <p>play video</p>
                  </div>
                </div>
              </div>

            </div>


            <div className="description">
              <div className="description-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos magni id eaque minima, odit eligendi odio enim qui excepturi facilis molestiae?
                  Atque blanditiis quisquam qui inventore necessitatibus autem neque impedit.
                </p>

                <div className="buttons">
                  <button><i className='bx bx-arrow-back'></i></button>
                  <button><i className='bx bx-arrow-back bx-rotate-180'></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </>
  );
}