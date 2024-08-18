document.addEventListener( 'DOMContentLoaded', function () {
    const form = document.getElementById( 'add-book-form' );
    const responseContainer = document.getElementById( 'book-form-response' );

    form.addEventListener( 'submit', function ( e ) {
        e.preventDefault();

        const formData = new FormData( form );
        formData.append( 'action', 'submit_book_form' );

        fetch( bookManagerFrontend.ajax_url, {
            method: 'POST',
            body: formData,
        } )
            .then( response => response.json() )
            .then( data => {
                responseContainer.classList.remove( 'success', 'error' );
                responseContainer.innerHTML = '';
                responseContainer.style.display = 'none';

                if ( data.success ) {
                    responseContainer.classList.add( 'success' );
                    responseContainer.innerHTML = data.message;
                    responseContainer.style.display = 'block';

                    form.reset();

                    if ( typeof tinyMCE !== 'undefined' && tinyMCE.get( 'book_description' ) ) {
                        tinyMCE.get( 'book_description' ).setContent( '' );
                    }
                } else {
                    responseContainer.classList.add( 'error' );
                    responseContainer.innerHTML = data.message;
                    responseContainer.style.display = 'block';
                }

                setTimeout( () => {
                    responseContainer.style.display = 'none';
                }, 5000 );
            } )
            .catch( error => {
                responseContainer.classList.add( 'error' );
                responseContainer.innerHTML = bookManagerFrontend.error;
                responseContainer.style.display = 'block';

                setTimeout( () => {
                    responseContainer.style.display = 'none';
                }, 5000 );
            } );
    } );
} );
