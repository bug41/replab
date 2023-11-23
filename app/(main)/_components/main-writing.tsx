import Image from "next/image";
import Link from "next/link";

const MainWriting = () => {

    const imagePath = '/shop/logo/tarantula_korea.jpg';

    return (
        <div className="w-full py-10">                
            <div className="md:max-w-screen-2xl mx-auto">
                <div className="flex md:flex-row flex-col p-4 gap-10">
                    <div className="w-full md:w-1/2">
                        <div className="flex justify-between">
                            <h1 className="text-xl md:text-xl text-start text-neutral-800 font-extrabold">새 소식</h1>
                            <Link href='/map'>전체보기</Link>
                        </div>
                        <ul className="w-full px-2">
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                                An item
                            </li>
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                                A second item
                            </li>
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                                A third item
                            </li>
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                                A fourth item
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex justify-between">
                            <h1 className="text-xl md:text-xl text-start text-neutral-800 font-extrabold">커뮤니티</h1>
                            <Link href='/map'>전체보기</Link>
                        </div>
                        <ul className="w-full px-2">
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                                An item
                            </li>
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                                A second item
                            </li>
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                                A third item
                            </li>
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                                A fourth item
                            </li>
                        </ul>
                    </div>
                </div>
                        
            </div>
            
        </div>
    )
}

export default MainWriting;