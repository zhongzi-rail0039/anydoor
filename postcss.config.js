const autoprefixer = require('autoprefixer');

module.exports = {
  autoprefixer: ({
    browsers: [
      "defaults",
      "not ie < 10",
      "last 2 versions",
      "> 1%",
      "iOS 7",
      "last 3 iOS versions"
    ]
  })

};
