  # Biz Manager

  ## Description
  This application will help you interface with a database! The primary use is to keep track of employees, roles and departments! Create new employees, roles and departments and then view all! Future features will include deletion and ability to update entries as well!

  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

  ## Installation
  First clone my repository. Then in terminal or git bash, navigate to the root folder of the project containing index.js and some other files/subfolders. In the terminal run command npm install. This should install all required dependecies which include mysql2, inquirer, and console.table. Note that you will need to already have a database ready to connect to; see notes below usage.

  ## Usage
  After installing npm dependencies, simply enter the terminal command "npm start"! This will run the application, first creating a connection to the database (See note below) and then presenting a prompt of options for you to choose from! Feel free to view my demo video here: 
  https://watch.screencastify.com/v/kuzti8OPjp89rk1lPKTt
  **(note this application does NOT create the database itself; however a schema and sample seeds file have been provided to run in mysql CLI)
  **(note to run a local instance you will need to have a database set up with mysql. You will also need to change db/connection.js to include your local mysql database server logins)

  ## Licenses
  Unlicense
  Copyright Notice 2021 alexm1937 under The Unlicense License: </br>
    This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.
    
    In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    https://unlicense.org/

  ## Contributing 
  If you would like to contribute, please clone my repo and create your own feature branch. I will then review and merge code after it has been pushed to my repo into your own branch. We are looking primarily for help changing some functions into async/promises which will be done when time permits. 

  

  ## Questions
  You can find my github at: https://github.com/alexm1937 </br>
  
  