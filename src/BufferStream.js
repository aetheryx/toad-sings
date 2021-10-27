const { Readable } = require('stream');

module.exports = class BufferStream extends Readable {
  constructor (buf) {
    super({ autoDestroy: true, emitClose: true });
    this.buf = buf;
    this.curPos = 0;
  }

  _read (size) {
    const payload = this.buf.slice(this.curPos, this.curPos += size);
    if (payload.length > 0) {
      this.push(payload);
    } else {
      this.push(null);
    }
  }
};
