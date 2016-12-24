<form name="registerForm" ng-controller="registerController"
	id="registerForm" autoComplete="false">
	<div class="register-wrapper">
		<div class="field-wrapper">
			<div class="login-img-wrapper">
				<img src="resources/img/person.png" class="img-circle" />
				<div class="shadow"></div>
			</div>
		</div>
		<div class="alert alert-danger field-wrapper errors row"
			ng-show="registerForm.$invalid && registerForm.$submitted">
			<div ng-messages="registerForm.$invalid && registerForm.$submitted">
				<div ng-messages-include="errorMessages"></div>
			</div>
		</div>
		<fieldset class="row">
			<legend>Personal Information</legend>
			<div class="col-sm-8 col-xs-12">
				<div class="field-wrapper">
					<div class="email-icon">
						<input type="email" class="input-field clearfix email"
							highlight-on-focus required ng-model="registerData.email"
							name="email"> <span class="icon"></span> <label
							class="field-label">Email</label>
					</div>
				</div>
				<div class="field-wrapper clearfix">
					<div class="password-icon">
						<div>
							<input type="password" class="input-field password"
								ng-minlength="8" ng-maxlength="20" highlight-on-focus
								password-strength="strength" ng-model="registerData.password"
								name="password"> <span class="icon"></span> <label
								class="field-label wrapped">Password</label>
						</div>
						<div>
							<input type="password" class="input-field re-password"
								data-ng-class="confirmStrength" highlight-on-focus
								confirm-password="registerData.password"
								ng-model="registerData.confirmPassword" name="confirmPassword">
							<label class="field-label wrapped left-210">Confirm
								Password</label>
						</div>
						<span class="passwordStrength" data-ng-class="strength">{{strength}}</span>
						<div class="error"
							ng-show="registerForm.confirmPassword.$error.confirmInvalid">Password
							and confirm password did not match!</div>
					</div>
				</div>
				<div class="field-wrapper clearfix">
					<div class="user-icon">
						<div>
							<input type="text" class="input-field firstname"
								highlight-on-focus required ng-model="registerData.firstName"
								name="firstName"> <span class="icon"></span> <label
								class="field-label wrapped">first Name</label>
						</div>
						<div>
							<input type="text" class="input-field lastname"
								highlight-on-focus required ng-model="registerData.lastName"
								name="lastName"> <label class="field-label wrapped"
								style="left: 260px;">Last Name</label>
						</div>
					</div>
				</div>
				<div class="field-wrapper">
					<div class="gender-wrapper">
						<div class="gender-icon">
							<input type="radio" name="gender"
								class="input-field-radio clearfix"
								ng-model="registerData.gender">Male <input type="radio"
								name="gender" class="input-field-radio clearfix"
								ng-model="registerData.gender">Female <span class="icon"></span>
						</div>
					</div>
				</div>
				<div class="field-wrapper">
					<div class="mobile-icon">
						<input type="text" class="input-field clearfix mobile"
							highlight-on-focus required numbers-only
							ng-model="registerData.mobile" name="mobile"> <span
							class="icon"></span> <label class="field-label">Mobile
							Number</label>
					</div>
				</div>
				<div class="field-wrapper">
					<div class="landline-icon">
						<input type="text" class="input-field clearfix landline"
							highlight-on-focus numbers-onlyng-model="registerData.landline"
							name="landline"> <span class="icon"></span> <label
							class="field-label">Landline Number</label>
					</div>
				</div>
				<div class="field-wrapper">
					<div class="loyality-icon">
						<select name="loyality" class="input-field clearfix loyality"
							highlight-on-focus>
							<option value="-1" selected disabled>--- Loyality ---</option>
							<option value="1">Premimum</option>
							<option value="2">Silver</option>
							<option value="3">Gold</option>
							<option value="4">Platinum</option>
						</select> <span class="icon"></span>
					</div>
				</div>
			</div>
			<div class="visible-xs clearfix"></div>
			<div class="col-sm-4 col-xs-12">
				<img class="img-responsive" src="resources/img/person.png">
			</div>
		</fieldset>
		<fieldset class="row">
			<legend>Address Details</legend>
			<div class="col-sm-8 col-xs-12">
				<div class="field-wrapper">
					<div class="address-icon">
						<input type="text" class="input-field clearfix address"
							highlight-on-focus required> <span class="icon"></span> <label
							class="field-label">Address</label>
					</div>
				</div>
				<div class="field-wrapper">
					<div class="address-icon">
						<input type="text" class="input-field clearfix address"
							highlight-on-focus> <span class="icon"></span> <label
							class="field-label">Address Line 1</label>
					</div>
				</div>
				<div class="field-wrapper">
					<div class="address-icon">
						<input type="text" class="input-field clearfix address"
							highlight-on-focus> <span class="icon"></span> <label
							class="field-label">Address Line 2</label>
					</div>
				</div>
			</div>
			<div class="visible-xs clearfix"></div>
			<div class="col-sm-4 col-xs-12">
				<div class="field-wrapper">
					<div class="country-icon">
						<select name="country" class="input-field clearfix"
							highlight-on-focus>
							<option value="-1" selected disabled>--- Country ---</option>
							<option value="1">India</option>
							<option value="2">Pakistan</option>
							<option value="3">United States(America)</option>
							<option value="4">England</option>
							<option value="5">China</option>
						</select> <span class="icon"></span>
					</div>
				</div>
				<div class="field-wrapper">
					<div class="state-icon">
						<select name="state" class="input-field clearfix"
							highlight-on-focus>
							<option value="-1" selected disabled>--- State ---</option>
							<option value="1">Utter Pradesh</option>
							<option value="2">Delhi</option>
							<option value="3">Punjab</option>
							<option value="4">Hariyana</option>
							<option value="5">Bihar</option>
						</select> <span class="icon"></span>
					</div>
				</div>
				<div class="field-wrapper">
					<div class="city-icon">
						<select name="city" class="input-field clearfix"
							highlight-on-focus>
							<option value="-1" selected disabled>--- City ---</option>
							<option value="1">New Delhi</option>
							<option value="2">Delhi</option>
							<option value="3">Noida</option>
							<option value="4">Faridabad</option>
							<option value="5">Gurgoan</option>
						</select> <span class="icon"></span>
					</div>
				</div>
			</div>
			<div class="col-sm-12">
				<input type="submit" value="Register Me!"
					class="btn btn-primary pull-right">
			</div>
		</fieldset>
	</div>
</form>
<div class="field-wrapper not-register">
	<label class="hint">registered user <a href="login" class="green">Login now !</a>
</div>