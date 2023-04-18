import React from "react";

import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const RegisterPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_400 flex flex-col items-center justify-start mx-auto p-[286px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col font-comfortaa items-center justify-start w-auto md:w-full">
          <Text
            className="not-italic text-black_900 text-left tracking-[-0.54px] w-auto"
            as="h3"
            variant="h3"
          >
            Register
          </Text>
        </div>
        <Input
          wrapClassName="mt-[31px] w-[49%]"
          className="font-normal font-roboto leading-[normal] not-italic p-0 placeholder:text-black_900 text-[15px] text-black_900 text-left w-full"
          type="email"
          name="email"
          placeholder="neophytes@una.edu"
          size="sm"
          variant="OutlineBlack900"
        ></Input>
        <Input
          wrapClassName="mt-4 w-[49%]"
          className="font-normal font-roboto leading-[normal] not-italic p-0 placeholder:text-black_900 text-[15px] text-black_900 text-left w-full"
          name="component"
          placeholder="••••••••••••"
          size="sm"
          variant="OutlineBlack900"
        ></Input>
        <Button
          className="common-pointer cursor-pointer font-black font-roboto leading-[normal] min-w-[343px] mt-4 text-[13px] text-center text-white_A700 tracking-[0.52px] uppercase w-auto"
          onClick={() => navigate("/dashboard")}
          shape="RoundedBorder6"
          size="sm"
          variant="OutlineBlack900_1"
        >
          next
        </Button>
      </div>
    </>
  );
};

export default RegisterPagePage;
