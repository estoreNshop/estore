<div class="login-wrapper" ng-controller="loginController">
	<div class="field-wrapper">
		<div class="login-img-wrapper">
			<img src="resources/img/person.png" class="img-circle" />
			<div class="shadow"></div>
		</div>
	</div>
	<form name="loginForm" method="Get" ng-submit="submit()" novalidate>
		<div class="alert alert-danger field-wrapper errors"
			ng-show="loginForm.$invalid && loginForm.$submitted">
			<div ng-messages="loginForm.email.$error || loginForm.password.$error">
				<div ng-messages-include="errorMessages"></div>
			</div>
		</div>
		<div class="field-wrapper">
			<div class="email-icon">
				<div class="wrapper">
					<input type="email" class="input-field clearfix email"
						highlight-on-focus name="email" ng-model="loginData.email"
						required> <span class="icon"></span> <label
						class="field-label">Email</label>
				</div>
			</div>
		</div>
		<div class="field-wrapper">
			<div class="password-icon">
				<div class="wrapper">
					<input type="password" class="input-field clearfix password"
						highlight-on-focus ng-minlength="8" ng-maxlength="20"
						name="password" ng-model="loginData.password" required
						password-strength="strength"> <span class="icon"></span> <label
						class="field-label">Password</label> <span
						class="passwordStrength" data-ng-class="strength">{{strength}}</span>
				</div>
			</div>
			<label class="hint clearfix"><a href="#" class="salty">forgot
					your password ?</a></label>
		</div>
		<div class="field-wrapper">
			<div class="wrapper btn-wrapper">
				<input type="checkbox"
					class="input-field clearfix checkbox remember-me" value="true"
					id="rememb" ng-click="rememberMe($event)"
					ng-model="loginData.rememberme"><label class="remember"
					for="rememb">Remember me ?</label> <input type="submit"
					class="btn btn-primary pull-right" value="Sign In">
			</div>
		</div>
	</form>
</div>
<div class="field-wrapper not-register">
	<label class="hint">Not a registered user yet ? <a href="register"	class="green">Sign up now !</a>
</div>