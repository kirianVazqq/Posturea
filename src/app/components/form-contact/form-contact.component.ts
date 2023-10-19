import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Aquí puedes realizar más acciones, como enviar la información al servidor
      window.alert("Formulario enviado");
    } else {
      console.log('Formulario no válido');
      window.alert("Formulario no enviado");
    }
  }
}
