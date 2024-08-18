const Item = ( props ) => {
    const { item } = props;
    const title = item.title.rendered;
    const featuredImg = item.featured_image ? item.featured_image : 'https://via.placeholder.com/150';
    return (
        <div className="item is-collapsed">
            <div className="item-container ">
                <div className="item-cover">
                    <div className="avatar">
                        <img src={ featuredImg }/>
                    </div>
                </div>
                <div className="item-content">
                    <a className="subhead-1 activator" href="javascript:void(0);">{ title }</a>
                </div>
            </div>
        </div>
    );
}

export default Item;