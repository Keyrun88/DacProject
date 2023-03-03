package com.api.METCanteen.Model;

import java.sql.Date;

public class Orders {

		private int OrderID;
		private String FoodItems;
		private int BillAmount;
		private Date DateAndTime;
		private int Discount;
		private int UserID;
		private String Status;
		public int getOrderID() {
			return OrderID;
		}
		public void setOrderID(int orderID) {
			OrderID = orderID;
		}
		public String getFoodItems() {
			return FoodItems;
		}
		public void setFoodItems(String foodItems) {
			FoodItems = foodItems;
		}
		public int getBillAmount() {
			return BillAmount;
		}
		public void setBillAmount(int billAmount) {
			BillAmount = billAmount;
		}
		public Date getDateAndTime() {
			return DateAndTime;
		}
		public void setDateAndTime(Date dateAndTime) {
			DateAndTime = dateAndTime;
		}
		public int getDiscount() {
			return Discount;
		}
		public void setDiscountID(int discount) {
			Discount = discount;
		}
		public int getUserID() {
			return UserID;
		}
		public void setUserID(int userID) {
			UserID = userID;
		}
		public String getStatus() {
			return Status;
		}
		public void setStatus(String status) {
			Status = status;
		}
		@Override
		public String toString() {
			return "Orders [OrderID=" + OrderID + ", FoodItems=" + FoodItems + ", BillAmount=" + BillAmount
					+ ", DateAndTime=" + DateAndTime + ", DiscountID=" + Discount+ ", UserID=" + UserID + ", Status="
					+ Status + "]";
		}
		
		
		
}
