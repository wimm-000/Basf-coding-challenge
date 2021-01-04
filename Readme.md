# Basf {} Coding challange

- [Project description.](#project-description)
- [Requirements](#requirements)
- [Instalation](#instalation)
- [Production build](#build)
- [Pending Tasks](#tasks)


### <a name="project-description"></a> Project Description ###

**Mandatory:** react app to display search results  
**Optional:** backend app in node, graphql app to manege products and user  
**Optional:** login with oauth and display user data.

### <a name="requirements"></a> Requirements ###

The project will require __node v14 or higher__, we are using es6 in the backend/api


### <a name="instalation"></a> Instalation ###

To install the project you will need to install the node dependencies.

If you can run __shell scripts__ run

```
npm run install-project
```

In the terminal inside the root folder

If you cannot run
```
npm install
```
In the following folders

- /
- /api
- /frontend-app


### <a name="build"></a> Production build ###

To see the project you will need to create a production build

If you can run __shell scripts__ run 
```
npm run build-prod
```

If you cannot run __shell scripts__  
Go inside __frontend-app__ and run 
```
npm run build
```
This will create a build folder with the compiled frontend

Move the build folder into de __/api__ folder and rename it to __public__

To run the production project
```
npm run start-prod
```
Go to [http://localhost:3001](http://localhost:3001) in your browser

If yoy want to run the project in development mode run
```
npm run dev
```
from the root folder

### <a name="tasks"></a> Pending Tasks ###

- [x] Show table as view and show list in route
- [x] Finish deploy build system
- [x] Search form activate btn if needed
- [x] Add adcions to next
- [x] Add adctions to prev
- [x] restart seach by new term and type
- [x] Show number of pages in pager component
- [ ] Login route and github login
- [x] If no results confirm  no result component
- [x] If desktop hide show form button
- [ ] Add table in development.
- [ ] Complete table view data
- [ ] add gsap and react-trasition-group to create animations
- [x] correct list masonry view
- [x] Fixed header
- [x] search input on blug check str length
- [x] type chech func inverted
- [x] searchform button missing
- [x] size control in search form if >= to main breakpoint show
