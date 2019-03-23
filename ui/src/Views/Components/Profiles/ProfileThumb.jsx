import React from "react";

import HiredBadge from "../../../Partials/HiredBadge";

const ProfileThumb = ({ profile }) => {
    return (
        <div className="jobs-page-list-item-hired-people-profile has-badge">
            <img src={profile.thumbnail} alt="" />
            {
                profile.isHired && <HiredBadge />
            }
        </div>
    );
};

export default ProfileThumb;
