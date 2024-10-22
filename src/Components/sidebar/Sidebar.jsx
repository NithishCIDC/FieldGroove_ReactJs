import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import "../../CSS/Sidebar.css"

const Sidebar = () => {
    return (
        <div className="m-0 p-0 sticky-top">
            <div class="d-flex flex-column align-items-center pt-4">
                <Icon icon="pajamas:task-done" style={{color: "gray"}} width={"40"} height={"40"} />
                <span class="side-bar-font my-1">Tasks</span>
            </div>
            <div class="d-flex flex-column align-items-center mt-4">
                <Icon icon="uil:calender"  style={{color: "gray"}} width={"40"} height={"40"} />
                <span class="side-bar-font my-1">Calender</span>
            </div>
            <div class="d-flex flex-column align-items-center mt-4">
                <Icon icon="mdi:chart-bar" style={{color: "gray"}} width={"40"} height={"40"} />
                <span class="side-bar-font my-1">Reports</span>
            </div>
            <div class="d-flex flex-column align-items-center mt-4">
                <Icon icon="fa-solid:users" style={{color: "gray"}} width={"40"} height={"40"} />
                <span class="side-bar-font my-1">Users</span>
            </div>
            <div class="d-flex flex-column align-items-center mt-4">
                <Icon icon="lets-icons:setting-fill" style={{color: "gray"}} width={"40"} height={"40"} />
                <span class="side-bar-font my-1">Settings</span>
            </div>
            <div class="d-flex flex-column align-items-center mt-4">
                <Icon icon="ph:question-fill" style={{color: "gray"}} width={"40"} height={"40"}  />
                <span class="side-bar-font my-1">Supports</span>
            </div>
            <div class="d-flex flex-column align-items-center mt-4">
                <Icon icon="bi:speedometer2" style={{color: "gray"}} width={"40"} height={"40"}  />
                <span class="side-bar-font my-1">Super Admin</span>
            </div>
        </div>
    );
}

export default Sidebar