const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NzM3NDE1NDI3NzQ3MDg2MzY3.Xx9Bog.ee7mynW4MTw8U7X9FNCTAfky9Eo";

var Prefix = ".";

const memes = [
    "https://i.pinimg.com/originals/2e/32/9f/2e329f30832de11a240696ea85f0db8e.jpg",
    "https://i.pinimg.com/originals/6c/1e/8e/6c1e8e805237d727ca65c134881b001c.jpg,",
    "https://i.ytimg.com/vi/6dXkSE6pyOg/maxresdefault.jpg",
    "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/18/campaign_images/buzzfeed-prod-fastlane-02/20-hilarious-nba-memes-for-people-who-dont-watch--2-30915-1497480871-0_dblbig.jpg",
    "https://cdn.ebaumsworld.com/2019/06/14/013622/85987934/funnynbamemes3.jpg",
    "https://cdn.quotesgram.com/img/20/4/76618468-c201641a3add603bfe7a50ce78bddde2087cb318.jpg",
    "https://ballislife.com/wp-content/uploads/2013/09/dirk-boy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-s3cv6AVcLL9DNFGzedIedPv2TNiF9TAGdg&usqp=CAU",
    "https://www.sohh.com/wp-content/uploads/2018/02/Kevin-Durant-NBA-Memes.jpg",
    "https://geeksoncoffee.com/wp-content/uploads/2019/08/Hilarious-nba-memes.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpPG7yJtZ82lV41XaWT7a_5Y94mfOOIkpxNQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVJ6OLzTlOnUuvLYv9orskYymtkWYqAdRrbQ&usqp=CAU",
    "https://geeksoncoffee.com/wp-content/uploads/2019/08/rib-tickling-nba-memes.jpg",
    "https://cdn.ebaumsworld.com/2019/06/14/013741/85987944/funnynbamemes12.jpg",
    "https://sportige.com/wp-content/uploads/2016/06/NBA-Memes-be-like-e1465639768210.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQxFwGGRUsWOwDWzGRzZLz8mC-Eit3JrhwGQ&usqp=CAU",
    "https://media.makeameme.org/created/giannis-antetokounmpo-giannis.jpg,",
    "https://pics.me.me/when-you-realize-your-team-would-be-lost-without-you-6233073.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFK7pAJUFDx3bIWZmXdjlC2Y8G-22wf89rVg&usqp=CAU",
    "https://s.hdnux.com/photos/01/03/55/11/17748547/6/920x920.jpg" 

];
var insults = [
    "esti prost",
    "daca prostia ar fi o caramida atunci tu ai fi zidul chinezesc",
    "daca as pune prostie pe Google Maps, m-ar duce la tine acasa",
    "joci ca flight",
    "esti Pandemic P",
    "arunci ca shaq"
];

bot.on('ready', () =>{
    console.log(`${bot.user.username} e online`);
    console.log("hippity hoppity, your code is now my property");
    bot.user.setActivity("@nba_romania pe insta");
});

bot.on('guildMemberAdd', member => {
    
    const welcomeEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username)
        .setColor("#fcba03")
        .setImage("https://i.pinimg.com/originals/eb/16/d3/eb16d3ba13d611da85e057f25f8b08fd.gif")
        .setDescription("Bine ai venit pe server-ul celei mai mari comunitati de NBA din Romania, verifica canalul de reguli si Have FUN !!")
        .setTimestamp();
    member.send(welcomeEmbed);
});

bot.on('guildMemberRemove', removedMember => {

});

bot.on('message', message => {

    var args = message.content.slice(Prefix.length).split(" ");

    for (let index = 0; index < args.length; index++) 
    {    
        if(args[index] == args[index].toUpperCase())
        {
            args[index] = args[index].toLocaleLowerCase();
        }   
    }

    if(message.content.charAt(0) == Prefix)
    {
        switch(args[0])
        {
            case "help":
                const helpEmbed = new Discord.MessageEmbed()
                    .setAuthor(bot.user.username)
                    .setThumbnail(bot.user.avatarURL())
                    .setColor("3#e9ac2")
                    .addFields(
                        { name: "Comanda pentru playeri", value: ".player + nume de familie"},
                        { name: "Comanda pentru meme-uri", value: ".meme"},
                        { name: "Comanda pentru poll(doar pentru staff)", value: ".poll"},
                        { name: "Comanda pentru avatar", value: ".avatar + tag unei persoane"},
                        { name: "Comanda pentru member count", value: ".count"},
                        { name: "Comanda pentru piatra hartie foarfece", value: ".rps"},
                        { name: "Comanda pentru battle", value: ".battle + tag unei persoane"},
                        { name: "Comanda pentru clear(da delete la mesaje)", value: ".clear + num mai mic decat 10"}
                    )
                    .setTimestamp();
                message.author.send(helpEmbed);
                break;
            case "getbot":
                const getbotEmbed = new Discord.MessageEmbed()
                    .setThumbnail(bot.user.avatarURL()) 
                    .setTitle("Get bot")
                    .setAuthor(bot.user.username)
                    .setURL("https://discord.com/oauth2/authorize?client_id=737415427747086367&scope=bot&permissions=0")
                    .setDescription("Apasa pe textul albastru pentru a invita bot-ul in server-ul tau")
                    .setColor("#34eb5b");   
                message.author.send(getbotEmbed);
                break;
            case "setprefix":
                if(!args[1])
                {
                    message.reply("Trebuie sa mentionezi un caracter care sa fie prefixul (0, k, !, _, i, etc.)")
                }
                else
                {
                    if(args[1].length == 1)
                    {
                        Prefix = args[1];
                        message.channel.send("@everyone Prefixul este acum " + Prefix);
                    }
                    else 
                    {
                        message.reply("Prefixul trebuie sa fie format dintr-un singur caracter.");
                    }
                }
                break;
            case "avatar":
                const avatarMention = message.mentions.users.first();
                if(avatarMention != null)
                {
                    const mentionAvatarEmbed = new Discord.MessageEmbed()
                        .setAuthor(avatarMention.username)
                        .setImage(avatarMention.avatarURL());
                    message.channel.send(mentionAvatarEmbed);
                }
                else
                {
                    const avatarEmbed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username)
                        .setImage(message.author.avatarURL());
                    message.channel.send(avatarEmbed);
                }
                break;
            case "count":
                var countGuild = bot.guilds.cache.get(message.guild.id);
                message.channel.send(`In server sunt ${countGuild.memberCount} de membri.`);
                break;
            case "roles":
                const rolesEmbed = new Discord.MessageEmbed()
                    .setTitle("Teams")
                    .setColor("Blue")
                    .setAuthor(bot.user.username)
                    .setDescription("Alege-ti echipa")
                    .setImage("https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=700");

                    message.channel.send(rolesEmbed).then(rolesEmbedMessage => {
                        rolesEmbedMessage.react("737412637259989043");
                        rolesEmbedMessage.react("737412618406592625");
                        rolesEmbedMessage.react("737411954334892143");
                        rolesEmbedMessage.react("737411942767001643");
                        rolesEmbedMessage.react("737408515433300043");
                        rolesEmbedMessage.react("737407771678605443");
                        rolesEmbedMessage.react("737406732937986062");
                        rolesEmbedMessage.react("737411850681188492");
                        rolesEmbedMessage.react("737411835011137557");
                        rolesEmbedMessage.react("737410859688656946");
                        rolesEmbedMessage.react("737409031664173147");
                        rolesEmbedMessage.react("737410851060973589");
                        rolesEmbedMessage.react("737406160155574304");
                        rolesEmbedMessage.react("737408244552695980");
                        rolesEmbedMessage.react("737406260332331153");
                        rolesEmbedMessage.react("737410834535284836");
                        rolesEmbedMessage.react("737410824687058977");
                        rolesEmbedMessage.react("737410816659423385");
                        rolesEmbedMessage.react("737410809881165925");
                        rolesEmbedMessage.react("737410800301506731");
                        rolesEmbedMessage.react("737410791128694844");
                        rolesEmbedMessage.react("737410736065609871");
                        rolesEmbedMessage.react("737406951385989186");
                        rolesEmbedMessage.react("737410723210330113");
                        rolesEmbedMessage.react("737406481858822275");
                        rolesEmbedMessage.react("737406827012030535");
                        rolesEmbedMessage.react("737408712045625425");
                        rolesEmbedMessage.react("737410668591972483");
                        rolesEmbedMessage.react("737410353356472440");
                    });
                break;
            case "clear":
                var wordsToClear;
                if(args[1] != null)
                {
                    wordsToClear = parseInt(args[1]);
                }

                if(wordsToClear <= 100)
                {
                    message.channel.bulkDelete(wordsToClear);
                }
                else
                {
                    message.reply("Too many messages to delete (max 100)");
                }
                break;
            case "rps":
                const rpsEmbed = new Discord.MessageEmbed()
                    .setAuthor(bot.user.username)
                    .setColor("RED")
                    .setDescription("⛰️ - Rock\n" + "📝 - Paper\n" + "✂️ - Scissors\n");
                message.channel.send(rpsEmbed).then(embed => {
                    embed.react("⛰️");
                    embed.react("📝");
                    embed.react("✂️");
                });
                break;
            case "battle":
                const battleMention = message.mentions.users.first();
                if (battleMention != null)
                {
                    if(battleMention.presence.status != "offline")
                    {
                        if(battleMention.username != message.author.username)
                        {
                            const users = [
                                message.author.username,
                                battleMention.username
                            ];
                            var winner = users[Math.floor(Math.random() * 2)];
                            var winner_hp = Math.floor(Math.random() * 101);
                            if (winner_hp == 0)
                            {
                                winner_hp = 1;
                            }
                            var loser_hp = 0;
                            var loser;
                            if(winner == users[1])
                            {
                                loser = users[0];
                            }
                            else
                            {
                                loser = users[1];
                            }
                            const battleEmbed = new Discord.MessageEmbed()
                                .setTitle("⚔️Battle")
                                .setAuthor(bot.user.username, bot.user.avatarURL())
                                .setTimestamp()
                                .setColor("#d40412")
                                .addFields(
                                    {name: "Winner", value: "🥇" + winner + "(" + winner_hp + " hp" + ")"},
                                    {name: "Loser", value: "🥈" + loser + "(" + loser_hp + " hp" + ")"}
                                );
                            message.channel.send(battleEmbed);
                            message.channel.send(`Bravo ba ${winner} ai castigat`);
                        }
                        else
                        {
                            message.channel.send("Nu te poti bate cu tine");
                        }
                    }
                    else
                    {
                        message.reply("Trebuie sa mentionezi o persoana care nu e offline");
                    }    
                }
                else
                {
                    message.reply("Trebuie sa mentionezi o persoana din server");
                }
                break;
            case "insulta":
                const mention = message.mentions.users.first();
                
                if (mention == null)
                {
                    message.reply(insults[Math.floor(Math.random() * insults.length)]);
                    return;
                }
                else
                {
                    message.channel.send(`<@${mention.id}>` + ", " + message.author.username + " ti-a zis ca " + insults[Math.floor(Math.random() * insults.length) + 1]);
                }

                if(mention.username == message.author.username)
                {
                    message.reply("Nu te insulta singur :))");
                    return;
                }
                break;
            case "poll":
                if(message.member.roles.cache.find(r => r.name === "Admin Discord") || message.member.roles.cache.find(r => r.name === "Admin Pagina👑")) 
                {
                    const pollEmbed = new Discord.MessageEmbed()
                        .setTitle("Cum creezi un poll")
                        .setDescription("Scrie $poll + (ex : Este Fortnite un joc bun) ca sa creezi un simplu poll");

                    if (!args[1])
                    {
                        message.reply(pollEmbed);
                        break;
                    }

                    let msgArgs = args.slice(1).join(" ");
                    message.channel.send("📋"+ "**" + msgArgs + "**" + " @everyone").then(messageReaction => {
                        messageReaction.react('👍');
                        messageReaction.react('👎');
                        message.delete({timeout: 2000}).catch(console.error);
                    });
                }
                else
                {
                    message.reply("Nu ai permisiunea");
                }
                break;
            case "player":
                const playerEmbed = new Discord.MessageEmbed();
                playerEmbed.setColor("#27cc9a");
                if(!args[1])
                {
                    message.reply("Trebuie sa mentionezi un jucator(numele de familie: durant, harden, james, davis, etc.)");
                    return;
                }
                else 
                {
                    if(args[1] == "harden")
                    {
                        playerEmbed.setTitle("James Harden");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/hardeja01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/h/hardeja01.html");
                        playerEmbed.setDescription("Echipa: Houston Rockets\n" + "Numar: 13\n" + "Pozitie: SG\n" + "Inaltime: 6-5\n");
                    }
                    if(args[1] == "lebron" || args[1] == "james" || args[1] == "king")
                    {
                        playerEmbed.setTitle("LeBron James");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/jamesle01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/j/jamesle01.html");
                        playerEmbed.setDescription("Echipa: L.A. Lakers\n" + "Numar: 23\n" + "Pozitie: PG/SF\n" + "Inaltime: 6-8\n");   
                    }
                    if(args[1] == "antetokunmpo" || args[1] == "giannis")
                    {
                        playerEmbed.setTitle("Giannis Antetokunmpo");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/antetgi01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/antetgi01.html");
                        playerEmbed.setDescription("Echipa: Milwaukee\n" + "Numar: 34\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-11\n");   
                    }
                    if(args[1] == "durant" || args[1] == "kd")
                    {
                        playerEmbed.setTitle("Kevin Durant");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/duranke01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/d/duranke01.html");
                        playerEmbed.setDescription("Echipa: Nets\n" + "Numar: 7\n" + "Pozitie: SF/PF\n" + "Inaltime: 6-10\n");
                    }
                    if(args[1] == "curry")
                    {
                        playerEmbed.setTitle("Stephen Curry");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/curryst01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/c/curryst01.html");
                        playerEmbed.setDescription("Echipa: Warriors\n" + "Numar: 30\n" + "Pozitie: PG\n" + "Inaltime: 6-3\n");    
                    }
                    if(args[1] == "ad" || args[1] == "davis")
                    {
                        
                    }
                    if(args[1] == "doncic" || args[1] == "luka")
                    {
                        playerEmbed.setTitle("Luka Dončić");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/doncilu01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/d/doncilu01.html");
                        playerEmbed.setDescription("Echipa: Dallas Mavericks\n" + "Numar: 77\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-7\n");    
                    }
                    if(args[1] == "lillard")
                    {
                        playerEmbed.setTitle("Damian Lillard");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/lillada01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/l/lillada01.html");
                        playerEmbed.setDescription("Echipa: Portland Trail Blazers\n" + "Numar: 0\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-2\n"); 
                    }
                    if(args[1] == "westbrook")
                    {
                        playerEmbed.setTitle("Russell Westbrook");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/westbru01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/w/westbru01.html");
                        playerEmbed.setDescription("Echipa: Houston Rockets\n" + "Numar: 0\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-3\n");
                    }
                    if(args[1] == "jokic")
                    {
                        playerEmbed.setTitle("Nikola Jokić");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/jokicni01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/j/jokicni01.html");
                        playerEmbed.setDescription("Echipa: Denver Nuggets\n" + "Numar: 15\n" + "Pozitie: C/PG\n" + "Inaltime: 7-0\n");
                    }
                    if(args[1] == "tatum")
                    {
                        playerEmbed.setTitle("Jayson Tatum");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/tatumja01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/t/tatumja01.html");
                        playerEmbed.setDescription("Echipa: Boston Celtics\n" + "Numar: 0\n" + "Pozitie: SF/PF\n" + "Inaltime: 6-8\n");
                    }
                    if(args[1] == "jaylen adams")
                    {
                        playerEmbed.setTitle("Jaylen Adams");
                        playerEmbed.setImage("https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629121.png%22");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/adamsja01.html%22");
                        playerEmbed.setDescription("Echipa: Portland Trail Blazers\n" + "Numar: 10\n" + "Pozitie: PG\n" + "Inaltime: 6-0\n" + "Greutate: 190lbs\n");
                    }
                    if(args[1] == "adams")
                    {
                        playerEmbed.setTitle("Jaylen Adams");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/adamsst01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/adamsst01.html");
                        playerEmbed.setDescription("Echipa: Oklahoma City Thunder\n" + "Numar: 12\n" + "Pozitie: C\n" + "Inaltime: 6-11\n" + "Greutate: 265lbs\n");
                    }
                    if(args[1] == "adebayo")
                    {
                        playerEmbed.setTitle("Bam Adebayo");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/adebaba01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/adebaba01.html");
                        playerEmbed.setDescription("Echipa: Miami Heat\n" + "Numar: 13\n" + "Pozitie: C/PF\n" + "Inaltime: 6-9\n" + "Greutate: 255lbs\n");
                    }
                    if(args[1] == "aldrige")
                    {
                        playerEmbed.setTitle("LaMarcus Aldrige");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/aldrila01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/aldrila01.html");
                        playerEmbed.setDescription("Echipa: San Antonio Spurs\n" + "Numar: 12\n" + "Pozitie: C/PF\n" + "Inaltime: 6-11\n" + "Greutate: 260lbs\n");   
                    }
                    if(args[1] == "alexander-walker")
                    {
                        playerEmbed.setTitle("Nickeil Alexander-Walker");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/alexani01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/alexani01.html");
                        playerEmbed.setDescription("Echipa: New Orleans Pelicans\n" + "Numar: 0\n" + "Pozitie: SG\n" + "Inaltime: 6-5\n" + "Greutate: 205lbs\n");   
                    }
                    if(args[1] == "allen")
                    {
                        playerEmbed.setTitle("Jarrett Allen");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/allenja01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/allenja01.html");
                        playerEmbed.setDescription("Echipa: Nets\n" + "Numar: 31\n" + "Pozitie: C\n" + "Inaltime: 6-11\n" + "Greutate: 237lbs\n");    
                    }
                    if(args[1] == "kostas")
                    {
                        playerEmbed.setTitle("Kostas Antetokounmpo");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/antetko01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/antetko01.html");
                        playerEmbed.setDescription("Echipa: L.A Lakers\n" + "Numar: 37\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-10\n" + "Greutate: 200lbs\n");   
                    }
                    if(args[1] == "thanasis")
                    {
                        playerEmbed.setTitle("Thanasis Antetokounmpo");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/antetth01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/antetth01.html");
                        playerEmbed.setDescription("Echipa: Milwaukee Bucks\n" + "Numar: 43\n" + "Pozitie: SF/PF\n" + "Inaltime: 6-6\n" + "Greutate: 205lbs\n");    
                    }
                    if(args[1] == "anthony")
                    {
                        playerEmbed.setTitle("Carmelo Anthony");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/anthoca01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/anthoca01.html");
                        playerEmbed.setDescription("Echipa: Portland Trail Blazers\n" + "Numar: 00\n" + "Pozitie: SF/PF\n" + "Inaltime: 6-8\n" + "Greutate: 240lbs\n");   
                    }
                    if(args[1] == "ayton")
                    {
                        playerEmbed.setTitle("Deandre Ayton");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/aytonde01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/a/aytonde01.html");
                        playerEmbed.setDescription("Echipa: Phoenix Suns\n" + "Numar: 22\n" + "Pozitie: C\n" + "Inaltime: 6-11\n" + "Greutate: 250lbs\n");
                    }
                    if(args[1] == "bagley")
                    {
                        playerEmbed.setTitle("Marvin Bagley III");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/baglema01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/baglema01.html");
                        playerEmbed.setDescription("Echipa: Sacramento Kings\n" + "Numar: 35\n" + "Pozitie: PF/C\n" + "Inaltime: 6-11\n" + "Greutate: 240lbs\n");
                    }
                    if(args[1] == "lonzo" || args[1] == "ball")
                    {
                        playerEmbed.setTitle("Lonzo Ball");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/balllo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/balllo01.html");
                        playerEmbed.setDescription("Echipa: New Orleans Pelicans\n" + "Numar: 2\n" + "Pozitie: PG\n" + "Inaltime: 6-6\n" + "Greutate: 190lbs\n");    
                    }
                    if(args[1] == "mo" || args[1] == "bamba")
                    {
                        playerEmbed.setTitle("Mo Bamba");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/bambamo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/req/202007281/images/players/bambamo01.jpg");
                        playerEmbed.setDescription("Echipa: Orlando Magic\n" + "Numar: 5\n" + "Pozitie: C\n" + "Inaltime: 7-0\n" + "Greutate: 241lbs\n");    
                    }
                    if(args[1] == "barea")
                    {
                        playerEmbed.setTitle("J.J. Barea");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/bareajo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/bareajo01.html");
                        playerEmbed.setDescription("Echipa: Dallas Mavericks\n" + "Numar: 5\n" + "Pozitie: PG/SG\n" + "Inaltime: 5-10\n" + "Greutate: 185lbs\n");  
                    }
                    if(args[1] == "batum")
                    {
                        playerEmbed.setTitle("Nicolas Batum");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/batumni01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/batumni01.html");
                        playerEmbed.setDescription("Echipa: Charlotte Hornets\n" + "Numar: 5\n" + "Pozitie: SF/SG\n" + "Inaltime: 6-9\n" + "Greutate: 200lbs\n");   
                    }
                    if(args[1] == "beal")
                    {
                        playerEmbed.setTitle("Bradley Beal");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/bealbr01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/bealbr01.html");
                        playerEmbed.setDescription("Echipa: Washington Wizards\n" + "Numar: 3\n" + "Pozitie: SG\n" + "Inaltime: 6-3\n" + "Greutate: 207lbs\n");   
                    }
                    if(args[1] == "bol")
                    {
                        playerEmbed.setTitle("Bol Bol");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/bolbo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/bolbo01.html");
                        playerEmbed.setDescription("Echipa: Denver Nuggets\n" + "Numar: -\n" + "Pozitie: C/SF\n" + "Inaltime: 7-2\n" + "Greutate: 235lbs\n");   
                    }
                    if(args[1] == "bonga")
                    {
                        playerEmbed.setTitle("Isaac Bonga");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/bongais01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/bongais01.html");
                        playerEmbed.setDescription("Echipa: Washington Wizards\n" + "Numar: 17\n" + "Pozitie: PG/SF\n" + "Inaltime: 6-8\n" + "Greutate: 180lbs\n");   
                    }
                    if(args[1] == "booker")
                    {
                        playerEmbed.setTitle("Devin Booker");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/bookede01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/bookede01.html");
                        playerEmbed.setDescription("Echipa: Phoenix Suns\n" + "Numar: 1\n" + "Pozitie: SG/SF\n" + "Inaltime: 6-5\n" + "Greutate: 210lbs\n");
                    }
                    if(args[1] == "brown")
                    {
                        playerEmbed.setTitle("Jaylen Brown");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/brownja02.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/brownja02.html");
                        playerEmbed.setDescription("Echipa: Boston Celtics\n" + "Numar: 7\n" + "Pozitie: SG/SF\n" + "Inaltime: 6-6\n" + "Greutate: 223lbs\n");
                    }
                    if(args[1] == "butler")
                    {
                        playerEmbed.setTitle("Jimmy Butler");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/butleji01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/b/butleji01.html");
                        playerEmbed.setDescription("Echipa: Miami Heat\n" + "Numar: 22\n" + "Pozitie: SF/SG\n" + "Inaltime: 6-7\n" + "Greutate: 230lbs\n");  
                    }
                    if(args[1] == "KCP" || args[1] == "pope")
                    {
                        playerEmbed.setTitle("Kentavious Caldwell-Pope");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/caldwke01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/c/caldwke01.html");
                        playerEmbed.setDescription("Echipa: L.A. Lakers\n" + "Numar: 1\n" + "Pozitie: SG\n" + "Inaltime: 6-5\n" + "Greutate: 205lbs\n");
                    }
                    if(args[1] == "capela")
                    {
                        playerEmbed.setTitle("Clint Capela");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/capelca01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/c/capelca01.html");
                        playerEmbed.setDescription("Echipa: Atlanta Hawks\n" + "Numar: 15\n" + "Pozitie: C\n" + "Inaltime: 6-10\n" + "Greutate: 240lbs\n");    
                    }
                    if(args[1] == "vince" || args[1] == "carter")
                    {
                        playerEmbed.setTitle("Vince Carter");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/cartevi01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/c/cartevi01.html");
                        playerEmbed.setDescription("Echipa: Atlanta Hawks\n" + "Numar: 15\n" + "Pozitie: SG/SF\n" + "Inaltime: 6-6\n" + "Greutate: 220lbs\n");   
                    }
                    if(args[1] == "seth")
                    {
                        playerEmbed.setTitle("Seth Curry");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/curryse01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/c/curryse01.html");
                        playerEmbed.setDescription("Echipa: Dallas Mavericks\n" + "Numar: 31\n" + "Pozitie: SG/PG\n" + "Inaltime: 6-2\n" + "Greutate: 185lbs\n");    
                    }
                    if(args[1] == "crawford")
                    {
                        playerEmbed.setTitle("Jamal Crawford");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/crawfja01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/c/crawfja01.html");
                        playerEmbed.setDescription("Echipa: Brooklyn Nets\n" + "Numar: 11\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-5\n" + "Greutate: 185lbs\n");   
                    }
                    if(args[1] == "derozan")
                    {
                        playerEmbed.setTitle("DeMar DeRozan");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/derozde01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/d/derozde01.html");
                        playerEmbed.setDescription("Echipa: San Antonio Spurs\n" + "Numar: 10\n" + "Pozitie: SF/SG\n" + "Inaltime: 6-6\n" + "Greutate: 220lbs\n");    
                    }
                    if(args[1] == "diallo")
                    {
                        playerEmbed.setTitle("Hamidou Diallo");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/diallha01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/d/derozde01.html");
                        playerEmbed.setDescription("Echipa: Oklahoma City Thunder\n" + "Numar: 6\n" + "Pozitie: SF/SG\n" + "Inaltime: 6-5\n" + "Greutate: 202lbs\n");
                    }
                    if(args[1] == "dinwiddie")
                    {
                        playerEmbed.setTitle("Spencer Dinwiddie");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/dinwisp01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/d/dinwisp01.html");
                        playerEmbed.setDescription("Echipa: Brooklyn Nets\n" + "Numar: 26\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-5\n" + "Greutate: 215lbs\n");   
                    }
                    if(args[1] == "dragic")
                    {
                        playerEmbed.setTitle("Goran Dragić");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202007281/images/players/dragigo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/d/dragigo01.html");
                        playerEmbed.setDescription("Echipa: Miami Heat\n" + "Numar: 7\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-3\n" + "Greutate: 190lbs\n");       
                    }
                    if(args[1] == "drummond")
                    {
                        playerEmbed.setTitle("Andre Drummond");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008042/images/players/drumman01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/d/drumman01.html");
                        playerEmbed.setDescription("Echipa: Cleveland Cavaliers\n" + "Numar: 3\n" + "Pozitie: C\n" + "Inaltime: 6-10\n" + "Greutate: 279lbs\n");
                    }
                    if(args[1] == "embiid")
                    {
                        playerEmbed.setTitle("Joel Embiid");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008042/images/players/embiijo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/e/embiijo01.html");
                        playerEmbed.setDescription("Echipa: Philadelphia 76ers\n" + "Numar: 21\n" + "Pozitie: C\n" + "Inaltime: 7-0\n" + "Greutate: 250lbs\n");   
                    }
                    if(args[1] == "tako" || args[1] == "fall")
                    {
                        playerEmbed.setTitle("Tacko Fall");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008042/images/players/fallta01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/f/fallta01.html");
                        playerEmbed.setDescription("Echipa: Boston Celtics\n" + "Numar: 99\n" + "Pozitie: C\n" + "Inaltime: 7-0\n" + "Greutate: 311lbs\n");
                    }
                    if(args[1] == "favors")
                    {
                        playerEmbed.setTitle("Derrick Favors");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008042/images/players/favorde01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/f/favorde01.html");
                        playerEmbed.setDescription("Echipa: New Orleans Pelicans\n" + "Numar: 22\n" + "Pozitie: C/PF\n" + "Inaltime: 6-9\n" + "Greutate: 265lbs\n");   
                    }
                    if(args[1] == "fox")
                    {
                        playerEmbed.setTitle("De'Aaron Fox");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008042/images/players/foxde01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/f/foxde01.html");
                        playerEmbed.setDescription("Echipa: Sacramento Kings\n" + "Numar: 5\n" + "Pozitie: PG\n" + "Inaltime: 6-3\n" + "Greutate: 185lbs\n");    
                    }
                    if(args[1] == "gallinari")
                    {
                        playerEmbed.setTitle("Danilo Gallaniri");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/gallida01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/g/gallida01.html");
                        playerEmbed.setDescription("Echipa: Danilo Gallinari\n" + "Numar: 8\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-10\n" + "Greutate: 233lbs\n");  
                    }
                    if(args[1] == "george")
                    {
                        playerEmbed.setTitle("Paul George");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/georgpa01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/g/georgpa01.html");
                        playerEmbed.setDescription("Echipa: Los Angeles Clippers\n" + "Numar: 13\n" + "Pozitie: SF/PF\n" + "Inaltime: 6-8\n" + "Greutate: 220lbs\n");
                    }
                    if(args[1] == "gobert")
                    {
                        playerEmbed.setTitle("Rudy Gobert");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/goberru01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/g/goberru01.html");
                        playerEmbed.setDescription("Echipa: Utah Jazz\n" + "Numar: 27\n" + "Pozitie: SF/PF\n" + "Inaltime: 7-1\n" + "Greutate: 245lbs\n");
                    }
                    if(args[1] == "gordon")
                    {
                        playerEmbed.setTitle("Aaron Gordon");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/gordoaa01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/g/gordoaa01.html");
                        playerEmbed.setDescription("Echipa: Utah Jazz\n" + "Numar: 00\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-8\n" + "Greutate: 220lbs\n");    
                    }
                    if(args[1] == "draymond")
                    {
                        playerEmbed.setTitle("Draymond Green");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/greendr01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/g/greendr01.html");
                        playerEmbed.setDescription("Echipa: Golden State Warriors\n" + "Numar: 23\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-6\n" + "Greutate: 230lbs\n");    
                    }
                    if(args[1] == "blake" || args[1] == "griffin")
                    {
                        playerEmbed.setTitle("Blake Griffin");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/griffbl01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/g/griffbl01.html");
                        playerEmbed.setDescription("Echipa: Detroit Pistons\n" + "Numar: 23\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-9\n" + "Greutate: 235lbs\n");
                    }
                    if(args[1] == "harris")
                    {
                        playerEmbed.setTitle("Joe Harris");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/harrijo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/h/harrijo01.html");
                        playerEmbed.setDescription("Echipa: Brooklyn Nets\n" + "Numar: 12\n" + "Pozitie: SG/SF\n" + "Inaltime: 6-6\n" + "Greutate: 220lbs\n");
                    }
                    if(args[1] == "herro")
                    {
                        playerEmbed.setTitle("Tyler Herro");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/herroty01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/h/herroty01.html");
                        playerEmbed.setDescription("Echipa: Miami Heat\n" + "Numar: 14\n" + "Pozitie: SG/SF\n" + "Inaltime: 6-5\n" + "Greutate: 200lbs\n");  
                    }
                    if(args[1] == "holiday")
                    {
                        playerEmbed.setTitle("Jrue Holiday");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/holidjr01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/h/holidjr01.html");
                        playerEmbed.setDescription("Echipa: New Orleans Pelicans\n" + "Numar: 11\n" + "Pozitie: SG/PG\n" + "Inaltime: 6-3\n" + "Greutate: 205lbs\n");  
                    }
                    if(args[1] == "harrel")
                    {   
                        playerEmbed.setTitle("Montrezl Harrell");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/harremo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/h/harremo01.html");
                        playerEmbed.setDescription("Echipa: Los Angeles Clippers\n" + "Numar: 5\n" + "Pozitie: C/PF\n" + "Inaltime: 6-7\n" + "Greutate: 240lbs\n"); 
                    }
                    if(args[1] == "hayward")
                    {
                        playerEmbed.setTitle("Gordon Hayward");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/haywago01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/h/haywago01.html");
                        playerEmbed.setDescription("Echipa: Boston Celtics\n" + "Numar: 20\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-7\n" + "Greutate: 207lbs\n");          
                    } 
                    if(args[1] == "irving" || args[1] == "kyrie")
                    {
                        playerEmbed.setTitle("Kyrie Irving");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/irvinky01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/i/irvinky01.html");
                        playerEmbed.setDescription("Echipa: Brooklyn Nets\n" + "Numar: 11\n" + "Pozitie: PG\n" + "Inaltime: 6-2\n" + "Greutate: 195lbs\n");
                    }
                    if(args[1] == "ingram")
                    {
                        playerEmbed.setTitle("Brandon Ingram");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/ingrabr01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/i/ingrabr01.html");
                        playerEmbed.setDescription("Echipa: New Orleans Pelicans\n" + "Numar: 14\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-7\n" + "Greutate: 190lbs\n");    
                    }
                    if(args[1] == "jones")
                    {
                        playerEmbed.setTitle("Derrick Jones Jr.");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/jonesde02.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/j/jonesde02.html");
                        playerEmbed.setDescription("Echipa: Miami Heat\n" + "Numar: 5\n" + "Pozitie: SF/PF\n" + "Inaltime: 6-6\n" + "Greutate: 210lbs\n");
                    }
                    if(args[1] == "jordan")
                    {
                        playerEmbed.setTitle("Michael Jordan");
                        playerEmbed.setImage("https://www.pngkey.com/png/detail/36-364374_michael-jordan-the-goat-michael-jordan-goat-png.png");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/j/jordami01.html");
                        playerEmbed.setDescription("Echipa: Chicago Bullas\n" + "Numar: 23\n" + "Pozitie: SG/SF\n" + "Inaltime: 6-6\n" + "Greutate: 195lbs\n"); 
                    }
                    if(args[1] == "kennard")
                    {
                        playerEmbed.setTitle("Luke Kennard");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/kennalu01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/k/kennalu01.html");
                        playerEmbed.setDescription("Echipa: Detroit Pistons\n" + "Numar: 5\n" + "Pozitie: SG/SF\n" + "Inaltime: 6-5\n" + "Greutate: 205lbs\n");   
                    }
                    if(args[1] == "kanter")
                    {
                        playerEmbed.setTitle("Enes Kanter");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/kanteen01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/k/kanteen01.html");
                        playerEmbed.setDescription("Echipa: Boston Celtics\n" + "Numar: 11\n" + "Pozitie: C\n" + "Inaltime: 6-10\n" + "Greutate: 262lbs\n");    
                    }
                    if(args[1] == "kuzma")
                    {
                        playerEmbed.setTitle("Kyle Kuzma");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/kuzmaky01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/k/kuzmaky01.html");
                        playerEmbed.setDescription("Echipa: Los Angeles Lakers\n" + "Numar: 0\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-8\n" + "Greutate: 220lbs\n");   
                    }
                    if(args[1] == "lavine")
                    {
                        playerEmbed.setTitle("Zach LaVine");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/lavinza01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/l/lavinza01.html");
                        playerEmbed.setDescription("Echipa: Chicago Bulls\n" + "Numar: 8\n" + "Pozitie: SG/SF\n" + "Inaltime: 6-6\n" + "Greutate: 181lbs\n");   
                    }
                    if(args[1] == "lopez")
                    {
                        playerEmbed.setTitle("Brook Lopez");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/lopezbr01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/l/lopezbr01.html");
                        playerEmbed.setDescription("Echipa: Milwaukee Bucks\n" + "Numar: 11\n" + "Pozitie: C\n" + "Inaltime: 7-0\n" + "Greutate: 270lbs\n");   
                    }
                    if(args[1] == "lowry")
                    {
                        playerEmbed.setTitle("Kyle Lowry");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/lowryky01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/l/lowryky01.html");
                        playerEmbed.setDescription("Echipa: Toronto Raptors\n" + "Numar: 7\n" + "Pozitie: PG\n" + "Inaltime: 6-0\n" + "Greutate: 200lbs\n");
                    }
                    if(args[1] == "middelton")
                    {
                        playerEmbed.setTitle("Khris Middleton");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/middlkh01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/m/middlkh01.html");
                        playerEmbed.setDescription("Echipa: Milwaukee Bucks\n" + "Numar: 22\n" + "Pozitie: SF/SG\n" + "Inaltime: 6-7\n" + "Greutate: 222lbs\n");    
                    }
                    if(args[1] == "milsap")
                    {
                        playerEmbed.setTitle("Paul Millsap");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/millspa01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/m/millspa01.html");
                        playerEmbed.setDescription("Echipa: Denver Nuggets\n" + "Numar: 4\n" + "Pozitie: PF\n" + "Inaltime: 6-7\n" + "Greutate: 205lbs\n");
                    }
                    if(args[1] == "mitchell")
                    {
                        playerEmbed.setTitle("Donovan Mitchell");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/mitchdo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/m/mitchdo01.html");
                        playerEmbed.setDescription("Echipa: Utah Jazz\n" + "Numar: 45\n" + "Pozitie: SG/PG\n" + "Inaltime: 6-1\n" + "Greutate: 215lbs\n");    
                    }
                    if(args[1] == "murray")
                    {
                        playerEmbed.setTitle("Jamal Murray");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/murraja01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/m/murraja01.html");
                        playerEmbed.setDescription("Echipa: Denver Nuggets\n" + "Numar: 27\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-4\n" + "Greutate: 201lbs\n");   
                    }
                    if(args[1] == "oladipo")
                    {
                        playerEmbed.setTitle("Jamal Murray");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/murraja01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/m/murraja01.html");
                        playerEmbed.setDescription("Echipa: Indiana Pacers\n" + "Numar: 4\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-4\n" + "Greutate: 210lbs\n");
                    }
                    if(args[1] == "oubre")
                    {
                        playerEmbed.setTitle("Kelly Oubre Jr.");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/oubreke01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/o/oubreke01.html");
                        playerEmbed.setDescription("Echipa: Phoenix Suns\n" + "Numar: 3\n" + "Pozitie: SF/SG\n" + "Inaltime: 6-7\n" + "Greutate: 205lbs\n");
                    }
                    if(args[1] == "paul" || args[1] == "cp3")
                    {
                        playerEmbed.setTitle("Chris Paul");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/paulch01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/p/paulch01.html");
                        playerEmbed.setDescription("Echipa: Oklahoma City Thunder\n" + "Numar: 3\n" + "Pozitie: PG\n" + "Inaltime: 6-1\n" + "Greutate: 175lbs\n");   
                    }
                    if(args[1] == "paschall")
                    {
                        playerEmbed.setTitle("Eric Paschall");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/pascher01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/p/pascher01.html");
                        playerEmbed.setDescription("Echipa: Golden State Warriors\n" + "Numar: 7\n" + "Pozitie: PF\n" + "Inaltime: 6-6\n" + "Greutate: 255lbs\n");
                    }
                    if(args[1] == "porter")
                    {
                        playerEmbed.setTitle("Michael Porter Jr.");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/portemi01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/p/portemi01.html");
                        playerEmbed.setDescription("Echipa: Denver Nuggets\n" + "Numar: 1\n" + "Pozitie: PF\n" + "Inaltime: 6-10\n" + "Greutate: 215lbs\n");           
                    }
                    if(args[1] == "porzingis" || args[1] == "kp6")
                    {
                        playerEmbed.setTitle("Kristaps Porziņģis");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/porzikr01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/p/porzikr01.html");
                        playerEmbed.setDescription("Echipa: Dallas Mavericks\n" + "Numar: 6\n" + "Pozitie: PF\n" + "Inaltime: 7-3\n" + "Greutate: 240lbs\n");
                    }
                    if(args[1] == "redick")
                    {
                        playerEmbed.setTitle("J.J. Redick");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/redicjj01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/r/redicjj01.html");
                        playerEmbed.setDescription("Echipa: New Orleans Pelicans\n" + "Numar: 4\n" + "Pozitie: SG\n" + "Inaltime: 6-3\n" + "Greutate: 200lbs\n");     
                    }
                    if(args[1] == "robinson")
                    {
                        playerEmbed.setTitle("Duncan Robinson");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/robindu01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/r/robindu01.html");
                        playerEmbed.setDescription("Echipa: Miami Heat\n" + "Numar: 55\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-7\n" + "Greutate: 215lbs\n");   
                    }
                    if(args[1] == "rondo")
                    {
                        playerEmbed.setTitle("Rajon Rondo");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/rondora01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/r/rondora01.html");
                        playerEmbed.setDescription("Echipa: Los Angeles Lakers\n" + "Numar: 9\n" + "Pozitie: PG\n" + "Inaltime: 6-1\n" + "Greutate: 186lbs\n");   
                    }
                    if(args[1] == "rose")
                    {
                        playerEmbed.setTitle("Derrick Rose");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/rosede01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/r/rosede01.html");
                        playerEmbed.setDescription("Echipa: Detroit Pistons\n" + "Numar: 25\n" + "Pozitie: PG\n" + "Inaltime: 6-2\n" + "Greutate: 200lbs\n");
                    }
                    if(args[1] == "rozier")
                    {
                        playerEmbed.setTitle("Terry Rozier");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/roziete01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/r/roziete01.html");
                        playerEmbed.setDescription("Echipa: Charlotte Hornets\n" + "Numar: 3\n" + "Pozitie: PG\n" + "Inaltime: 6-1\n" + "Greutate: 190lbs\n");    
                    }
                    if(args[1] == "rubio")
                    {
                        playerEmbed.setTitle("Ricky Rubio");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/rubiori01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/r/rubiori01.html");
                        playerEmbed.setDescription("Echipa: Phoenix Suns\n" + "Numar: 11\n" + "Pozitie: PG\n" + "Inaltime: 6-3\n" + "Greutate: 190lbs\n");   
                    }
                    if(args[1] == "dlo" || args[1] == "russell")
                    {
                        playerEmbed.setTitle("D'Angelo Russell");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008051/images/players/russeda01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/r/russeda01.html");
                        playerEmbed.setDescription("Echipa: Minnesota Timberwolves\n" + "Numar: 0\n" + "Pozitie: PG\n" + "Inaltime: 6-3\n" + "Greutate: 190lbs\n");  
                    }
                    if(args[1] == "sabonis")
                    {
                        playerEmbed.setTitle("Domantas Sabonis");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/sabondo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/s/sabondo01.html");
                        playerEmbed.setDescription("Echipa: Indiana Pacers\n" + "Numar: 11\n" + "Pozitie: C/PF\n" + "Inaltime: 6-11\n" + "Greutate: 240lbs\n"); 
                    }
                    if(args[1] == "siakam" || args[1] == "pascal")
                    {
                        playerEmbed.setTitle("Pascal Siakam");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/siakapa01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/s/siakapa01.html");
                        playerEmbed.setDescription("Echipa: Toronto Raptors\n" + "Numar: 43\n" + "Pozitie: PF/SF\n" + "Inaltime: 6-9\n" + "Greutate: 230lbs\n");  
                    }
                    if(args[1] == "simmons" || args[1] == "ben")
                    {
                        playerEmbed.setTitle("Ben Simmons");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/simmobe01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/s/simmobe01.html");
                        playerEmbed.setDescription("Echipa: Philadelphia 76ers\n" + "Numar: 25\n" + "Pozitie: PG/PF\n" + "Inaltime: 6-10\n" + "Greutate: 230lbs\n");    
                    }
                    if(args[1] == "smith")
                    {
                        playerEmbed.setTitle("J.R. Smith");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/smithjr01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/s/smithjr01.html");
                        playerEmbed.setDescription("Echipa: Los Angeles Lakers\n" + "Numar: 21\n" + "Pozitie: SF/SG\n" + "Inaltime: 6-6\n" + "Greutate: 225lbs\n");              
                    }
                    if(args[1] == "spellman")
                    {
                        playerEmbed.setTitle("Omari Spellman");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/spellom01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/s/spellom01.html");
                        playerEmbed.setDescription("Echipa: Minnesota Timberwolves\n" + "Numar: 4\n" + "Pozitie: PF\n" + "Inaltime: 6-8\n" + "Greutate: 245lbs\n");
                    }
                    if(args[1] == "teague")
                    {
                        playerEmbed.setTitle("Omari Spellman");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/spellom01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/s/spellom01.html");
                        playerEmbed.setDescription("Echipa: Minnesota Timberwolves\n" + "Numar: 4\n" + "Pozitie: PF\n" + "Inaltime: 6-8\n" + "Greutate: 245lbs\n");
                    }
                    if(args[1] == "taegue")
                    {
                        playerEmbed.setTitle("Jeff Teague");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/teaguje01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/t/teaguje01.html");
                        playerEmbed.setDescription("Echipa: Atlanta Hawks\n" + "Numar: 00\n" + "Pozitie: PG\n" + "Inaltime: 6-3\n" + "Greutate: 195lbs\n");       
                    }
                    if(args[1] == "thompson")
                    {
                        playerEmbed.setTitle("Klay Thompson");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/thompkl01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/t/thompkl01.html");
                        playerEmbed.setDescription("Echipa: Golden State Warriors\n" + "Numar: 11\n" + "Pozitie: SG/SF\n" + "Inaltime: 6-6\n" + "Greutate: 215lbs\n");   
                    }
                    if(args[1] == "towns" || args[1] == "kat")
                    {
                        playerEmbed.setTitle("Karl-Anthony Towns");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/townska01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/t/townska01.html");
                        playerEmbed.setDescription("Echipa: Minnesota Timberwolves\n" + "Numar: 24\n" + "Pozitie: C\n" + "Inaltime: 6-11\n" + "Greutate: 248lbs\n");  
                    }
                    if(args[1] == "tucker")
                    {
                        playerEmbed.setTitle("P.J. Tucker");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/tuckepj01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/t/tuckepj01.html");
                        playerEmbed.setDescription("Echipa: Houston Rockets\n" + "Numar: 17\n" + "Pozitie: C/PF\n" + "Inaltime: 6-5\n" + "Greutate: 245lbs\n");   
                    }
                    if(args[1] == "turner")
                    {
                        playerEmbed.setTitle("Evan Turner");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/turnemy01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/t/turnemy01.html");
                        playerEmbed.setDescription("Echipa: Indiana Pacers\n" + "Numar: 33\n" + "Pozitie: C/PF\n" + "Inaltime: 6-11\n" + "Greutate: 250lbs\n");   
                    }
                    if(args[1] == "valinciunas")
                    {
                        playerEmbed.setTitle("Jonas Valančiūnasr");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/valanjo01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/v/valanjo01.html");
                        playerEmbed.setDescription("Echipa: Memphis Grizzlies\n" + "Numar: 17\n" + "Pozitie: C/PF\n" + "Inaltime: 6-11\n" + "Greutate: 256lbs\n");   
                    }
                    if(args[1] == "vanvleet")
                    {
                        playerEmbed.setTitle("Fred VanVleet");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/vanvlfr01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/v/vanvlfr01.html");
                        playerEmbed.setDescription("Echipa: Toronto Raptors\n" + "Numar: 23\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-0\n" + "Greutate: 195lbs\n");   
                    }
                    if(args[1] == "vucevic")
                    {
                        playerEmbed.setTitle("Nikola Vučević");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008124/images/players/vucevni01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/v/vucevni01.html");
                        playerEmbed.setDescription("Echipa: Orlando Magic\n" + "Numar: 9\n" + "Pozitie: C\n" + "Inaltime: 6-11\n" + "Greutate: 260lbs\n");
                    }
                    if(args[1] == "waiters")
                    {
                        playerEmbed.setTitle("Dion Waiters");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008191/images/players/waitedi01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/w/waitedi01.html");
                        playerEmbed.setDescription("Echipa: Los Angeles Lakers\n" + "Numar: 18\n" + "Pozitie: SG\n" + "Inaltime: 6-3\n" + "Greutate: 215lbs\n");  
                    }
                    if(args[1] == "warren")
                    {
                        playerEmbed.setTitle("T.J. Warren");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008191/images/players/warretj01.jpg");
                        playerEmbed.setURL("basketball-reference.com/players/w/warretj01.html");
                        playerEmbed.setDescription("Echipa: Indiana Pacers\n" + "Numar: 1\n" + "Pozitie: SF\n" + "Inaltime: 6-8\n" + "Greutate: 215lbs\n");   
                    }
                    if(args[1] == "white")
                    {
                        playerEmbed.setTitle("Coby White");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008251/images/players/whiteco01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/w/whiteco01.html");
                        playerEmbed.setDescription("Echipa: Chicago Bulls\n" + "Numar: 0\n" + "Pozitie: SG\n" + "Inaltime: 6-4\n" + "Greutate: 185lbs\n");   
                    }
                    if(args[1] == "whiteside")
                    {
                        playerEmbed.setTitle("Hassan Whiteside");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008251/images/players/whiteha01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/w/whiteha01.html");
                        playerEmbed.setDescription("Echipa: Portland Trail Blazers\n" + "Numar: 33\n" + "Pozitie: C\n" + "Inaltime: 7-0\n" + "Greutate: 235lbs\n");   
                    }
                    if(args[1] == "wiggins")
                    {
                        playerEmbed.setTitle("Andrew Wiggins");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008251/images/players/wiggian01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/w/wiggian01.html");
                        playerEmbed.setDescription("Echipa: Golden State Warriors\n" + "Numar: 22\n" + "Pozitie: SF\n" + "Inaltime: 6-7\n" + "Greutate: 194lbs\n");
                    }
                    if(args[1] == "lou" || args[1] == "williams")
                    {
                        playerEmbed.setTitle("Lou Williams");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008251/images/players/willilo02.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/w/willilo02.html");
                        playerEmbed.setDescription("Echipa: Los Angeles Clippers\n" + "Numar: 23\n" + "Pozitie: PG\n" + "Inaltime: 6-1\n" + "Greutate: 175lbs\n"); 
                    }
                    if(args[1] == "williamson" || args[1] == "zion")
                    {
                        playerEmbed.setTitle("Zion Williamson");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008251/images/players/willizi01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/w/willizi01.html");
                        playerEmbed.setDescription("Echipa: New Orleans Pelicans\n" + "Numar: 1\n" + "Pozitie: PF\n" + "Inaltime: 6-6\n" + "Greutate: 285bs\n");   
                    }
                    if(args[1] == "wood")
                    {
                        playerEmbed.setTitle("Christian Wood");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008251/images/players/woodch01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/w/woodch01.html");
                        playerEmbed.setDescription("Echipa: Detroit Pistons\n" + "Numar: 35\n" + "Pozitie: PF/C\n" + "Inaltime: 6-10\n" + "Greutate: 215bs\n");
                    }
                    if(args[1] == "trae" || args[1] == "young")
                    {   
                        playerEmbed.setTitle("Trae Young");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008251/images/players/youngtr01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/y/youngtr01.html");
                        playerEmbed.setDescription("Echipa: Atlanta Hawks\n" + "Numar: 11\n" + "Pozitie: PG\n" + "Inaltime: 6-1\n" + "Greutate: 180bs\n");
                    }    
                    if(args[1] == "zeller")
                    {
                        playerEmbed.setTitle("Cody Zeller");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008251/images/players/zelleco01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/z/zelleco01.html");
                        playerEmbed.setDescription("Echipa: Charlotte Hornets\n" + "Numar: 40\n" + "Pozitie: C\n" + "Inaltime: 7-0\n" + "Greutate: 240bs\n");    
                    }
                    if(args[1] == "kobi")
                    {
                        playerEmbed.setTitle("Kobi Simmons");
                        playerEmbed.setImage("https://www.basketball-reference.com/req/202008311/images/players/simmoko01.jpg");
                        playerEmbed.setURL("https://www.basketball-reference.com/players/s/simmoko01.html");
                        playerEmbed.setDescription("Echipa: Charlotte Hornets\n" + "Numar: 3\n" + "Pozitie: PG\n" + "Inaltime: 6-5\n" + "Greutate: 165bs\n");    
                    }
                    //2k Comunnity
                    if(args[1] == "flight")
                    {
                        playerEmbed.setTitle("Flight The G.O.A.T");
                        playerEmbed.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcconGTAQmAvUIrfwIxZHmP9K4ZE8WXsHMig&usqp=CAU");
                        playerEmbed.setURL("https://www.youtube.com/channel/UC_k0qgMNIW2VmTQKjFsbXDw")
                        playerEmbed.setDescription("Echipa: 2K Community\n" + "Numar: 23\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-3\n" + "Greutate: 156bs\n");
                    }
                    if(args[1] == "cash")
                    {
                        playerEmbed.setTitle("Cash Nasty");
                        playerEmbed.setImage("data:image/jpeg;base64,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");
                        playerEmbed.setURL("https://www.youtube.com/channel/UC_k0qgMNIW2VmTQKjFsbXDw")
                        playerEmbed.setDescription("Echipa: 2K Community\n" + "Numar: 23\n" + "Pozitie: PG/SG\n" + "Inaltime: 6-2\n" + "Greutate: -lbs\n");
                    }

                    if(playerEmbed.title != null)
                    { 
                        message.channel.send(playerEmbed);
                    }
                    else 
                    {
                        message.reply(" Acest jucator nu este in baza noastra de date, pentru a raporta un jucator nou poti sa il contactezi pe <@339388443018657792>");
                    }
                }
                break;
            case "meme":
                var randomMemeNumber = Math.floor(Math.random() * memes.length);
                const memeEmbed = new Discord.MessageEmbed()
                    .setTitle("Meme")
                    .setColor("#30fc03")
                    .setAuthor(bot.user.username)
                    .setImage(memes[randomMemeNumber])
                    .setTimestamp();
                message.channel.send(memeEmbed);
                break;
        }
        
    }   
});

bot.on('messageReactionAdd', (reaction, user) => {
    
    var reactionID = reaction.emoji.id;
    var reactionName = reaction.emoji.name;
    if(user.id != bot.user.id)
    {
        if(reactionID == "737412637259989043")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737395285969600704");
        }
        if(reactionID == "737412618406592625")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737399537680908499");
        }
        if(reactionID == "737411954334892143")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737395668145930383");
        }
        if(reactionID == "737411942767001643")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737395566035861554");    
        }
        if(reactionID == "737408515433300043")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737405213949952090");    
        }
        if(reactionID == "737406732937986062")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737397592039620619");    
        }
        if(reactionID == "737411850681188492")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737401871479865394");  
        }
        if(reactionID == "737411835011137557")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737400685590609941");   
        }
        if(reactionID == "737410859688656946")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737401753066012704");   
        }
        if(reactionID == "737409031664173147")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737397097908797571");
        }
        if(reactionID == "737410851060973589")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737408017716215859");   
        }
        if(reactionID == "737406160155574304")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737398162301517985");   
        }
        if(reactionID == "737408244552695980")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737398591387074600");   
        }
        if(reactionID == "737406260332331153")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737394729204973608");    
        }
        if(reactionID == "737410834535284836")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737400684672057415");    
        }
        if(reactionID == "737410824687058977")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737401517367361678");   
        }
        if(reactionID == "737410816659423385")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737396030978392096");    
        }
        if(reactionID == "737410809881165925")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737401656924307588");   
        }
        if(reactionID == "737410800301506731")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737398403763404800");
        }
        if(reactionID == "737410791128694844")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737398790822035672");   
        }
        if(reactionID == "737410736065609871")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737774388849410252");   
        }
        if(reactionID == "737406951385989186")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737394884897669142");     
        }
        if(reactionID == "737410723210330113")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737400684072140920");   
        }
        if(reactionID == "737406481858822275")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737394963435749487");   
        }
        if(reactionID == "737406827012030535")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737397241374965854");    
        }
        if(reactionID == "737408712045625425")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737395231137333280");   
        }
        if(reactionID == "737410668591972483")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737400680079294596");   
        }
        if(reactionID == "737410353356472440")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737396724145979469");   
        }
        if(reactionID == "737407771678605443")
        {
            reaction.message.guild.members.cache.get(user.id).roles.add("737394960583753739");   
        }
    }

    //Rock Papper Scissors
    const rpsReactions = ["⛰️", "📝", "✂️"];
    const botReaction = rpsReactions[Math.floor(Math.random() * rpsReactions.length)];
    if(user.id != bot.user.id && (reactionName == "⛰️" || reactionName == "📝" || reactionName == "✂️"))
    {
        reaction.message.delete();
        if((reactionName == "⛰️" && botReaction == "✂️") || (reactionName == "📝" && botReaction == "⛰️") || (reactionName == "✂️" && botReaction == "📝"))
        {
            reaction.message.channel.send("You won ! (" + reactionName + "vs" + botReaction + ")");   
        }
        else if(reactionName == botReaction)
        {
            reaction.message.channel.send("It's a tie ! (" + reactionName + "vs" + botReaction + ")");
        }
        else
        {
            reaction.message.channel.send("You lost :( (" + reactionName + "vs" + botReaction + ")");
        }
    }
});

bot.on('messageReactionRemove', (removedReaction, removedReactionUser) => {

    var removedReactionID = removedReaction.emoji.id;
    if(removedReactionUser.id != bot.user.id)
    {
        if(removedReactionID == "737412637259989043")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737395285969600704");
        }
        if(removedReactionID == "737412618406592625")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737399537680908499");
        }
        if(removedReactionID == "737411954334892143")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737395668145930383");
        }
        if(removedReactionID == "737411942767001643")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737395566035861554");    
        }
        if(removedReactionID == "737408515433300043")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737405213949952090");    
        }
        if(removedReactionID == "737406732937986062")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737397592039620619");    
        }
        if(removedReactionID == "737411850681188492")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737401871479865394");  
        }
        if(removedReactionID == "737411835011137557")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737400685590609941");   
        }
        if(removedReactionID == "737410859688656946")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737401753066012704");   
        }
        if(removedReactionID == "737409031664173147")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737397097908797571");
        }
        if(removedReactionID == "737410851060973589")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737408017716215859");   
        }
        if(removedReactionID == "737406160155574304")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737398162301517985");   
        }
        if(removedReactionID == "737408244552695980")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737398591387074600");   
        }
        if(removedReactionID == "737406260332331153")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737394729204973608");    
        }
        if(removedReactionID == "737410834535284836")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737400684672057415");    
        }
        if(removedReactionID == "737410824687058977")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737401517367361678");   
        }
        if(removedReactionID == "737410816659423385")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737396030978392096");    
        }
        if(removedReactionID == "737410809881165925")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737401656924307588");   
        }
        if(removedReactionID == "737410800301506731")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737398403763404800");
        }
        if(removedReactionID == "737410791128694844")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737398790822035672");   
        }
        if(removedReactionID == "737410736065609871")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737774388849410252");   
        }
        if(removedReactionID == "737406951385989186")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737394884897669142");     
        }
        if(removedReactionID == "737410723210330113")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737400684072140920");   
        }
        if(removedReactionID == "737406481858822275")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737394963435749487");   
        }
        if(removedReactionID == "737406827012030535")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737397241374965854");    
        }
        if(removedReactionID == "737408712045625425")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737395231137333280");   
        }
        if(removedReactionID == "737410668591972483")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737400680079294596");   
        }
        if(removedReactionID == "737410353356472440")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737396724145979469");   
        } 
        if(removedReactionID == "737407771678605443")
        {
            removedReaction.message.guild.members.cache.get(removedReactionUser.id).roles.remove("737394960583753739");   
        }
    }      
});

bot.login(token);