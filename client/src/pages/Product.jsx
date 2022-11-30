import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Context } from "../AppContext";
import axios from "axios";

export default function Product() {


    //  HOOKS
    const navigate = useNavigate();
    const [isPurchased, setIsPurchased] = useState(false);
    const [isUserLoggedIn, , userName,] = useContext(Context);
    const { item } = useParams();
    const [num, setNum] = useState(0);

    useEffect(() => {
        axios.get(`/api/${item}s`)
            .then(res => setNum(res.data))
            .catch(err => console.log(err));
    }, []);

    // VARIABLES
    const title = item.split("-").join(" ");
    const urlQuery = item.split("-").pop();

    // FUNCTIONS
    const logIn = () => navigate("/login");
    function purchase() {
        setIsPurchased(true);
    }

    return (
        <div className="d-flex align-items-center justify-content-center flex-column position-relative">
            {isPurchased ? <p className="bg-success w-100 p-1 position-absolute top-0 text-center text-white">Thank you for your purchase {userName.toUpperCase()}!</p> : null}

            <h1 className="fs-2 mt-5">This is our {title}</h1>

            <img src={`https://source.unsplash.com/random/300x300/?${urlQuery}`} alt="office" />
            in stock: {num ? num : null}
            {isUserLoggedIn ?
                <button className="w-25 bg-dark text-light mt-3" onClick={purchase}>{!isPurchased ? "Purchase" : "Purchased!"}</button> :
                <button className="w-25 bg-dark text-light mt-3" onClick={logIn}>Log in to make a purhchase</button>
            }

        </div >
    );
};