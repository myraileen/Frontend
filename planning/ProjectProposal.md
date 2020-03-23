# e-Sale app

## Description
This app lets people setup a sale event to list items for sale.

## Wireframe
### MVP
* as a user, I can create a sale event
    - event description
    - date of event
    - address of event
  - seller
    - seller name
    - sale events [ sale event ids ]
    - items for sale [ item collection ]
  - items for sale
      * seller
      * item
      * description
      * cost
      * image (url)
      * sold (boolean)
      * events [ collection of events ]
* there are three backend data models here (seller, event, items for sale)
* react router routes would include: 
      * /home (list of events)
      * /event
      * /item

## Screen Mocks
* home/landing page (https://wireframe.cc/Bs9KFt)
* event page (https://wireframe.cc/RHbhrj)
_add data ERD to this doc

## User Stories
* as a seller, I can create (update/delete) a sale event (description, locaiton, date)
* as a seller, I can create (update/delete) an item for sale
* as a seller, I can add items to sell to my event
* as a seller, I can mark an item as sold (so it doesn't appear anymore)

## Backend DB Transactions
* app load - / - get all events
* event click - /event/:id - GET one event object (all item)
* add event - /event/:id - POST a single event document... no items... (initially - create user... eventually, maybe can make referential)
* add item to event - /event/:id - PUT to update event doc by pushing new item into the docs item array

* update and item (mark it sold/boolean... or cost) - PUT... against this path /event/:948209event86290485/:02948item5904286

* PUT event - update name or something
* PUT item - update sold... or cost...
* DELETE item by ID
* DELETE event by ID


stretch - grow the below MVP model into a referential model by user docID
* GET - find by seller name... 

event 1: _id=982609823957 and sellerName=myra
event 2: _id=ARJARTARIGJA and sellerName=myra


### Stretch
* bid/give feedback on items
* show location with map api

### Development approach
Having agreed on the app concept, we collaborated on screen mocks and captured user stories and a roughed out data and component model wireframe around an MVP. To get started, Myra created a 'frontend' respository and Patrick created a 'backend' respository. Over the weekend, we respectively worked on in our respective repositories to establish the basic installation dependencies, file structures and code.




