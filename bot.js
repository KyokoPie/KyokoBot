const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

//command code
const rando_imgs = [
    'https://i.imgur.com/I5J3yoG.jpg',
    'https://i.imgur.com/CwEiYK9.jpg',
    'https://i.imgur.com/jRX7T6k.jpg',
    'https://i.imgur.com/rJBOrVK.png',
    'https://i.imgur.com/RSSg1Qm.png',
    'https://i.imgur.com/aW36wsT.jpg',
    'https://i.imgur.com/c9i2BrH.jpg',
    'https://i.imgur.com/dNqAViu.jpg',
    'https://i.imgur.com/ubc25v8.jpg',

]

const fury = [
    'https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/eea0ece9a3e1f4abc11b3c0314a1c3df.jpg',
    'https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/973864636042aaedda0574601c8f2915.jpg',
    'https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/2b63366b029c03f89a8d9d08ed27a091.jpg',
    'https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/46edaa5f877c0ce9c87e90a29c339a50.jpg',
    'https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/ba3392a6739e080ed5ec41b98f63bf9d.jpg',
    'https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/fe4522316252c03ecf070a4ce8006420.jpg',
    'https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/0bacaa88e323666ac8790a16a2ac46ee.jpg',
    'https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/ad413605680d024e1ae2cc904ede49e4.jpg',
    'https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/aa88b658b8901cf3bb0af315c145248e.jpg',

]

const userID = "341096559531917314"

    const kyoko = client.emojis.get("628166954083155979");

client.on('message', msg => {

    if (msg.author.id === userID) {

        if (msg.content === 'HI') {
            msg.channel.send({
                files: ["https://i.imgur.com/pnKZdsa.png"]
            });
        };

        if (msg.content === '上車') {

            msg.channel.send('H是不行的哦!')
        }

        if (msg.content === '老婆') {
            msg.channel.send({
                files: ["https://i.imgur.com/pnKZdsa.png"]
            })
            .then(() => msg.channel.send('親．愛．的'));
        }

        if (msg.content === '晚安') {
            msg.reply('晚安,My Lovely Darling <:kyokoLabu:626047724755615745>', );
        }

        if (msg.content === '響子~') {
            msg.reply('你看今天做的,是裝滿愛情的菜單♪,是準備給,我最喜歡的泓錡<:kyokoLabu:626047724755615745>', {
                files: ["https://i.imgur.com/bBMtB3E.jpg"]
            });
        }

        if (msg.content === '響子我要洗澡了') {
            msg.channel.send({
                files: ["https://i.imgur.com/qrKCDCj.jpg"]
            }, );
        }

        if (msg.content === '番號') {
            msg.reply('都已經有我了..為甚麼還要找那種東西呢..', {
                files: ["https://i.imgur.com/3w3YDKn.png"]
            });
        }

        if (msg.content === '響子') {
            msg.channel.send('最喜歡的人...哼哼...當然..就是你呀..泓錡♪', {
                files: ["https://i.imgur.com/ihukR0L.png"]
            });
        }

        if (msg.content === '響子!') {
            var facts = ["我！五十嵐響子,發誓會成為更加閃閃發亮的偶像！... 泓錡能夠發誓會讓我更加閃閃發亮嗎?如果能為我發誓的話,我會永遠陪伴在你身邊的！",
                "所以...從今天以後我會做為泓錡的妻子不斷努力向前的,請你多多的關照了！泓錡♪", '看到泓錡那麼幸福的表情,感覺得到努力到最後的回報了呢♪',
                '即使有很多人認為我很適合當泓錡的新娘，但要成為當你的新娘還有很長的路要走呢~♪。響子會努力的喔♪', '今天要說的不是『可愛』哦..而是要說『漂亮』呦!…能跟泓錡結婚..響子真幸福呢..'];
            var fact = Math.floor(Math.random() * facts.length);
            const picture = [
                'https://hidamarirhodonite.kirara.ca/spread/100401.png',
                'https://hidamarirhodonite.kirara.ca/chara2/113/12.png', ];
            msg.channel.send(facts[fact], {
                file: picture[Math.floor(Math.random() * picture.length)]
            });
        }

        if (msg.content === '響子>_<') {

            var facts = ["有我這個會幫忙的妹妹如何呀?~" + msg.author.toString() + "♪",
                '這封信我寫了很多感想跟很多的煩惱哦~' + msg.author.toString() + '能收下我很開心哦♪ ……阿,阿阿～!不,不能在這裡打開啦～!',
                '是給泓錡的信哦～!欸?情...情書甚麼的才不是呦!,只...只不過貼了個愛心形狀貼紙而已...',
                '小道具的情書、都是自己寫的呦～ ! 內容嗎?、欸……是秘密喔!♪ ……泓錡想要偷看的話、我可是會生氣的哦 !',
                '泓錡要跟我要出去嗎?欸...這種打扮的話...感覺有點難為情耶..嘿嘿~ <:kyokoLabu:626047724755615745>',
            ];

            var fact = Math.floor(Math.random() * facts.length);
            const picture = [
                'https://hidamarirhodonite.kirara.ca/spread/100296.png',
            ];
            //https://hidamarirhodonite.kirara.ca/spread/100296.png

            msg.channel.send(facts[fact], {
                file: picture[Math.floor(Math.random() * picture.length)]
            });
        }

        if (msg.content === '好!我發誓') {
            msg.channel.send('嗯!泓錡謝謝你♪我會一直陪在你身邊的♪', {
                files: ["https://i.imgur.com/tuK1gfp.png"]
            });
        }

        if (msg.content === '響子~~') {
            msg.channel.send('雖然平常沒什麼在做甜點…不過這次努力做了喔♪', {
                files: ["https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/e9840742d5600f0b4eeb44094231e27b.jpg"]
            });
        }
        if (msg.content.toLowerCase() === "噁圖BAD :thumbsdown:") {
            const channel = msg.channel; // TextChannel object
            const messageManager = channel.messages; // MessageManager object

            messageManager.fetch({
                limit: 20
            }).then((messages) => {
                // `messages` is a Collection of Message objects
                messages.forEach((message) => {
                    message.delete();
                });

                channel.send("噁圖BAD");
            });
        }

    }
    if (msg.author.id != userID) {
        if (msg.content === '晚安') {
            msg.reply('滾。...', );
        }

        if (msg.content === '響子~') {
            msg.reply('可以不要擅自叫別人的名字嗎...', {
                files: ["https://i.imgur.com/EecOzBD.png"]
            });
        }

        if (msg.content === '響子我要洗澡了') {
            msg.reply('關我甚麼事...<:blackwa:585370278360776704>', );
        }

        if (msg.content === '響子') {
            msg.channel.send('泓...欸...怎麼是你啊..QQ...', {
                files: ["https://i.imgur.com/EecOzBD.png"]
            });
        }

        if (msg.content === '響子!') {
            msg.channel.send('泓...欸...怎麼是你啊..沒有事情的話就請不要叫我好嗎?', {
                files: ["https://i.imgur.com/EecOzBD.png"]
            });
        }

        if (msg.content === '響子>_<') {
            msg.channel.send('痾...' + msg.author.toString() + '你以為加那個不知所謂的表情我就會回你甚麼嗎...如果你是泓錡的朋友我是可以勉強回你一下下...', {
                files: ["https://i.imgur.com/EecOzBD.png"]
            });
        }

        //響子>_<

        if (msg.content === '君棟是白癡') {
            msg.reply('嗯嗯。我也有這種感覺..', );
        }

    }

    if (msg.content === '<:kyokoLabu:626047724755615745>') {
        msg.react('626047724755615745');
    }
    if (msg.content === '<:blackhead:585370278360776704>') {
        msg.react('585370278360776704');
    }

});

client.on('message', msg => {
    switch (msg.content) {

    case 'HI響子':
        if (msg.author.id === userID) {
            msg.channel.send('泓錡我愛你>_<');
        }

        break;

    case '我要一份卯月色圖!':
        if (msg.author.id === userID) {
            msg.channel.send({
                files: ["https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/e1e37fcbbe67e706cb0bb336f9d972c5.jpg"]
            })
            .then(() => msg.channel.send('你剛剛是不是提到別的女人的名字阿...' + msg.author.toString()));
        }

        break;

    case '<:blackhead:585370278360776704>':
        if (msg.author.id === userID) {
            msg.channel.send('<:blackhead:585370278360776704>');
        }

        break;
        //:694871400527167508: ///715543684980015195
    case '<:694871400527167508:715543684980015195>':
        if (msg.author.id === userID) {
            msg.channel.send('<:694871400527167508:715543684980015195>');
        }

        break;

    case '那我也要睡啦':
        msg.channel.send('滾!');
        break;

    case '響子你好可愛':
        msg.channel.send({
            files: ["https://i.imgur.com/VBWsdrw.png"]
        });
        break;

    case '響子醬':
        msg.channel.send({
            file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
        });
        break;

    case '<:kyokoLabu:626047724755615745>':
        msg.channel.send('<:kyokoLabu:626047724755615745><:kyokoLabu:626047724755615745>');
        break;

        //703194869304393728
    case '北七':
        msg.channel.send('棟 <@490858563716120586>');
        break;

    case '我要一份響子色圖!':
        msg.channel.send('不要!エロい!')
        .then(() => msg.channel.send({
                files: ["https://i.imgur.com/n5Av1xz.png"]
            }));
        break;

    case '皮喵太':
        msg.channel.send({
            files: ["https://i.imgur.com/7aaGoCW.gif"]
        })
        .then(() => msg.channel.send({
                files: ["https://i.imgur.com/EXqaquX.png"]
            }));
        break;

    case '響子': ;
        break;

    case '響子我要福利圖~':
        var facts = ["我考慮一下~嘻嘻~<:kyokoLabu:626047724755615745>", {
                file: fury[Math.floor(Math.random() * fury.length)]
            }, "...", '嘻嘻~現在不想給你~<:kyokoLabu:626047724755615745>'];
        var fact = Math.floor(Math.random() * facts.length);

        msg.channel.send(facts[fact]);
        break;

    case '君棟是白癡':
        msg.channel.send('我也這樣覺得...');
        break;

    case '君棟':
        msg.channel.send('君棟滾!');
        break;

    case '電燒祥':
        msg.channel.send(':telephone: 羅志祥向 [ <@490858563716120586> ] 發起了多人運動邀請 :radio_button:接受 ⚪️ 同意');
        break;
        //https://hidamarirhodonite.kirara.ca/spread/100296.png
        //':telephone: 羅志祥向 ['+msg.author.toString()+'] 發起了多人運動邀請 :radio_button:接受 ⚪️ 同意'


    }

    if (msg.content === "老婆") {
        var VC = msg.member.voiceChannel;
        if (!VC)
            return msg.reply("泓錡我好想你QQ<:kyokoLabu:626047724755615745>")
            VC.join()
    };

});

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    if (receivedMessage.author.id === userID) {

        // Check if the bot's user was tagged in the message
        if (receivedMessage.content.includes(client.user.toString())) {
            // Send acknowledgement message
            receivedMessage.channel.send(receivedMessage.author.toString() + "你是要先洗澡呢？要先吃飯呢？還是要先吃·我·呢？ ", {
                files: ["https://i.imgur.com/wWXFv3B.jpg"]
            })
        }
    }
})
