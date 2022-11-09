const TemplateHTML = (template) => `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <!--Bootstrap-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <!--Font Awesome-->
    <script src="https://kit.fontawesome.com/a33877bb0a.js" crossorigin="anonymous"></script>
  </head>
  <body class="pb-5">
    
    <!-- Header -->
    <header class="bg-dark py-4 mb-5">
      <h1 class="text-center text-white">
        <i class="fas fa-users mr-1"></i>
        Team Profile
      </h1>
    </header>
    <!-- Profile Cards Container -->
    <main>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">   
          ${template}       
        </div>
      </div>
    </main>
  </body>
  </html>
`;

  module.exports = TemplateHTML;