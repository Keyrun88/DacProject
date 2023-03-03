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
	public String getAnswer() {
		return Answer;
	}
	public void setAnswer(String answer) {
		Answer = answer;
	}
	public String getQuestion() {
		return Question;
	}
	public void setQuestion(String question) {
		Question = question;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	@Override
	public String toString() {
		return "Users [FirstName=" + FirstName + ", LastName=" + LastName + ", Email=" + Email + ", Password="
				+ Password + ", Question=" + Question + ", Answer=" + Answer + "]";
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	
}
