package com.api.METCanteen.Service;

import com.api.METCanteen.Model.Feedback;

public interface FeedbackService {

	Object getFeedback()throws Exception;
	Object addFeedback(Feedback param) throws Exception;
	Object deleteFeedback(Integer id) throws Exception;

}
