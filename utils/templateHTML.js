//HTML cards
// creating all the team cards from user inputs
const teamRender = (team) => {
  //creating manager card with user inputs
  const renderManager = (manager) => `

  <div
  class="card col-3 me-3 mb-5 text-white bg-dark mb-3 col-md-3"
  style="max-width: 18rem;"
>
  <div id= "manager-card" class="card-header"><h1>Manager</h1></div>
  <div class="card-body">
  <h5 class="card-title"> ${manager.name}</h5>
  <p class="card-text">
      <ul class="list-group">
      <li class="list-group-item list-group-item-success">Email:  <a href="mailto: ${manager.email}">${manager.email}</a> </li>
      <li class="list-group-item list-group-item-success">ID: ${manager.id} </li>
      <li class="list-group-item list-group-item-success">Office Number: ${manager.officeNumber} </li>
      </ul>
  </p>
  </div>
</div>
      `

  //creating engineer card with user inputs
  const renderEngineer = (engineer) => `
 
  <div
  class="card col-3 me-3 mb-5 text-white bg-dark mb-3 col-md-3"
  style="max-width: 18rem;"
>
  <div id= "engineer-card" class="card-header"><h1>Engineer</h1></div>
  <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text">
      <ul class="list-group">
      <li class="list-group-item list-group-item-success">ID: ${engineer.id} </li>
      <li class="list-group-item list-group-item-success">Email:  
      <a href="mailto:${engineer.email}">${engineer.email}</a> </li>
      <li class="list-group-item list-group-item-success">Github:   
      <a
      href="https://github.com/${engineer.gitHub}"
      target="_blank"
      rel="noopener noreferrer"
      >${engineer.gitHub}</a
      >
       </li>
      </ul>
      </p>
  </div>
  </div>
      `

  //creating Intern card with user inputs
  const renderIntern = (intern) => `

 
  <div
  class="card col-3 me-3 mb-5 text-white bg-dark mb-3 col-md-3"
  style="max-width: 18rem;"
>
  <div id= "intern-card" class="card-header"><h1>Intern</h1></div>
  <div class="card-body">
  <h5 class="card-title"> ${intern.name}</h5>
  <p class="card-text">
      <ul class="list-group">
      <li class="list-group-item list-group-item-success"> Email:
      <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item list-group-item-success"> ID: ${intern.id} </li>
      <li class="list-group-item list-group-item-success">School: ${intern.school} </li>
      </ul>
  </p>
  </div>
</div>
      `

  // Joining and rendering HTML
  // Create an empty array for the html cards
  const htmlCreate = []

  // Add the manager to the empty array of HTML cards
  htmlCreate.push(
    team
      .filter((employee) => employee.getRole() === 'Manager')
      .map((manager) => renderManager(manager)),
  )

  // Add the engineers to the array of HTML cards
  htmlCreate.push(
    team
      // filter out data so it only includes engineers
      .filter((employee) => employee.getRole() === 'Engineer')
      // Map all engineer data so that it displays as a html card
      .map((engineer) => renderEngineer(engineer))
      // Join all the cards up so that they're not on separate indexes
      .join(''),
  )

  // Add the interns to the array of HTML cards
  htmlCreate.push(
    team
      // filter out data so it only includes interns
      .filter((employee) => employee.getRole() === 'Intern')
      // Map all intern data so that it displays as a html card
      .map((intern) => renderIntern(intern))
      // Join all the cards up so that they're not on separate indexes
      .join(''),
  )

  // Return the Completed HTML
  return htmlCreate.join('')
}

/* main html */
const mainHTML = (team) => `
<!DOCTYPE html>
<html lang="en">
  <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Meet My Team</title>

        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" hsref="https://fonts.gstatic.com" crossorigin />
        <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap"
        rel="stylesheet"
        />

        <link rel="stylesheet" href="./assets/css/stylesheet.css" />
    </head>


<body>


    <div class="container-fluid">
    <div class="row">
    <nav class="navbar col-12 mb-3 text-bg-success">
 
        <span class=" navbar-brand text-center">Meet The Team</span>

    </nav>

    <div class="container">
    <div class="row">
    <div
          class="col-12 d-flex flex-wrap justify-content-around"
        >
        <br/> <br/>
    ${teamRender(team)}
    </div>
    </div>
  </div>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
crossorigin="anonymous"></script>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

</html>
`

module.exports = mainHTML
