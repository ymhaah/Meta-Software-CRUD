import { Heart } from "lucide-react";

function Footer() {
    return (
        <footer
            className="w-full overflow-hidden py-10"
            aria-label="main site footer"
        >
            <div className="Container-full relative flex flex-col">
                <p className="flex items-center justify-center gap-1 text-sm text-gray-600">
                    Made with
                    <Heart className="size-4 fill-blue-500 text-blue-500" />
                    by{" "}
                    <a
                        href="https://github.com/ymhaah"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Youssef Hefnawy
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
