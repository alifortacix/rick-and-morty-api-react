import Footer from "../../components/Footer/Footer";
import MenuNav from "../../components/MenuNav/MenuNav";

function MainLayout({ children }) {
    return (
        <>
            <MenuNav />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default MainLayout