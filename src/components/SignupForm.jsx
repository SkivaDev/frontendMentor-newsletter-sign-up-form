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
    <div className="w-[650px] h-[450px] bg-white p-[20px] rounded-3xl m-[25px] shadow-2xl">
      <form className="w-full h-full flex gap-12" onSubmit={handleSubmit}>
        <div className=" flex-1 mt-[32px] ml-[16px]">
          <label className="text-[42px] font-bold text-slate-gray" htmlFor="email">Stay updated!</label>
          <p className="text-[12px] mb-[20px]">Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="flex flex-col gap-2 mb-[30px]">
            <div className="flex text-[12px] items-center gap-2">
              <img className="h-[17px]" src={iconList} alt="icon-list" />
              Product discovery and building what matters
            </div>
            <div className="flex text-[12px] items-center gap-2">
              <img className="h-[17px]" src={iconList} alt="icon-list" />
              Measuring to ensure updates are a success
            </div>
            <div className="flex text-[12px] items-center gap-2">
              <img className="h-[17px]" src={iconList} alt="icon-list" />
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
        <div className="flex-1 h-full bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${signUpDesktop})` }}>

        </div>
      </form>
    </div>
  );
}

export default SignupForm;
