"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "ad2b65d6-6705-4838-ba36-3a6f5f6f845b", 
                    ...formData,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setError(result.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please check your network and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact py-12 mt-12" id="contact">
            <div className="container mx-auto">
                <h2 className="font-bold text-white text-center text-[30px]">Contact us</h2>
                <Card className="max-w-md mx-auto mt-8 min-h-[400px]">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">We'd love to hear from you!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isSubmitted ? (
                            <div className="text-center">Thank you! Your message has been sent.</div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {error && <div className="text-red-500 text-center">{error}</div>}
                                <div>
                                    <label htmlFor="name" className="block font-medium text-gray-700">
                                        Name
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                        className="py-5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block font-medium text-gray-700">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email"
                                        className="py-5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block font-medium text-gray-700">
                                        Message
                                    </label>
                                    <Textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Type your message"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full py-6"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Contact;
