import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  LanguageWithProficiency,
  ProficiencyLevel,
  ApplicationFormData,
} from "../forms/types";
import { availableLanguages, countries } from "../forms/formConstants";
import { TooltipProvider } from "@/components/ui/tooltip";
import { submitFormToApi } from "@/utils/formSubmission";
import PersonalInfoSection from "../forms/PersonalInfoSection";
import LanguageSelector from "../forms/LanguageSelector";
import { useRouter } from "next/navigation";

const MobileFormContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneCountryCode: "",
    age: "",
    country: "",
    nativeLanguage: "",
    gender: "",
  });

  const [languagesWithProficiency, setLanguagesWithProficiency] = useState<
    LanguageWithProficiency[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedProficiency, setSelectedProficiency] =
    useState<ProficiencyLevel>("conversational");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLanguage = () => {
    if (
      selectedLanguage &&
      selectedProficiency &&
      !languagesWithProficiency.some(
        (item) => item.language === selectedLanguage
      )
    ) {
      setLanguagesWithProficiency((prev) => [
        ...prev,
        { language: selectedLanguage, proficiency: selectedProficiency },
      ]);
      setSelectedLanguage("");
      setSelectedProficiency("conversational");
    }
  };

  const handleRemoveLanguage = (language: string) => {
    setLanguagesWithProficiency((prev) =>
      prev.filter((item) => item.language !== language)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate at least one language is selected
    if (languagesWithProficiency.length === 0) {
      toast.error("Please select at least one language");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitFormToApi({
        ...formData,
        languages: languagesWithProficiency,
      });

      if (result.success) {
        console.log("Lead captured successfully:", result.leadId);
        toast.success("Application submitted successfully!");

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          phoneCountryCode: "",
          age: "",
          country: "",
          nativeLanguage: "",
          gender: "",
        });
        setLanguagesWithProficiency([]);

        // Redirect to thank you page
        router.push("/thank-you");
      } else {
        console.error("API error:", result.error);
        toast.error(
          result.error ||
            "There was an error submitting your application. Please try again."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <TooltipProvider>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Personal Information
            </h3>
            <PersonalInfoSection
              formData={formData}
              countries={countries}
              availableLanguages={availableLanguages}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Language Skills
            </h3>
            <LanguageSelector
              availableLanguages={availableLanguages}
              languagesWithProficiency={languagesWithProficiency}
              selectedLanguage={selectedLanguage}
              selectedProficiency={selectedProficiency}
              setSelectedLanguage={setSelectedLanguage}
              setSelectedProficiency={setSelectedProficiency}
              handleAddLanguage={handleAddLanguage}
              handleRemoveLanguage={handleRemoveLanguage}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#00a76f] to-[#0a8b9e] hover:from-[#00a76f]/90 hover:to-[#0a8b9e]/90 text-white py-6 text-lg rounded-lg shadow-md transition-colors flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </div>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </TooltipProvider>
    </div>
  );
};

export default MobileFormContainer;
