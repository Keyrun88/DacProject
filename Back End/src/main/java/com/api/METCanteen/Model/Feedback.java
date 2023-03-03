package com.api.METCanteen.Model;

public class Feedback {
	
	private String Feedback; 
	private Integer Rating;
	private Integer OrderId;
	private Integer UserId;
	
	public String getFeedback() {
		return Feedback;
	}
	public void setFeedback(String feedback) {
		Feedback = feedback;
	}
	public Integer getRating() {
		return Rating;
	}
	public void setRating(Integer rating) {
		Rating = rating;
	}
	public Integer getOrderId() {
		return OrderId;
	}
	public void setOrderId(Integer orderId) {
		OrderId = orderId;
	}
	public Integer getUserId() {
		return UserId;
	}
	public void setUserId(Integer userId) {
		UserId = userId;
	}
	
	
}
