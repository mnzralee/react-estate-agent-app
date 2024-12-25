import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
    return (
        <header>
            <div className="d-flex justify-content-center align-items-center py-4">
                <h1 className="header-1">FIND YOUR DREAM HOME</h1>
            </div>
            <SearchBar />
        </header>
    );
}

export default Header;