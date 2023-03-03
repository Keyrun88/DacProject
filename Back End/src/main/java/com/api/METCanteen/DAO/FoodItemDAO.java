package com.api.METCanteen.DAO;

import com.api.METCanteen.Model.Feedback;
import com.api.METCanteen.Model.FoodItem;

public interface FoodItemDAO {

	Object getFoodItems() throws Exception;
	Object addFoodItem(FoodItem param) throws Exception;
	Object deleteFoodItem(Integer itemId) throws Exception;
	
}
