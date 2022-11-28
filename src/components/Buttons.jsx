import React from 'react';

const Buttons = ({ styles }) => {
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins text-[18px] text-primary outline-none ${styles}`}>
Kontaktujte nas
        </button>
    );
};

export default Buttons;
