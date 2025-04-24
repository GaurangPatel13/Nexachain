import React from "react";
import nexa from "/assets/Home/homehero/nexachainhome.png";
import savingsimg1 from "/assets/Product/savings/savingsimg1.png";
import savingsimg2 from "/assets/Product/savings/savingsimg2.png";

const Savings = () => {
  return (
    <div className="relative">
      <div className="xl:px-30">
        <div className="relative pt-14 lg:px-10 px-4">
          <div className="bg-white flex flex-col md:flex-row">
            <div className="md:w-1/3 w-full">
              <div className="flex flex-col items-end relative lg:-left-10 -left-5 md:-left-6 md:-top-6 font-manrope lg:-top-8 -top-8 space-y-3">
                <div className="w-84 md:w-70 lg:w-84 rounded overflow-hidden">
                  <img src={savingsimg1} className="w-full h-auto" alt="" />
                </div>
                <div>
                  <h6 className="font-semibold">Dr. Rajat Pradhan</h6>
                  <p className="text-[#808080] text-xs">
                    Senior Brand Specialist
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAFA] w-full p-7 after:h-4 after:w-54 after:bg-[#EDC903] after:absolute after:bottom-0 after:right-0">
              <img src={nexa} className="pb-5" alt="" />
              <div className="flex items-center gap-3">
                <div className="font-manrope space-y-5">
                  <p>
                    Our presence is now completely virtual, allowing us to save
                    a significant amount of money by utilizing Nexachain.ai
                    Projects. This powerful platform has streamlined our
                    operations, making remote collaboration seamless and
                    efficient.
                  </p>
                  <p>
                    <span className="text-[#E80053] font-semibold">
                      Cost Savings and Efficiency
                    </span>
                    <br />
                    By leveraging Nexachain.ai, we have reduced overhead costs
                    while maintaining productivity. The platform’s intuitive
                    interface and automation capabilities have optimized our
                    workflow, ensuring smooth project execution.
                  </p>
                  <p>
                    <span className="text-[#E80053] font-semibold">
                      Continuous Improvement
                    </span>
                    <br />
                    One of the standout features of Nexachain.ai is its
                    commitment to continuous evolution and improvement. Regular
                    updates introduce new features, enhance security, and refine
                    user experience, making it an indispensable tool for our
                    virtual operations.
                    <br />
                    With Nexachain.ai, we have embraced a smarter way to work,
                    ensuring efficiency and innovation in our virtual
                    environment.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={savingsimg2}
              className="absolute left-1/3 -translate-x-1/3 w-14 top-8"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="space-y-5 w-full hidden md:block absolute left-0 bottom-2">
        <div className="h-4 w-1/6 2xl:w-1/7 rounded-r-full bg-[#E80053]"></div>
        <div className="h-4 w-1/4 2xl:w-1/5 rounded-r-full bg-[#2BBD81]"></div>
        <div className="h-4 w-1/3 2xl:w-1/4 rounded-r-full bg-[#8743FF]"></div>
      </div>
      {/* <div className="h-4 w-54 bg-[#EDC903] absolute bottom-0 right-20"></div> */}
    </div>
  );
};

export default Savings;
