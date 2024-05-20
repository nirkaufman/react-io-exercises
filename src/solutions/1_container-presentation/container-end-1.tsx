import {useEffect, useState} from "react";
import {Loader} from "../../shared/Loader.tsx";
import {User} from "../0_lib/user.interface.ts";

export function UserInformation() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => setUser(data.results[0]))
        .catch(() => setErrorMessage('Error fetching user'))
        .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return <Loader/>;

  if (errorMessage || !user) return <div className='text-black'>{errorMessage}</div>;

  return <UserCardEnd user={user}/>
}

function UserCardEnd({user}: {user: User}) {
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
