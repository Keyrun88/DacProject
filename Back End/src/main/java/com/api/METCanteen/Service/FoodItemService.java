package com.api.METCanteen.Service;

import com.api.METCanteen.Model.Feedback;
import com.api.METCanteen.Model.FoodItem;

public interface FoodItemService {

	Object getFoodItems() throws Exception;
	Object addFoodItem(FoodItem param) throws Exception;
	Object deleteFoodItem(Integer itemId) throws Exception;

}
