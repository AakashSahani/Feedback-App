import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedBackItem({ item, handleDelete }) {
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className="close">
				<FaTimes color="purple"></FaTimes>
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

FeedBackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedBackItem;
