import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { availableLanguages, countries } from "./forms/formConstants";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ApplicationFormData,
  LanguageWithProficiency,
  ProficiencyLevel,
} from "./forms/types";
import { submitFormToApi } from "@/utils/formSubmission";
import PersonalInfoSection from "./forms/PersonalInfoSection";
import LanguageSelector from "./forms/LanguageSelector";
import { useRouter } from "next/navigation";

const ApplicationForm = () => {
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
    <section
      id="application-form"
      className="py-16 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden"
    >
      <div
        className="container mx-auto
       max-w-3xl w-full px-4 md:px-0 overflow-x-hidden"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-[#1e7a7a]">
            Apply Now - Takes Less Than 2 Minutes!
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill out this quick form to start your application process. We'll
            review your information and get back to you within 48 hours.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-x-hidden w-full">
          <TooltipProvider>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 w-full overflow-x-hidden"
            >
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
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

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
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

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00a76f] to-[#0a8b9e] hover:from-[#00a76f]/90 hover:to-[#0a8b9e]/90 text-white py-7 text-lg rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
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
              </div>
            </form>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
