import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../AppContext";

export default function Login() {

    // HOOKS
    const navigate = useNavigate();
    const [, setIsUserLoggedIn, userName, setUserName] = useContext(Context);

    // FUNCTIONS
    function handleFormChange(e) {
        const { value } = e.target;
        setUserName(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsUserLoggedIn(true);
        navigate(-1);
    }

    return (
        <form className="w-100 h-100 card d-flex flex-column justify-content-center align-items-center mt-3" onSubmit={handleSubmit}>
            <div className="card-body">
                <h2 className="card-title">Log in to purchase</h2>

                <label htmlFor="name">
                    Name:
                    <input type="text" className="" value={userName} onChange={handleFormChange} />
                </label>
                <button className="bg-dark text-white">Log in</button>
            </div>
        </form>
    );
};