package com.api.METCanteen.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.METCanteen.DAO.UsersDAO;
import com.api.METCanteen.Model.UpdateUser;
import com.api.METCanteen.Model.Users;
import com.api.METCanteen.Service.UsersService;

@Service
public class UsersServiceImpl implements UsersService {

	@Autowired
	UsersDAO usersDao;
	
	@Override
	public Object createUser(Users param) throws Exception {
		return usersDao.createUser(param);
	}

	@Override
	public Object login(String email, String password, Boolean isCanteenManager) throws Exception {
		return usersDao.login(email, password, isCanteenManager);
	}

	@Override
	public Object forgotPassword(String email) throws Exception {
		return usersDao.forgotPassword(email);
	}

	@Override
	public Object updateUser(UpdateUser param) throws Exception {
		return usersDao.updateUser(param);
	}
}
