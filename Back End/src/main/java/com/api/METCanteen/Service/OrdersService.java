package com.api.METCanteen.Service;
import com.api.METCanteen.Model.Orders;

public interface OrdersService {
	Object getAllOrders () throws Exception;
	Object addOrder(Orders input) throws Exception;
	Object getOrderByUserId(int userId)throws Exception;
	Object updateOrderStatus(Orders input) throws Exception;

}
