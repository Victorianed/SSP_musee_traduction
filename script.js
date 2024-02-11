document.addEventListener('DOMContentLoaded', function() {
    const prevVersionsBtn = document.getElementById('previous-versions');
    const saveBtn = document.getElementById('save-translation');
    const nextPageBtn = document.getElementById('next-page');
    const prevPageBtn = document.getElementById('prev-page');
    const userTranslationTextarea = document.getElementById('user-translation');
    const originalTextElement = document.getElementById('original-text');
    let currentPageId = 'somePageId'; // Assurez-vous de définir ceci en fonction de votre logique d'application

    prevVersionsBtn.addEventListener('click', function() {
        fetch(`/api/history/${currentPageId}`)
            .then(response => response.json())
            .then(data => {
                console.log('Historique des versions:', data);
                // Traitez et affichez l'historique ici
            })
            .catch(error => console.error('Erreur lors de la récupération de l'historique:', error));
    });

    saveBtn.addEventListener('click', function() {
        const userTranslation = userTranslationTextarea.value;
        fetch(`/api/save/${currentPageId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ translation: userTranslation }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Traduction sauvegardée:', data);
                // Affichez un message de succès ou mettez à jour l'interface utilisateur
            })
            .catch(error => console.error('Erreur lors de la sauvegarde:', error));
    });

    nextPageBtn.addEventListener('click', function() {
        // Incrémentez currentPageId ou ajustez la logique pour charger la page suivante
        loadPage(currentPageId, 'next');
    });

    prevPageBtn.addEventListener('click', function() {
        // Décrémentez currentPageId ou ajustez la logique pour charger la page précédente
        loadPage(currentPageId, 'prev');
    });

    function loadPage(pageId, direction) {
        // Utilisez fetch pour charger la page spécifiée par pageId et la direction
        console.log(`Chargement de la page ${direction} pour ${pageId}`);
        // Mettez à jour currentPageId et rechargez les données nécessaires
    }
});
