package com.api.METCanteen.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.METCanteen.DAO.FeedbackDAO;
import com.api.METCanteen.DAO.FoodItemDAO;
import com.api.METCanteen.Model.Feedback;
import com.api.METCanteen.Model.FoodItem;
import com.api.METCanteen.Service.FeedbackService;
import com.api.METCanteen.Service.FoodItemService;

@Service
public class FoodItemServiceImpl implements FoodItemService {

	@Autowired
	FoodItemDAO dao;
	
	@Override
	public Object getFoodItems() throws Exception {
		return dao.getFoodItems();
	}

	@Override
	public Object addFoodItem(FoodItem param) throws Exception {
		return dao.addFoodItem(param);
	}
}
