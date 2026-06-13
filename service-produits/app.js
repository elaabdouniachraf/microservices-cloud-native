const express = require('express');
const app = express();

const produits = [
    { id: 1, nom: "PC Gamer", prix: 1200 },
    { id: 2, nom: "Clavier", prix: 100 }
];

app.get('/produits', (req, res) => {
    res.json(produits);
});

app.get('/produits/:id', (req, res) => {
    const produit = produits.find(
        p => p.id == req.params.id
    );

    res.json(produit);
});

app.listen(3000, () => {
    console.log('Service Produits démarré');
});