export interface LanguageProficiency {
  language: string;
  proficiency: string;
}

export interface FormSubmissionData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  age: string;
  country: string;
  nativeLanguage: string;
  gender: string;
  languages: LanguageProficiency[];
}

export interface ApiResponse {
  success: boolean;
  leadId?: string;
  error?: string;
  message?: string;
}

export const submitFormToApi = async (
  formData: FormSubmissionData
): Promise<ApiResponse> => {
  try {
    console.log('🚀 Starting form submission process...');
    console.log('📋 Form data being submitted:', {
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`,
      country: formData.country,
      languageCount: formData.languages.length,
    });

    const apiPayload = {
      apiKey: 'lgp_lgl7cjvxw6yxh6l4xtwbslk7ykuhl4xj17lv45bzucyp9y90satt5pehbohj7d4loowvke6tai9k3ynetggngkg7ek23x29ewe34ln91ysjbymudfc2fxvp9mos7z39o',
      formData: {
        ...formData,
        fullName: `${formData.firstName} ${formData.lastName}`,
      },
    };

    console.log('📤 Making request to edge function...');
    console.log(
      '🎯 API endpoint:',
      'https://grsneynobvvtebvsvusb.supabase.co/functions/v1/universal-form-submit'
    );

    const response = await fetch(
      'https://grsneynobvvtebvsvusb.supabase.co/functions/v1/universal-form-submit',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
      }
    );

    console.log('📥 Response received:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    });

    const responseHeaders = Object.fromEntries(response.headers.entries());
    console.log('📋 Response headers:', responseHeaders);

    let result: ApiResponse;
    try {
      const responseText = await response.text();
      console.log('📝 Raw response text:', responseText);

      result = JSON.parse(responseText) as ApiResponse;
      console.log('✅ Parsed API response:', result);
    } catch (parseError) {
      console.error('💥 Failed to parse response JSON:', parseError);
      return {
        success: false,
        error: 'Invalid response from server',
      };
    }

    if (response.ok && result.success) {
      console.log('🎉 Form submission successful!');
      console.log('🎯 Lead ID generated:', result.leadId);

      return {
        success: true,
        leadId: result.leadId,
        message: result.message,
      };
    } else {
      console.error('❌ API returned error:', {
        status: response.status,
        error: result.error,
        message: result.message,
      });

      return {
        success: false,
        error: result.error || 'Unknown error occurred',
      };
    }
  } catch (error: unknown) {
    console.error('💥 Network error during form submission:', error);

    // Safe extraction of error properties
    const errorMessage =
      error && typeof error === 'object' && 'message' in error && typeof (error as any).message === 'string'
        ? (error as any).message
        : 'Network error. Please check your connection and try again.';

    return {
      success: false,
      error: errorMessage,
    };
  }
};
