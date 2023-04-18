import React from "react";

import { Text, Line, Button, Img } from "components";

const MacBookPro14OnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[91px] items-center justify-start max-w-[1335px] mb-[39px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Text
              className="md:mt-0 mt-5 text-black_900 text-left w-auto"
              as="h2"
              variant="h2"
            ></Text>
            <Text
              className="font-normal md:ml-[0] ml-[312px] md:mt-0 mt-4 not-italic text-black_900 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Home
            </Text>
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[50px] md:mt-0 mt-4 w-[17%] md:w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="font-normal mt-[3px] not-italic text-black_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Blog
                </Text>
                <Text
                  className="font-normal mb-[3px] not-italic text-black_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Careers
                </Text>
              </div>
              <Line className="bg-bluegray_900 h-1 md:ml-[0] ml-[3px] mt-1 w-[26%]" />
            </div>
            <Text
              className="font-normal md:ml-[0] ml-[50px] md:mt-0 mt-4 not-italic text-black_900 text-left w-auto"
              as="h4"
              variant="h4"
            >
              About Us{" "}
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[50px] md:mt-0 mt-[19px] not-italic text-black_900 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Sing Up{" "}
            </Text>
            <Button
              className="cursor-pointer font-normal leading-[normal] min-w-[149px] md:ml-[0] ml-[50px] not-italic text-3xl sm:text-[26px] md:text-[28px] text-center text-white_A700 w-auto"
              shape="RoundedBorder12"
              size="sm"
              variant="OutlineBluegray9004c"
            >
              Log In
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[53%] md:w-full">
              <Text
                className="text-bluegray_900 text-left"
                as="h1"
                variant="h1"
              >
                <>
                  Contracting With a Security <br />
                  Services Provider
                </>
              </Text>
              <Text
                className="mt-[29px] text-black_900 text-left"
                as="h5"
                variant="h5"
              >
                <>
                  Getting ready to procure managed services to help support or
                  augment your security team? You’re not alone: 62% of
                  organizations said they plan to outsource some or all of their
                  IT security functions in 2022, according to the Foundry.Before
                  going down that route, it’s wise to gather your requirements
                  and think about the services you want from a managed security
                  services provider (MSSP).
                  <br />
                  There are a several basic considerations when choosing your
                  service provider, including: the MSSP’s experience, the types
                  of support and services they offer, and how their service
                  level agreements are structured. You’ll also want to know the
                  MSSP’s specific domains of expertise and how they correlate
                  with your needs.
                </>
              </Text>
              <div className="md:h-[130px] h-[98px] mt-8 relative w-[33%]">
                <Text
                  className="font-medium m-auto text-black_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Read More
                </Text>
                <div className="absolute border-2 border-bluegray_900 border-solid h-[98px] inset-[0] justify-center m-auto rounded-[12px] shadow-bs w-full"></div>
              </div>
            </div>
            <Img
              src="images/img_unsplash6uneklgrjps.png"
              className="h-[710px] sm:h-auto md:ml-[0] ml-[5px] object-cover rounded-[20px] w-[47%] md:w-full"
              alt="unsplash6uneklg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MacBookPro14OnePage;
