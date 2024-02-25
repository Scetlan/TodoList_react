import { formatDistanceToNow } from 'date-fns';

function createdData() {
  const taskCreatedAt = new Date();
  const formattedTimeAgo = formatDistanceToNow(taskCreatedAt, { addSuffix: true });
  return `created ${formattedTimeAgo} seconds ago`;
}

export default createdData;
