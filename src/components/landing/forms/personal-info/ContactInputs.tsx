import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryOption } from "../types";

interface ContactInputsProps {
  email: string;
  phone: string;
  phoneCountryCode: string;
  userCountry: string;
  countries: CountryOption[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const ContactInputs: React.FC<ContactInputsProps> = ({
  email,
  phone,
  phoneCountryCode,
  userCountry,
  countries,
  handleChange,
  handleSelectChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
          className="h-12 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium">
          Phone Number
        </Label>
        <div className="flex">
          <div className="w-1/3 mr-2">
            <Select
              value={phoneCountryCode}
              onValueChange={(value) =>
                handleSelectChange("phoneCountryCode", value)
              }
            >
              <SelectTrigger className="h-12 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 transition-all">
                <SelectValue placeholder="+1" />
              </SelectTrigger>
              <SelectContent className="max-h-[240px]">
                {countries
                  .filter((country) => country.calling_code)
                  .sort((a, b) => {
                    // Sort countries, putting user's country first
                    if (a.value === userCountry) return -1;
                    if (b.value === userCountry) return 1;
                    return a.label.localeCompare(b.label);
                  })
                  .map((country) => (
                    <SelectItem
                      key={`${country.value}-calling-code`}
                      value={country.calling_code || ""}
                      className="flex items-center py-2.5"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{country.flag || ""}</span>
                        <span>{country.calling_code || ""}</span>
                      </div>
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-2/3 h-12 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 transition-all"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInputs;
