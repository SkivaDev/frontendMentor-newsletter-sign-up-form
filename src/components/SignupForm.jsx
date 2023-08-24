import React from "react";
import iconList from "../assets/images/icon-list.svg";

function SignupForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="w-[430px] h-[430px] bg-slate-gray p-[30px] rounded-3xl m-[25px]">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Stay updated!</label>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div>
            <div>
              <span>
                <img src={iconList} alt="icon-list" />
              </span>
              Product discovery and building what matters
            </div>
          </div>
          <div>
            <div>
              <div>Email address</div>
              <div>Valid email required</div>
            </div>
            <div>
              <input type="email" />
            </div>
          </div>

          <button type="submit">Subscribe to monthly newsletter</button>
        </div>
        <div></div>
      </form>
    </div>
  );
}

export default SignupForm;
