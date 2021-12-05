import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { listItemValue } from "../../../common-ts/config";
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
    Form,
} from "@angular/forms";

@Component({
    selector: "patient-info",
    templateUrl: "./patient-info.component.html",
    styleUrls: ["./patient-info.component.scss"],
})
export class PatientInfoComponent implements OnInit {
  listItem: any;
   @Output() send = new EventEmitter<any>();
    form = this.fb.group({
        encounder: new FormControl(""),
        provider: new FormControl(""),
        status: new FormControl(""),
        mrn: new FormControl(""),
        chart: new FormControl(""),
    });
    constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.listItem = listItemValue;
        this.cdr.detectChanges();
    }

}
