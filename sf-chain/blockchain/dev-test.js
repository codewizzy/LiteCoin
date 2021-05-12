const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(),"UNstoppable");
console.log(fooBlock.toString());