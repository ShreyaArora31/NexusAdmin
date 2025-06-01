import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"

const Layout = () => {
    return (
        <div>
            <div>
                <Sidebar/>
            </div>
            <div>
                <Navbar/>
                
            </div>
        </div>
    )
}

export default Layout