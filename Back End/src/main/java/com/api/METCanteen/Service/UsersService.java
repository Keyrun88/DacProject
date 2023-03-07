package com.api.METCanteen.Service;

import com.api.METCanteen.Model.UpdateUser;
import com.api.METCanteen.Model.Users;

public interface UsersService {
    Object createUser(Users param) throws Exception;
	Object login(String email, String password, Boolean isCanteenManager) throws Exception;
	Object forgotPassword(String email) throws Exception;
	Object updateUser(UpdateUser param) throws Exception;
	Object deleteAccount(Integer id) throws Exception;
	
}
