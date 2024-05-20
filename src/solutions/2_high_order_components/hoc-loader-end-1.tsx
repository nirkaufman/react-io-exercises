import {withLoader} from "../0_lib/with-loader.tsx";
import {UserCardComponent} from "../0_lib/UserCard.tsx";
import {useResource} from "../0_lib/use-resource.tsx";
import {User} from "../0_lib/user.interface.ts";


const UserWithLoader = withLoader(UserCardComponent);


export function UserPage() {
  const [user, isLoading] = useResource<User>('https://randomuser.me/api/');

  return <UserWithLoader user={user} isLoading={isLoading}/>
}
