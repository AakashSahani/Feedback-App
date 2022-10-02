import PropTypes from 'prop-types';

function FeedBackStats({ feedback }) {
	// Calculate Ratings Average
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;

	average = Math.floor(average * 10) / 10;

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
}

FeedBackStats.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			rating: PropTypes.number,
			text: PropTypes.string,
		})
	),
};

export default FeedBackStats;
