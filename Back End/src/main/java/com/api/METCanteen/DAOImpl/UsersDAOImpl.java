package com.api.METCanteen.DAOImpl;

import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.api.METCanteen.DAO.UsersDAO;
import com.api.METCanteen.Model.UpdateUser;
import com.api.METCanteen.Model.Users;

@Repository
public class UsersDAOImpl implements UsersDAO {

	//@Qualifier("simpleJdbcCall1")
	
	@Autowired
	private JdbcTemplate template;
	
	private SimpleJdbcCall jdbcCall;

	@Override
	public Object createUser(Users input) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_createUser");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inFirstName", input.getFirstName())
				.addValue("inLastName", input.getLastName())
				.addValue("inEmail", input.getEmail())
				.addValue("inPassword", input.getPassword())
				.addValue("inSecurityQ", input.getQuestion())
				.addValue("inAnswer", input.getAnswer())
				.addValue("inIsCanteenManager", input.getIsCanteenManager())
				.addValue("inIsStaffMember", input.getIsStaffMember());
		
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object login(String email, String password, Boolean isCanteenManager) throws Exception {
		
			jdbcCall = new SimpleJdbcCall(template)
					.withSchemaName("metcanteensys").withProcedureName("c_logInUser");	
		
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inEmail", email)
				.addValue("inPassword", password)
				.addValue("inIsCanteenManager", isCanteenManager);
		
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object forgotPassword(String email) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_forgotPassword");

		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inEmail", email);
				
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}

	@Override
	public Object updateUser(UpdateUser param) throws Exception {
		jdbcCall = new SimpleJdbcCall(template)
				.withSchemaName("metcanteensys").withProcedureName("c_updateUser");
		
		SqlParameterSource params = new MapSqlParameterSource()
				.addValue("inFirstName", param.getFirstName()) 
				.addValue("inLastName", param.getLastName()) 
				.addValue("inEmail", param.getEmail()) 
				.addValue("inUserId", param.getUserId()) 
				.addValue("inImageURL", param.getImageUrl())
				.addValue("inPassword", param.getPassword()) 
				.addValue("inMobileNo", param.getMobileNo());
		
		Map<String, Object> result = jdbcCall.execute(params);
		
		return result.get("#result-set-1");
	}
}
