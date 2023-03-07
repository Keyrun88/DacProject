package com.api.METCanteen.DAOImpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.METCanteen.DAO.FeedbackDAO;
import com.api.METCanteen.Model.Feedback;

@Repository
public class FeedbackDAOImpl implements FeedbackDAO {

	@Autowired
	private JdbcTemplate template;
	
	private SimpleJdbcCall jdbcCall;
	
	@Override
	public Object getFeedback() throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_getFeedback");
				
		Map<String, Object> result = jdbcCall.execute();
		
		return result.get("#result-set-1");
	}

	@Override
	public Object addFeedback(Feedback param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_addFeedback");
			
		SqlParameterSource params = new MapSqlParameterSource()
				 .addValue("inFeedback", param.getFeedback())
				    .addValue("inRating", param.getRating())
				    .addValue("inOrderID", param.getOrderId())
				    .addValue("inUserID", param.getUserId());
				
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object deleteFeedback(Integer id) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_deleteFeedback");
				
		SqlParameterSource params = new MapSqlParameterSource()
				 .addValue("inFeedbackID", id);
				 
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

}
