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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { CountryOption } from "../types";

interface AgeCountryInputsProps {
  age: string;
  country: string;
  countries: CountryOption[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const AgeCountryInputs: React.FC<AgeCountryInputsProps> = ({
  age,
  country,
  countries,
  handleChange,
  handleSelectChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <Label htmlFor="age" className="text-sm font-medium">
            Age
          </Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px] text-sm bg-white shadow-lg p-3 border-0">
                <p>You must be at least 18 years old to apply.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Input
          id="age"
          name="age"
          type="number"
          min="18"
          max="120"
          value={age}
          onChange={handleChange}
          placeholder="Must be 18 or older"
          required
          className="h-12 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-[#1e7a7a]/20 transition-all"
          onBlur={(e) => {
            const value = parseInt(e.target.value);
            if (value < 18) {
              e.target.setCustomValidity("You must be at least 18 years old");
              e.target.reportValidity();
            } else {
              e.target.setCustomValidity("");
            }
          }}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="country" className="text-sm font-medium">
          Country
        </Label>
        <Select
          value={country}
          onValueChange={(value) => handleSelectChange("country", value)}
        >
          <SelectTrigger
            id="country"
            className="h-12 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-[#1e7a7a]/20 transition-all"
          >
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent className="max-h-[240px]">
            {countries.map((country) => (
              <SelectItem
                key={country.value}
                value={country.value}
                className="py-2.5"
              >
                {country.flag} {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default AgeCountryInputs;
