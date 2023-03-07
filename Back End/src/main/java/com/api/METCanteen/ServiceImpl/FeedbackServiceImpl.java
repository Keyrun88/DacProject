package com.api.METCanteen.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.METCanteen.DAO.FeedbackDAO;
import com.api.METCanteen.Model.Feedback;
import com.api.METCanteen.Service.FeedbackService;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	FeedbackDAO dao;
	
	@Override
	public Object getFeedback() throws Exception {
		return dao.getFeedback();
	}

	@Override
	public Object addFeedback(Feedback param) throws Exception {
		return dao.addFeedback(param);
	}

	@Override
	public Object deleteFeedback(Integer id) throws Exception {
		return dao.deleteFeedback(id);
	}

	

}
