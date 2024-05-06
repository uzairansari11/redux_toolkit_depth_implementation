import { formatDistanceToNow, parseISO } from "date-fns";
const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    let date = parseISO(timeStamp);
    let formatDate = formatDistanceToNow(date);
    timeAgo = `${formatDate} ago`;
  }
  return (
    <span title={timeAgo}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
