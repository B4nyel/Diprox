module.exports={
    name:'love',
    description: "this is a love command!",
    execute(client, message, cmd, args, Discord){
        if (message.deletable) message.delete();

            if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
            const love = Math.floor(Math.random() * Math.floor(100));
		const loveFigure = Math.round(love / 10);
		const loveArray = [];
		for (let i = 0; i < loveFigure; i++) {
			loveArray.push(':heart:');
		}
		for (let j = 0; j < 10 - loveFigure; j++) {
			loveArray.push(':broken_heart:');
		}
		const lovebetween = {
			color: 0xff00d0,
			title: ':heartpulse: LOVE CALCULATOR :heartpulse:',
			description: `**${args[0]}** and **${args[1]}** will have love on **${love}%**\n
			[${loveArray.join('')}]`,
		};
		if (args.length < 2) {
			return message.channel.send({ embed: { color: 0xffae00,
				title: ':warning: **OOPS ..**',
				description: `Usage: love <user> <user>`,
			} });
		}
		return message.channel.send({ embed: lovebetween });
	},
};