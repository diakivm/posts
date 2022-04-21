import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { privateRoutes, publicRoutes } from "./routes";

const AppRoutes: FC = () => {

    const { isAuth } = useTypeSelector(store => store.auth)

    return (
        <Routes>
            {
                isAuth ?
                    publicRoutes.map(item => {
                        return <Route key={item.path}
                            path={item.path}
                            element={item.element}
                        />
                    })
                    :
                    privateRoutes.map(item => {
                        return <Route key={item.path}
                            path={item.path}
                            element={item.element}
                        />
                    })
            }
        </Routes>
    );
};

export default AppRoutes;