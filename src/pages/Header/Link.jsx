// Link.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ to, children }) => {
    const handleClicked = () => {
        const bars = document.getElementById("bars");

        bars?.classList.add("show");

        setTimeout(() => {
            bars?.classList.remove("show");
            bars?.classList.add("hide");
            // Add your navigation logic here
        }, 800);

        setTimeout(() => bars?.classList.remove("hide"), 1600);
    };

    return (
        <RouterLink
            to={to}
            onClick={handleClicked}
        >
            {children}
        </RouterLink>
    );
};

export default Link;
