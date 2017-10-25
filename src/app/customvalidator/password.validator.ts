import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl) {
    if (control.value.length <= 4 || control.value.length >= 10) {
        return { passwordValid: false };
    }
    return null;
}
