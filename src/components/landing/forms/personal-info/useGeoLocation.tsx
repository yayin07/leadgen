import { useState, useEffect } from "react";
import { CountryOption } from "../types";

interface UseGeoLocationProps {
  formData: {
    country: string;
    phoneCountryCode: string;
  };
  countries: CountryOption[];
  handleSelectChange: (name: string, value: string) => void;
}

export const useGeoLocation = ({
  formData,
  countries,
  handleSelectChange,
}: UseGeoLocationProps) => {
  const [userCountry, setUserCountry] = useState<string>("");

  // Get user's country based on IP address
  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code?.toLowerCase() || "";

        if (countryCode && !formData.country) {
          setUserCountry(countryCode);
          handleSelectChange("country", countryCode);

          // Find the country's calling code
          const country = countries.find((c) => c.value === countryCode);
          if (country?.calling_code && !formData.phoneCountryCode) {
            handleSelectChange("phoneCountryCode", country.calling_code);
          }
        }
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    if (!formData.country || !formData.phoneCountryCode) {
      getUserLocation();
    }
  }, []);

  return { userCountry };
};
