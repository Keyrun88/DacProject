package com.api.METCanteen.Service;

public interface DiscountService {

	Object getDiscount() throws Exception;
	Object updateDiscount(String studentDiscount, String staffDiscount) throws Exception;

}
