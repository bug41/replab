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
            <main className="pt-20 pb-20 mx-auto items-center w-full">
                {children}
            </main>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default MarketingLayout;