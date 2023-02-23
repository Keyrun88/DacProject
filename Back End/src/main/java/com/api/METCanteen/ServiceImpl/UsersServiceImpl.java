package com.api.METCanteen.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.METCanteen.DAO.UsersDAO;
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
	public Object login(String email, String password, String type) throws Exception {
		return usersDao.login(email, password, type);
	}

	@Override
	public Object forgotPassword(String email) throws Exception {
		return usersDao.forgotPassword(email);
	}
}
