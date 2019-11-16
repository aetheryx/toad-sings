const toad = (...triggers) => new Set(triggers);
const songs = require('./songs');
const BufferStream = require('./BufferStream');
const state = require('./state');
const history = require('./history');

module.exports = new Map([
  [ toad('help'), async () => ({
    author: { name: 'hi there uwu' },
    title: 'my names toad & i like to sing',
    description: `you can make me sing by joining a voice channel and typing in \`toad sing\` followed by the name of the song, for example \`toad sing hit or miss\`. i'm still in the early stages of my career, so there aren\'t a lot of songs i can sing yet. you can see which songs i can sing by typing \`toad sing\`.\n\nif you're tired of my singing (:cry:) you can make me leave by typing one of:\n-\`toad shut the fuck up and fuck off\`\n-\`toad shut the fuck up\`\n-\`toad fuck off\`\n:frowning:\n\nsome of my other commands are:\n-\`toad what are you singing\`\n-\`toad whats your average packet latency to the discord api gateway websocket connection calculated by taking the mean of the last three packet handshakes\``
  }) ],

  [ toad('ping', 'whats your average packet latency to the discord api gateway websocket connection calculated by taking the mean of the last three packet handshakes'), async ({ msg }) => ({
    title: '🏓',
    description: ` my average packet latency to the discord api gateway websocket connection calculated by taking the mean of the last three packet handshakes is equal to:\n\n**${msg.channel.guild.shard.latency}** milliseconds`,
    footer: { text: 'uwu' }
  }) ],

  [ toad('come back pls'), async ({ client, msg }) => {
    if (state.has(msg.channel.guild.id)) {
      return { description: 'i\'m still here singing at full power' }
    };
    const oldState = history.get(msg.channel.guild.id);
    const song = songs[oldState.song];

    if (!msg.member.voiceState.channelID) {
      return {
        title: 'i can\'t come back to anything if ur not in a voice channel',
        description: 'dummy'
      };
    }

    const conn = await client.joinVoiceChannel(msg.member.voiceState.channelID);
    await conn.play(new BufferStream(song.data), {
      format: 'webm'
    });

    state.setoad(msg.channel.guild.id, {
      channelID: msg.member.voiceState.channelID,
      song: oldState.song,
    });

    conn.on('end', () => {
      client.leaveVoiceChannel(msg.member.voiceState.channelID);
      state.delete(msg.channel.guild.id);
    });

    return {
      author: { name: 'missed u uwu' },
      title: 'thank u for allowing me to come back ;w;',
      description: `now playing ${oldState.song} by ${song.author}`,
      image: { url: 'https://cdn.discordapp.com/attachments/521047944636399658/645079349858664456/unknown.png' },
      footer: { text: 'cover sang by toad,' }
    };
  } ],

  [ toad('stop', 'shut the fuck up and fuck off', 'shut the fuck up', 'fuck off'), async ({ client, msg }) => {
    const currentState = state.get(msg.channel.guild.id)
    if (!currentState) {
      return {
        description: 'i\'m not singing in this server wtf'
      };
    }

    if (!msg.member.voiceState.channelID) {
      return {
        description: 'u need to be in a voice channel to make me stop. you will suffer before you will rest'
      };
    }

    await client.leaveVoiceChannel(msg.member.voiceState.channelID);
    state.delete(msg.channel.guild.id);
    history.setoad(msg.channel.guild.id, currentState);

    return {
      description: ':cry: :frowning: :broken_heart:'
    };
  } ],

  [ toad('sing', 'play'), async ({ client, msg, args }) => {
    const song = songs[args];
    if (!song) {
      return {
        ...(args ? { title: 'i can\'t sing that sorry' } : {}),
        description: `the ${args ? 'only ' : ''}songs i can sing are\n\n${Object.keys(songs).map(song => `-\`${song}\``).join('\n')}`,
      };
    }

    if (!msg.member.voiceState.channelID) {
      return {
        title: 'join a voice channel for me to sing to you in',
        description: 'dummy'
      };
    }

    let existingState = state.get(msg.channel.guild.id);
    if (existingState) {
      return {
        title: 'i\'m already singing in this server',
        description: `come listen to me sing \`${existingState.song}\` in <#${existingState.channelID}>`
      };
    }

    const conn = await client.joinVoiceChannel(msg.member.voiceState.channelID);
    await conn.play(new BufferStream(song.data), {
      format: 'webm'
    });

    state.setoad(msg.channel.guild.id, {
      channelID: msg.member.voiceState.channelID,
      song: args
    });

    conn.on('end', () => {
      client.leaveVoiceChannel(msg.member.voiceState.channelID);
      state.delete(msg.channel.guild.id);
    });

    return {
      title: 'now playing',
      description: `${args} by ${song.author}`,
      image: { url: 'https://cdn.discordapp.com/attachments/521047944636399658/645079349858664456/unknown.png' },
      footer: { text: 'cover sang by toad,' }
    };
  } ]
]);
