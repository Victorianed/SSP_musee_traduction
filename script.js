document.addEventListener('DOMContentLoaded', function() {
    const prevVersionsBtn = document.getElementById('previous-versions');
    const saveBtn = document.getElementById('save-translation');
    const nextPageBtn = document.getElementById('next-page');
    const prevPageBtn = document.getElementById('prev-page');
    const userTranslationTextarea = document.getElementById('user-translation');
    const originalTextElement = document.getElementById('original-text');
    let currentPageId = 'somePageId'; // Assurez-vous de définir ceci en fonction de votre logique d'application

    // Fonction pour gérer l'enregistrement de la traduction
    function saveTranslation() {
        const userTranslation = userTranslationTextarea.value;
        console.log('Sauvegarde de la traduction:', userTranslation);
        fetch(`/api/save/${currentPageId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ translation: userTranslation }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Réponse du serveur:', data);
            // Gérer la réponse, par exemple en affichant un message de succès
        })
        .catch(error => console.error('Erreur:', error));
    }

    // Bouton 'Enregistrer'
    saveBtn.addEventListener('click', saveTranslation);

    // Bouton 'Versions Précédentes'
    prevVersionsBtn.addEventListener('click', function() {
        console.log('Affichage des versions précédentes');
        fetch(`/api/history/${currentPageId}`)
            .then(response => response.json())
            .then(data => {
                console.log('Historique des versions:', data);
                // Traitez et affichez l'historique ici
            })
            .catch(error => console.error('Erreur lors de la récupération de l'historique:', error));
    });

    // Fonction pour charger une page spécifique
    function loadPage(direction) {
        console.log(`Chargement de la page ${direction} pour ${currentPageId}`);
        // Mettez à jour currentPageId et rechargez les données nécessaires ici
        // La logique pour ajuster currentPageId en fonction de la direction pourrait être ajoutée ici
    }

    // Boutons de navigation 'Page Précédente' et 'Page Suivante'
    prevPageBtn.addEventListener('click', function() {
        loadPage('prev');
    });

    nextPageBtn.addEventListener('click', function() {
        loadPage('next');
    });
});
