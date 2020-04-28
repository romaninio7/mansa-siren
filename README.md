## Documentation

### `App structure`

The application has the next structure :

| Parent               |
| -------------------- |
| App                  |
| - UserProfile        |
| -- UserBusiness      |
| --- UserBusinessItem |
| - UserFinance        |
| -- Account           |
| -- Modal             |
| --- Chart            |
| --- ModalContent     |

**UserProfile** shows up some basic user profile information based on FAKER library. It contains **UserBusiness** component which generates an API request to the SIREN server in order do get three parameters: _siret_, _startDate_ and _adresse_.
**UserFinance** makes an API request on Mansa server in order to get a list of existing user accounts and it shows them up by mapping the **Account** component. **UserFinance** has also the **Modal** component which becomes visible after clicking on one of the accounts. **Modal** component makes an API request on Mansa server in order to get a chart data for several years. After fetching it chows up the data thanks to **Chart** component of _react-apexcharts_ library.

### `Used libraries`

| Library          | Usage               |
| ---------------- | ------------------- |
| axios            | API requests        |
| react-apexcharts | chart visualization |
| react-jss        | CSS-in-JS           |
| semantic-ui      | css structure       |
| enzyme           | testing             |
| storybook        | storybook           |

### `Patterns`

Application is using **typescript** with **functional based react components** and **Hooks**.

### `Optimization opportunities`

1.  Make animation between accounts and Modal **smoother**;
2.  Add some additional animation;
3.  Finding a solution for animation with JSS;
4.  Use one useReducer hook instead of several useStates
5.  Find a chart library with automatic requests to the server in real time that are produced while the user tries to see an ancient data.

### `Run`

Run the application using **yarn start** on **npm run start**

### `Test`

Run tests using **yarn test** on **npm run test**

### `Storybook`

Run storybook using **yarn storybook** on **npm run storybook**
