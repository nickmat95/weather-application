## About application:
Simple application which display short and detailed weather forecast for towns.

There are 4 pages in application: 
* ### home page: 
main page, opens on load application. Display short weather forecast for current day for all towns and current date. There are two filters on the page: filter by towns and filter by regions. Filters have autocomplete function. On click on the town forecast, you will transferred on the detailed page;
* ### detailed page: 
display name of selected town and week weather forecast for it. There are two blocks on the page: block with extended forecast and block with days of the week. If you click on the day of the week, information in the first block will be change extended forecast of selected day. By default selected current date (which always goes first in the days of the week list). Also, selected day is highlighted with a frame.
* ### not-found page: 
display page missing message.
* ### error page: 
only in development mode. Display errors, when page/application crashes.

## How to start:

For starting you should have **node.js**, **npm** and **git**.

* clone the repository from github, you can use:
`$git clone https://github.com/nickmat95/weather-application.git`

* install **yarn** in project repository:
Run `yarn install`

* Run application by using:
`yarn start`