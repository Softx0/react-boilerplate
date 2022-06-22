/* eslint-disable no-unused-vars */
import {Button} from '@material-ui/core';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import {login} from '../../services/rickMorty.service';

export const Login = () => {
    const {loading, callEndpoint} = useFetchAndLoad();
    const handleLogin = () => {
        const morty = await callEndpoint(login());
    };

    return (
        <>
            <Button variant="text" onClick={handleLogin} />
        </>
    );
};
