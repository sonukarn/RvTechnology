import React from "react";
import { Check } from "lucide-react";

export default function CopilotSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Add Copilot to your Existing Microsoft Plan Now!
        </h2>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Left Side - Pricing */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Microsoft Copilot for Microsoft 365
            </h3>
            <p className="text-gray-800 mb-2">
              <span className="font-medium">Microsoft Pricing: </span>
              <span className="line-through text-gray-500">₹2,495.00</span>{" "}
              user/month
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Embee Pricing: </span>
              <span className="text-blue-700 font-semibold">
                ₹2,371.00
              </span>{" "}
              user/month
            </p>

            <p className="text-sm text-gray-600 mb-1">(Annual commitment)</p>
            <p className="text-sm text-gray-600 mb-6">
              GST extra as applicable
            </p>

            <button className="bg-blue-900 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition">
              Enquire Now
            </button>
          </div>

          {/* Right Side - Features */}
          <div className="flex-1">
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              Achieve more than ever before using AI.
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                Integrated with Teams, Word, Outlook, PowerPoint, Excel, and
                other Microsoft 365 apps
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                AI-powered chat with Microsoft Copilot
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                Connect to your data in third-party apps using Copilot Studio
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                Enterprise-grade security, privacy, and compliance
              </li>
            </ul>

            <p className="text-sm text-gray-600 mt-6">
              A product license for Microsoft 365 Business Standard, Business
              Premium, E3, E5 or Office 365 E3 or E5 is required to purchase
              Copilot for Microsoft 365.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
