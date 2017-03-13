# realeyes-app

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

if it doesnt work please try to run bower install and npm install.

## Testing

Running `grunt test` will run the unit tests with karma.


## Server code

https://github.com/eduardo704/realeyes-server

The server is rather simple it just reades the xml and transforms it into a json

it is also deployed on heroku and can be accessed on http://cryptic-sea-20456.herokuapp.com/cur

## Deployment 

This project is also deployed on https://eduardo704.github.io/realeyes/

There is a problem with the charts library. I think it can be solved if I do a promise ad wait for it to download.

## UX and Design

The project itself is rather simple.

It has a simple currency exchange screen, it could maybe have been done that as the user types it automatically calculates like the transferwise site but I thought the way I did is also good. 

Another UX feature was the change button that swap the currencies.

## IF I had more time and what to do.

My next priority would be to fix the chart on deployment

also maybe add the on type it calculate the currencies;

make a more more complete chart component enabling to compare currencies.
