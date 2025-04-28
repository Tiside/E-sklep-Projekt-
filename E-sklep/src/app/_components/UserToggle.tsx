'use client';

import { useEffect } from "react";

export default function UserToggle() {
    useEffect(() => {
        const userPfp = document.querySelector('.user-pfp');
        const login = document.querySelector('.bx-log-in');
        const logout = document.querySelector('.bx-help-circle');
        const cart = document.querySelector('.cart');

        if (!userPfp || !login || !logout) return;

        const toggleIcons = () => {
            userPfp.classList.toggle('active');

            const isVisible = login.classList.contains('show') && logout.classList.contains('show') && cart.classList.contains('show');

            if (isVisible) {
                login.classList.remove('show');
                logout.classList.remove('show');
                cart.classList.remove('show');
            } else {
                login.classList.add('show');
                logout.classList.add('show');
                cart.classList.add('show');
            }
        };

        userPfp.addEventListener('click', toggleIcons);

        return () => {
            userPfp.removeEventListener('click', toggleIcons);
        };
    }, []);

    return null;
}
