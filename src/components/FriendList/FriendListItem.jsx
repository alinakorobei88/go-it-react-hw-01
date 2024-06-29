import styles from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnLine}) => {
    return (
      <div className={styles.friend}>
        <span className={`${styles.status} ${isOnLine ? styles.online : styles.offline}`}></span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
      </div>
    );
};

export default FriendListItem;