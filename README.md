# Start
1. Fist use npm init 
make others as default and eneter the author description or any otherthing you want 

2. create folder public > temp > and last file.gitkeep file

3. now generate the gitnore file you can write or 
https://mrkandreev.name/snippets/gitignore-generator/
select node
copy and paste in gitingore file

4. create the .env file write secret keys

5. now i will create folder src and create files there
6. create file there = touch app.js constant.js index.js
7. now i will be using module js  go to package.json and write there ="type": "module",
8. now i will be using nodemon  = npm install -D nodemon
"scripts": {
    "dev": "nodemon src/index.js" //index is the file we created
  },
dev dependicy = use in writing code but not use production
9.  mkdir controller db middleware models routes utils
controllers = functionality
db =connection logic
middleware = run in between eg verfify user
models = project structure
routes = navigation
utils = file upload, mailing, repating actions

10. now install prettier =. npm i prettier // you can ingore also this 
create file in main and name it as :  .prettierrc
{
  "singleQuote": true,
  "semi": true,
  "bracketSpacing":true,
  "tabWidth": 2,
  "trailingComma": "es5"
}

semi: Add a semicolon at the end of statements (true or false).
singleQuote: Use single quotes instead of double quotes (true or false).
tabWidth: Set space count for indentation (e.g., 2).
trailingComma: Add trailing commas where valid (all, es5, or none).
printWidth: Set maximum line length before wrapping (e.g., 80 or 100)

11. igore prettier  create file = touch  .prettierignore
write in file : 
/.vscode
/node_modules
./dist
*.env
.env
.env.*
**/node_modules

12. install : npm i mongoose express dotenv 
13. save PORT AND MONGODBURL in .env
14. constant.js = write there :export const DB_NAME = "videotube"
15. go to : index.js and we will connect connect db 
-> try catch wrap or promise 
-> Use another continent db take time so use : so use async and await use


import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Application Connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1)        
    }
}
export default connectDB

15. setup .env

16. Now go to index.js
write
import dotenv from "dotenv"
dotenv.config({
    path:'./.env'
})
and go to package json and write there : "scripts": {
    "dev": "nodemon src -r dotenv/config --experimental-json-modules /index.js"
  },

or if you dont want to use that : require('dotenv').config({path:'./env'})


connectDB()

