import Link from "next/link";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="flex justify-center py-5 bg-black text-xl text-gray-200">
            © {year} - Powered By{" "}

            <Link
                className="ml-1 font-semibold text-white hover:text-cyan-500 transition-colors"
                href="https://xyfora.se"
                target="_blank"
            >
                XYFORA
            </Link>
        </footer>
    );
};

export default Footer;