import { AbstractControl } from '@angular/forms';

export class MyValidator {
    static checkNegative(ctrl: AbstractControl): any {
        let val = parseInt(ctrl.value);
        if (val > 0) {
            return null; // valid
        } else {
            return {invalid : true};
        }
    }
}