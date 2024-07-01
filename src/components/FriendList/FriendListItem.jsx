import styles from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      <div className={styles.friend}>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
        <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? 'online' : 'offline'}</span>
      </div>
    );
};

export default FriendListItem;