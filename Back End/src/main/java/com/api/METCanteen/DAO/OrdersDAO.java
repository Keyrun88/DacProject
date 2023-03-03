
package com.api.METCanteen.DAO;
import com.api.METCanteen.Model.Orders;

public interface OrdersDAO {
	
	Object getAllOrders () throws Exception;
	Object getOrderByUserId(int userId)throws Exception;
	Object updateOrderStatus(Orders input) throws Exception;
	Object addOrder(Orders input) throws Exception;
}
