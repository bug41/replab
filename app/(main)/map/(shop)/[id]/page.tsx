import { Map, Phone, Clock4, Info, Copy } from 'lucide-react';
import { ShopMap } from '../../shopMap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Slide from '@/app/(main)/_components/slide';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Page = ({
    params,
}: {
    params: {id: string}
}) =>{

    const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

    return (
        <div className="mx-auto md:max-w-screen-2xl">
            <div className="relative">
                <div className="bg-cover bg-center flex justify-center items-center opacity-80" style={{backgroundImage: `url('/shop/logo/tarantula_korea.jpg')`, height: "360px", }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl text-xl font-bold ">타란튤라 코리아</div>
            </div>

            <div className="flex flex-wrap items-center py-10">                    
                <div className="w-full px-4 lg:w-1/2">
                <div className="wow fadeInUp relative mx-auto max-w-[500px] lg:mr-0">
                    {/* <Image src="/shop/logo/tarantula_korea.jpg"
                        alt="logo"
                        width={500}
                        height={500}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    /> */}

                    <Slide/>
                </div>
                </div>
                
                <div className="w-full px-4 lg:w-1/2 xl:pb-4">
                    {/* 샵 상세 */}
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
            </div>

            <Tabs defaultValue="account" className="w-[400px] mx-auto">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>

            <ShopMap/>
            
            <div className='text-center py-10'>
                <Button>
                    <Link href="/map">
                        목록으로
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Page;