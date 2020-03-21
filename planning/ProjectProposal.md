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

## User Stories
* as a seller, I can create (update/delete) a sale event (description, locaiton, date)
* as a seller, I can create (update/delete) an item for sale
* as a seller, I can add items to sell to my event
* as a seller, I can mark an item as sold (so it doesn't appear anymore)

### Stretch
* bid/give feedback on items
* show location with map api

### Development approach
Having agreed on the app concept, we collaborated on screen mocks and captured user stories and a roughed out data and component model wireframe around an MVP. To get started, Myra created a 'frontend' respository and Patrick created a 'backend' respository. Over the weekend, we respectively worked on in our respective repositories to establish the basic installation dependencies, file structures and code.




