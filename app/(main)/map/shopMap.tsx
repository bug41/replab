import Script from 'next/script';
import { Map, MapMarker } from "react-kakao-maps-sdk";

export const ShopMap = () => {

    const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

    return (
        <>
            <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />

            <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "80%", height: "360px", margin:"auto" }}
                >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{color:"#000"}}>Hello World!</div>
                </MapMarker>
            </Map>   
        </>
    )
}