import FriendsItem from './FriendsItem';
import css from './Friends.module.css';

export default function Friends({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(el => (
        <FriendsItem key={el.id} friend={el} />
      ))}
    </ul>
  );
}
