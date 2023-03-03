package com.api.METCanteen.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.METCanteen.DAO.OrdersDAO;
import com.api.METCanteen.Model.Orders;
import com.api.METCanteen.Service.OrdersService;

@Service
public class OrdersServiceImpl implements OrdersService {
	@Autowired
	OrdersDAO ordersDao;
	
	@Override
	public Object getAllOrders() throws Exception {
		
		return ordersDao.getAllOrders();
	}
	@Override
	public Object addOrder(Orders input) throws Exception{
		
		return ordersDao.addOrder(input);
	}
	@Override
	public Object getOrderByUserId(int userId) throws Exception {
		
		return ordersDao.getOrderByUserId(userId);
	}
	@Override
	public Object updateOrderStatus(Orders input) throws Exception {
		
		return ordersDao.updateOrderStatus(input);
	}
	
	

}
