import moment from "moment";

const formatDate = (timestamp) => {
  return moment(timestamp).format("h:mm A");
};

export default formatDate;
