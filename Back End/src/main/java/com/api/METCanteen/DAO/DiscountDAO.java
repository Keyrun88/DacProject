package com.api.METCanteen.DAO;

public interface DiscountDAO {

	Object getDiscount() throws Exception;
	Object updateDiscount(String studentDiscount, String staffDiscount) throws Exception;

}
