import {User} from "./user.interface.ts";

export function UserCardComponent({user}: {user: User}) {
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={user.picture.large} alt="User avatar"/>
        <div className="px-6 py-4 text-black">
          <div className="font-bold text-xl mb-2">{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
          <p className="text-gray-700 text-base">{user.email}</p>
        </div>
      </div>
  );
}
