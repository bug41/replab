import Image from "next/image";
import background from "../../../public/img/main/ball_python_home.9040491ccf15.jpg"

const MainImage = () => {

    return (
        <main className="relative w-full h-[360px]">
            <Image
                src={background}                 
                alt="background image"
                quality={100}                
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl font-bold  max-w-screen m-auto py-5 px-5 my-10 text-center text-2xl rounded-2xl bg-white shadow-[0px_8px_48px_rgba(0,0,0,0.25)]">
                <p>테스트 테스트</p>
            </div>
    </main> 
    )
}

export default MainImage;