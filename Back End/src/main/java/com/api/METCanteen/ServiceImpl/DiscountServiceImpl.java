package com.api.METCanteen.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.METCanteen.DAO.DiscountDAO;
import com.api.METCanteen.DAO.UsersDAO;
import com.api.METCanteen.Service.DiscountService;

@Service
public class DiscountServiceImpl implements DiscountService {
	
	@Autowired
	DiscountDAO discountDao;

	@Override
	public Object getDiscount() throws Exception {
		return discountDao.getDiscount();
	}

	@Override
	public Object updateDiscount(String studentDiscount, String staffDiscount) throws Exception {
		return discountDao.updateDiscount(studentDiscount, staffDiscount);
	}
}
