"use client";

import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../../lib/utils";
import axios from "axios";
import { BorderBeam } from "./ui/border-beam";
import { Textarea } from "./ui/textarea";
import { SparklesText } from "./ui/sparkles-text";
import { TextAnimate } from "./ui/text-animate";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");
    const [responseType, setResponseType] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone, subject, message } = formData;

        if (!name || !email || !phone || !subject || !message) {
            setResponseType("error");
            setResponseMsg("Please fill out all fields");
            return;
        }

        setLoading(true);
        setResponseMsg("");
        setResponseType("");

        try {
            const res = await axios.post("https://backend-nextjs-portfolio-2.onrender.com/api/contact", formData);
            if (res.data.success) {
                setResponseType("success");
                setResponseMsg("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
                setTimeout(() => {
                    setResponseMsg("");
                    setResponseType("");
                }, 3000);
            } else {
                setResponseType("error");
                setResponseMsg("Failed to send message. Try again");
                setTimeout(() => {
                    setResponseMsg("");
                    setResponseType("");
                }, 3000);
            }
        } catch (err) {
            console.error(err);
            setResponseType("error");
            setResponseMsg("Failed to send message. Try again.");
            setTimeout(() => {
                setResponseMsg("");
                setResponseType("");
            }, 3000);
        }

        setLoading(false);
    };

    useEffect(() => {
        if(responseMsg){
            const timer = setTimeout(() => {
                setResponseMsg("")
                setResponseType("")
            }, 3000);
            return () => clearTimeout(timer)
        }
    }, [responseMsg])

    return (
        <div className="flex flex-col justify-center items-center mt-20" id="contact">
            <SparklesText text="Contact Me" className="text-white mb-10" />
            <div className="relative shadow-input mx-auto w-[90%] sm:w-full max-w-md rounded-md bg-black/60 p-4 md:rounded-2xl md:p-8 dark:bg-black overflow-hidden">
                <BorderBeam duration={4} size={500} reverse className="from-transparent via-cyan-500 to-transparent"/>
                <form className="my-8" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            type="text"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            type="email"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            type="tel"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            type="text"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-6">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={5}
                        />
                    </LabelInputContainer>

                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-b cursor-none from-black to-white/20 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                        <BottomGradient />
                    </button>

                    {responseMsg && (
                        <TextAnimate
                            className={cn(
                                "mt-4 text-center text-md font-semibold font-sub tracking-wider",
                                responseType === "success" ? "text-green-500" : "text-red-500"
                            )}
                            animation="blurInUp"
                            by="word"
                        >
                            {responseMsg}
                        </TextAnimate>
                    )}
                </form>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
