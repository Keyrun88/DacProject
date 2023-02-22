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
	
}
