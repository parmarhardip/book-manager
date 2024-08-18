import { createContext, useContext, useState } from '@wordpress/element';

const SettingsContext = createContext();

export const useSettings = () => useContext( SettingsContext );

export const getSettings = () => useContext( SettingsContext ).getSettings();

export const SettingsProvider = ( { children, initialSettings, setAttributes } ) => {
    const [ settings, setSettings ] = useState( initialSettings );

    const updateSettings = ( newSettings ) => {
        setSettings( ( prevSettings ) => ({
            ...prevSettings,
            ...newSettings.settings,
        }) );

        setAttributes( { settings: { ...settings, ...newSettings.settings } } );
    };

    const getSettings = () => {
        return settings;
    }

    return (
        <SettingsContext.Provider value={ { settings, updateSettings, getSettings } }>
            { children }
        </SettingsContext.Provider>
    );
};
