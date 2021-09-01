import React from 'react';

const Header = () => {
    return (
        <div className="d-flex flex-row justify-content-between col-12 railroad-primary-background px-3 py-1 header-font-size fw-light">
            <div className="d-flex flex-row align-items-center col-4 gap-2">
                <div className=""><a href="/" className="railroad-header-items">About</a></div>
                <div className="separator"></div>
                <div className=""><a href="/" className="railroad-header-items">Latest News</a></div>
            </div>
            <div className="d-flex flex-row align-items-center col-4 justify-content-end gap-2">
                <div className="d-flex text-white gap-2"><i className="bi bi-telephone-fill text-white"></i> (800) 478-488</div>
                <div className="separator"></div>
                <div className=""><a href="/" className="railroad-header-items">Contact</a></div>
            </div>
        </div>
    )
}

export default Header;
