Based on [flux-react-boilerplate](https://github.com/christianalfoni/flux-react-boilerplate) by [Christian Alfoni](https://github.com/christianalfoni)  

## FLUX React JS Boilerplate

Based on the architecture suggestions from Facebook, this boilerplate will help you deal with it. It has included the flux-react extension to React JS, [flux-react](https://github.com/christianalfoni/flux-react). 

Read more about FLUX over at [Facebook Flux](http://facebook.github.io/flux/) and I wrote a post about it too: [My experiences building a FLUX application](http://christianalfoni.github.io/javascript/2014/10/27/my-experiences-building-a-flux-application.html) and [React JS and FLUX](http://christianalfoni.github.io/javascript/2014/08/20/react-js-and-flux.html)

### Development
* Run `npm install`
* Run `gulp`
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* Both tests and application changes will refresh automatically in the browser
* Run `gulp test` to run all tests with phantomJS and produce XML reports (_not tested yet_)

### Minify the code, ready for production
* Run `gulp deploy` (_not tested yet_)

### Directory
* **build/**: Where your automatically builds to. This is where you launch your app in development
* **dist/**: Where the deployed code exists, ready for production
* **styles/**: Where you put your css files
* **specs/**: Where you put your test files
* **gulpfile**: Gulp configuration
