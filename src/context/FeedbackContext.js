import { Children, createContext, useContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = (Children) => {
	const [feedback, setFeedback] = useState({
		id: 1,
		text: 'hello from context',
		rating: 9,
	});
	return (
		<FeedbackContext.Provider value={{ feedback }}>
			{Children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
