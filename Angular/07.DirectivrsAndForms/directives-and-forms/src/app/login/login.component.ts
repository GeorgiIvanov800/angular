import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //Render static content
  //ngOnInit(): void {}

  //Renders the final contetn + dynamic content
  // ngAfterViewInit(): {}

  formSubmitHandler(form: NgForm) {
    if (form?.invalid) {
      console.log('Form is Invalid!');
      return;
    }

    console.log('invalid', form.invalid);
    console.log(form.value);

    // form.value => ngModel on 'input'
    const { email, password } = form.value;

    //2 ways of resseting the data
    //form.reset();
    form.setValue({ email: '', password: '' });
  }
}
