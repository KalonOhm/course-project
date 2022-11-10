import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy{
  inLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

  private closeAlertSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.inLoginMode = !this.inLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;

    let authObserv: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.inLoginMode) {
      authObserv = this.authService.login(email, password);
    } else {
      authObserv = this.authService.signup(email, password);
    }

    authObserv.subscribe(
      (responseData) => {
        console.log(responseData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log(errorMessage);

        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(errorMessage: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);

    componentRef.instance.alertMessage = errorMessage;
    this.closeAlertSubscription = componentRef.instance.closeAlert.subscribe(()=> {
      this.closeAlertSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if(this.closeAlertSubscription) {
      this.closeAlertSubscription.unsubscribe();
    }
  }
}
