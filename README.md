# Test App - Challenge N5

#### _Elberth Agreda @elberthAgreda_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

#### Arquitectura Implementada

![Arquitectura Implementada](https://unoraya.com/demo/arquitectura.png)

##### Tiempo invertido en el reto 5hrs

### Solución
![UI](https://unoraya.com/demo/home.png)

### Performance
![UI](https://unoraya.com/demo/performance.png)

Link demo;
https://unoraya.com/demo/n5

Link MFs independientes:
Films: https://unoraya.com/demo/n5/home/films/
Series: https://unoraya.com/demo/n5/home/series/

## Reto

Desarrolla una aplicación web que tenga una página principal, con dos botones que permitan el cargue de un listado de los personajes de dos series o películas distintas (ejemplo: Rick and Morty y Harry Potter) en este listado se debe visualizar mínimo el nombre y la imagen del personaje.

#### Requerimientos Técnicos:

- Deben ser tres proyectos 100% independientes y se debe renderizar
  empleando microfrontends para su correcta visualización en el
  proyecto host.
- El Proyecto host, debe contar con una opción de cambio de idioma
  (inglés / español), de tal forma que de acuerdo al idioma seleccionado,
  debe ser la visualización de la descripción del nombre y demás textos
  que contengan los listados y la página en general.
- Contar con pruebas unitarias.
- contar con Styled Component con Metodología BEM
- Se debe garantizar que se pueda escalar facil la aplicacion
  Plus:
- Se tendrá en cuenta se se usa Patrones de diseño
- se valora Calidad y legibilidad del código
- se valora implementación de SOLID

## Preguntas:

##### What is accessibility? How do you achieve

- the following accessibility-related tasks are added:
  -- Buttons have accessible names
  -- Image elements have [alt] attributes
  -- Header elements are ordered in a descending sequence
  -- among other

##### What is the difference between session storage, local storage, and cookies?

- cookies can be read directly from the server, instead, LocalStorage only saves and allows data to be read from the client. Cookies have a much lower storage limit compared to LocalStorage. the difference between LocalStorage and SessionStorage is that LocalStorage stores the information indefinitely or until you decide to clean the browser data and SessionStorage stores information while the tab where it is being used is still open, once closed, the information is deleted.

##### Explain the javascript event loop (also may explain how promises or async await work in js these are basically all the same question/answer)

- A promise is an object that represents a value that may be available "now", in the "future", or "never". JavaScript is single threaded, meaning it can only execute one action at a time, so using promises makes it much easier to control asynchronous data flows in an application.

##### If you are getting too many API calls being made from your hooks, what can you do to prevent this?

- For this case I decided to store the API result in an observable and avoid excessive use of the service.

##### How do you manage the global state?, and why in that way?

- global objects refer to objects in the global scope. The global object itself can be accessed using the this operator in the global scope (but only if ECMAScript 5 strict mode is not used, in which case it returns undefined). In fact, the global scope consists of the properties of the global object, including inherited properties, if any.

##### What is progressive rendering?

- Progressive rendering is the name given to techniques used to improve the performance of a web page (in particular, improve the perceived load time) to render content and display it as quickly as possible. My experience is in the use of PageSpeed as a measurement tool

##### What kind of metrics have you been checking to evaluate or care about in frontend apps?

- Pagespeed
- Pingdom
- Bundle Analyzer
- Analytics

##### How do you make the decision to revamp/rebuild an application?

- When it is a legacy application or if it is defined as a change in technology. Personally, I generate a dependency update policy once a year.

##### Which standards do you think it's important to share in frontend apps?

- Using design patterns, architecture patterns, working with a design system, working with development principles

## Instalación

Instale [Node.js](https://nodejs.org/) v10+ y [Angular Cli](https://angular.io/cli)

Instale las dependencias del proyecto

```sh
npm i
```

Levantar localmente todo el proyecto

```sh
npm run start:all
```

Puede tambien levantarlos de forma independiente dependiendo lo que necesite:

Levantar el mf host

```sh
npm run serve:host
```

Levantar el mf films

```sh
npm run serve:films
```

Levantar el mf series

```sh
npm run serve:series
```

## Pruebas Unitarias

Correr las pruebas unitarias del mf host

```sh
npm run test:host
```

Correr las pruebas unitarias del mf films

```sh
npm run test:films
```

Correr las pruebas unitarias del mf series

```sh
npm run test:series
```

### Canal de youtube

https://www.youtube.com/channel/UCPSRQB5KQFMORp1f_jHHNMw/videos
