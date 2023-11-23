import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="">
            {/* Navbar */}
            <Navbar/>
            <main className="mx-auto items-center w-full pb-40">
                {children}
            </main>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default MarketingLayout;