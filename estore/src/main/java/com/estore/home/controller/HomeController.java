package com.estore.home.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//import com.estore.Constants;


@Controller
public class HomeController {
//	private final String BASE_PATH=Constants.HOME.getConstant();
	
	@RequestMapping(value="/home", method=RequestMethod.GET)
	public String homePage(Model model,HttpServletRequest request){
		
//		return BASE_PATH+"/"+Constants.HOME.getConstant();
		return "homepage";
	}
}
