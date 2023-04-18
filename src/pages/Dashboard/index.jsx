import React from "react";

import { Img, Text } from "components";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-gray_400 flex flex-col font-koulen items-start justify-start mx-auto p-1 w-full">
        <div className="flex flex-col md:gap-10 gap-[279px] justify-start mb-[129px] mt-1.5 md:px-5 w-[94%] md:w-full">
          <Img
            src="images/img_checkmark.svg"
            className="h-[60px] w-[60px]"
            alt="checkmark"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-2.5 md:ml-[0] w-full">
            <div className="flex md:flex-1 flex-col gap-[50px] justify-start w-[43%] md:w-full">
              <Text
                className="ml-5 md:ml-[0] not-italic text-left text-red_A700_7f w-2/5 sm:w-full"
                as="h6"
                variant="h6"
              >
                What went wrong?
              </Text>
              <div className="bg-bluegray_100_84 h-[250px] outline outline-[1.5px] outline-black_900 rounded-[10px] w-full"></div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[50px] justify-start w-[43%] md:w-full">
              <Text
                className="ml-5 md:ml-[0] not-italic text-indigo_A700_7f text-left w-2/5 sm:w-full"
                as="h6"
                variant="h6"
              >
                What was Good Today?
              </Text>
              <div className="bg-bluegray_100_7f h-[250px] outline outline-[1.5px] outline-black_900 rounded-[10px] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
