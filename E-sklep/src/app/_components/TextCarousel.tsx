'use client';
import {useEffect, useState} from "react";
import "../../styles/globals.css";


const texts = [
    "Step into legacy. These iconic Jordans redefine street style with timeless energy and unmatched comfort.",
    "Push boundaries. Designed for those who lead, not follow. Elevate every outfit with bold confidence.",
    "Crafted for champions. Inspired by greatness, these sneakers are more than style — they’re history in motion."
];

export default function TextCarousel() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
            setFade(true);
        }, 300); // match duration of fade-out
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((prev) => (prev === 0 ? texts.length - 1 : prev - 1));
            setFade(true);
        }, 300);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000); // auto-slide every 5s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="description">
            <div className="description-content">
                <p className={fade ? "fade-in" : "fade-out"}>
                    {texts[index]}
                </p>

                <div className="buttons">
                    <button onClick={handlePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6"
                             viewBox="0 0 24 24">
                            <path
                                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"/>
                        </svg>
                    </button>
                    <button onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6"
                             viewBox="0 0 24 24">
                            <path
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
