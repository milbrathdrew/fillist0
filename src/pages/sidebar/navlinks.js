import { BookOpenIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const links = [
    
    { name: 'Home', href: '/home', icon: HomeIcon },
    { name: 'Account', href: '/account', icon: UserGroupIcon },
]

const NavLinks = () => {
    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-purple-200"
                >
                    <span className="flex items-center justify-center w-10 h-10 rounded-md">
                        <link.icon className="w-6 h-6 text-black" /> {/* Updated the text color to black */}
                    </span>
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            ))}
        </>
    )
}

export default NavLinks;