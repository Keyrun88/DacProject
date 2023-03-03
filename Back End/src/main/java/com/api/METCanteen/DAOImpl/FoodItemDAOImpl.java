package com.api.METCanteen.DAOImpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.METCanteen.DAO.FoodItemDAO;
import com.api.METCanteen.Model.Feedback;
import com.api.METCanteen.Model.FoodItem;

@Repository
public class FoodItemDAOImpl implements FoodItemDAO {

	@Autowired
	private JdbcTemplate template;
	
	private SimpleJdbcCall jdbcCall;
	
	@Override
	public Object getFoodItems() throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_getFoodItems");
				
		Map<String, Object> result = jdbcCall.execute();
		
		return result.get("#result-set-1");
	}

	@Override
	public Object addFoodItem(FoodItem param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_addFoodItem");
			
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inName", param.getName())
				.addValue("inCategory", param.getCategory())
				.addValue("inPrice", param.getPrice())
				.addValue("inImageURL", param.getImageURL());
				
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object deleteFoodItem(Integer itemId) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_deleteFoodItem");
				
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inItemId", itemId);
				
				
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

}
