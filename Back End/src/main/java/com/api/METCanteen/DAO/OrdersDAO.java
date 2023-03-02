package com.api.METCanteen.DAO;

import java.sql.Date;

public interface OrdersDAO {
	
	Object getAllOrders () throws Exception;
	Object addOrder(String foodItem,int billAmount,Date dateAndTime,String Status,int discountID,int userID)throws Exception;
	Object getOrderByUserId(int userId)throws Exception;
	Object updateOrderStatus(String status,int orderID)throws Exception;
}
