import Link from "next/link";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="flex justify-center py-5 bg-black text-xl text-gray-200">
            <h1 className="font-semibold">
                Copyright © {year} - Powered By {" "}

                <Link
                    className="text-white hover:text-blue-500 transition-colors"
                    href="https://www.xyfora.se/"
                    target="_blank"
                >
                    <span className="font-extrabold">XYFORA</span>
                </Link>
            </h1>
        </footer>
    );
};

export default Footer;