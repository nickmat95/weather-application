## About application:
Simple application which display short and detailed weather forecast for towns.

There are 4 pages in application: 
#### home page: 
Main page, opens on load application. Display short weather forecast for current day for all towns and current date. There are two filters on the page: filter by towns and filter by regions. Filters have autocomplete function. On click on the town forecast, you will transferred on the detailed page;
#### detailed page: 
Display name of selected town and week weather forecast for it. There are two blocks on the page: block with extended forecast and block with days of the week. If you click on the day of the week, information in the first block will be change extended forecast of selected day. By default selected current date (which always goes first in the days of the week list). Also, selected day is highlighted with a frame.
#### not-found page: 
Display page missing message.
#### error page: 
Only in development mode. Display errors, when page/application crashes.

## How to start:

For starting you should have **node.js**, **npm** and **git**.

* Clone the repository from github, you can use: `git clone https://github.com/nickmat95/weather-application.git`

* Install **yarn** in project repository by using: `yarn install`

* Run application by using: `yarn start`

***

## Описание приложения:
Простое web-приложение, отображающее сокращенный и расширенный прогнозы погоды для разных городов.

Приложение содержит в себе 4 страницы:
#### home page:
Главная страница, открывается при загрузке приложения. Отображает сокращенный прогноз погоды для городов на текущую дату, также, отображает текущую дату. Имеет два фильтра: фильтр по городам и фильтр по регионам. Поля ввода фильтров поддерживают функцию автозаполнения. При нажатии на прогноз погоды для города, срабатывает перенаправление на страницу detailed page.
#### detailed page:
Страница отображения расширенного прогноза погоды для выбранного города. Отображает название выбранного города и недельный прогноз погоды. На странице имеются два блока: блок с отображение расширенного прогноза погоды на выбранный день и блок с днями недели. При клике на день недели, прогноз в первом блоке изменится, соответственно, для выбранного дня. По умолчанию выбран текущий день недели (всегда идет первым в списке дней недели). Также, выбранный день подсвечивается рамочкой. 
#### not-found page:
Выводит на экран сообщение об отсутствии страницы.
#### error page:
Действительна только в режиме разработки. Выводит сообщение об шибке и ее описание, в случае, если страница/приложение ломается.

## Начало работы:

Для начала работы, у вас должны быть установлены: **node.js**, **npm** и **git**.

* Склонируйте приложение с github. Можно использовать следующую команду: `git clone https://github.com/nickmat95/weather-application.git`.

* Установите **yarn** в репозиторий проекта, используя: `yarn install`.

* Запустите приложение, используя: `yarn start`.