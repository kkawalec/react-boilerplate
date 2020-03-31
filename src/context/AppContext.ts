import * as React from 'react';


export interface IAppContext {

}

const defaultValue: IAppContext = {

};

const AppContext = React.createContext(defaultValue);
export default AppContext;
