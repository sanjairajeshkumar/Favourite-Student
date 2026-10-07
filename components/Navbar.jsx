import { Link} from 'react-router-dom'
function Navbar() {
    return (
        <div className="bg-rose-400 py-10 flex gap-25 p-30 cursor-pointer">
            <Link to={"/list"}>
                <h1 className="text-3xl text-white underline decoration-black">List of Students</h1>
            </Link>
            {""}
            <Link to={"/fav"}>
                <h1 className="text-3xl text-white underline decoration-black" >Favourite Students </h1>
            </Link>
        </div>
    )
}
export default Navbar