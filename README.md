
# Address book app

## Home page
This is a fictional address book app, where you can search for users addresses and
personal information. The app displays a list of users for clients to browse and get
personal information for a selected user.

![Main page](https://panglat.github.io/code-challenge-address-book-app/images/home-page.png "Main page")

The user´s list will automatically load more users as you scroll down. An animated **loading...** message will be displayed at the bottom of the list while the visitor waits.
To improve the user s experience, it always pre-emptively fetch the next batch of
users in advance, making use of idle time. But they still should not be displayed until the
visitor has scrolled to the bottom of the user´s list.
When the visitor reaches the end and there are no more users to display, an **end of users catalog** message will be displayed at the bottom of the list.
There is displayed a user search on top of the app. The search field is case insensitive and filters the results by first name + last name.

## Details modal
![Details modal](https://panglat.github.io/code-challenge-address-book-app/images/home-page-modal.png "Details modal")
When visitor clicks on the specific user in the row a detail modal with additional info is opened.

## Settings page
![Settings page](https://panglat.github.io/code-challenge-address-book-app/images/settings.png "Settings page")

At the top-right, the visitors can navigate to the settings page by clicking Settings in the navigation bar.
Here the visitor can set, from which nationalities users are fetched for browsing/searching. Possible choices should be: Swiss, Spanish, Franch and British.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Address Book App documentation](https://panglat.github.io/code-challenge-address-book-app/index.html).
