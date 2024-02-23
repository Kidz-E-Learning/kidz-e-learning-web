import React from "react";
import { TERipple } from "tw-elements-react";

function LearnMoreButton() {
  return (
        <TERipple rippleColor="light">
          <button
            type="button"
            className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Learn More
          </button>
        </TERipple>
  );
}

export default LearnMoreButton;