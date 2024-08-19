# Book Manager

**Book Manager** is a WordPress plugin that enables the management of books through a custom post type and display via a Gutenberg block.

## Features

- **Custom Post Type:** Create and manage books with a dedicated post type.
- **Book Submission Form:** Allow users to submit books via a front-end form with AJAX submission.
- **Approval and Rejection:** Admins can approve or reject book submissions, sending email notifications to the authors.
- **Gutenberg Block:** Display books in a customizable layout using the Gutenberg editor.
- **Admin Interface:** Manage all book submissions from the WordPress admin panel.

## Installation

1. Download the plugin and unzip the file.
2. Upload the `book-manager` folder to the `/wp-content/plugins/` directory.
3. Activate the plugin through the 'Plugins' screen in WordPress.
4. Go to the 'Books' menu in the WordPress admin dashboard to start managing your books.

## Usage

### Gutenberg Block

#### Building Assets (For Developers)

1. **Install Dependencies:**
    - Navigate to the plugin directory and run `npm install` to install the required dependencies.
    - This will install the necessary packages for building the assets.
    - You can also run `npm run build` to build the assets.
    - For development, you can run `npm run start` to watch for changes and rebuild the assets automatically.
    - The built assets will be available in the `assets/build` directory.
   
#### Block Usage

The plugin provides a Gutenberg block named **"Book Manager"** to display books on your site.

1. **Add the Block:**
    - Open the Gutenberg editor.
    - Search for the "Book Manager" block in the block inserter.
    - Add the block to your post or page.

2. **Customize the Block:**
    - Adjust the block settings such as layout, number of books per page, ordering, and more directly within the block settings panel.

3. **Block Attributes:**
    - **Layout:** Choose between grid or list layouts.
    - **Search:** Enable or disable the search functionality.
    - **Per Page:** Set the number of books displayed per page.
    - **Order:** Define the order of the books (ascending or descending).
    - **Order By:** Specify the parameter by which books should be ordered (e.g., date, title).

### Shortcodes

The plugin includes several shortcodes for various functionalities:

1. **[add-book]**
    - Displays a form for users to submit their books.
    - The form includes fields for the book title, description, front image, author name, and email.

2. **[book-list]**
    - Displays a list of books on the front-end.
    - Supports attributes like `id` (to display a specific book by ID).

   Example:
   ```html
   [book-list id="123"]
