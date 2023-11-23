"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import { Sidebar } from "./sidebar";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export const MobileSidebar = () => {

    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    useEffect(() => {
        onClose();
    },[pathname, onClose])

    if(!isMounted){
        return null;
    }

    return (
        <>
            <Button onClick={onOpen} className="block md:hidden mr-2" variant="ghost" size="sm">
                <Menu className="h-4 w-4 "/>
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                    side="left"
                    className="p-2 pt-10"
                >
                    <div className="mb-5">
                        <Logo device={"mobile"}/>
                    </div>

                    {/* <Sidebar storageKey="t-sidebar-mobile-state"/> */}
                    <ul className="">
                        <li className="mb-3">
                            <Link href="">샵 위치</Link>
                        </li>
                        <li className="mb-3">
                            <Link href="">업체&브리더 페이지</Link>
                        </li>
                        <li className="mb-3">
                            <Link href="">커뮤니티</Link>
                        </li>
                        <li className="mb-3 text-neutral-700">
                            <Link href="/sign-in">로그인</Link>
                        </li>
                        <li className="mb-3 text-neutral-700">
                        <Link href="/sign-up">회원가입</Link>
                        </li>
                    </ul>                    
                </SheetContent>
            </Sheet>
        </>
    )
}