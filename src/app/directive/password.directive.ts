import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appPassword]',
  providers: [{ provide: NG_VALIDATORS, useClass: PasswordDirective, multi: true }]
})
export class PasswordDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null || control.value !== undefined) {
      if (control.value.length <= 3 || control.value.length >= 5) {
        return { passwordValid: false };
      }
    }
    else {
      return null;
    }
  }
}
