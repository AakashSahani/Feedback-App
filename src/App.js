import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedBackData from './data/FeedbackData';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './components/pages/AboutPage';
// import { FeedbackProvider } from './context/FeedbackContext';

function App() {
	const [feedback, setFeedback] = useState(FeedBackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route
							index
							element={
								<>
									<FeedBackForm handleAdd={addFeedback} />
									<FeedBackStats feedback={feedback} />
									<FeedBackList handleDelete={deleteFeedback} />
								</>
							}
						></Route>
						<Route path="/about" element={<AboutPage />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</>
	);
}

export default App;
