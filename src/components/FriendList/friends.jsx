const FriendListItem = ({avatar, name, isOnLine}) => {
    return (
<li className="friend-list-item">
  <img src={avatar} alt={`${name} avatar`} width="48" className="avatar" />
  <p className="name">{name}</p>
  <p className={`status ${isOnLine ? 'online' : 'offline'}`}>{isOnLine ? 'Online' : 'Offline'}</p>
</li>
    );
};

export default FriendListItem;