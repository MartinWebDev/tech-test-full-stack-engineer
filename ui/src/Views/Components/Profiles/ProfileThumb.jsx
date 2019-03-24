import React from "react";

const ProfileThumb = () => {
    // Get Nick Cage!
    const height = (Math.floor(Math.random() * 5) + 2) * 100;
    const width = (Math.floor(Math.random() * 5) + 1) * 100;

    return (
        <div className="jobs-page-list-item-header-picture" style={{ backgroundImage: `url(https://www.placecage.com/c/${height}/${width})` }}>
            {/* <img src={`https://www.placecage.com/c/${height}/${width}`} alt="" /> */}
        </div>
    );
};

export default ProfileThumb;
