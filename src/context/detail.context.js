import { createContext, useState, useEffect } from "@wordpress/element";
import { addQueryArgs } from "@wordpress/url";
import { getSettings } from "./settings.context";

export const detailContext = createContext( {
    isLoading: true,
    items: [],
    totalPages: 1,
    totalItems: 0,
    setDetails: () => {
    },
} );

export const DetailProvider = ( { children, setAttributes, attributes } ) => {

    const settings = getSettings();

    const [ details, updateDetails ] = useState( {
        isLoading: true,
        items: [],
        totalPages: 1,
        totalItems: 0,
        setDetails: ( value ) => {
            updateDetails( prevState => {
                return {
                    ...prevState,
                    ...value,
                };

            } );
        }
    } );

    useEffect( () => {
        const queryParams = {
            per_page: settings.perPage,
            page: settings.currentPage,
            orderby: settings.orderBy,
            order: settings.order,

        };

        if ( '' !== settings.type ) {
            queryParams.type = settings.type;
        }
        if ( '' !== settings.search ) {
            queryParams.search = settings.search;
        }

        console.log( queryParams );
        console.log( settings );
        const url = addQueryArgs( '/wp-json/wp/v2/book', queryParams );

        fetch( url, {
            headers: {
                'X-WP-Nonce': bookManager.nonce,
            },
        } )
            .then( response => {

                if ( !response.ok ) {
                    throw new Error( 'Network response was not ok' );
                }

                if ( response.headers.get( 'X-WP-TotalPages' ) ) {
                    updateDetails( prevState => ({
                        ...prevState,
                        totalPages: parseInt( response.headers.get( 'X-WP-TotalPages' ) ),
                    }) );
                }

                if ( response.headers.get( 'X-WP-Total' ) ) {
                    updateDetails( prevState => ({
                        ...prevState,
                        totalItems: parseInt( response.headers.get( 'X-WP-Total' ) ),
                    }) );
                }

                return response.json();

            } )
            .then( data => {
                updateDetails( prevState => {
                    return {
                        ...prevState,
                        items: data,
                        isLoading: false,
                    };
                } );

                // Update the block's attributes with fetched data
            } )
            .catch( error => {
                console.error( error );

                updateDetails( prevState => {
                    return {
                        ...prevState,
                        items: [],
                        isLoading: false,
                    };
                } )

                // Update the block's attributes with fetched data
                setAttributes( { ...attributes, items: [] } );

            } );

    }, [ settings ] );


    return (
        <detailContext.Provider value={ details }>
            { children }
        </detailContext.Provider>
    );

}

