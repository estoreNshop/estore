package com.estore.login.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {
//	 private final String BASE_PATH=Constants.HOME.getConstant();

		@RequestMapping(value = "/login", method = RequestMethod.GET)
		public String login(Model model, HttpServletRequest request) {

			// return BASE_PATH+"/"+Constants.HOME.getConstant();
			return "login";
		}
	}
