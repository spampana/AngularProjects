import { FormGroup, FormControl, Validators } from '@angular/forms'

export class EventForm {

    sepEventForm: FormGroup = new FormGroup({
        eventId: new FormControl(0, Validators.required),
        eventCode: new FormControl("NOCODE", [Validators.required, Validators.maxLength(6), Validators.min(6)]),
        eventName: new FormControl(""),
        description: new FormControl(""),
        startDate: new FormControl(""),
        endDate: new FormControl(""),
        fees: new FormControl(0),
        seatsFilled: new FormControl(0, [Validators.required, Validators.max(100), Validators.min(0)]),
        logo: new FormControl("images/no-image.png")
    })

}
