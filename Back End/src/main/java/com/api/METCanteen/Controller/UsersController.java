package com.api.METCanteen.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.METCanteen.Model.Response;
import com.api.METCanteen.Model.UpdateUser;
import com.api.METCanteen.Model.Users;
import com.api.METCanteen.Service.UsersService;

@RestController
@CrossOrigin(origins = "*")
public class UsersController {
	
	@Autowired
	UsersService userService;
	
	@RequestMapping(value = "/createUser", method = RequestMethod.POST)
	public ResponseEntity<Object> createUser(@RequestBody Users param) throws Exception {
		try {
			Object res = userService.createUser(param);
			return Response.generateResponse("User created successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
	public ResponseEntity<Object> createUser(@RequestBody UpdateUser param) throws Exception {
		try {
			Object res = userService.updateUser(param);
			return Response.generateResponse("User updated successfully!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ResponseEntity<Object> login(String email, String password, Boolean isCanteenManager) throws Exception {
		try {
			Object res = userService.login(email, password, isCanteenManager);
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}

	@RequestMapping(value = "/forgotPassword", method = RequestMethod.GET)
	public ResponseEntity<Object> forgotPassword(String email) throws Exception {
		try {
			Object res = userService.forgotPassword(email);
			return Response.generateResponse("!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}

	@RequestMapping(value = "/deleteAccount", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteAccount(Integer id) throws Exception {
		try {
			Object res = userService.deleteAccount(id);
			return Response.generateResponse("!", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
}
