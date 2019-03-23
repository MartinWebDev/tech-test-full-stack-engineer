# Martin Wood Solution

## Server
I didn't spend much time on the server side as I wanted to focus more on the front end stuff, and not spend days implementing some fancy pants server. 
As such, the server is missing many things such as prepared statements, scripting attack protection, full error handling, and authentication, etc. 

I did however at a minimum create my own basic async wrapper for the mysql package since it's clearly outdated. I prefer the modern async/await pattern, especially coming from a C# background, and anything that reduces nasty horrible dirty ugly callbacks is my friend :)

I created a few basic endpoints for fetching jobs, and changing status:
- **GET** */api/jobs* - List all jobs that do not have the status of "closed" or "rejected"
- **GET** */api/jobs/:id* - Get details of single job by ID
- **POST** */api/jobs/:id/accept* - Set this job ID to be accepted
- **POST** */api/jobs/:id/reject* - Set this job ID to be rejected
The following were not really needed for this project, more for me to experiment with
- **GET** */api/categories* - List all categories
- **GET** */api/categories/:id* - Get details of category by ID
- **GET** */api/categories:id/jobs* - Get all the jobs within this category ID

## Client
