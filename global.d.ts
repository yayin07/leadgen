// src/global.d.ts
export {};

declare global {
  interface Window {
    openMobileApplicationForm: () => void;
  }
}
