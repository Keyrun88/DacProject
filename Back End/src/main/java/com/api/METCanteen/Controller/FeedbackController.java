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
import com.api.METCanteen.Model.Response;
import com.api.METCanteen.Service.DiscountService;
import com.api.METCanteen.Service.FeedbackService;

@RestController
@CrossOrigin(origins = "*")
public class FeedbackController {
	
	@Autowired
	FeedbackService service;
	
	@RequestMapping(value = "/getFeedback", method = RequestMethod.GET)
	public ResponseEntity<Object> getFeedback() throws Exception {
		try {
			Object res = service.getFeedback();
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/addFeedback", method = RequestMethod.POST)
	public ResponseEntity<Object> addFeedback(@RequestBody Feedback param) throws Exception {
		try {
			Object res = service.addFeedback(param);
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
}
