<h1>Frontend Boilerplate</h1>

<h2>Frontend started template using Bootstrap, Sass and Gulp 4</h2>
<h3>What's included</h3>

<ul>
  <li>Single HTML page to demonstrate how everything works</li>
  <li>Font family Roboto & rel attribute preconect</li> 
  <li>npm scripts see (package.json) for compiling with Sass, watching task to started a basic local server or on ip address (if you have the network system) or localhost:3000</li>
  <li>Option 1. Import all of Bootstrap's CSS</li>
  <li>Option 2. Import just the Bootstrap's styles you need</li>
  <li>Option 1. Import all of Bootstrap's script (gulp-concat)</li>
  <li>Option 2. Import just the Bootstrap's script you need</li>
  <li>Cache Control</li>
  <li>jQuery Collapser | See assets for more styles</li>
  <li>Font Awesome customizable</li>
  <li>Picturefill library</li>
  <li>To include html partials, use module.js, noscript in the html as fullback</li>
  <li>Multi level dropdown menu</li>
</ul>

<h4>Frameworks & Libraries included</h4>
<p>Bootstrap, jQuery, Popper.js, Responsive font size (rfs), Font Awesome, jQuery Collapser</p>

<h4>Plugins included</h4>
<p>gulp, gulp-sass, cssnano, gulp-postcss, autoprefixer, purgecss, htmlmin, gulp-concat, gulp-uglify, gulp-source-maps, gulp-imagemin, browser-sync</p>

<h5>Usage</h5>
<ul>
  <li>Install [Node.js](https://nodejs.org/en/) You need node v.10.15.3 above</li>
  <li>Clone the repo</li>
  <li>Run `npm install` install dependencies</li>
  <li>Run all the `gulp task` one by one in this way the libraries are loaded `go in  gulpfile.js `// Gulp tasks`</li>
  <li>Go into the assets dir and git clone the jQuery collaper `see readme.md`</li>
  <li>Run `gulp watch` to run the default gulp task (see gulpfile.js)</li>
  <li>Cache control run before production (see links with ?id=123)
    <ul>
      <li>Run `gulp cacheBustTask`</li>
      </ul>
    </li>
    <li>Remove asstes from dist file when upload in production, .browserslistrc need to be into the same directory of the assets for it to work</li>
</ul>
