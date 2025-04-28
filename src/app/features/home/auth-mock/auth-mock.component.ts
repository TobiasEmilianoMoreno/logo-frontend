import { Component, inject, output } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth-mock',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-mock.component.html',
  styleUrl: './auth-mock.component.scss',
})
export class AuthMockComponent {
  closeModal = output<void>();
  fb = inject(NonNullableFormBuilder);

  currentStep: 'initial' | 'google-accounts' | 'facebook-accounts' | 'login' =
    'initial';
  selectedProvider: 'google' | 'facebook' = 'google';
  isLoading = false;
  loginError: string | null = null;
  loginSuccess = false;

  mockGoogleAccounts = [
    { name: 'Agustin', email: 'agustin.ulubel1@gmail.com', password: '123456' },
    { name: 'Lucas', email: 'agustin.ulubel2@gmail.com', password: '123456' },
  ];

  mockFacebookAccounts = [
    {
      name: 'Tobias Moreno',
      email: 'tobias.moreno@facebook.com',
      password: '123456',
    },
    {
      name: 'Juan Perez',
      email: 'juan.perez@facebook.com',
      password: '123456',
    },
  ];

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  close() {
    this.closeModal.emit();
  }

  continueWithGoogle() {
    this.selectedProvider = 'google';
    this.currentStep = 'google-accounts';
  }

  continueWithFacebook() {
    this.selectedProvider = 'facebook';
    this.currentStep = 'facebook-accounts';
  }

  selectAccount(email: string) {
    this.loginForm.patchValue({ email });
    this.currentStep = 'login';
  }

  useAnotherAccount() {
    this.loginForm.reset();
    this.currentStep = 'login';
  }

  goBack() {
    this.loginError = null;
    switch (this.currentStep) {
      case 'google-accounts':
      case 'facebook-accounts':
        this.currentStep = 'initial';
        break;
      case 'login':
        this.currentStep =
          this.selectedProvider === 'google'
            ? 'google-accounts'
            : 'facebook-accounts';
        break;
    }
  }

  onContainerClick(event: MouseEvent) {
    event.stopPropagation();
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.loginError = null;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const { email, password } = this.loginForm.value;

      if (password === '123456') {
        this.loginSuccess = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        localStorage.setItem('userLogedIn', JSON.stringify(this.loginForm.value));
        this.close();
      } else {
        this.loginError =
          'Credenciales inválidas. Por favor, intenta nuevamente.';
      }
    } catch (error) {
      this.loginError =
        'Ocurrió un error al intentar iniciar sesión. Por favor, intenta nuevamente.';
    } finally {
      this.isLoading = false;
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
    if (!control?.errors || !control.touched) return '';

    if (control.errors['required']) {
      return 'Este campo es requerido';
    }
    if (control.errors['email']) {
      return 'Ingresa un email válido';
    }
    if (control.errors['minlength']) {
      return 'La contraseña debe tener al menos 6 caracteres';
    }
    return '';
  }
}
