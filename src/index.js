const Eris = require('eris');
const config = require('../config');
const commands = require('./commands');

const client = new Eris(config.token);
const prefix = 'toad ';

client.on('ready', () => {
  client.editStatus('online', {
    name: 'toad sing chandelier'
  });
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot || !msg.content.startsWith(prefix)) {
    return;
  }

  const input = msg.content.slice(prefix.length).toLowerCase();
  for (const [ triggers, command ] of commands) {
    for (const trigger of triggers) {
      if (input.startsWith(trigger)) {
        const args = input.slice(trigger.length).trim();
        try {
          const embed = await command({ client, msg, args });
          if (embed) {
            msg.channel.createMessage({ embed });
          }
        } catch (e) {
          msg.channel.createMessage('fucky wucky uwu\n```\n' + e.stack + '\n```');
        } finally {
          return;
        }
      }
    }
  }
});

client.connect();
