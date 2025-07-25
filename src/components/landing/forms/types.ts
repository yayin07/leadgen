
// Proficiency level types
export type ProficiencyLevel = 'native' | 'fluent' | 'conversational';

// Language with proficiency
export interface LanguageWithProficiency {
  language: string;
  proficiency: ProficiencyLevel;
}

export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  age: string;
  country: string;
  nativeLanguage: string;
  gender: string;
}

export interface CountryOption {
  value: string;
  label: string;
  flag?: string;
  calling_code?: string;
}

export interface ProficiencyLevelOption {
  value: ProficiencyLevel;
  label: string;
  description: string;
}
