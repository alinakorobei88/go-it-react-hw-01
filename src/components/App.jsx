import Profile from './Profile/profile';

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
