# Martin Wood Solution

1. [Server](#server)
2. [Client](#client)
3. [Running the application](#running-the-application)
4. [What I would have done differently](#what-i-would-have-done-differently)

## Server
I didn't spend much time on the server side as I wanted to focus more on the front end stuff, and not spend days implementing some fancy pants server. 
As such, the server is missing many things such as prepared statements, scripting attack protection, full error handling, and authentication, etc. 

I did however at a minimum create my own basic async wrapper for the mysql package since it's clearly outdated. I prefer the modern async/await pattern, especially coming from a C# background, and anything that reduces nasty horrible dirty ugly callbacks is my friend :)

I created a few basic endpoints for fetching jobs, and changing status:
- **GET** */api/jobs* - List all jobs that do not have the status of "closed" or "declined"
- **GET** */api/jobs/:id* - Get details of single job by ID
- **POST** */api/jobs/:id/accept* - Set this job ID to be accepted
- **POST** */api/jobs/:id/decline* - Set this job ID to be declined
- **GET** */api/jobs/:id/additional* - When accepting a job, I fetch just the additional information that was missing from the main view. This was to prevent users from reading values they shouldn't see from the javascript until they are at a point where they would be allowed to see it (IE: Having accepted the job)

The following were not really needed for this project, more for me to experiment with:
- **GET** */api/categories* - List all categories
- **GET** */api/categories/:id* - Get details of category by ID
- **GET** */api/categories:id/jobs* - Get all the jobs within this category ID

## Client
I tried to keep the application as open as possible. In particular I thought about how this might sit in a real world application, so have included react-router with some basic routes already. Only the jobs page actually does anything but in reality I am sure even this app would be more than just this one view. 
There isn't really much I can explain the app that isn't already commented in the code, especially as the design and functionality matches that which was required, so you already know what the app is meant to do. 

## Running the application
After some headache with Docker (needing to upgrade to Windows 10 Pro since it can't run on Home, having to fix up the mess that installing the older Docker Toolkit had left behind, finding out that Kaspersky really doesn't like Docker so just turning it off, then discovering that the Docker install didn't add some vital environment variables required to make it actually ever work in Windows!!), I have managed to keep this project running within the original boilerplate, so simply running `docker-compose up -d` will be sufficient, then you can find the client and server at the original localhost ports from the boilerplate.

The React App can be a little slow to start, this is because I had to include a command to rebuild the node-sass binding binaries. This seems a limitation of Docker as when I perform an install it obviously builds the binaries for my local machine, then when running in Docker it expects specific linux bindings, but of course cannot find them. 
This would be the same issue for you if you are running anything exept the exact same version of linux as the docker container. To quickly solve this, I just get the app to rebuild node-sass during the container start process. This means the required linux binding will be build, but it does slow the build down. 

I am sure there are plenty of other solutions available. Perhaps only running the rebuild if bindings are not found, or maybe some other docker specific solution, but in the interest of saving time I just took this quick solution. 

## What I would have done differently
For starters, I would love React's scheduler package to be released as it would add some great performance tweeks to this app, but for now I have just prepared the app as much as possible to use that later. I didn't want to use it yet as it is still classed as unsafe (since I last checked). 
I would have loved to have more time on it so I could enhance the server side, however given the scope and timescale of this challenge I would rather not spend too many evenings on something that is lower priority to demonstrate. 

Refacotring, I tried to keep it as SOLID and DRY as possible, but I still ended up with repeated code blocks, especially in the scss. Given a real application I would put more planning and focus into making sure there is as little (preferably none) repeated code anywhere in the app. 

Tests. Given that I was informed this was to be a few hours long coding challenge, I decided to forego testing for now as that alone would take at least the suitable time limit, if not more, and then no app would have build to go with it. Given more time, or a real life application, then I would have gone for a test first approach. Writing tests to cover all my API end points, all my action creators, all my UI logic, and all my reducers. Then, and only then, actually writing the real app. 
Unfotunately due to the scope and timeframe of this test app there simply wasn't time for that :(

## Why I did certain things
I don't want to go into too much detail here, but basically I tried to include a random sample of a few various techniques I have picked up over time as well as a general demonstration of react and redux. If you have any questions about justifying what I did, I'd be happy to answer if required :)