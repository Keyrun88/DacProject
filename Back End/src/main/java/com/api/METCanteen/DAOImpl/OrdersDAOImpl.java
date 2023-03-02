package com.api.METCanteen.DAOImpl;

import java.sql.Date;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.METCanteen.DAO.OrdersDAO;
import com.api.METCanteen.Model.Users;

@Repository
public class OrdersDAOImpl implements OrdersDAO {

	@Autowired
	private JdbcTemplate template;
	
	private SimpleJdbcCall jdbcCall;
	
	@Override
	public Object getAllOrders() throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_getAllOrders");
			
		Map<String, Object> result = jdbcCall.execute();
		
		return result.get("#result-set-1");
	}

	@Override
	public Object addOrder(String foodItem, int billAmount, Date dateAndTime, String status, int discount, int userID) throws Exception {
		
			jdbcCall = new SimpleJdbcCall(template)
					.withSchemaName("metcanteensys").withProcedureName("c_addOrder");

			SqlParameterSource params = new MapSqlParameterSource()
					.addValue("inFoodItem", foodItem)
					.addValue("inBillAmount", billAmount)
					.addValue("inDateAndTime", dateAndTime)
					.addValue("inStatus", status)
					.addValue("inDiscount", discount)
					.addValue("inUserID", userID);
			
			Map<String, Object> result = jdbcCall.execute(params);
			
		return result.get("#result-set-1");
	}

	@Override
	public Object getOrderByUserId(int userId) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_getOrderByUserId");
			
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inUserID", userId);
				
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object updateOrderStatus(String status, int orderID) throws Exception {
		
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_updateOrderStatus");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inStatus", status)
				.addValue("inOrderID",orderID);
				
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}
}
