package com.estore;

public enum Constants {
	HOME("home"),INDEX("index");
	private final String constant;
	
	private Constants(String constant){
		this.constant=constant;
	}

	public String getConstant() {
		return constant;
	}
	
}
