const { readFileSync } = require('fs');

module.exports = {
  'chandelier': {
    data: readFileSync('./clips/chandelier.opus'), 
    author: 'sia',
    url: 'https://www.youtube.com/watch?v=jDwVkXVHIqg',
    thumb: 'https://i.ytimg.com/vi/jDwVkXVHIqg/hqdefault.jpg'
  },

  'bohemian rhapsody': {
    data: readFileSync('./clips/bohemian.opus'),
    author: 'queen',
    url: 'https://www.youtube.com/watch?v=gM4S9lPyUUA',
    thumb: 'https://i.ytimg.com/vi/gM4S9lPyUUA/hqdefault.jpg'
  },

  'shallow': {
    data: readFileSync('./clips/shallow.opus'),
    author: 'lady gaga & bradley cooper',
    url: 'https://www.youtube.com/watch?v=6Dedl5cVMv0',
    thumb: 'https://i.ytimg.com/vi/6Dedl5cVMv0/hqdefault.jpg'
  },

  'let it go': {
    data: readFileSync('./clips/letitgo.opus'),
    author: 'idina menzel',
    url: 'https://www.youtube.com/watch?v=V-XZcgDkO9o',
    thumb: 'https://i.ytimg.com/vi/V-XZcgDkO9o/hqdefault.jpg'
  },

  'hit or miss': {
    data: readFileSync('./clips/hitormiss.opus'),
    author: 'nyannyancosplay',
    url: 'https://www.youtube.com/watch?v=MWT2ShrCMBY',
    thumb: 'https://i.ytimg.com/vi/MWT2ShrCMBY/hqdefault.jpg'
  },

  'all i want for christmas is you': {
    data: readFileSync('./clips/christmas.opus'),
    author: 'mariah carey',
    url: 'https://www.youtube.com/watch?v=2RtI5UEZlzU',
    thumb: 'https://i.ytimg.com/vi/2RtI5UEZlzU/hqdefault.jpg'
  },

  'take on me': {
    data: readFileSync('./clips/takeonme.opus'),
    author: 'a-ha',
    url: 'https://www.youtube.com/watch?v=LELjfPeJDhA',
    thumb: 'https://i.ytimg.com/vi/LELjfPeJDhA/hqdefault.jpg'
  },

  'country roads': {
    data: readFileSync('./clips/countryroads.opus'),
    author: 'john denver',
    url: 'https://www.youtube.com/watch?v=x0hYKGotu4I',
    thumb: 'https://i.ytimg.com/vi/x0hYKGotu4I/hqdefault.jpg'
  },

  'chug jug': {
    data: readFileSync('./clips/chugjug.opus'),
    author: 'leviathan',
    url: 'https://youtu.be/KFViVnGCTJc',
    thumb: 'http://i3.ytimg.com/vi/KFViVnGCTJc/maxresdefault.jpg'
  },

  'ra ra rasputin': {
    data: readFileSync('./clips/rararasputin.opus'),
    author: 'boney m',
    url: 'https://youtu.be/KT85z_tGZro',
    thumb: 'http://i3.ytimg.com/vi/KT85z_tGZro/maxresdefault.jpg'
  }
};
