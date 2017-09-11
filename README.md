# APItodolist

Création d'une API avec NodeJS, Express et Typescript qui permettra de faire des listes de chose.

## New List

Add a new list. You can protect your list with a password.

* __URL__: 

    /newList

* __Method:__

    GET

* __URL Param:__

    __require:__
    
    `name=[nameList]`

    __optional__

    `password=[password]`

* __Success Response:__

    __Code:__ `200 OK`
    
    __Content:__ `[nameList]`

* __Error Response:__

    __Code:__ `400 Bad Request`

    __Content:__ None

## New element in List

Add a new element in a list.

* __URL__: 

    /:nameList/newElement

* __Method:__

    GET

* __URL Param:__

    __require:__
    
    `list=[element]`

    __optional__

    `password=[password]`

* __Success Response:__

    __Code:__ `200 OK`
    
    __Content:__ `[nameList: Array(elements)]`

* __Error Response:__

    __Code:__ `400 Bad Request`
    
    __Content:__ None

## Delete a List

Deletes an entire list with all its elements.

* __URL__: 

    /:nameList/

* __Method:__

    DELETE

* __URL Param:__

    __optional__

    `password=[password]`

* __Success Response:__

    __Code:__ `200 OK`
    
    __Content:__ None

* __Error Response:__

    __Code:__ `400 Bad Request`
    
    __Content:__ None

## Deletes an element

Delete one element in a List.

* __URL__: 

    /:naleList/:idElement

* __Method:__

    DELETE

* __URL Param:__

    __optional__

    `password=[password]`

* __Success Response:__

    __Code:__ `200 OK`
    
    __Content:__ `[number]`

* __Error Response:__

    __Code:__ `400 Bad Request`
    
    __Content:__ None

## Display List

Display one List and all its elements.

* __URL__: 

    /display

* __Method:__

    GET

* __URL Param:__

    __require:__
    
    `name=[nameList]`

    __optional__

    `password=[password]`

* __Success Response:__

    __Code:__ `200 OK`
    
    __Content:__ `[nameList] : { [idElement] : [element] , [idElement] : [element] , ... }`

* __Error Response:__

    __Code:__ `400 Bad Request`

    __Content:__ None