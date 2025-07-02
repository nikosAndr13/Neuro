import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Star, ArrowRight } from "lucide-react";

interface SuccessPopupProps {
  message: string;
  testimonial: {
    text: string;
    name: string;
    rating: number;
  };
  onContinue: () => void;
  onClose: () => void;
}

export default function SuccessPopup({
  message,
  testimonial,
  onContinue,
  onClose,
}: SuccessPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
      <Card className="max-w-md w-full bg-white shadow-2xl">
        <CardContent className="p-0">
          <div className="relative p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                You're Not Alone
              </h3>
              <p className="text-gray-600">{message}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">Trustpilot</span>
              </div>
              <p className="text-sm text-gray-700 italic mb-2">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium text-gray-800">
                {testimonial.name}
              </p>
            </div>

            <Button
              onClick={onContinue}
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
            >
              Continue Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
