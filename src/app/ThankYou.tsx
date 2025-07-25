"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const ThankYou = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h1>
            <p className="text-gray-600">
              Your application has been submitted successfully. We'll review
              your information and get back to you within 48 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">What's Next?</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• We'll review your application</li>
                <li>• Our team will contact you within 48 hours</li>
                <li>• You'll receive next steps via email</li>
              </ul>
            </div>

            <Button
              onClick={() => router.push("/")}
              className="w-full bg-gradient-to-r from-argos-green to-argos-teal hover:from-argos-green/90 hover:to-argos-teal/90 text-white"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
