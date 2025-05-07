
'use client'
import "../../styles/login.css";
import {api} from "@/trpc/react";

export default function Page() {
    const login = api.auth.login.useMutation();
    
    async function handleLogin(formData: FormData) {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
    
        const response = await login.mutateAsync({username, password});
    
        // Tutaj możesz np. przekierować użytkownika:
        if (response.success) {
            console.log("Zalogowano:", response);
            if(!localStorage.getItem("login")){
                localStorage.setItem("login",response.userId)
            }
            window.location.href = '/';
        }
        console.log('Błąd')
    }
    
    const register = api.auth.register.useMutation();
    
    
    async function handleRegister(formData: FormData) {
        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        try {
            await register.mutateAsync({username, email, password});
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="login-communications">
                {/*Zmieniania klasa z succes na error jezeli jest error */}
                <div className="communications-content success">
                    <h3 className="title">Success</h3>
                    <p className="sub-title">Login successful</p>
                    {/*Udalo sie*/}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6 success-icon">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    {/*Nie udalo sie*/}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 error-icon">*/}
                    {/*   <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />*/}
                    {/* </svg> */}
                </div>
            </div>
            <input type="checkbox" id="auth-toggle" hidden />
            <div className="login-reg-container">
                <div className="container">
                    <div className="form-box login">
                        <form action={handleLogin}>
                            <h1>Login</h1>
                            <div className="input-box">
                                <input type="text" name="username" placeholder="Username" required/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-6 bxs-user">
                                    <path fillRule="evenodd"
                                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>

                            <div className="input-box">
                                <input type="password" name="password" placeholder="Password" required/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-6 bxs-lock-alt">
                                    <path fillRule="evenodd"
                                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>

                            <div className="forgot-link">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn">Login</button>
                            <p>or login with social platforms</p>
                            <div className="social-icons">
                                <a href="#"><img src="/google-logo-24.png" alt=""/></a>
                                <a href="#"><img src="github-logo-24.png" alt=""/></a>
                            </div>
                        </form>
                    </div>

                    <div className="form-box register">
                        <form action={handleRegister}>
                            <h1>Registration</h1>
                            <div className="input-box">
                                <input type="text" name="username" placeholder="Username" required/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-6">
                                    <path fillRule="evenodd"
                                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>

                            <div className="input-box">
                                <input type="email" name="email" placeholder="Email" required/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-6">
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
                                </svg>
                            </div>

                            <div className="input-box">
                                <input type="password" name="password" placeholder="Password" required/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-6">
                                    <path fillRule="evenodd"
                                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>

                            <button type="submit" className="btn">Register</button>
                            <p>or register with social platforms</p>
                            <div className="social-icons">
                                <a href="#"><img src="/google-logo-24.png" alt=""/></a>
                                <a href="#"><img src="github-logo-24.png" alt=""/></a>
                            </div>
                        </form>
                    </div>

                    <div className="toggle-box">
                        <div className="toggle-panel toggle-left">
                            <h1>Hello, Welcome!</h1>
                            <p>{"Don't have an account?"}</p>
                            {/*<input type="checkbox" className="btn"/>*/}
                            <label htmlFor="auth-toggle" className="btn">Register</label>
                        </div>

                        <div className="toggle-panel toggle-right">
                            <h1>Welcome Back!</h1>
                            <p>Already have an account?</p>
                            <label htmlFor="auth-toggle" className="btn login-btn">Login</label>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
