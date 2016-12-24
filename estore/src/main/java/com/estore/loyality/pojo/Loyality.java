package com.estore.loyality.pojo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.estore.commom.pojo.Pojo;
import com.estore.register.pojo.User;

@Entity
@Table(name = "LOYALITY")
public class Loyality extends Pojo {
	@Id
	@GeneratedValue
	@Column(name = "LOYALITY_AUTO_ID")
	private int id;

	@Column(name = "LOYALITY_CD")
	private String code;

	@Column(name = "LOYALITY_NAME")
	private String name;

	@Column(name = "LOYALITY_CATEGORY")
	private String category;

	@Column(name = "LOYALITY_TERM")
	private String term;

	@Column(name = "LOYALITY_VALUE")
	private String value;

	@Column(name = "LOYALITY_VALUE_IN_MONEY")
	private String valueInMoney;

	@Column(name = "LOYALITY_CURRENCY")
	private String currency;

	@Column(name = "REMARKS")
	private String remarks;

	@OneToOne
	@PrimaryKeyJoinColumn
	private User user;

	@Column(name = "CREATED_BY")
	private String createdBy;

	@Column(name = "CREATED_ON")
	private Date createdOn;

	@Column(name = "UPDATED_BY")
	private String updatedBy;

	@Column(name = "UPDATED_ON")
	private Date updatedOn;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getTerm() {
		return term;
	}

	public void setTerm(String term) {
		this.term = term;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getValueInMoney() {
		return valueInMoney;
	}

	public void setValueInMoney(String valueInMoney) {
		this.valueInMoney = valueInMoney;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}

}
