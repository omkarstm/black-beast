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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log("Form submitted", formData);
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact py-12 mt-12">
        <div className="container mx-auto">
        <h2 className="font-bold text-white text-center text-[30px]">Contact us</h2>
            <Card className="max-w-md mx-auto mt-8">
                <CardHeader>
                    <CardTitle className="text-2xl text-center"></CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block  font-medium text-gray-700">
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
                            <label htmlFor="email" className="block  font-medium text-gray-700">
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
                            <label htmlFor="message" className="block  font-medium text-gray-700">
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
                        <Button type="submit" className="w-full py-6 bg-black">
                            Send Message
                        </Button>
                    </form>
                </CardContent>
            </Card>
                                </div>
        </div>
    );
};

export default Contact;
