import Profile from './Profile/Profile';
import userData from './data/userData.json';
import friends from './data/friends.json';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

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
      <TransactionHistory items={transactions} />
    </div>
    );
};

export default App;
