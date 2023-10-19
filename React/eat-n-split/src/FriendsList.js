import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map(friend => <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend} />)}
    </ul>
  );
}