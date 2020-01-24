import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        //console.log('actions : ', actions);
        //console.log('dispatch :', dispatch)

        //  actions === { addBlogPost : (disptch) => { return () => {} } }

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);

            //console.log('actions[key] : ', boundActions)
        }

        return (
            <Context.Provider value={{ state, ...boundActions }} >
                {children}
            </Context.Provider>
        )

    }

    return { Context, Provider };

};