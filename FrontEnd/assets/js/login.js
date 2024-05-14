import retriveContent from "./datamanager";

async function displayLogin() {
    try {
        // Récupérer les données depuis l'API
        const data = await retrieveContent("http://localhost:5678/api/users/login");

        // Sélectionner l'élément où nous voulons afficher les données
        const login = document.querySelector("#login");

        // Effacer le contenu précédent de l'élément
        login.innerHTML = "";

        // Parcourir les données récupérées et les ajouter à l'élément HTML
        data.forEach(user => {
            // Créer un paragraphe pour chaque utilisateur
            const paragraph = document.createElement("p");
            // Remplir le contenu du paragraphe avec les données de l'utilisateur
            paragraph.textContent = `Username: ${user.username}, Password: ${user.password}`;
            // Ajouter le paragraphe à l'élément où nous voulons afficher les données
            login.appendChild(paragraph);
        });
    } catch (error) {
        // Gérer les erreurs de récupération des données
        console.error("Error retrieving login data:", error);
    }
}
    export default displayLogin

