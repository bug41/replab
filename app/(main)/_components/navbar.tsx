import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import Link from "next/link"
import { MobileSidebar } from "./mobile-sidebar"
import NavSearch from "./nav-search"

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center z-50">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <MobileSidebar />
                <Logo device={"pc"}/>
                <ul className="lg:flex lg:space-x-12 hidden md:flex">
                    <li className="p-2">
                        <Link href="/map">샵 위치</Link>
                    </li>
                    <li className="p-2">
                        <Link href="/page">업체&브리더 페이지</Link>
                    </li>
                    <li className="p-2">
                        <Link href="/community">커뮤니티</Link>
                    </li>
                    
                </ul>

                <div className="space-x-4 md:block md:w-auto flex items-center w-full hidden">
                    <Button size="sm" variant="outline" asChild>
                        <Link href="/sign-in">로그인</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <Link href="/sign-up">회원가입</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}