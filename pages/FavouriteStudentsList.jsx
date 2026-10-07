import { useContext } from "react"
import StudentContext from "../context/StudentContext"


function FavouriteStudentList() {
    const { favstudents, removeFromFavourite } = useContext(StudentContext)
    return (
        <div className="py-10 px-15 flex flex-col gap-10 text-2xl font-medium flex-wrap" >

            {favstudents.length === 0 && (
                 <h1>You Haven't added anyone</h1>
            )}

           

            {favstudents.map((name, index) => (
                <div className="flex flex-row justify-between">
                    <div className="flex">
                        <span>{index + 1}</span>
                        {"."}
                        <span><h1>{name}</h1></span>
                    </div>
                    <button className="bg-red-600 text-white p-3 border rounded cursor-pointer" onClick={() => removeFromFavourite(name)}>Remove</button>
                </div>
            ))}


        </div>)
}
export default FavouriteStudentList