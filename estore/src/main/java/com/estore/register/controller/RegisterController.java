package com.estore.register.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//import com.estore.Constants;

@Controller
public class RegisterController {
	// private final String BASE_PATH=Constants.HOME.getConstant();

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String register(Model model, HttpServletRequest request) {

		// return BASE_PATH+"/"+Constants.HOME.getConstant();
		return "userRegister";
	}
}
