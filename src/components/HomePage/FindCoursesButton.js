import React from "react";
import { TERipple } from "tw-elements-react";

function FindCoursesButton() {
    return (
        <TERipple rippleColor="light">
            <button
          type="button"
          className="inline-block bg-primary rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#FFCF1E] "
            >
            Find Courses
            </button>
        </TERipple>
    )
}

export default FindCoursesButton;