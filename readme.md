# Food Order App

## 1.Introduction


This is a prototype Food Ordering App, it allows __guest users__ to:
* view the menu in preferred currency with real time exchange rates.
* submit orders. 

It also allows the __merchant__ to: 
* view and manage all incoming orders
* edit the Restaurant's Menu.

## 2.Stack Used

Backend:
* Node.js 
* Express
* Ejs
* MongoDB/Mongoose

Frontend:

* HTML/CSS
* JQuery

APIs:

* [Currency Conversion API](https://api-ninjas.com/api/convertcurrency)

## 3.Installation Guide



 1. To install required dependencies run :

 ~~~
 npm install

 ~~~

 1. To start the server run:

 ~~~

 node app

 ~~~
 
 or 
 
 ~~~

 nodemon app

 ~~~
 
 1. To access the app, open [http://localhost:3000](http://localhost:3000) in your browser.
 
 
 ## 4.User Guide
 ##### Guest User Controls:
  * Menu Page:
 
    * Select the quantity of the menu items you would like to order.
    * Change your preferred currency display at the top of the page.
    * Press the submit button to submit your order.

*  Order Confirmation Page:
    * Enter your personal information and press confirm to send your order.
        * The admin must first accept the order from the control panel in order for it to be complete.
    * Cancel your order and return to the homepage by pressing the cancel button
    
##### Admin Controls:

* Click on the Control Panel hyperlink on the navigation bar to access the admin control panel
* In the Order List click on any order to access the Order Details, there you can:
    * Accept the Order (Check Mark Icon)
    * Delete the Order ( Trashcan Icon)
    * Cancel the Order (X Icon)
* Clicking on the Pencil Icon will open the Edit Menu Page. There you can:
    * Click on a menu item and edit it's fields or delete it.
    * Click on the Create Product Button to create a new menu item.
    
    
    
    
 
 ## 5. Planned Features/ Roadmap
 * Admin Dashboard
 * User Registration/Login/Authentication System
 * Shopping Cart Model
 * Custom Categories
 * Payment simulation with Stripe
 * Frontend migration to React.js or Vue.js
 
 
 
 