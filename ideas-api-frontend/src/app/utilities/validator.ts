import { AbstractControl } from '@angular/forms';

export const validateWhitespace = (controle: AbstractControl) => {
    let isWhitespace = (controle.value || '').trim().length === 0;
    let isValid = !isWhitespace;

    return isValid ? null : {trimmed: true};
}