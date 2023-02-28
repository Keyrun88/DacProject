package com.api.METCanteen.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.METCanteen.Model.Response;
import com.api.METCanteen.Service.DiscountService;

@RestController
@CrossOrigin(origins = "*")
public class DiscountController {

	@Autowired
	DiscountService discountService;
	
	
	@RequestMapping(value = "/getDiscount", method = RequestMethod.GET)
	public ResponseEntity<Object> getDiscount() throws Exception {
		try {
			Object res = discountService.getDiscount();
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
}
