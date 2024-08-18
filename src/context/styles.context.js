import { createContext, useContext, useState } from '@wordpress/element';

const StylesContext = createContext();

export const useStyles = () => useContext( StylesContext );

export const getStyles = () => useContext( StylesContext ).getStyles();

export const StylesProvider = ( { children, initialStyles, setAttributes } ) => {
    const [ styles, setStyles ] = useState( initialStyles );

    const updateStyles = ( newStyles ) => {
        setStyles( ( prevStyles ) => ({
            ...prevStyles,
            ...newStyles.styles,
        }) );

        setAttributes( { styles: { ...styles, ...newStyles.styles } } );
    };

    const getStyles = () => {
        return styles;
    }

    return (
        <StylesContext.Provider value={ { styles, updateStyles, getStyles } }>
            { children }
        </StylesContext.Provider>
    );
};
