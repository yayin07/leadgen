import React from "react";
import { ApplicationFormData, CountryOption } from "./types";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useGeoLocation } from "./personal-info/useGeoLocation";
import NameInputs from "./personal-info/NameInputs";
import ContactInputs from "./personal-info/ContactInputs";
import AgeCountryInputs from "./personal-info/AgeCountryInputs";
import LanguageGenderInputs from "./personal-info/LanguageGenderInputs";

interface PersonalInfoSectionProps {
  formData: ApplicationFormData;
  countries: CountryOption[];
  availableLanguages: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  formData,
  countries,
  availableLanguages,
  handleChange,
  handleSelectChange,
}) => {
  const { userCountry } = useGeoLocation({
    formData,
    countries,
    handleSelectChange,
  });

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <NameInputs
          firstName={formData.firstName}
          lastName={formData.lastName}
          handleChange={handleChange}
        />

        <ContactInputs
          email={formData.email}
          phone={formData.phone}
          phoneCountryCode={formData.phoneCountryCode}
          userCountry={userCountry}
          countries={countries}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />

        <AgeCountryInputs
          age={formData.age}
          country={formData.country}
          countries={countries}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />

        <LanguageGenderInputs
          nativeLanguage={formData.nativeLanguage}
          gender={formData.gender}
          availableLanguages={availableLanguages}
          handleSelectChange={handleSelectChange}
        />
      </div>
    </TooltipProvider>
  );
};

export default PersonalInfoSection;
