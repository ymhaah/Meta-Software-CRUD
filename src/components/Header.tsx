"use client";

import { useRef, useState, useEffect, ReactNode, useCallback } from "react";

import Link from "next/link";

// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

import Button from "@ui/button";

// gsap.registerPlugin(useGSAP);

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
];

/**
 * Header component.
 * Renders the header with navigation and logo.
 * @returns {ReactNode} Rendered header component.
 */
function Header(): ReactNode {
    const header = useRef<HTMLDivElement>(null);
    const nav = useRef<HTMLDivElement>(null);

    const [navOpenState, setNavOpenState] = useState<
        "closed" | "opened" | "closing"
    >("closed");

    const toggleNav = useCallback(() => {
        if (navOpenState === "closed") {
            setNavOpenState("opened");
        } else if (navOpenState === "opened") {
            setNavOpenState("closing");
            if (nav.current) {
                nav.current.addEventListener(
                    "animationend",
                    () => {
                        setNavOpenState("closed");
                    },
                    {
                        once: true,
                    }
                );
            }
        }
    }, [navOpenState]);

    // ? Handle keyboard and scroll interactions
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (navOpenState !== "opened") return;

            if (e.key === "Escape") {
                toggleNav();
                return;
            }
        }

        function handleScroll() {
            if (navOpenState === "opened") {
                setNavOpenState("closing");
                if (nav.current) {
                    nav.current.addEventListener(
                        "animationend",
                        () => {
                            setNavOpenState("closed");
                        },
                        { once: true }
                    );
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [navOpenState, toggleNav]);

    return (
        <header
            className="Header | fixed top-0 left-0 backdrop-blur-lg isolate z-[1000] h-[5rem] w-full px-[0.1rem]"
            ref={header}
            aria-label="Main Site Header"
        >
            <div className="Container | flex flex-row items-center justify-between py-5">
                <div className="Header_logo">
                    <Link href="/" className="focus no-underline">
                        <span aria-hidden="true" className="Logo logo_main">
                            حَفْناوِيٍّ
                        </span>
                        <span className="sr-only">hefnawy studio</span>
                    </Link>
                </div>
                <div className="Header_nav">
                    <Button
                        iconOnlyAlt="Main Header Menu Toggle"
                        type="button"
                        aria-controls="main-navigation-list"
                        aria-expanded={navOpenState === "opened"}
                        handleClick={toggleNav}
                        className="Nav_toggle"
                    >
                        {navOpenState === "opened" ? (
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                aria-labelledby="close-icon"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title id="close-icon">close icon</title>
                                <path
                                    d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="18"
                                height="12"
                                viewBox="0 0 18 12"
                                fill="none"
                                aria-labelledby="menu-icon"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title id="menu-icon">menu icon</title>
                                <path
                                    d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                                    fill="black"
                                />
                            </svg>
                        )}
                        <span className="sr-only">
                            {navOpenState === "opened"
                                ? "Close Menu"
                                : "Open Menu"}
                        </span>
                    </Button>
                    <nav
                        className="max-md:fixed max-md:top-0 max-md:left-0 max-md:z-[1] max-md:w-full max-md:bg-[var(--bg-clr-dark)] max-md:p-5"
                        ref={nav}
                        data-state={
                            navOpenState === "opened"
                                ? "opened"
                                : navOpenState === "closing"
                                  ? "closing"
                                  : "closed"
                        }
                        aria-label="Main Navigation"
                    >
                        <ul
                            id="main-navigation-list"
                            className="header__nav-list flex h-full items-center justify-end gap-8 max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-10"
                        >
                            {navLinks.map((link, index) => (
                                <li key={index} className="header__nav-item">
                                    <a
                                        href={link.href}
                                        className="Link focus nav-link nowrap"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="header__nav-item header__nav-item--button">
                                <Button
                                    className="btn-primary"
                                    as="a"
                                    href="#input-name"
                                >
                                    Hire Us
                                </Button>
                                <Button
                                    className="btn-primary"
                                    as="a"
                                    href="#input-name"
                                >
                                    Hire Us
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;

// TODO: make the nav
// TODO: what link should i add
// TODO: make a cool effect for the nav opening and closing with gsap
// TODO: add links and site info for the nav in phone size

// ToDO: srech par and make it work wiht Ctrl + K
