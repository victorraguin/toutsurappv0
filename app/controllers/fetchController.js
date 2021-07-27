const Feed = require('rss-to-json-v2');

const fetchController = {
  findAll: (_, res) => {
    Feed.load('http://www.rssmix.com/u/13200552/rss.xml', (err, rss) => {
      res.json(rss);
    });
  },
};

module.exports = fetchController;
