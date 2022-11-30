import { createContext, useState } from "react";

const Context = createContext();

function AppContext({ children }) {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    return (
        <Context.Provider value={
            [isUserLoggedIn,
                setIsUserLoggedIn,
                userName,
                setUserName]
        }>

            {children}
        </Context.Provider>
    );

}

export { Context, AppContext };