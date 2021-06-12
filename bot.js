const Discord = require('discord.js');
const client = new Discord.Client();
const Canvas = require('canvas');
const {
    registerFont,
    createCanvas
} = require('canvas');
const {
    MessageAttachment
} = require('discord.js')
const path = require('path')

client.on('ready', () => {
    console.log('I am ready!');
});



client.on('guildMemberAdd', async member => {
    registerFont('TaipeiSansTCBeta-Bold.ttf', {
        family: 'TaipeiSansTCBeta-Bold'
    })

    // Async function
    // Destructure the guild property from the member object
    const {
        guild
    } = member
    // Access the channel ID for this guild from the cache
    const channelId = "587627529784000512"
        // Access the actual channel and send the message
    const channel = guild.channels.cache.get(channelId)
        // Create a canvas and access the 2d context
    const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')
        // Load the background image and draw it to the canvas
    const background = await Canvas.loadImage(
        path.join(__dirname, 'test.jpg')
    )
    let x = 0
    let y = 0

    ctx.drawImage(background, x, y)

    let url = member.user.AvatarURL == undefined ? member.user.defaultAvatarURL : member.user.avatarURL

    // Load the user's profile picture and draw it
    const pfp = await Canvas.loadImage(
        member.user.displayAvatarURL({
            format: 'png'
        })
    )

    x = canvas.width / 2 - 128 / 2
    y = 25
    ctx.drawImage(pfp, x, y, 128, 128)
        // Display user text
    ctx.fillStyle = '#ffffff' // White text
    ctx.font = '35px "TaipeiSansTCBeta-Bold"'
    ctx.shadowColor = "#000";
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 15;
    let text = `Welcome ${member.user.tag}!`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 60 + 128)
        // Display member count
    ctx.font = '30px "TaipeiSansTCBeta-Bold"'
    ctx.shadowColor = "#000";
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 15;
    text = `Member #${guild.memberCount}`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 100 + 128)
        // Attach the image to a message and send it
    const attachment = new MessageAttachment(canvas.toBuffer())
    channel.send('', attachment)

    console.log(member.user.tag)
})

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

const kyoko = client.emojis.cache.get("628166954083155979");

client.on('message', msg => {
    if (msg.content === '!join') {

        client.emit('guildMemberAdd', msg.member)

    }

    if (msg.author.id === userID) {

        if (msg.content.includes('響子')) {
            if (msg.content.includes('LOL')) {
                msg.channel.send('真假', );
                msg.channel.send('我只跟泓錡打', );
            }
            if (msg.content.includes('搂')) {
                msg.channel.send('真假', );
                msg.channel.send('我只跟泓錡打', );
            }
            if (msg.content.includes('打嗎')) {
                msg.channel.send('真假', );
                msg.channel.send('亂講', );
            }
        }

        if (msg.content === 'HI') {
            msg.channel.send({
                files: ["https://i.imgur.com/pnKZdsa.png"]
            });
        };

        if (msg.content === '上車') {

            msg.channel.send('H是不行的哦!')
        }
        if (msg.content === '!SOP') {

            msg.channel.send('手遊SOP 新遊戲衝首發→不錯的開局開始玩→到處推坑→開始課金→一週後發現開局不是很完美開始重刷重玩→完美開局開始玩→開新池就抽爆循環到沒石頭→沒石頭→抽到沒石頭後有送大量石頭或免費十連抽才開遊戲(通常一、兩個月)→數次沒抽到UP角→白癡遊戲 你們自己慢慢玩吧→棄坑→下個新手遊從頭開始')
        }        
        

        if (msg.content === '老婆') {
            msg.channel.send({
                    files: ["https://i.imgur.com/pnKZdsa.png"]
                })
                .then(() => msg.channel.send('親．愛．的'));
        }

        if (msg.content === '晚安') {
            msg.reply('晚安,My Lovely Darling ', );
        }

        if (msg.content === '響子~') {
            msg.reply('你看今天做的,是裝滿愛情的菜單♪,是準備給,我最喜歡的泓錡', {
                files: ["https://i.imgur.com/bBMtB3E.jpg"]
            });
        }


        if (msg.content === '響子我要洗澡了') {
            msg.channel.send({
                files: ["https://i.imgur.com/qrKCDCj.jpg"]
            }, );
        }


        if (msg.content === '響子') {
            msg.channel.send('最喜歡的人...哼哼...當然..就是你呀..泓錡♪', {
                files: ["https://i.imgur.com/ihukR0L.png"]
            });
        }

        if (msg.content === '響子!') {
            var facts = ['看到泓錡那麼幸福的表情,感覺得到努力到最後的回報了呢♪',
                '即使有很多人認為我很適合當泓錡的新娘，但要成為當你的新娘還有很長的路要走呢~♪。響子會努力的喔♪', '今天要說的不是『可愛』哦..而是要說『漂亮』呦!…能跟泓錡結婚..響子真幸福呢..'
            ];
            var fact = Math.floor(Math.random() * facts.length);
            const picture = [
                'https://hidamarirhodonite.kirara.ca/spread/100401.png',
                'https://hidamarirhodonite.kirara.ca/chara2/113/12.png',
            ];
            msg.channel.send(facts[fact], {
                file: picture[Math.floor(Math.random() * picture.length)]
            });
        }

        if (msg.content === '響子>_<') {

            var facts = ['是給泓錡的信哦～!欸?情...情書甚麼的才不是呦!,只...只不過貼了個愛心形狀貼紙而已...',
                '小道具的情書、都是自己寫的呦～ ! 內容嗎?、欸……是秘密喔!♪ ……泓錡想要偷看的話、我可是會生氣的哦 !'

            ];

            var fact = facts[Math.floor(Math.random() * facts.length)]
            const picture = [
                'https://hidamarirhodonite.kirara.ca/spread/100296.png',
                'https://imas.gamedbs.jp/cgss/images/IqPpesz5UIXPE0wsZ317wIouM-LojNDRSdRYfWxxT-U.jpg'
            ];
            var pictureR = [
                picture[Math.floor(Math.random() * picture.length)]
            ];
            //'https://hidamarirhodonite.kirara.ca/spread/100296.png',
            //https://hidamarirhodonite.kirara.ca/spread/100296.png
            //[Math.floor(Math.random() * picture.length)]
            //facts[fact],
            msg.channel.send("1", {
                file: picture[Math.floor(Math.random() * picture.length)]
            });
        }



        if (msg.content === '響子~~') {
            msg.channel.send('雖然平常沒什麼在做甜點…不過這次努力做了喔♪', {
                files: ["https://imas.gamedbs.jp/cg/image_sp/card/l_noframe/e9840742d5600f0b4eeb44094231e27b.jpg"]
            });
        }



    }
    if (msg.author.id != userID) {

        if (msg.content.includes('響子')) {
            if (msg.content.includes('LOL')) {
                msg.channel.send('真假', );
                msg.channel.send('不要', );
            }
            if (msg.content.includes('搂')) {
                msg.channel.send('真假', );
                msg.channel.send('我只跟泓錡打', );
            }
            if (msg.content.includes('打嗎')) {
                msg.channel.send('真假', );
                msg.channel.send('我只跟泓錡打', );
            }
        }

        if (msg.content === '晚安') {
            msg.reply('要滾快滾', );
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
   // if (msg.content === '<:blackhead:585370278360776704>') {
   //     msg.react('585370278360776704');
    //}

});
//message.content.includes(word)
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

        //case '<:blackhead:585370278360776704>':
        //    if (msg.author.id === userID) {
        //        msg.channel.send('<:blackhead:585370278360776704>');
        //    }

        //    break;
        //:694871400527167508: ///715543684980015195
        //case '<:694871400527167508:715543684980015195>':
        //    if (msg.author.id === userID) {
        //        msg.channel.send('<:694871400527167508:715543684980015195>');
        //    }

        //    break;

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

    case '響子':
        ;
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

    // if (msg.content === "老婆") {
    //    var VC = msg.member.voiceChannel;
    //   if (!VC)
    //       return msg.reply("泓錡我好想你QQ<:kyokoLabu:626047724755615745>")
    //       VC.join()
    //   };

});

var isReady = true;
var DonHi = 0;

client.on('message', message => {
    if (message.content === '滾') {
        message.member.voice.channel.leave();
    }

    // Somewhere so that it's in an accessible scope
    let timeoutID;

    clearTimeout(timeoutID);

    // After the queue has ended
    timeoutID = setTimeout(() => {
            if (message.guild.me.voice.channel !== null) {
                // check if the bot is connected to a voice channel
                message.guild.me.voice.channel.leave();
                console.log("I have successfully left the voice channel!");
            }
            // message.member.voice.channel.leave();
            // This will run if the timeout reaches its end
            // You can adapt the code above to disconnect from the voice channel
        }, 15 * 60 * 1000) // You should use the time in ms	

    if (isReady && message.content === '哈哈哈爽啦') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('<:blackhead:585370278360776704><:blackhead:585370278360776704>'), isReady = true;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('JimHa.mp3', {
                volume: 0.3,
            });
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (isReady && message.content === '君棟不行等一下要下了') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('<:blackhead:585370278360776704><:blackhead:585370278360776704>'), isReady = true;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('DonLeave.mp3', {
                volume: 0.6,
            });
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }


    if (isReady && message.content === '金牌凱特') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('<:blackhead:585370278360776704><:blackhead:585370278360776704>'), isReady = true;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('gold.mp3', {
                volume: 0.6,
            });
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (isReady && message.content === '君棟八仙泛舟') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('<:blackhead:585370278360776704><:blackhead:585370278360776704>'), isReady = true;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('ba.mp3', {
                volume: 0.6,
            });
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (isReady && message.content === '阿嬤') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('<:blackhead:585370278360776704><:blackhead:585370278360776704>'), isReady = true;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('grandma.mp3', {
                volume: 0.6,
            });
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (isReady && message.content === '君棟下午出來') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('<:blackhead:585370278360776704><:blackhead:585370278360776704>'), isReady = true;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('afternoon.mp3', {
                volume: 0.6,
            });
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (isReady && message.content === '君棟怪物不可能在上面') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('<:blackhead:585370278360776704><:blackhead:585370278360776704>'), isReady = true;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('monster.mp3', {
                volume: 0.6,
            });
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }

    if (isReady && message.content === '貓公爵賣掉') {
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('<:blackhead:585370278360776704><:blackhead:585370278360776704>'), isReady = true;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('salecat.mp3', {
                volume: 0.6,
            });
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }



    if (isReady && message.content === '君棟HI') {
        DonHi = ++DonHi;
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('<:blackhead:585370278360776704><:blackhead:585370278360776704>'), isReady = true;
        voiceChannel.join().then(connection => {
            if ((DonHi % 2) === 0) {
                const dispatcher = connection.play('Hi2.mp3', {
                    volume: 0.7,
                });
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                });
            } else {
                const dispatcher = connection.play('Hi1.mp3', {
                    volume: 0.7,
                });
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                });

            }

        }).catch(err => console.log(err));
        isReady = true;
    }

});


var voiceOn = false;
client.on('message', message => {
    if (message.content === '!領域') {
        if(message.member.roles.cache.has('528268780367773696')) {
          console.log(`Yay, the author of the message has the role!`);
            if(voiceOn === true){
                message.channel.send('領域關閉');
                voiceOn = false;    
                console.log(voiceOn);
            }
            else{
                message.channel.send('領域展開');
                voiceOn = true;
                console.log(voiceOn);
            }            
        } else {
          console.log(`Nope, noppers, nadda.`);
            message.channel.send('你不是咒術師 K?==');
        }
    }
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    console.log("1");
    
  const channelId = "585563158974824448"   
  
  let newUserChannel = newMember.channelID;
  let oldUserChannel = oldMember.channelID;
    
    console.log(oldMember.channelID);


  if(oldUserChannel === null && newUserChannel !== null) {

     // User Joins a voice channel
      client.channels.cache.get('851092958739693598').send(newMember.member.displayName + '安安')
      console.log('2');

  } else if(newUserChannel === null){

    // User leaves a voice channel
      client.channels.cache.get('851092958739693598').send(oldMember.member.displayName + '要滾快滾')
      console.log('3');

  }
})

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
