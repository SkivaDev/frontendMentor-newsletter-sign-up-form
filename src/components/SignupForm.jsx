import React from "react";
import iconList from "../assets/images/icon-list.svg";
import signUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "../assets/images/illustration-sign-up-mobile.svg";

function SignupForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="desk:w-[650px] desk:h-[450px] w-full h-full bg-white desk:p-[20px] desk:rounded-3xl desk:m-[25px] desk:shadow-2xl">
      <form className="w-full h-full flex desk:gap-12 desk:flex-row flex-col-reverse" onSubmit={handleSubmit}>
        <div className=" desk:flex-1 h-[70%] desk:mt-[32px] desk:ml-[16px] desk:p-[0px] p-[20px]">
          <label className="text-[42px] font-bold text-slate-gray" htmlFor="email">Stay updated!</label>
          <p className="desk:text-[12px] desk:m-0 desk:mb-[20px] my-[20px] text-[14px]">Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="flex flex-col gap-2 mb-[30px]">
            <div className="flex desk:text-[12px] text-[14px] desk:items-center gap-2">
              <img className="desk:h-[17px] h-[19px]" src={iconList} alt="icon-list" />
              Product discovery and building what matters
            </div>
            <div className="flex desk:text-[12px] text-[14px] desk:items-center gap-2">
              <img className="desk:h-[17px] h-[19px]" src={iconList} alt="icon-list" />
              Measuring to ensure updates are a success
            </div>
            <div className="flex desk:text-[12px] text-[14px] desk:items-center gap-2">
              <img className="desk:h-[17px] h-[19px]" src={iconList} alt="icon-list" />
              And much more!
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-[18px]">
            <div className="flex justify-between text-[11px] text-slate-gray font-bold">
              <div>Email address</div>
              <div>Valid email required</div>
            </div>
            <div className="w-full h-[45px] bg-transparent  p-[15px] flex justify-center rounded-md border border-gray ">
              <input type="email" className="w-full h-full text-[14px] outline-none cursor-pointer" placeholder="email@company.com"/>
            </div>
          </div>

          <button className="submitBtn flex justify-center items-center h-[45px] w-full text-[13px] font-bold bg-slate-gray text-white rounded-md" type="submit">Subscribe to monthly newsletter</button>
        </div>
        <div className="desk:flex-1 h-[30%] desk:h-full bg-cover bg-center rounded-b-3xl desk:rounded-xl" style={{ backgroundImage: `url(${window.innerWidth >= 700 ? signUpDesktop : signUpMobile})` }}>

        </div>
      </form>
    </div>
  );
}

export default SignupForm;
