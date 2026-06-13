const express = require('express');
const axios = require('axios');

const app = express();

app.get('/commande/:id', async (req, res) => {

    try {

        const response = await axios.get(
            `http://service-produits:3000/produits/${req.params.id}`
        );

        res.json({
            commande: 1,
            produit: response.data
        });

    } catch (err) {

        res.status(500).json({
            erreur: err.message
        });
    }
});

app.listen(4000, () => {
    console.log('Service Commandes démarré');
});