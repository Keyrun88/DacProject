package com.api.METCanteen.Service;

import java.sql.Date;

public interface OrdersService {
	Object getAllOrders () throws Exception;
	Object addOrder(String foodItem, int billAmount, Date dateAndTime, String status, int discount, int userID) throws Exception;
	Object getOrderByUserId(int userId)throws Exception;
	Object updateOrderStatus(String status,int orderID)throws Exception;

}
