package com.api.METCanteen.Model;


public class Users {
	
	private String FirstName;
	private String LastName;
	private String Email;
	private String Password;
	private String Question;
	private String Answer;
	private Boolean isCanteenManager;
	private Boolean isStaffMember;
	
	
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getQuestion() {
		return Question;
	}
	public void setQuestion(String question) {
		Question = question;
	}
	public String getAnswer() {
		return Answer;
	}
	public void setAnswer(String answer) {
		Answer = answer;
	}
	public Boolean getIsCanteenManager() {
		return isCanteenManager;
	}
	public void setIsCanteenManager(Boolean isCanteenManager) {
		this.isCanteenManager = isCanteenManager;
	}
	public Boolean getIsStaffMember() {
		return isStaffMember;
	}
	public void setIsStaffMember(Boolean isStaffMember) {
		this.isStaffMember = isStaffMember;
	}
	
	
	
}
