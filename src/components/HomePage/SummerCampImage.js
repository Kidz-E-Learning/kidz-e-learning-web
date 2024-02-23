import React from "react";
import kidz from '../../assets/images/summer_camp.jpeg';

function SummerCampImage() {
    return (
        <div className="mb-4">
            <img
                src={kidz}
                className="h-auto max-w-full rounded-full"
                alt="" />
        </div>
    )
}

export default SummerCampImage;