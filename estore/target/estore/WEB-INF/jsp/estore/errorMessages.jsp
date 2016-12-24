<div ng-messages for="loginForm.email.$error">
    <div ng-message="required">Email is required!</div>
    <div ng-message="email">Email is not in valid format!</div>
</div>
<div ng-messages for="loginForm.password.$error">
    <div ng-message="minlength">Password is too short!</div>
    <div ng-message="maxlength">Password is too long</div>
    <div ng-message="required">Password is required!</div>
    <div ng-message="!required && passwordWeak">Password is weak!</div>
</div>