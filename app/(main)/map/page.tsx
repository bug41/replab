import { MapSearch } from './map-search';
import { MapResult } from './map-result';
import { ShopMap } from './shopMap';

export default function page() {    

    return (
        <div className="mx-auto md:max-w-screen-2xl">
            <ShopMap/>
            <MapSearch/>
            <MapResult/>
        </div>
    )
}