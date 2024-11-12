import { Icon } from "@iconify/react/dist/iconify.js";
import "../../CSS/Sidebar.css"
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Sidebar = () => {
    const navigate = useNavigate();
    const NavigateLogin = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Logout",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem("token");
                navigate('/');
            }
        });

    }
    return (
        <div className="m-0 p-0 sticky-top" style={{ top: "70px" }}>
            <div className="d-flex flex-column align-items-center pt-4">
                <Icon icon="pajamas:task-done" style={{ color: "gray" }} width={"40"} height={"40"} />
                <span className="side-bar-font my-1">Tasks</span>
            </div>
            <Link to="/Calendar" className="d-flex flex-column align-items-center mt-4 text-decoration-none">
                <Icon icon="uil:calender" style={{ color: "gray" }} width={"40"} height={"40"} />
                <span className="side-bar-font my-1">Calender</span>
            </Link>
            <div className="d-flex flex-column align-items-center mt-4">
                <Icon icon="mdi:chart-bar" style={{ color: "gray" }} width={"40"} height={"40"} />
                <span className="side-bar-font my-1">Reports</span>
            </div>
            <div className="d-flex flex-column align-items-center mt-4">
                <Icon icon="fa-solid:users" style={{ color: "gray" }} width={"40"} height={"40"} />
                <span className="side-bar-font my-1">Users</span>
            </div>
            <div className="d-flex flex-column align-items-center mt-4">
                <Icon icon="lets-icons:setting-fill" style={{ color: "gray" }} width={"40"} height={"40"} />
                <span className="side-bar-font my-1">Settings</span>
            </div>
            <div className="d-flex flex-column align-items-center mt-4">
                <Icon icon="ph:question-fill" style={{ color: "gray" }} width={"40"} height={"40"} />
                <span className="side-bar-font my-1">Supports</span>
            </div>
            <div className="d-flex flex-column align-items-center mt-4">
                <Icon icon="bi:speedometer2" style={{ color: "gray" }} width={"40"} height={"40"} />
                <span className="side-bar-font my-1">Super Admin</span>
            </div>
            <div className="d-flex flex-column align-items-center mt-4">
                <Icon onClick={NavigateLogin} icon="tabler:logout-2" style={{ color: "gray", cursor: "pointer" }} width={"40"} height={"40"} />
                <span className="side-bar-font my-1">Logout</span>
            </div>
        </div>
    );
}

export default Sidebar