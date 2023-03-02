package com.api.METCanteen.ServiceImpl;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;

import com.api.METCanteen.DAO.OrdersDAO;
import com.api.METCanteen.Service.OrdersService;

public class OrdersServiceImpl implements OrdersService {
	@Autowired
	OrdersDAO ordersDao;
	
	@Override
	public Object getAllOrders() throws Exception {
		
		return ordersDao.getAllOrders();
	}
	@Override
	public Object addOrder(String foodItem, int billAmount, Date dateAndTime, String status, int discount, int userID) throws Exception{
		
		return ordersDao.addOrder(foodItem,billAmount,dateAndTime,status,discount,userID);
	}
	@Override
	public Object getOrderByUserId(int userId) throws Exception {
		
		return ordersDao.getOrderByUserId(userId);
	}
	@Override
	public Object updateOrderStatus(String status, int orderID) throws Exception {
		
		return ordersDao.updateOrderStatus(status, orderID);
	}

}
