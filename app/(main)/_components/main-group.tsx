import Image from "next/image";
import Link from "next/link";

const MainGroup = () => {

    const imagePath = '/shop/logo/tarantula_korea.jpg';

    return (
        <div className="w-full pt-10 pb-10">                
            <div className="md:max-w-screen-2xl mx-auto">
                <div className="flex justify-between px-4">
                    <h1 className="text-xl md:text-xl text-start text-neutral-800 font-extrabold">그룹</h1>
                    <Link href='/map'>전체보기</Link>
                </div>

                <div className="p-4 bg-white rounded-lg md:p-2 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <dl className="grid max-w-screen-2xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-1">
                        <div className="flex flex-col items-center justify-center border-2 rounded w-[200px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <dt className="mb-2">
                                <div className="relative w-[195px] h-[150px]">
                                    <Image 
                                         
                                        layout="fill"
                                        objectFit="cover"
                                        src={imagePath}                                        
                                        alt="" />
                                </div>
                            </dt>
                            <dd className="text-gray-500 dark:text-gray-400">ㅇㅇ 렙타일</dd>
                        </div>

                        <div className="flex flex-col items-center justify-center border-2 rounded w-[200px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                            <dt className="mb-2">
                                <div className="relative w-[195px] h-[150px]">
                                    <Image 
                                         
                                        layout="fill"
                                        objectFit="cover"
                                        src={imagePath}                                        
                                        alt="" />                            
                                </div>
                            </dt>
                            <dd className="text-gray-500 dark:text-gray-400">ㅇㅇ 렙타일</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 rounded w-[200px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                            <dt className="mb-2">
                                <div className="relative w-[195px] h-[150px]">
                                    <Image 
                                         
                                        layout="fill"
                                        objectFit="cover"
                                        src={imagePath}                                        
                                        alt="" />                            
                                </div>
                            </dt>
                            <dd className="text-gray-500 dark:text-gray-400">ㅇㅇ 렙타일</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 rounded w-[200px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                            <dt className="mb-2">
                                <div className="relative w-[195px] h-[150px]">
                                    <Image 
                                         
                                        layout="fill"
                                        objectFit="cover"
                                        src={imagePath}                                        
                                        alt="" />                            
                                </div>
                            </dt>
                            <dd className="text-gray-500 dark:text-gray-400">ㅇㅇ 렙타일</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 rounded w-[200px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                            <dt className="mb-2">
                                <div className="relative w-[195px] h-[150px]">
                                    <Image 
                                         
                                        layout="fill"
                                        objectFit="cover"
                                        src={imagePath}                                        
                                        alt="" />                            
                                </div>
                            </dt>
                            <dd className="text-gray-500 dark:text-gray-400">ㅇㅇ 렙타일</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 rounded w-[200px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                            <dt className="mb-2">
                                <div className="relative w-[195px] h-[150px]">
                                    <Image 
                                         
                                        layout="fill"
                                        objectFit="cover"
                                        src={imagePath}                                        
                                        alt="" />                            
                                </div>
                            </dt>
                            <dd className="text-gray-500 dark:text-gray-400">ㅇㅇ 렙타일</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 rounded w-[200px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                            <dt className="mb-2">
                                <div className="relative w-[195px] h-[150px]">
                                    <Image 
                                         
                                        layout="fill"
                                        objectFit="cover"
                                        src={imagePath}                                        
                                        alt="" />                            
                                </div>
                            </dt>
                            <dd className="text-gray-500 dark:text-gray-400">ㅇㅇ 렙타일</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 rounded w-[200px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                            <dt className="mb-2">
                                <div className="relative w-[195px] h-[150px]">
                                    <Image 
                                         
                                        layout="fill"
                                        objectFit="cover"
                                        src={imagePath}                                        
                                        alt="" />                            
                                </div>
                            </dt>
                            <dd className="text-gray-500 dark:text-gray-400">ㅇㅇ 렙타일</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 rounded w-[200px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                            <dt className="mb-2">
                                <div className="relative w-[195px] h-[150px]">
                                    <Image 
                                         
                                        layout="fill"
                                        objectFit="cover"
                                        src={imagePath}                                        
                                        alt="" />                            
                                </div>
                            </dt>
                            <dd className="text-gray-500 dark:text-gray-400">ㅇㅇ 렙타일</dd>
                        </div>
                    </dl>
                </div>

                        
            </div>
            
        </div>
    )
}

export default MainGroup;