export const validateField = (value: any, validationRules?: string[]): string | null => {
  if (!validationRules) return null;

  for (const rule of validationRules) {
    switch (rule) {
      case 'required':
        if (!value || value.trim() === '') {
          return 'This field is required';
        }
        break;
      case 'email':
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'minLength':
        if (value.length < 6) {
          return 'Minimum length should be 6 characters';
        }
        break;
      case 'maxLength':
        if (value.length > 255) {
          return 'Maximum length should be 255 characters';
        }
        break;
      default:
        return null;
    }
  }

  return null;
};