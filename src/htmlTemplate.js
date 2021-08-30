const generateHTML = function (memberString) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Portfolio</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
</style>
</head>
<body>
<div class="header">
<div class="jumbotron bg-warning">
   <h1 class="display-4 text-white text-center">My Radical Team</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
        ${memberString} 
    </div>
</div>
<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
</body>
</html>`
}

const generateCard = function (array) {
    let memberIcon;
    let memberInfo;

     if (array.title === "Intern") {
    memberIcon = `<i class="fas fa-user-graduate"></i>`
    memberInfo = `School: ${array.school}`
    } else if (array.title === "Engineer") {
    memberIcon = `<i class="fas fa-glasses"></i>`
    memberInfo = `GitHub Username: <a href="https://github.com/${array.github}" target="_blank">${array.github}</a>`
    } else if (array.title === "Manager") {
        memberIcon = `<i class="fas fa-mug-hot"></i>`
        memberInfo = `Office Number: ${array.officeNumber}`
    }

    return `
    
<div class="col-md-4 col-sm-6 col-12 col-lg-3">
    <div class="card shadow-lg mb-5 bg-white">
        <div class="card-header bg-primary">
            <h4 class="text-white text-center">${array.name}</h4>
            <h4 class="text-white text-center">${positionIcon}</i> ${array.title}</h4>
        </div>
        <div class="card-body">
            <ul class="list-unstyled">
                <li>Employee ID: ${array.id}</li>
                <li>Email: <a href="mailto:${array.email}">${array.email}</a></li>
                <li>${roleInfo}</i>
            </u>
        </div>
    </div>
  </div>
`
}

exports.generateCard = generateCard;
exports.generateHTML = generateHTML;