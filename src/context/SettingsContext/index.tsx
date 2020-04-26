import React from 'react';

import {reducer, getInitialState, SettingsState, SettingsAction} from './reducer';

const SettingsContext = React.createContext<[SettingsState, React.Dispatch<SettingsAction>]>([
  getInitialState(),
  () => {},
]);

export const SettingsProvider: React.FC = ({children}) => {
  return (
    <SettingsContext.Provider value={React.useReducer(reducer, getInitialState())}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => React.useContext(SettingsContext);
