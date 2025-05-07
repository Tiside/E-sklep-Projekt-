'use client';
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";


export default function Logout(){
    const [isClient, setIsClient] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    if(typeof window !== "undefined" && isClient){
        if(localStorage.getItem("login")){
            localStorage.removeItem('login')
            redirect("/Login")
        }
    }
    else{
        console.log('nie dzilaa')
    }
    return(
        <>
            <h1>Logged out</h1>
            <p>Go back to the <Link href={'/Login'}>login page</Link></p>
        </>
    );
}