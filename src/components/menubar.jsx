import React from "react";

function slideMenu(){
    const menuIcon = document.getElementsByClassName('menu-icon')[0];
    const menuList = document.getElementsByClassName('menu-list')[0];

    menuIcon.style.display='none';
    menuList.style.display='block';
}

function hideMenu(){
    const menuIcon = document.getElementsByClassName('menu-icon')[0];
    const menuList = document.getElementsByClassName('menu-list')[0];

    menuIcon.style.display='block';
    menuList.style.display='none';
}

export function Menubar(){
    return (
        <div className="menubar">
            <div className="menu-list" hidden={true}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={hideMenu}>
                <rect width="1.86565" height="9.32827" rx="0.932827" transform="matrix(0.707123 -0.70709 0.707123 0.70709 0.0839844 1.4043)" fill="#F0F0F0"/>
                <rect width="1.86565" height="9.32827" rx="0.932827" transform="matrix(0.707123 0.70709 -0.707123 0.70709 6.5957 0)" fill="#F0F0F0"/>
                </svg>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
            <div className="menu-icon" onClick={slideMenu}>
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="2.59259" rx="1.2963" fill="#F8F7F7"/>
                <rect y="11.4072" width="20" height="2.59259" rx="1.2963" fill="#F8F7F7"/>
                <rect y="5.7041" width="20" height="2.59259" rx="1.2963" fill="#F8F7F7"/>
                </svg>
            </div>
        </div>
    )
}