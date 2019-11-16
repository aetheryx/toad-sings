const { readFileSync } = require('fs');

module.exports = {
  'chandelier': {
    data: readFileSync('./clips/chandelier.opus'), 
    author: 'sia',
    url: 'https://www.youtube.com/watch?v=jDwVkXVHIqg'
  },

  'bohemian rhapsody': {
    data: readFileSync('./clips/bohemian.opus'),
    author: 'queen',
    url: 'https://www.youtube.com/watch?v=gM4S9lPyUUA'
  },

  'shallow': {
    data: readFileSync('./clips/shallow.opus'),
    author: 'lady gaga & bradley cooper',
    url: 'https://www.youtube.com/watch?v=6Dedl5cVMv0'
  },

  'let it go': {
    data: readFileSync('./clips/letitgo.opus'),
    author: 'idina menzel',
    url: 'https://www.youtube.com/watch?v=V-XZcgDkO9o'
  },

  'hit or miss': {
    data: readFileSync('./clips/hitormiss.opus'),
    author: 'nyannyancosplay',
    url: 'https://www.youtube.com/watch?v=MWT2ShrCMBY'
  },

  'all i want for christmas is you': {
    data: readFileSync('./clips/christmas.opus'),
    author: 'mariah carey',
    url: 'https://www.youtube.com/watch?v=2RtI5UEZlzU'
  },

  'take on me': {
    data: readFileSync('./clips/takeonme.opus'),
    author: 'a-ha',
    url: 'https://www.youtube.com/watch?v=LELjfPeJDhA'
  },

  'country roads': {
    data: readFileSync('./clips/countryroads.opus'),
    author: 'john denver',
    url: 'https://www.youtube.com/watch?v=x0hYKGotu4I'
  }
};
