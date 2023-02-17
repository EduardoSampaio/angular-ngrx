import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}


export function passwordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
  return (formGroup: AbstractControl) => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });

      return { passwordMismatch: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  }
}


export class CustomValidation {
  static requiredCustom(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(control);
      return control.value == ''
        ? { errorRequired: true }
        : null;
    }
  }

  static message = {
    fieldIsRequired: 'Field is required',
    fieldIsInvalid: 'Field is invalid',
    maxLength: (l: number) => `Maximum string length of ${l} exceeded.`,
    minLength: (l: number) => `Minimum string length of ${l} required.`,
    positiveNumberOnly: 'Positive numbers only',
  };

  static min(min: number, errorMessage: string | null = null): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
        return null; // don't validate empty values to allow optional controls
      }
      const value = parseFloat(control.value);
      const returnData= !isNaN(value) && value < min
        ? {
            min: { min: min, actual: control.value },
            message: errorMessage || CustomValidation.message.fieldIsRequired,
          }
        : null;

        return returnData;
    };
  }

  static max(max: number, errorMessage: string | null = null): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
        return null; // don't validate empty values to allow optional controls
      }
      const value = parseFloat(control.value);
      return !isNaN(value) && value > max
        ? {
            max: { max: max, actual: control.value },
            message: errorMessage || CustomValidation.message.fieldIsRequired,
          }
        : null;
    };
  }

  static mustBePositiveNumber(errorMessage: string | null = null): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return +control.value <= 0
        ? {
            mustBePositiveNumber: true,
            message: errorMessage || CustomValidation.message.fieldIsInvalid,
          }
        : null;
    };
  }

  static greaterThan(
    value: number,
    errorMessage: string | null = null
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return +control.value > value
        ? null
        : {
            greaterThan: true,
            message: errorMessage || CustomValidation.message.fieldIsInvalid,
          };
    };
  }

  static minLength(
    minLength: number,
    errorMessage: string | null = null
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
      }
      const length: number = control.value ? control.value.length : 0;
      return length < minLength
        ? {
            minlength: {
              requiredLength: minLength,
              actualLength: length,
            },
            message: errorMessage || CustomValidation.message.minLength(minLength),
          }
        : null;
    };
  }

  static maxLength(
    maxLength: number,
    errorMessage: string | null = null
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const length: number = control.value ? control.value.length : 0;
      return length > maxLength
        ? {
            maxlength: {
              requiredLength: maxLength,
              actualLength: length,
            },
            message: errorMessage || CustomValidation.message.maxLength(maxLength),
          }
        : null;
    };
  }


  static required(errorMessage: string |null= null): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return isEmptyInputValue(control.value)
        ? {
            required: true,
            message: errorMessage || CustomValidation.message.fieldIsRequired
          }
        : null;
    };
  }
}
