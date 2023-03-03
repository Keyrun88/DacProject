package com.api.METCanteen.DAO;

import com.api.METCanteen.Model.Feedback;

public interface FeedbackDAO {

	Object getFeedback() throws Exception;
	Object addFeedback(Feedback param) throws Exception;
	
}
