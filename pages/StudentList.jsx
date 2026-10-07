import { useContext } from "react";
import StudentContext from "../context/StudentContext";

function StudentList() {
    const {favstudents,setFavstudents}=useContext(StudentContext)
    const users = ["Sanjai", "Karthik", "Arun", "Rahul", "Vijay"];
    const addToFavourite=(user)=>{
        setFavstudents([...favstudents,user])
    }
    return (
        
        <div className="py-10 px-15 flex flex-col gap-10 text-2xl font-medium flex-wrap">
            {users.map((name, index) => (
                <div className=" flex flex-row justify-between">
                    <div>
                        <span>{index + 1}. </span>

                        <span >{name}</span>
                    </div>
                    <button className="bg-black text-white p-3 border rounded cursor-pointer"
                     onClick={()=>addToFavourite(name)} disabled={favstudents.includes(name)}>Add to Favourite</button>

                </div>
            ))}

        </div>)
}
export default StudentList