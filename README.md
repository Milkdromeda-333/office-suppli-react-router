### Office Suppli
<hr>
This is a small experiment I implimented to test my knowledge of using React Router, using Vite to create the project, Bootstrap to quicken the styling process, ui.dev to follow along, and unspalsh random image generating url.

 I learned to:

 - Set up React router in a project
 - Use `Routes` to watch over my routes and render which route it finds bet based on the url
 - Use `Route` to point to a component based on a given path.
 - Use url parameters in my `Route` path to dynamically render a component and send data to use in the given component. 
 - Use `Link`s to create a tags that will lead to a given path defined inside of `Routes`
 - Use Navigate and useNavigate to navigate to another route inside of a function.

 Also, I added an express server to practice linking font end to back end, and learned that res.send() cannot take numbers..... per this website https://expressjs.com/de/api.html#res.send

 also!! Me and Maira had a hard time getting the react app to use the proxy in the normal way. We figured out that we had to add the proxy to the vite config file, and update the endpoints to use `/api`.