package com.api.METCanteen.Service;

import com.api.METCanteen.Model.Users;

public interface UsersService {
    Object createUser(Users param) throws Exception;
	Object login(String email, String password, String type) throws Exception;
	Object forgotPassword(String email) throws Exception;
	
}
