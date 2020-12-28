import React from 'react';

const ToggleIcon = ({isOpen=false, OpenIcon, CloseIcon}) => {
    return (
        <button>
            {isOpen && OpenIcon && <span className="toogle-icon__open"><OpenIcon /></span>}
            {!isOpen && CloseIcon && <span className="toogle-icon__close"><OpenIcon /></span>}
        </button>
    );
};

export default ToggleIcon;