import Link from "next/link";
import Image from "next/image";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
})

interface LogoProps {
    device : string;
}

export const Logo = ({device} : LogoProps) => {
    return (
        <Link href="/">
            <div className={cn("hover:opacity-75 transition items-center gap-x-2 md:flex", device === "pc" ? "hidden" : "" )}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    height={30}
                    width={30}
                    className={cn("", device === "pc" ? "" : "hidden" )}
                />
                <p className={cn("text-lg text-neutral-700 pb-1",headingFont.className,)}
                >RepLAB</p>
            </div>
        </Link>
    )
}