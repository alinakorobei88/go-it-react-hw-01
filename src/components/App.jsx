import Profile from './componenets/Profile/Profile';
import userData from './data/userData.json';
import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList';

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
      <FriendList friends={friends} />
    </div>
    );
};

export default App;
