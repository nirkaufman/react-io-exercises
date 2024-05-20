import {useEffect, useState} from "react";
import {Loader} from "../../shared/Loader.tsx";

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

// Responsible for fetching data, andle loading and error states
function useResource<T>(url: string): [T | null, boolean, string | null] {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data.results[0]))
        .catch(() => setErrorMessage('Error fetching user'))
        .finally(() => setIsLoading(false))
  }, [url])

  return [data, isLoading, errorMessage];
}


// Container component:
// Using as many hooks as needed to gather data
// Rendering pure presentation components
export function UserInformation() {
  const [user, isLoading, errorMessage] = useResource<User>('https://randomuser.me/api/');

  // Loader is pure component
  if (isLoading) return <Loader/>;

  // Error message can be extracted to a separate pure component
  if (errorMessage || !user) return <div className='text-black'>{errorMessage}</div>;

  return <UserCardEnd user={user}/>
}


// Pure presentation component
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
