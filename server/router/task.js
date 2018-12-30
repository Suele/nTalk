const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    task: [{
        title: 'Fazer compras.'
      },
      {
        title: 'Fazer Limpeza.'
      }
    ]
  });
});

module.exports = router;