import {useResource} from "../0_lib/use-resource.tsx";
import {User} from "../0_lib/user.interface.ts";import {Loader} from "../../shared/Loader.tsx";
import {UserCardComponent} from "../0_lib/UserCard.tsx";
import {ReactNode} from "react";

interface WithLoaderProps {
  isLoading: boolean;
  children: ReactNode;
}

function WithLoader({isLoading, children}: WithLoaderProps) {
  return isLoading ? <Loader /> : children;
}


export function UserPage() {
  const [user, isLoading] = useResource<User>('https://randomuser.me/api/');

  return (
      <div>
        <WithLoader isLoading={isLoading}>
            <UserCardComponent user={user!} />
        </WithLoader>
      </div>
  )
}
