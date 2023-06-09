package com.api.METCanteen.DAOImpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.METCanteen.DAO.DiscountDAO;

@Repository
public class DiscountDAOImpl implements DiscountDAO {

	
	@Autowired
	private JdbcTemplate template;
	
	private SimpleJdbcCall jdbcCall;
	
	@Override
	public Object getDiscount() throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_getDiscount");
		
		Map<String, Object> result = jdbcCall.execute();
		
		return result.get("#result-set-1");
	}

	@Override
	public Object updateDiscount(String studentDiscount, String staffDiscount) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_updateDiscount");	
	
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inStaffDiscount", staffDiscount)
				.addValue("inStudentDiscount", studentDiscount);
		
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

}
