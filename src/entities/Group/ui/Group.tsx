import { Group } from '@/shared/model/types';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useState } from 'react';

export const GroupItem = ({ closed, members_count, name, avatar_color, friends }: Group) => {
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const onClick = () => {
    setShowFriendsModal(true);
  };
  return (
    <div className="flex items-center gap-4 w-full max-w-[400px] bg-slate-200 rounded-lg p-4">
      {avatar_color ? (
        <div style={{ backgroundColor: avatar_color }} className="w-24 h-24 rounded-full"></div>
      ) : (
        <div className="w-24 h-24 flex items-center justify-center rounded-full border border-gray-300">
          <p>No color</p>
        </div>
      )}
      <div>
        <p>{name}</p>
        <span>Группа{closed ? <b> закрытая </b> : <b> открытая </b>}</span>
        <div>Количество участников: {members_count}</div>
        {friends && friends.length > 0 && (
          <button onClick={onClick}>Количество друзей: {friends.length}</button>
        )}

        <Modal open={showFriendsModal} onClose={() => setShowFriendsModal(false)}>
          <div className="text-lg font-bold mb-2">Friends List</div>
          <ul>
            {friends &&
              friends.map((friend) => (
                <li
                  key={friend.last_name + friend.first_name}
                >{`${friend.first_name} ${friend.last_name}`}</li>
              ))}
          </ul>
        </Modal>
      </div>
    </div>
  );
};
