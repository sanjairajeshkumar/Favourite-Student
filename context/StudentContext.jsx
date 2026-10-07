import { createContext, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {

    const [favstudents, setFavstudents] = useState([]);

    const removeFromFavourite = (name) => {
        setFavstudents(
            favstudents.filter((student) => student !== name)
        );
    };

    return (
        <StudentContext.Provider
            value={{
                favstudents,
                setFavstudents,
                removeFromFavourite
            }}
        >
            {children}
        </StudentContext.Provider>
    );
}

export default StudentContext;