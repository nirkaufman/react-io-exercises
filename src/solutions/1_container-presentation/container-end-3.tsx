import {Loader} from "../../shared/Loader.tsx";
import {User} from "../0_lib/user.interface.ts";
import {useResource} from "../0_lib/use-resource.tsx";
import {ComponentType} from "react";



// Container component:
// Using as many hooks as needed to gather data
// Rendering pure presentation components
interface UserInformationProps {
  userComponent: ComponentType<{user: User}>;
}

export function UserInformation({userComponent: UserComponent}: UserInformationProps) {
  const [user, isLoading, errorMessage] = useResource<User>('https://randomuser.me/api/');

  // Loader is pure component
  if (isLoading) return <Loader/>;

  // Error message can be extracted to a separate pure component
  if (errorMessage || !user) return <div className='text-black'>{errorMessage}</div>;

  return <UserComponent user={user}/>
}


// Pure presentation component
export function UserCardEnd({user}: {user: User}) {
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

export function UserCardVersionTwo({user}: {user: User}) {
  return (
      <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <img className="w-10 h-10 rounded-full" src={user.picture.large} alt="User avatar"/>
        <div className="px-4">
          <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-200">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{user.email}</p>
        </div>
      </div>
  );
}
