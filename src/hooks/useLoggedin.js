import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useContextGetter from './useContext';

export default function useLoggedIn() {
    const context = useContextGetter();
    const history = useHistory();

    useEffect(() => {
        if (context.state.isUserLoggedIn) {
            history.push('/todos/:userId');
        }
    }, [context.state, history]);
}
