import { formatDistanceToNow } from 'date-fns';

function createdData(date) {
  const formattedTimeAgo = formatDistanceToNow(date, { includeSeconds: true });
  return `created ${formattedTimeAgo}`;
  return `created ${formattedTimeAgo} seconds ago`;
}

export default createdData;
