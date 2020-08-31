# Search-Giphy-React
Web App to search gif from 'Giphy' Api using React.js
### Description
* 'Search.js' **Contatiner** class send props to 'SearchBar.js' and 'SearchList.js' **Components**. 
* 'takeInput' and 'SearchNow' functions of 'Search' container is **bind** to input and button of 'SearchBar' component.
* On button click in SearchBar component it will call 'givemethedata' function in 'Search' container to **fetch the url**
* The response from api is converted to **json** , then store gif's url to 'imagedata' object in **state** of 'Search' container then pass it 'Picture' Component. 

### Tools Require :
 * **React.js, JSX, Bootstrap**
 * **Visual Studio Code** 
 * **npm**
 
## Authors
* **Shivender Kumar** - 
