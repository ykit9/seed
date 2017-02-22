<h3>Simple front-end gulp seed with build infrastructure</h3>
 
<h5>Available tasks:</h5>
 
 <h6>gulp connect</h6> Create a server on localhost. Entry point "app/public" <br>
 <h6>gulp ngrok-url</h6> Create a tunnel from localhost to www, user receives an url after execution. Gulp connect must be 
launched and working.
 <h6>gulp images</h6> optimize images from "app/src/images" and move optimized copies to "app/public/images"
 <h6>gulp html | js | sass </h6> perform a build of sources from "app/src" and move them to "app/public. sass building performs with an sass Lint tool.
 
 <h6>gulp build</h6> perform a build
 
 <h6>gulp default</h6> execute a 'connect' , 'build' and 'watch' task
  