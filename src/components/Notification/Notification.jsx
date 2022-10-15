import { PropTypes } from "prop-types";
import styles from "./NotificationStyle.css";


const Notification = ({ message }) => (
    <div className={styles.notification}>{message}</div>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;