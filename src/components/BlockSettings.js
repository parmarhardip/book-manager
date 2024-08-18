import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, TextControl, SelectControl } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { detailContext, DetailContext } from "../context/detail.context";
import { useSettings } from "../context/settings.context";

const BlockSettings = () => {
    const { settings, updateSettings } = useSettings();
    const details = useContext( detailContext );
    const { totalPages } = details;

    return (
        <>
            <PanelBody
                title={ __( 'Settings', 'book-manager' ) }
                initialOpen={ true }
            >
                <PanelRow>
                    <TextControl
                        label={ __( 'Search', 'book-manager' ) } value={ settings.search }
                        onChange={ ( value ) => updateSettings( {
                            settings: {
                                ...settings,
                                search: value
                            }
                        } ) }/>
                </PanelRow>

                <PanelRow>
                    <SelectControl
                        label={ __( 'Order', 'book-manager' ) }
                        options={ [
                            { value: 'desc', label: __( 'Descending', 'book-manager' ) },
                            { value: 'asc', label: __( 'Ascending', 'book-manager' ) },
                        ] }
                        onChange={ ( value ) => updateSettings( {
                            settings: {
                                ...settings,
                                order: value
                            }
                        } ) }
                    />
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label={ __( 'Order By', 'book-manager' ) }
                        options={ [
                            { value: 'date', label: __( 'Date', 'book-manager' ) },
                            { value: 'id', label: __( 'ID', 'book-manager' ) },
                            { value: 'title', label: __( 'Title', 'book-manager' ) },
                            { value: 'slug', label: __( 'Slug', 'book-manager' ) },
                            { value: 'modified', label: __( 'Last Modified', 'book-manager' ) },
                        ] }
                        onChange={ ( value ) => updateSettings( {
                            settings: {
                                ...settings,
                                orderBy: value
                            }
                        } ) }
                    />
                </PanelRow>

                <PanelRow>
                    <TextControl
                        label={ __( 'Book per page', 'book-manager' ) }
                        type="number"
                        value={ settings.perPage }
                        onChange={ ( value ) => updateSettings( { settings: { ...settings, perPage: value } } ) }
                    />
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label={ __( 'Current Page', 'book-manager' ) }
                        value={ settings.currentPage }
                        options={ Array.from( { length: totalPages }, ( v, i ) => ({ value: i + 1, label: i + 1 }) ) }
                        onChange={ ( value ) => updateSettings( {
                            settings: {
                                ...settings,
                                currentPage: value
                            }
                        } ) }
                    />
                </PanelRow>
            </PanelBody>

        </>
    );


};

export default BlockSettings;
