import React from "react";
import iconList from "../assets/images/icon-list.svg";

function ThankYouCard({email, setIsSummited}) {
  return (
    <div className="desk:w-[380px] desk:h-[390px] w-full h-full bg-white desk:px-[48px] desk:py-[40px] desk:rounded-3xl desk:m-[25px] desk:shadow-2xl px-[15px] py-[30px]">
      <div className="flex justify-between flex-col w-full h-full desk:block">
        <div className="mt-[100px] desk:m-0">
          <img
            className="desk:h-[45px] h-[60px] desk:mb-[20px] mb-[30px]"
            src={iconList}
            alt="icon-list"
          />
          <h1
            className="text-[42px] font-bold text-slate-gray leading-[45px]"
            htmlFor="email"
          >
            Thanks for subscribing!
          </h1>
          <p className="desk:text-[12px] desk:m-0 desk:my-[25px] my-[25px] text-[14px]">
            A confirmation email has been sent to <span className="font-bold">{email}</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>

        <button
          className="submitBtn flex justify-center items-center h-[45px] w-full text-[13px] font-bold bg-slate-gray text-white rounded-md"
          type="button"
          onClick={() => setIsSummited(false)}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default ThankYouCard;
