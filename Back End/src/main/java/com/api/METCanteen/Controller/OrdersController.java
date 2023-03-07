package com.api.METCanteen.Controller;


import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.METCanteen.Model.Orders;
import com.api.METCanteen.Model.Response;
import com.api.METCanteen.Service.OrdersService;

@RestController
@CrossOrigin(origins = "*")
public class OrdersController {
	@Autowired
	OrdersService ordersService;
	
	@RequestMapping(value = "/getAllOrders", method = RequestMethod.GET)
	public ResponseEntity<Object> getAllOrders() throws Exception {
		try {
			Object res = ordersService.getAllOrders();
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/addOrder", method = RequestMethod.POST)
	public ResponseEntity<Object> addOrder(@RequestBody Orders input) throws Exception {
		try {
			Object res = ordersService.addOrder(input);
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/getOrderByUserId", method = RequestMethod.GET)
	public ResponseEntity<Object> getOrderByUserId(int userId) throws Exception {
		try {
			Object res = ordersService.getOrderByUserId(userId);
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/getOrderById", method = RequestMethod.GET)
	public ResponseEntity<Object> getOrderById(int id) throws Exception {
		try {
			Object res = ordersService.getOrderById(id);
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
	
	@RequestMapping(value = "/updateOrderStatus", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateOrderStatus(Integer orderId, String status) throws Exception {
		try {
			Object res = ordersService.updateOrderStatus(orderId, status);
			return Response.generateResponse("", HttpStatus.OK, res);
		} catch (Exception e) {
			return Response.generateResponse(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR, null);
		}
	}
}
