import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useStyles } from "../context/styles.context";


const BlockStyles = () => {

    const { styles, updateStyles } = useStyles();
    const { layout } = styles;

    const handleLayoutChange = ( newLayout ) => {
        updateStyles( { styles: { layout: newLayout ? 'grid' : 'list' } } );
    }

    return (
        <>
            <ToolbarGroup>
                <ToolbarButton
                    icon="list-view"
                    label={ __( 'List Layout', 'book-manager' ) }
                    onClick={ () => handleLayoutChange( false ) }
                    isPressed={ layout === 'list' }
                />
                <ToolbarButton
                    icon="grid-view"
                    label={ __( 'Grid Layout', 'book-manager' ) }
                    onClick={ () => handleLayoutChange( true ) }
                    isPressed={ layout === 'grid' }
                />
            </ToolbarGroup>

        </>
    );


};

export default BlockStyles;
