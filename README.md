# Front-End Back-End and DataScience Testing

Currently main branch : NOT MASTER, frontending

This is not a serious project or something. What it all does is only pulling actual data from GitHub API. I used that because it was full-type open. Twitter and Instagram rejected me. Currently it only pulling data from location of new-york. You can actually change it by yourself, it's just default value. 

  The code that you can change to see different locations are stored in ->
  schema.js line 49.

/-----------------------------------------------------------------------------------------------------------------------

# How to Run / Use
  From console: "npm run client" after download
  http://localhost:3000 and http://localhost:4000 will start-up.
  
```sh
localhost:3000 and localhost:4000
```
  4000 is for backend and query'ing. You can go http://localhost:4000/graphql
  
  If getting error that jobs are undefined you can still run "npm run dev" "npm start --prefix client"
  
  
```sh
$ npm run client
$ npm run dev
$ npm start --prefix client
```
  
```sh
  example query: 
  {
  job(id: "5f549c68-8618-44d6-9201-680665da5f13"){
    location
    company
    created_at
    id
  }
}
    or 
{
jobs{
  id
  title
 }
}
```
The values: title
      company
      type
      location
      created_at
      id

/-----------------------------------------------------------------------------------------------------------------------

# TODO: 
  Add a search bar, default value is new-york. Make it changable from user.
  Deploying it.
  Data Clustering.
  Time implementation (if the job was offered 4 months ago it's probably hard to get so the button becomes red)
  
License
----

MIT


**Free Software, Hell Yeah!**
  
