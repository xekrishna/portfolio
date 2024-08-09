"use client";

import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import MagicButton from "./button";
import { SpriteNodeMaterial } from "three/webgpu";

const inputProps = "font-poppins bg-[#111111] tracking-wider";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstname, lastname, email, reason, message } = formData;
    console.log(formData);

    if (firstname && lastname && email && reason && message) {
      setSubmitted(true);
      console.log("Form submitted");
    } else {
      console.log("Please fill all the fields");
    }
  };

  return (
    <form
      className="z-50 w-full h-full flex flex-col gap-5 justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between items-center md:h-10">
        <div className="w-[40%] md:w-[20%] h-full flex items-center md:border-r border-r-white/[0.6]">
          <p className="font-poppins">Personal Details</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-[12rem] md:w-[40rem] h-full md:gap-5">
          <LabelInputContainer>
            <Label htmlFor="firstname" />
            <Input
              id="firstname"
              placeholder="First Name"
              type="text"
              className={inputProps}
              value={formData.firstname}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" />
            <Input
              id="lastname"
              placeholder="Last Name"
              type="text"
              className={inputProps}
              value={formData.lastname}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="md:w-[20%] w-[40%]  md:h-10 flex items-center md:border-r border-r-white/[0.6]">
          <p className="font-poppins">Email</p>
        </div>
        <LabelInputContainer className="w-[12rem] md:w-[40rem] h-full">
          <Label htmlFor="email" />
          <Input
            id="email"
            placeholder="Your Email"
            type="text"
            className={inputProps}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
      </div>
      <div className="flex justify-between items-start h-max md:h-10">
        <div className="w-[40%] md:w-[20%]   flex items-center md:border-r md:border-r-white/[0.6]">
          <p className="font-poppins">Reason for Contact</p>
        </div>
        <LabelInputContainer className="w-[12rem] md:w-[40rem] h-full">
          <Label htmlFor="reason" />
          <Input
            id="reason"
            placeholder="Your Reason"
            type="text"
            className={inputProps}
            value={formData.reason}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
      </div>
      <div className="flex justify-between items-start md:h-10">
        <div className="md:w-[20%] w-[40%]  flex items-center md:border-r border-r-white/[0.6]">
          <p className="font-poppins">Message</p>
        </div>
        <LabelInputContainer className="w-[12rem] md:w-[40rem] h-full">
          <Label htmlFor="message" />
          <Input
            id="message"
            placeholder="Your Message"
            type="text"
            className={inputProps}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
      </div>
      <div className="w-full flex justify-center items-center pt-5">
        {!submitted ? (
          <MagicButton title="Send Mail" buttonClasses="max-w-[18rem]" />
        ) : (
          <MagicButton
            title="Mail Sent!"
            buttonClasses="bg-white/[0.9] text-black max-w-[18rem]"
          />
        )}
      </div>
    </form>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm;
