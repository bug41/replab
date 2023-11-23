import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Map, Phone, Clock4, Info, Copy } from 'lucide-react';

export const MapResult = () => {
    return (
        <div className="max-w-3xl pt-10 mx-auto">
            <div className="p-5 flex flex-wrap items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <Link href="/map/1">
                        <Image src="/shop/logo/tarantula_korea.jpg"
                            alt="logo"
                            width={180}
                            height={180}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                            />
                    </Link>
                </div>
                <div className="w-full md:w-2/3 pt-5 md:pt-0">
                    <div className="text-2xl font-bold">
                        <Link href="/map/1">타란튤라 코리아</Link>
                    </div>
                    <div className="mt-5">
                        <div className="flex mb-1 items-center">
                            <Map size={18}/>
                            <p className="pl-2">서울 강서구 마곡동 757</p>
                            <Copy size={18} className="ml-2"/>
                        </div>
                        <div className="flex mb-1 items-center">
                            <Phone size={18}/>
                            <p className="pl-2">010-8814-5981</p>
                        </div>
                        <div className="flex mb-1 items-center">
                            <Clock4 size={18}/>
                            <p className="pl-2">예약방문</p>
                        </div>
                        <div className="flex mb-1 items-center">
                            <Info size={18}/>
                            <p className="pl-2">평점/리뷰 ★★★★☆ / 90 건</p>
                        </div>                            
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/kakao_logo.png"
                            alt="카카오톡 공유하기"
                            width={32}
                            height={32}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                        <Image src="/naver_map.png"
                            alt="네이버 지도 열기"
                            width={32}
                            height={32}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                        <Image src="/kakao_map.png"
                            alt="카카오 지도 열기"
                            width={32}
                            height={32}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}