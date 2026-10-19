import {Router, Link } from "preact-router";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Cats } from "./pages/Cats.jsx";
import { Todo } from "./pages/Todo.jsx";
import { Card } from "./components/Card.jsx";

import "./app.css";
import { useState } from "preact/hooks";
import { useEffect } from "react";

import kittyIcon from "./assets/kitty.png"

export function App() {
    // Theme states
    const [isDark, setDarkTheme] = useState(false);
    
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);
    return (
        <div class={`app ${isDark ? "dark": ""}`}>
        <nav>
            <Link href="/">
                <img src={kittyIcon} alt="Kitty"/>
            </Link>
            <div class="nav-links">
                <h1 class="nav-title">KatNotes</h1>
                <Link href="/">Home</Link> 
                <Link href="/about">About</Link> 
                <Link href="/cats">Cats</Link> 
                <Link href="/todo">Todo</Link>
            </div>

        </nav>

        <main>
            <Router>
                <Home path="/" />
                <About path="/about" />
                <Cats path="/cats" />
                <Todo path="/todo" />
                
            </Router>
        </main>

        <button
            class="theme-toggle-btn"
            onClick={() => setDarkTheme(!isDark)}
        >
            {isDark ?  "☀️" : "🌙"}
        </button>
        </div>
    )
}