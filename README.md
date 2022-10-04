# purchase-order-viewer
 
- ## Description

I stored the contents of the json file in a variable and parsed it with JSON.parser

For the 1st task I wrote the html page where I created the template to use with Handlebars.

The page is simple and only features a heading and a barely stylized list of links.

Using JavaScript and Handlebars the appropriate information were loaded to the page.

Each link of the product list leads to another page that holds in the url the id of the order.

The page is opened in a new tab.

For the 2nd task using JavaScript the order id is read form the url and is used in finding the relevant order from the list of orders.

For the basic information (address, person, etc) handlebars is used again.

Handlebars use was aimed for cleaner code.

For the table and the rest of the information vanilla JavaScript was used mainly for show purposes.

The order info page is once again simple and only features the needed information.

Extensive styling was avoided as it seemed it was not the purpose of the task.

- ## Relevant CV work

[E-course, Web Developent Class Assignment](https://github.com/s-lekka/e-course)

For the purpose of the assignment information was fetched from a given Web API that returned a list of courses in JSON format. The information was parsed and handled and using a search bar for user requests the relevant data was shown dynamically with the help of Handlebars templating language and proper url syntax. For the same assignment a list of course categories was created in the same manner for the navigation bar and each item lead to a new page with more information on the category's courses.