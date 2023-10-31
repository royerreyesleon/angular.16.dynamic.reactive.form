import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.onInitForm();
  }

  ngOnInit(): void {
    this.addItemDynamic();
  }

  private onInitForm() {
    this.form = this.formBuilder.group({
      username: new FormControl('admin', [Validators.required]),
      password: new FormControl('admin', [Validators.required]),
      emails: new FormArray([], [Validators.required]),
    });
  }

  public get formEmails(): FormArray {
    return this.form.get('emails') as FormArray;
  }

  public addItemDynamic() {
    const email = this.formBuilder.group({
      email: new FormControl('test@test.com', [
        Validators.required,
        Validators.email,
      ]),
    });

    this.formEmails.push(email);
  }

  public deleteItemFormEmails(index: number) {
    this.formEmails.removeAt(index);
  }

  public onSubmit() {
    alert('form is valid');
  }
}
