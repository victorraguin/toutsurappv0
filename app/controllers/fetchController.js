const Feed = require('rss-to-json-v2');

const fetchController = {
  findAll: async (_, res) => {
    Feed.load('https://www.lemonde.fr/musiques/rss_full.xml', (err, rss) => {
      res.json(rss);
    });
  },
};

module.exports = fetchController;
