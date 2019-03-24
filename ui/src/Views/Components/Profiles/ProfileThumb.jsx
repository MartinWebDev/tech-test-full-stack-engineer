import React from "react";

const ProfileThumb = ({ profile }) => {
    return (
        <div className="jobs-page-list-item-hired-people-profile has-badge">
            <img src={profile.thumbnail} alt="" />
        </div>
    );
};

export default ProfileThumb;
