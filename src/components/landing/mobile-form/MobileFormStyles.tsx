import React from "react";

export const MobileFormStyles: React.FC = () => (
  <style>
    {`
      /* Mobile Form Container */
      .mobile-form-container {
        padding: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: hidden !important;
      }
      
      .mobile-form-container .container {
        padding: 0 1rem !important;
        margin: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      
      .mobile-form-container .bg-white {
        box-shadow: none !important;
        border: none !important;
        border-radius: 0 !important;
        margin-bottom: 0 !important;
        padding: 1rem 0 8rem !important;
        width: 100% !important;
      }
      
      /* Section Titles and Labels */
      .mobile-form-container h2 {
        font-size: 1.5rem !important;
        font-weight: 700 !important;
        margin-bottom: 0.75rem !important;
        padding: 0 0.5rem !important;
      }
      
      .mobile-form-container .text-center {
        text-align: left !important;
        padding: 0 1rem !important;
        margin-bottom: 1.5rem !important;
      }
      
      .mobile-form-container label {
        font-size: 1rem !important;
        font-weight: 600 !important;
        margin-bottom: 0.5rem !important;
        display: block !important;
      }
      
      /* Form Fields - Larger Touch Targets */
      .mobile-form-container input,
      .mobile-form-container select,
      .mobile-form-container button[role="combobox"],
      .mobile-form-container [class*="SelectTrigger"] {
        font-size: 1rem !important;
        height: 3.5rem !important; /* Larger touch targets */
        border-radius: 0.5rem !important;
        border-width: 1px !important;
        padding: 0 1rem !important;
        width: 100% !important;
        max-width: 100% !important;
        background-color: #ffffff !important;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05) !important;
      }
      
      /* Full Width Inputs */
      .mobile-form-container .space-y-2,
      .mobile-form-container .grid,
      .mobile-form-container .grid > div {
        width: 100% !important;
        max-width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      
      /* Grid Layouts - Stack Everything */
      .mobile-form-container .grid.grid-cols-1.md\\:grid-cols-2,
      .mobile-form-container .grid.grid-cols-1 {
        display: flex !important;
        flex-direction: column !important;
        gap: 1.25rem !important;
        width: 100% !important;
      }
      
      /* Form Section Spacing */
      .mobile-form-container .space-y-6 > div {
        margin-bottom: 1.5rem !important;
        border-bottom: 8px solid #f5f5f5 !important;
        padding-bottom: 1.5rem !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      
      .mobile-form-container .space-y-6 > div:last-child {
        border-bottom: none !important;
      }
      
      /* Language Skills Section */
      .mobile-form-container .card {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      
      .mobile-form-container .card-content {
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      
      /* Added Languages Section - Fix visibility */
      .mobile-form-container [class*="grid-cols-1 sm\\:grid-cols-2 md\\:grid-cols-3"] {
        display: grid !important;
        grid-template-columns: 1fr !important;
        width: 100% !important;
        max-width: 100% !important;
        gap: 0.75rem !important;
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
      }
      
      /* Language Skills Cards */
      .mobile-form-container .grid.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-3 {
        display: flex !important;
        flex-direction: column !important;
        flex-wrap: nowrap !important;
        gap: 0.75rem !important;
        width: 100% !important;
        max-width: 100% !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
      }
      
      .mobile-form-container .grid.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-3 > div {
        flex: 1 0 auto !important;
        min-height: 3.5rem !important;
        width: 100% !important;
        max-width: 100% !important;
        display: flex !important;
        margin-bottom: 0.5rem !important;
      }
      
      /* Language Add Controls */
      .mobile-form-container .grid.grid-cols-1.md\\:grid-cols-2.gap-4 {
        display: flex !important;
        flex-direction: column !important;
        gap: 1.25rem !important;
        margin-bottom: 1rem !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      
      /* Add Language Button */
      .mobile-form-container .card button {
        width: 100% !important;
        height: 3.5rem !important; 
        border-radius: 0.5rem !important;
        font-size: 1rem !important;
        font-weight: 600 !important;
        max-width: 100% !important;
      }
      
      /* Better Submit Button */
      .mobile-form-container [type="submit"] {
        position: fixed !important;
        bottom: 1rem !important;
        left: 1rem !important;
        right: 1rem !important;
        width: calc(100% - 2rem) !important;
        max-width: calc(100% - 2rem) !important;
        border-radius: 0.75rem !important;
        font-size: 1.125rem !important;
        font-weight: 600 !important;
        height: 4rem !important;
        z-index: 50 !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
      }
      
      /* Remove Container Padding */
      .mobile-form-container > .container {
        padding: 0 !important;
        max-width: 100% !important;
        width: 100% !important;
        overflow-x: hidden !important;
      }
      
      /* Remove Extra Spacing */
      .mobile-form-container section {
        padding: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: hidden !important;
      }
      
      /* Language Selection Description */
      .mobile-form-container .text-sm.text-muted-foreground {
        font-size: 0.875rem !important;
        color: #6b7280 !important;
        padding: 0.25rem 0 !important;
      }
      
      /* Fix for language cards display - remove X button issues */
      .mobile-form-container .rounded-md.border.flex {
        display: flex !important;
        padding: 0.75rem !important;
        align-items: center !important;
        justify-content: space-between !important;
        border-radius: 0.5rem !important;
        width: 100% !important;
        max-width: 100% !important;
        background-color: #f9fafb !important;
        position: relative !important;
      }
      
      /* Fix language name display */
      .mobile-form-container .rounded-md.border.flex .max-w-\\[80\\%\\] {
        max-width: 70% !important;
        width: 70% !important;
      }
      
      /* Make sure X button is properly styled and positioned */
      .mobile-form-container .rounded-md.border.flex button {
        height: 2rem !important;
        width: 2rem !important;
        min-width: 2rem !important;
        padding: 0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background-color: transparent !important;
        border-radius: 0.375rem !important;
        position: absolute !important;
        right: 0.5rem !important;
      }
      
      /* Make sure X icon is visible */
      .mobile-form-container .rounded-md.border.flex button svg {
        width: 1rem !important;
        height: 1rem !important;
        color: #6b7280 !important;
      }
      
      /* Full Width Container Adjustments */
      .mobile-form-container .container.max-w-3xl {
        padding: 0 1rem !important;
        margin: 0 !important;
        max-width: 100% !important;
        width: 100% !important;
        overflow-x: hidden !important;
      }
      
      /* Fix Select Dropdown positioning for mobile */
      [role="listbox"] {
        width: calc(100vw - 2rem) !important;
        max-width: calc(100vw - 2rem) !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
      }
      
      /* Fix Select Dropdown overflow */
      [data-radix-select-viewport] {
        max-height: 60vh !important; 
        padding: 0.5rem !important;
      }
      
      /* Fix horizontal overflow */
      .mobile-form-container form,
      .mobile-form-container form > div {
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: hidden !important;
      }
      
      /* Absolutely prevent horizontal scrolling */
      .mobile-form-container {
        overflow-x: hidden !important;
        max-width: 100vw !important;
        width: 100% !important;
        box-sizing: border-box !important;
        position: relative !important;
      }
      
      /* Fix for language selector to prevent horizontal scroll */
      .mobile-form-container [class*="SelectTrigger"] [class*="SelectValue"] {
        max-width: 85% !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
      
      /* Ensure form width doesn't exceed viewport */
      .mobile-form-container > section {
        width: 100vw !important;
        max-width: 100vw !important;
        overflow-x: hidden !important;
        padding: 0 !important;
      }
      
      /* Prevent select components from overflowing */
      .mobile-form-container [class*="SelectContent"] {
        width: 80vw !important;
        max-width: 80vw !important;
      }

      /* Make added languages section more visible */
      .mobile-form-container .mt-6 {
        margin-top: 1.5rem !important;
        border-top: 1px solid #e5e7eb !important;
        padding-top: 1.5rem !important;
        width: 100% !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
      }

      /* Ensure added languages container is properly displayed */
      .mobile-form-container .mt-6 > .grid {
        display: flex !important;
        flex-direction: column !important;
        width: 100% !important;
        gap: 0.75rem !important;
        margin-top: 0.5rem !important;
        padding: 0 !important;
      }
      
      /* IMPORTANT FIX: Language item card styling */
      .mobile-form-container .mt-6 .rounded-md.border.flex {
        display: flex !important;
        flex-direction: row !important;
        justify-content: space-between !important;
        align-items: center !important;
        width: 100% !important;
        padding: 0.75rem 1rem !important;
        margin-bottom: 0.5rem !important;
        background-color: #f9fafb !important;
        position: relative !important;
        min-height: 3rem !important;
      }
      
      /* Fix the Added Languages section label */
      .mobile-form-container .mt-6 .mb-2.block {
        display: block !important;
        margin-bottom: 0.75rem !important;
        font-size: 1rem !important;
        font-weight: 600 !important;
        color: #374151 !important;
      }
      
      /* Fix font display in added languages - critical fix */
      .mobile-form-container .rounded-md.border.flex .font-medium {
        font-size: 0.9rem !important;
        display: block !important;
        width: 100% !important;
        max-width: 80% !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        color: #374151 !important;
      }
      
      /* Fix language card content display */
      .mobile-form-container .rounded-md.border.flex .max-w-[80%] {
        display: block !important;
        width: 75% !important; 
        max-width: 75% !important;
        overflow: visible !important;
        padding-right: 2.5rem !important;
      }
      
      /* Fix proficiency level display in language cards */
      .mobile-form-container .rounded-md.border.flex .text-xs {
        font-size: 0.75rem !important;
        color: #6b7280 !important;
        display: block !important;
        width: 100% !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }
      
      /* Ensure X button doesn't overlap text */
      .mobile-form-container .rounded-md.border.flex button.h-8.w-8 {
        position: absolute !important;
        right: 0.5rem !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 2 !important;
      }
      
      /* Add more explicit styling to make added language cards clear */
      .mobile-form-container .mt-6 .grid > div {
        width: 100% !important;
        display: block !important;
        position: relative !important;
        border: 1px solid #e5e7eb !important;
        border-radius: 0.5rem !important;
        margin-bottom: 0.5rem !important;
        background: #ffffff !important;
      }
      
      /* Improve Added Languages section visibility */
      .mobile-form-container .mt-6 {
        background-color: #f3f4f6 !important;
        padding: 1rem !important;
        border-radius: 0.5rem !important;
        margin-left: 1rem !important;
        margin-right: 1rem !important;
        width: calc(100% - 2rem) !important;
        border: 1px solid #e5e7eb !important;
      }
    `}
  </style>
);
