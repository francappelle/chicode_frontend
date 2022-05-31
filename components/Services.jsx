import React from "react";
import ServicesItem from "./ServicesItem";

const Services = (props) => {
  return (
    <div id="services" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#587B7F]">
          Services
        </p>
        <h2 className="py-4">What can I do for you</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <ServicesItem
            title={"Web Developement"}
            serviceUrl={
              "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
            }
            description="I will help you to build a website that will be easy to use and responsive."
          />

          <ServicesItem
            title={"Social Media Management"}
            serviceUrl={
              "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178"
            }
            description="I will help you to manage your social media accounts and make them more effective."
          />

          <ServicesItem
            title={"Consulting"}
            serviceUrl={
              "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
            }
            description="I will help you to make your business more efficient and profitable."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
