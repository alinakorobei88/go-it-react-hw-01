import Profile from './Profile/Profile';
import userData from './data/userData.json';
import friends from './friends/friends.json';
import FriendListItem from './FriendList/friends';

const App = () => {
    return (
        <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
    );
};

export default App;
