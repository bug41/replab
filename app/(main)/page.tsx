import Link from "next/link";
import localFont from "next/font/local";
import {Poppins} from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MainImage from "./_components/main-image";
import Image from "next/image";
import MainGroup from "./_components/main-group";
import MainStore from "./_components/main-store";
import MainWriting from "./_components/main-writing";

const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
})

const textFont = Poppins({
    subsets : ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ]
})

const MainPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            {/* 상단 고정 배너, 추후 슬라이드 */}
            <MainImage/>
            {/* 내가 속한 그룹 보여주기 */}
            <MainGroup/>

            {/* <hr className="w-full max-w-screen-xl h-px bg-gray-500 border " /> */}
            
            {/* 최근 추가된 샵 */}
            <MainStore/>

            {/* <hr className="w-full max-w-screen-xl h-px bg-gray-500 border " /> */}

             {/* 새 소식 & 커뮤니티 */}
            <MainWriting/>
             

        </div>
    )
}

export default MainPage;