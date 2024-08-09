import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <main
      className="bg-black w-full h-max flex justify-center items-center py-20"
      id="contact"
    >
      <CardSpotlight className="h-max w-[90vw] md:w-[70vw] flex justify-center items-center flex-col gap-10 ">
        <div className="py-3 px-8 border-b border-b-white/[0.6]  z-50">
          <p className="text-6xl font-poppins font-semibold relative mt-2 text-transparent bg-gradient-to-r from-purple-300 to-white bg-clip-text">
            Contact Now
          </p>
          <span className="font-inter font-normal text-sm text-transparent bg-gradient-to-r from-purple-200 to-white bg-clip-text">
            Feel free to get in touch!
          </span>
        </div>
        <ContactForm />
      </CardSpotlight>
    </main>
  );
};

export default Contact;
