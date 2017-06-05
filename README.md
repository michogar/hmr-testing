# Testing HMR with Cordova
## Why?
Trying use HMR in a device using:

* [HMR](https://webpack.js.org/guides/hot-module-replacement/)
* webpack-dev-server

in order to avoid the continuous app reloading.
  
## Getting started

~~~
$ yarn 
$ cordova platforms add android
$ npm run dev
~~~

and in other terminal

~~~
$ cordova run android
~~~

Any change in `src` folder will be updated.

## TODO
* webpack.prod.config.js
* hook to change `content` tag in `config.xml`