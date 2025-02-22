interface Question {
  question: string;
  type: string;
}

/*
Questions:


91.	Kiss the player on your right on the mouth. 
92.	Give the player to you right a body-to-body massage (30 sec).
93.	Take a pen and paper and draw your penis/vagina.
95.	Massage the legs of the player on your left.
97.	Sit on the lap of the player on your right for one round.
101.	Suck a finger of the player in front of you (15sec.)
103.	Talk in an accent for the next 3 rounds.
106.	Attempt to break dance for 30 seconds.
107.	Do the worm.
108.	Dance to a song of the group's choosing.
109.	Do your best impression of a baby being born.
110.	Make every person in the group smile, keep going until everyone has cracked a smile.
112.	Sell a piece trash to someone in the group. Use your best salesmanship.
113.	Seduce a member of the same gender in the group.
115.	Invent a new dance move and teach it to everyone.

*/

const Questions: Question[] = [
  { question: "Do whatever I say for one minute.", type: "dare" },
  { question: "Have me spank you as hard as I can.", type: "dare" },
  { question: "Describe my naked body in intense, erotic detail.", type: "truth" },
  { question: "Whisper something not sexy into my ear but try to make it sound hot.", type: "challenge" },
  { question: "Pretend you're an exotic dancer for 1 min.", type: "dare" },
  { question: "Sell us an item of your choice in this room as sexy as possible.", type: "challenge" },
  { question: "Perform a motorboat on someone. If you're a girl, have someone do it to you.", type: "dare" },
  { question: "Give someone of your choice in the group a sexy massage while talking dirty.", type: "dare" },
  { question: "Pick two people of your choice for doing a sexy photoshoot.", type: "dare" },
  { question: "You've been naughty, time to be put in time out on someone's lap for the next round.", type: "dare" },
  { question: "Fake a blowjob on a bottle.", type: "challenge" },
  { question: "Put on the hottest song you know and try to seduce me with it.", type: "dare" },
  { question: "Turn me on by only touching my arms and hands.", type: "challenge" },
  { question: "Have me take a picture of you looking naughty.", type: "dare" },
  { question: "Give me a hot lap dance.", type: "dare" },
  { question: "Turn me on by sexily sucking on my finger.", type: "dare" },
  { question: "Set a timer for 1 minute and try not to get turned on by whatever I decide to do to you.", type: "challenge" },
  { question: "Kiss me in the sexiest place and sexiest way possible.", type: "dare" },
  { question: "Do a lap dance for everyone.", type: "dare" },
  { question: "Sit or have someone sit on you for an entire game round.", type: "dare" },
  { question: "Take a body shot off me.", type: "dare" },
  { question: "Have me read through your browsing history in a sexy voice.", type: "challenge" },
  { question: "Lick my nipples.", type: "dare" },
  { question: "Pretend we're strangers at a bar and you just spotted me. Try to pick me up.", type: "challenge" },
  { question: "Go down on me in a position we've never tried before.", type: "dare" },
  { question: "Draw me (like one of your French girls).", type: "challenge" },
  { question: "Roleplay that you're a professor and I'm your student. Seduce me.", type: "dare" },
  { question: "I'll pick a song and you have to give me a lap dance.", type: "dare" },
  { question: "Take out your wallet and pretend to be a patron at a strip club while I dance for you. (Tips are more than encouraged.)", type: "challenge" },
  { question: "You can't say my name for the rest of the game, but instead, have to call me any nickname I choose. Every time you mess up, I get to spank you.", type: "challenge" },
  { question: "Kiss a part of my body you would want to cum on.", type: "dare" },
  { question: "Take my hand and put it on a part of your body you'd like me to pay more attention to. Guide my hand and show me how you want to be touched.", type: "dare" },
  { question: "Give me a sensual massage. Start at my feet and work your way up.", type: "dare" },
  { question: "Seduce the player on your right.", type: "dare" },
  { question: "Give another player of the same sex a big kiss on the mouth.", type: "dare" },
  { question: "Get blindfolded. All players have to kiss/lick you and you have to guess who it is. Each wrong answer means a shot.", type: "challenge" },
  { question: "Strip for me.", type: "dare" },
  { question: "Touch me through my underwear.", type: "dare" },
  { question: "Act out your dirtiest dream.", type: "dare" },
  { question: "Dare anything.", type: "dare" },
  { question: "Dance seductively to a sexy song.", type: "dare" },
  { question: "Make out with me for 45 seconds.", type: "dare" },
  { question: "Take a selfie on the toilet and post it in the group.", type: "challenge" },
  { question: "Be someone's pet for the next 5 minutes.", type: "challenge" },
  { question: "Attempt to do a magic trick.", type: "challenge" },
  { question: "Perform a motorboat on somebody. If you are a girl let someone motorboat you.", type: "dare" },
  { question: "Lick the neck of all the players.", type: "dare" },
  { question: "Look into the eyes of the player on your left and tell them: You make me horny/sick/sleepy.", type: "challenge" },
  { question: "Choose someone from the group to give you a spanking.", type: "dare" },
  { question: "Create a secret handshake that involves at least five different moves.", type: "challenge" },
  { question: "Let the group pose you for a picture.", type: "challenge" },
  { question: "Try to literally lick yourself from your head to your toes. You only get three 'help' spots where I can jump in, so choose wisely.", type: "challenge" },
  { question: "Try to literally lick yourself from your head to your toes. You only get three “help” spots where I can jump in, so choose wisely.", type: "challenge" },
  { question: "Put on a song you find really sexy and go down on/kiss me for the length of it.", type: "challenge" },
  { question: "Le(Blindfold me and) write something sexy on my body in lipstick.", type: "challenge" },
  { question: "Take off your pants and give me your best twerk.", type: "challenge" },
  { question: "Demonstrate your best oral sex move on the nearest appropriate object.", type: "challenge" },
  { question: "Put on 'Pony' by Ginuwine, and pretend vacuum-clean seductively for the length of the song.", type: "challenge" },
  { question: "Give me a sensual foot massage. The hotter, the better.", type: "challenge" },
  { question: "Kiss your three favorite body parts of my body.", type: "challenge" },
  { question: "Put on a timer and act out as many sexual positions as you can with your clothes on.", type: "challenge" },
  { question: "Give me a detailed, charismatic cooking demonstration of 'How to Make Cereal.' The catch: You gotta do it nude.", type: "challenge" },
  { question: "Engage in foreplay with me for 1-2 minutes with one rule: You're allowed to kiss me anywhere but my mouth.", type: "challenge" },
  { question: "Give me a massage anywhere on my body for 1 min.", type: "challenge" },
  { question: "Do something to me right now that you've been fantasizing about.", type: "challenge" },
  { question: "Find something sweet to swipe across your lips and give me a passionate kiss.", type: "challenge" },
  { question: "Stimulate two parts of my body at once. Use your hands on one part and lips on another.", type: "challenge" },
  { question: "Using your mouth, make your way from my wrist to my ear. Take your time!", type: "challenge" },
  { question: "Hop in the shower with me and wash my body, making sure not to miss any hard spots.", type: "challenge" },
  { question: "You have ten seconds to excite me just by kissing. Hint: You're not limited to my lips.", type: "challenge" },
  { question: "Imitate my most flexible sex move.", type: "challenge" },
  { question: "Make out with me like we used to before we started having sex.", type: "challenge" },
  { question: "Pole dance with an imaginary pole for the length of an entire song of my choice.", type: "challenge" },
  { question: "Using your fingers, find a way to give me goosebumps right now.", type: "challenge" },
  { question: "For the next 60 seconds, touch yourself like you'd like to touch me.", type: "challenge" },
  { question: "Spell out a short, sexy message on my body with your tongue.", type: "challenge" },
  { question: "Initiate a roleplay scenario and make me guess what your character is.", type: "challenge" },
  { question: "I'm going to go into the other room and dab perfume or cologne somewhere on my body. You have to sniff everywhere until you figure out where I put it on.", type: "challenge" },
  { question: "Pop an ice cube in your mouth and go down on me for 15 seconds.", type: "challenge" },
  { question: "Give me a hickey in a private place.", type: "challenge" },
  { question: "Blindfold me and lick me anywhere on my body.", type: "challenge" },
  { question: "Dance seductevily to a sexy song.", type: "challenge" },
  { question: "Offer a massage to the person on your left.", type: "challenge" },
  { question: "Let the person on your right sniff your face.", type: "challenge" },
  { question: "Do whatever the person to the left of you says for 2 minutes.", type: "challenge" },
  { question: "Let the person to your right do a sexy naked photo shoot of you.", type: "challenge" },
  { question: "Show your most embarrassing dance moves.", type: "challenge" },
  { question: "Try out a sex position you have never tried before.", type: "challenge" },
  { question: "Roleplay a fantasy of your choice with another member of the group.", type: "challenge" },
  { question: "Lick the earlobes of all the players of the opposite sex.", type: "challenge" },
  { question: "Bite the tip of the tongue from the player in front of you.", type: "challenge" },
  { question: "The player on your right gets to touch your bum for 30 seconds.", type: "challenge" },
  { question: "Go to another room, take a sexy picture and send it to one of your co-players.", type: "challenge" },
  { question: "Take a body shot, you may choose the person.", type: "challenge" },
  { question: "Lick the tip of the tongue of the player in front of you.", type: "challenge" },
  { question: "French kiss the player sitting in front of you.", type: "challenge" },
  { question: "Kiss the player on your right on the mouth.", type: "challenge" },
  { question: "Give the player to you right a body-to-body massage (30 sec).", type: "challenge" },
  { question: "Take a pen and paper and draw your penis/vagina.", type: "challenge" },
  { question: "Massage the legs of the player on your left.", type: "challenge" },
  { question: "Sit on the lap of the player on your right for one round.", type: "challenge" },
  { question: "Suck a finger of the player in front of you (15sec.).", type: "challenge" },
  { question: "Talk in an accent for the next 3 rounds.", type: "challenge" },
  { question: "Attempt to break dance for 30 seconds.", type: "challenge" },
  { question: "Do the worm.", type: "challenge" },
  { question: "Dance to a song of the group's choosing.", type: "challenge" },
  { question: "Do your best impression of a baby being born.", type: "challenge" },
  { question: "Make every person in the group smile, keep going until everyone has cracked a smile.", type: "challenge" },
  { question: "Sell a piece trash to someone in the group. Use your best salesmanship.", type: "challenge" },
  { question: "Seduce a member of the same gender in the group.", type: "challenge" },
  { question: "Invent a new dance move and teach it to everyone.", type: "challenge" },
  { question: "Using a toy, pick a partner and perform a peep show for everyone else.", type: "challenge" },
  { question: "You are Simon....and Simon says...", type: "challenge" },
];

export default Questions;