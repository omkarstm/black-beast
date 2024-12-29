"use client";

import { Eye, Move, Signature, Smile } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Booking: React.FC = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // State for modal visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const MapLocation =
    "https://www.google.com/maps/dir//Black+beasts,+Dumra+Rd,+Sitamarhi,+Bihar+843302/@26.5690423,85.5064268,16.71z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ecf12b325eeb7f:0xe8c1fa5b7976cada!2m2!1d85.5094058!2d26.5694704?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D";
  const category = "All Vehicle".replace(/ /g, "-");

  const handleSubmitReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.f.com/submit", {
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
        setFormData({ name: "", email: "", review: "" });
        setIsReviewModalOpen(false);
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
    <div className="py-14 mt-20">
      <div className="container text-center">
        <h2 className="font-bold text-[30px]">How to book car</h2>
        <div className="md:w-1/2 mt-12 flex justify-center md:justify-between gap-6 md:gap-0 items-center">
          <div className="w-32 flex flex-col items-center">
            <div className="rounded-full shadow-lg p-6 w-fit">
              <Link href={`price?category=${category}`}>
                <Eye size={40} />
              </Link>
            </div>
            <p className="mt-2 text-medium">See Vehicle on our website</p>
          </div>
          <div className="border border-[#000] w-1/2 h-fit border-dashed hidden md:block"></div>
          <div className="w-32 flex flex-col items-center">
            <div className="rounded-full shadow-lg p-6 w-fit">
              <Link href={MapLocation} target="_blank">
                <Move size={40} />
              </Link>
            </div>
            <p className="mt-2 text-medium">Visit to our location</p>
          </div>
        </div>
        <div className="w-11/12 hidden md:flex justify-center items-center h-[200px]">
          <div className="border border-[#000] h-3/5 border-dashed"></div>
        </div>
        <div className="w-full flex md:justify-end mt-4 md:mt-0">
          <div className="w-full md:w-3/5 md:ps-2 flex justify-center md:justify-between gap-6 md:gap-0 items-center gap-12">
            <div className="w-32 flex flex-col items-center">
              <div className="rounded-full shadow-lg p-6 w-fit">
                <Signature size={40} />
              </div>
              <p className="mt-2 text-medium">Sign the legal document</p>
            </div>
            <div className="border border-[#000] w-1/2 h-fit hidden md:block border-dashed"></div>
            <div className="w-32 flex flex-col items-center">
              <div
                className="rounded-full shadow-lg p-6 w-fit cursor-pointer"
                onClick={() => setIsReviewModalOpen(true)}
              >
                <Smile size={40} />
              </div>
              <p className="mt-2 text-medium">Take the car</p>
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Your Review</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmitReview} className="flex flex-col gap-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              placeholder="Your Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Textarea
              placeholder="Write your review here..."
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            />
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsReviewModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Booking;
