// Sélectionnez le formulaire que vous souhaitez écouter
var formulaire = document.getElementById("form-login");

// Ajoutez un écouteur d'événement pour l'événement "submit" du formulaire
formulaire.addEventListener("submit", function(event) {
    // Empêchez le comportement par défaut du formulaire qui est de recharger la page
    event.preventDefault();
    
    // Code à exécuter lorsque le formulaire est soumis
    console.log("Le formulaire a été soumis !");

     // Récupérez les valeurs des champs email et password
     const email = document.getElementById("email").value;
     const password = document.getElementById("pass").value;
     
     // Faites ce que vous voulez avec ces valeurs
     console.log("Email:", email);
     console.log("Mot de passe:", password);

     // Créez un objet contenant les données à envoyer au serveur
    var data = {
        email: email,
        password: password
    };
    
    // Envoiez les données au serveur via une requête POST
    fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        // Gérez la réponse du serveur ici
        if (response.ok) {
            console.log("Données envoyées avec succès !");
            return response.json();
            // Vous pouvez ajouter d'autres actions à effectuer ici en cas de succès
        } else {
            console.error("Erreur lors de l'envoi des données au serveur.");
            throw new Error('Erreur lors de la requête');
        }
    })
    .then(function(data) {
        // Traitez les données reçues du serveur
        console.log(data);
    })
    .catch(function(error) {
        console.error("Une erreur s'est produite :", error);
    });
    
    // Vous pouvez ajouter d'autres actions à effectuer ici
    
    // Si vous souhaitez soumettre le formulaire après vos traitements, vous pouvez le faire
    // avec la méthode submit() du formulaire
    // formulaire.submit();
});





