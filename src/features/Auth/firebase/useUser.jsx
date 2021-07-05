import React, { useEffect, useState } from 'react';
import rxUser from './rxUser';

function useUser() {
    const [userState, setUserState] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const users = rxUser.subscribe((user) => {
            setUserState(user);
            setLoaded(true);
        });
        return () => {
            users.unsubscribe();
        }
    }, []);

    const isLoggedIn = () => {
        return loaded && userState !== null;
    }

    return { userState, loaded, isLoggedIn };
}

export default useUser;