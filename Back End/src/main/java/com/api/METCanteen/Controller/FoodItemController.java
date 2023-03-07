package com.api.METCanteen.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.METCanteen.Model.Feedback;
import com.api.METCanteen.Model.FoodItem;
import com.api.METCanteen.Model.Response;
import com.api.METCanteen.Service.DiscountService;
import com.api.METCanteen.Service.FeedbackService;
import com.api.METCanteen.Service.FoodItemService;

@RestController
@CrossOrigin(origins = "*")
public class FoodItemController {
	
	@Autowired
	FoodItemService service;
	
	@RequestMapping(value = "/getFoodItems", method = RequestMethod.GET)
	public ResponseEntity<Object> getFoodItems() throws Exception {
		try {
			Object res = service.getFoodItems();
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/addFoodItem", method = RequestMethod.POST)
	public ResponseEntity<Object> addFoodItem(@RequestBody FoodItem param) throws Exception {
		try {
			Object res = service.addFoodItem(param);
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/deleteFoodItem", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteFoodItem(Integer itemId) throws Exception {
		try {
			Object res = service.deleteFoodItem(itemId);
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/updateFoodItem", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateFoodItem(@RequestBody FoodItem param) throws Exception {
		try {
			Object res = service.updateFoodItem(param);
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
}
