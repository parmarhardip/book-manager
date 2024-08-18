import { __ } from "@wordpress/i18n";
import { Spinner } from '@wordpress/components';
import { useContext } from "@wordpress/element";
import { detailContext } from "../context/detail.context";
import { getStyles } from "../context/styles.context";
import Item from "./Item";

const Items = () => {

    const details = useContext( detailContext );

    console.log(details);
    const { items, isLoading, totalItems } = details;
    if ( isLoading ) {
        return <div className="sample-block-item-block-loading"><Spinner/>{ __( 'Loading...', 'book-manager' ) }</div>;
    }

    const hasItems = items && items.length > 0;
    if ( !hasItems ) {
        return (
            <div className="sample-block-item-block-loading">
                { totalItems > 0 ? <Spinner/> : __( 'No item found.', 'book-manager' ) }
            </div>
        );
    }

    const contextStyle = getStyles();
    const { layout } = contextStyle;

    return (
        <>
            <div className="container">
                <div className="gridlist-container">
                    <div className={ `gridlist ${ layout === 'grid' ? 'gridview' : 'listview' }` }>
                        { items.map( ( item, index ) => {
                            return <Item key={ index } item={ item }/>;
                        } ) }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Items;