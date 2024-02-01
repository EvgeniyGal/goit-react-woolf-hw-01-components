import user from '../data/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from '../data/data.json';
import friendsData from '../data/friends.json';
import Friends from './Friends/Friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactionData from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2 className="task-title">Task 1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="task-title">Task 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <h2 className="task-title">Task 3</h2>
      <Friends friends={friendsData} />
      <h2 className="task-title">Task 4</h2>
      <TransactionHistory items={transactionData} />
    </div>
  );
};
