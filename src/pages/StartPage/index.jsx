import React from "react";

import { Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const StartPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_400 flex flex-col font-roboto gap-[15px] items-center justify-start mx-auto p-[263px] md:px-10 sm:px-5 w-full">
        <Img
          src="images/img_checkmark.svg"
          className="h-[60px] w-[60px]"
          alt="checkmark"
        />
        <div className="flex flex-col gap-2.5 items-center justify-start mb-[117px] w-[23%] md:w-full">
          <Button
            className="common-pointer cursor-pointer font-black leading-[normal] min-w-[167px] text-[13px] text-black_900 text-center tracking-[0.52px] uppercase w-auto"
            onClick={() => navigate("/loginpage")}
            shape="RoundedBorder6"
            size="sm"
            variant="OutlineBlack900"
          >
            log in
          </Button>
          <Button
            className="common-pointer cursor-pointer font-black leading-[normal] min-w-[167px] text-[13px] text-center text-white_A700 tracking-[0.52px] uppercase w-auto"
            onClick={() => navigate("/registerpage")}
            shape="RoundedBorder6"
            size="sm"
            variant="FillBlack900"
          >
            register
          </Button>
        </div>
      </div>
    </>
  );
};

export default StartPagePage;
