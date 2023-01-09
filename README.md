# nodejs_hanson3-

In this example, the globalMiddleware function will be applied to all routes in the backend application, because it is added using the app.use() method. The specificMiddleware function, on the other hand, will only be applied to the /route1 and /route2 routes, because it is added as a middleware for those routes using the app.get() method.
