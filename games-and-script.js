        const games = [
            { title: "Terraria", desc: "2D sandbox adventure with exploration, building, crafting, and combat in a procedurally generated world", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/148.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/271.jpg" },
            { title: "Celeste", desc: "Precision platformer about climbing a mountain while overcoming personal struggles and challenges", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/147.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/270.jpg" },
            { title: "Burrito Bison", desc: "Physics based launch game where you catapult a luchador through candy-filled worlds to rescue gummy bears", url: "https://noahsamazingtutoringhelp.github.io/cautious-rotary-phone/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/130.jpg" },
            { title: "Tanuki Sunset", desc: "Radical longboarding game with stylish tricks, smooth controls, and a killer sunset aesthetic", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/146.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/269.jpg" },
            { title: "SwordFight!!", desc: "A Cool 2bit sword fighting and also bow shooting 1 on 1 combat game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/145.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/268.jpg" },  
            { title: "Station Saturn", desc: "Space themed first person shooter where you just shoot the enemy robots", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/144.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/267.jpg" },
            { title: "Spelunky Classic HD", desc: "Roguelike cave exploration game with procedurally generated levels and treasure hunting", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/143.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/266.jpg" },
            { title: "Sonic.EXE", desc: "Horror-themed Sonic fangame based on the popular creepypasta with disturbing visuals and challenges", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/142.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/265.jpg" },  
            { title: "Minesweeper Plus", desc: "Enhanced version of the classic puzzle game with new modes, challenges, and visual themes", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/141.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/264.jpg" },
            { title: "Kitty Toy", desc: "Interactive cat toy simulation with various toys and playful feline behaviors", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/140.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/263.jpg" },
            { title: "Happy Wheels", desc: "Brutal physics-based obstacle course game with ragdoll characters and user-created levels", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/139.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/174.jpg" },
            { title: "Google Feud", desc: "Guess what people are searching for on Google in this fun and challenging word game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/138.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/262.jpg" },  
            { title: "Basketball Stars", desc: "Fast-paced basketball game with arcade-style controls and competitive multiplayer matches", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/137.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/261.jpg" },
            { title: "Daggerfall", desc: "Classic Elder Scrolls RPG with massive open world and deep character customization", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/136.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/252.jpg" },
            { title: "Portal", desc: "Mind-bending puzzle game with portal gun mechanics and dark humor", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/135.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/253.jpg" },
            { title: "Ice Dodo", desc: "3D obstacle course game with simple controls but complex challenging maps", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/134.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/254.jpg" },
            { title: "Doom", desc: "The original FPS that revolutionized gaming with fast-paced demon slaying action", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/133.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/255.jpg" },
            { title: "Doom 2", desc: "Sequel to the iconic FPS with new weapons, enemies, and hellish levels", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/257.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/257.jpg" },
            { title: "Call of Duty: World at War", desc: "Intense DS version of the WWII FPS", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/130.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/258.jpg" },
            { title: "Call of Duty 4: Modern Warfare", desc: "DS Version of the modern military shooter", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/129.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/259.jpg" },
            { title: "Kart Bros", desc: "Free online kart racing game with wild antics, power-ups, and multiplayer action", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/128.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/260.jpg" },
            { title: "Peggle", desc: "Addictive physics puzzle game where you shoot balls to clear orange pegs with satisfying challenges", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/127.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/251.jpg" },
            { title: "Ace Attorny", desc: "Courtroom drama adventure where you investigate crimes and defend clients with evidence and logic", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/126.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/250.jpg" },
            { title: "FNF Agoti", desc: "Friday Night Funkin' mod featuring the popular OC character Agoti with original tracks", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/125.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/249.jpg" },
            { title: "FNF Black Betrayal", desc: "FNF mod based on the Among Us mod with the black imposter going crazy", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/124.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/248.jpg" },
            { title: "FNF B-Side", desc: "FNF mod featuring remixed B-side versions of original tracks with new visuals", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/123.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/247.jpg" },
            { title: "FNF Camellia", desc: "Challenging FNF mod featuring high-BPM tracks from artist Camellia", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/122.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/246.jpg" },
            { title: "FNF Impostor V4", desc: "Among Us themed FNF mod with sus rhythms and impostor gameplay", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/121.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/245.jpg" },
            { title: "FNF Indie Cross", desc: "Crossover FNF mod featuring characters from popular indie games", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/120.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/244.jpg" },
            { title: "FNF Kapi", desc: "FNF mod featuring the arcade-loving cat character Kapi with arcade-style tracks", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/119.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/243.jpg" },
            { title: "FNF Mario Madness", desc: "Mario-themed FNF mod with madness-induced versions of classic characters", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/118.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/242.jpg" },
            { title: "FNF Pibby Apocalypse", desc: "FNF mod based on the Pibby corruption concept with glitch-themed horror", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/117.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/241.jpg" },
            { title: "FNF Shaggy X Matt", desc: "FNF crossover mod featuring Shaggy and Matt from Wii Sports in musical battles", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/116.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/240.jpg" },
            { title: "FNF Sonic.exe", desc: "Horror-themed FNF mod based on the Sonic.exe creepypasta with intense rhythms", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/115.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/239.jpg" },
            { title: "FNF Garcello", desc: "Emotional FNF mod featuring the character Garcello with soulful tracks", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/114.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/238.jpg" },
            { title: "FNF Hit Single", desc: "FNF mod with that blue singing guy that everyone likes", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/113.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/237.jpg" },
            { title: "Achillies 2", desc: "Sequel to the action-packed Achillies game with enhanced combat and story", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/112.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/236.jpg" },
            { title: "Russian Counter Strike", desc: "Counter-Strike inspired tactical shooter with Russian military themes", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/111.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/235.jpg" },
            { title: "Deltarune", desc: "RPG from Undertale creator featuring Kris and Susie in a dark world adventure", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/110.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/234.jpg" },
            { title: "Learn to Fly 3", desc: "Physics-based game where you help a penguin achieve flight through various methods", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/109.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/233.jpg" },
            { title: "Lego Batman 2", desc: "LEGO action-adventure featuring Batman and DC superheroes in Gotham City", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/108.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/232.jpg" },
            { title: "Lego Starwars Complete Saga", desc: "Complete LEGO Star Wars experience covering all six episodes with humor and action", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/107.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/231.jpg" },
            { title: "Madness Interactive", desc: "Fast-paced stick figure combat game with intense action and ragdoll physics", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/106.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/230.jpg" },
            { title: "Tony Hawks Pro Skater", desc: "Classic skateboarding game with trick combos, iconic skaters, and great soundtrack", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/105.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/229.jpg" },
            { title: "Postal", desc: "Controversial top-down shooter known for its dark humor and violent gameplay", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/104.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/228.jpg" },
            { title: "Resident Evil 3", desc: "Survival horror game featuring Jill Valentine escaping Nemesis in Raccoon City", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/103.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/227.jpg" },
            { title: "Scribblenauts", desc: "Puzzle game where you solve challenges by summoning objects you write", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/102.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/226.jpg" },
            { title: "Sprunki", desc: "Basically a copy of Incredibox but with little furry creatures", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/101.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/225.jpg" },
            { title: "Strange Rope Police", desc: "Physics-based game with rope mechanics and law enforcement themes", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/100.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/224.jpg" },
            { title: "Street Fighter III", desc: "Classic fighting game known for parry system and competitive gameplay", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/99.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/223.jpg" },
            { title: "Super Liquid Soccer", desc: "Arcade soccer game with fluid physics and exaggerated gameplay mechanics", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/98.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/222.jpg" },
            { title: "Tempoverdose", desc: "Rhythm game with intense tempo-based challenges and electronic music", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/97.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/221.jpg" },
            { title: "Abandoned", desc: "Escape room type game where you need to figure out how to get out of each", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/96.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/220.jpg" },
            {
                title: "Plants Vs Zombies 2",
                desc: "Defend your lawn with crazy plants against fun-loving zombies across time",
                url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/92.html",
                image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/197.jpg",
                popular: true
            },
            {
                title: "Hotline Miami",
                desc: "Fast-paced top-down action combat",
                url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/16.html",
                image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/22.jpg",
                popular: true
            },
            {
                title: "Balatro",
                desc: "Build insane poker hands with special Joker cards",
                url: "https://thirstygithub.github.io/cool-math/",
                image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/195.jpg",
                popular: true
            },
            { title: "Wolfenstein 3D", desc: "The pioneer FPS game where you battle Nazis as Allied spy B.J. Blazkowicz", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/95.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/219.jpg" },
            { title: "Zombotron Reboot", desc: "Action-packed platform shooter with physics-based combat in zombie-infested world", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/94.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/218.jpg" },
            { title: "Mortal Kombat 4", desc: "Classic fighting game with brutal fatalities and iconic characters in fourth installment", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/93.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/fuckthis.jpg" },
            { title: "Undertale", desc: "An RPG where you play as a human child who falls into an underground world of monsters, with the goal of getting back to the surface", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/91.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/217.jpg" },
            { title: "The Legend of Zelda Majora's Mask", desc: "A dark adventure through a doomed world where you have only 3 days to prevent the moon from crashing", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/90.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/216.jpg" },
            { title: "Cooking Mama 3", desc: "Cook delicious meals with Mama's guidance in this interactive culinary adventure", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/89.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/215.jpg" },
            { title: "Cooking Mama 2", desc: "Continue your cooking journey with new recipes and kitchen challenges", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/88.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/214.jpg" },
            { title: "Cooking Mama", desc: "Learn to cook various dishes with step-by-step instructions from Mama", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/87.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/213.jpg" },
            { title: "BloodMoney", desc: "A gritty crime thriller about the consequences of choices in the criminal underworld", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/86.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/212.jpg" },
            { title: "Big Shot Boxing", desc: "Rise through the ranks in this intense boxing simulation and become the champion", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/85.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/211.jpg" },
            { title: "Assessment Examination", desc: "A comprehensive test covering multiple subjects to evaluate academic progress and knowledge retention", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/84.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/210.jpg" },
            { title: "Schoolboy Runaway", desc: "A somewhat horror game where you control a schoolboy trying to escape his troubled home life", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/83.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/209.jpg" },
            { title: "Fears To Fathom: Home Alone", desc: "A horror game where you are home alone and must survive a stalker's terrifying visits", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/82.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/208.jpg" },
            { title: "Dan The Man", desc: "A side-scrolling beat 'em up where you fight through hordes of enemies to save your friends", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/81.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/207.jpg" },
            { title: "Resident Evil 2", desc: "Survival horror game where you fight zombies in a doomed police station", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/80.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/205.jpg" },
            { title: "Get Yoked", desc: "A fitness simulator where you lift weights and manage your gym", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/79.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/204.jpg" },
            { title: "Douche Bag Life", desc: "A satirical life simulator where you make terrible choices to become the ultimate bro", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/78.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/203.jpg" },
            { title: "Donkey Kong", desc: "Classic arcade game where Jumpman must rescue his girlfriend from a giant ape", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/77.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/202.jpg" },
            { title: "Apple Worm", desc: "A retro arcade game where you guide a worm to eat apples and grow longer", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/75.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/201.jpg" },
            { title: "Chess", desc: "A classic strategy game where two kings battle to the death", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/74.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/200.jpg" },
            { title: "Doki Doki Literature Club", desc: "A cute dating simulator where you write poems for your crush, but something is terribly wrong", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/73.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/199.jpg" },
            { title: "Getting Over It", desc: "A frustrating climbing game where you use a hammer to scale a mountain of junk", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/72.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/198.jpg" },
            { title: "Toca-Boca-World", desc: "A digital toy box where you create your own stories and worlds.", url: "https://ud-gles3games.shared-osj.k8s.n2i.io/?deeplinksURI=null%3A%2F%2F&deeplinksApp=com.tocaboca.tocalifeworld&quotaBytes=89000000&naturalOrientation=portrait&invertNaturalOrientation&forcedNaturalOrientation&jitterBufferMin=0&deeplinksService=true&backOnDisconnected=true&disconnectedMessage=null&api=%7B%22back%22%3Afalse%7D&title=Toca+Boca+World", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/206.jpg" },
            { title: "Tattletail", desc: "Feed and care for a creepy, talking toy that wanders your house at night", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/71.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/196.jpg" },
            { title: "Sonic the Hedgehog 3", desc: "Classic platformer with Sonic and Tails vs Dr. Robotnik", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/69.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/189.jpg" },
            { title: "Sonic the Hedgehog 2", desc: "Iconic sequel introducing Tails and spin dash move", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/68.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/190.jpg" },
            { title: "Sonic Mania", desc: "Modern 2D Sonic with remixed classics and new zones", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/67.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/191.jpg" },
            { title: "Sonic CD", desc: "Time-travel adventure with past and future versions", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/66.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/192.jpg" },
            { title: "War The Knights", desc: "Medieval knight battles and castle sieges", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/70.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/193.jpg" },
            { title: "Football Bros", desc: "Arcade football with simple controls and power-ups", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/65.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/194.jpg" },
            { title: "Buckshot Roulette", desc: "Russian Roulette type game with a TWIST", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/63.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/187.jpg" },
            { title: "Cup Head", desc: "Fight a series of monsters to break your deal with the devil", url: "https://noahsamazingtutoringhelp.github.io/Algebrudda-Calculator/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/188.jpg" },
            { title: "Slime Rancher", desc: "Suck and collect slimes and raise them in a ranch", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/64.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/186.jpg" },
            { title: "FNAF: Pizza Sim", desc: "Manage your own pizzeria while surviving animatronic horrors", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/1.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/1.jpg" },
            { title: "Baseball Bros", desc: "Engage in exciting baseball matches with strategic gameplay", url: "https://noahsamazingtutoringhelp.github.io/fantastic-octo-journey/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/2.jpg" },
            { title: "A Dance of Fire and Ice", desc: "Rhythm game requiring perfect timing between two spheres", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/3.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/3.jpg" },
            { title: "Smashy Kart", desc: "High-speed kart racing with demolition derby elements", url: "https://noahsamazingtutoringhelp.github.io/upgraded-goggles/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/4.jpg" },
            { title: "Golf Orbit", desc: "Miniature golf in space with gravity mechanics", url: "https://noahsamazingtutoringhelp.github.io/studious-journey/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/5.jpg" },
            { title: "3D Free Kick", desc: "Soccer free kick simulator with realistic physics", url: "https://noahsamazingtutoringhelp.github.io/expert-pancake/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/6.jpg" },
            { title: "Retro Bowl College", desc: "College football management simulation", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/4.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/7.jpg" },
            { title: "Deepest Sword", desc: "Adventure game about retrieving the deepest sword", url: "https://noahsamazingtutoringhelp.github.io/legendary-octo-train/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/8.jpg" },
            { title: "Tomodachi Life", desc: "Life simulation with quirky island characters", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/5.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/9.jpg" },
            { title: "FNAF: Sister Location", desc: "Survival horror in a high-tech facility", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/6.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/10.jpg" },
            { title: "Fallout", desc: "Post-apocalyptic RPG exploring wastelands", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/7.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/11.jpg" },
            { title: "Rocket League", desc: "Soccer with rocket-powered cars", url: "https://noahsamazingtutoringhelp.github.io/potential-meme/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/12.jpg" },
            { title: "Street Fighter II", desc: "Classic fighting game with special moves", url: "https://noahsamazingtutoringhelp.github.io/scaling-goggles/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/13.jpg" },
            { title: "Super Star Car", desc: "Racing with customizable super cars", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/8.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/14.jpg" },
            { title: "Steal a Brainrot Online", desc: "Multiplayer game about strategic theft", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/9.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/15.jpg" },
            { title: "Bad Piggies", desc: "Physics puzzles building pig contraptions", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/10.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/16.jpg" },
            { title: "Among Us (real)", desc: "Social deduction identifying impostors", url: "https://ud-gles3games.shared-osj.k8s.n2i.io/?deeplinksURI=null%3A%2F%2F&deeplinksApp=com.innersloth.spacemafia&naturalOrientation=landscape&forcedNaturalOrientation&autofitOnConnect&jitterBufferMin=0&deeplinksService=true&backOnDisconnected=true&disconnectedMessage=null&api=%7B%22back%22%3Afalse%7D&title=Among+Us", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/17.jpg" },
            { title: "Yandere Simulator", desc: "Stealth game eliminating rivals", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/12.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/18.jpg" },
            { title: "Twerk Race 3D", desc: "I dont even want to describe this game...", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/13.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/19.jpg" },
            { title: "Quake III", desc: "Classic arena shooter with fast combat", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/14.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/20.jpg" },
            { title: "10 Minutes Till Dawn", desc: "Intense bullet hell survival game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/15.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/21.jpg" },
            { title: "Nubby's Number Factory", desc: "Mathematical puzzle challenges", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/17.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/23.jpg" },
            { title: "Generic Fighter Maybe", desc: "Combat with fighting styles", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/18.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/24.jpg" },
            { title: "Death Run 3D", desc: "Treacherous obstacle course navigation", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/19.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/25.jpg" },
            { title: "Clash Royale", desc: "Strategic card-based battles", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/21.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/26.jpg" },
            { title: "PaRappa The Rapper", desc: "Rhythm-based music game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/22.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/27.jpg" },
            { title: "Hollow Knight", desc: "Metroidvania in underground kingdom", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/23.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/28.jpg" },
            { title: "Binding of Issac WOTL", desc: "Rogue-like dungeon crawler", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/24.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/29.jpg" },
            { title: "Blade Ball", desc: "Fast-paced ball throwing game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/25.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/30.jpg" },
            { title: "Ages of Conflict", desc: "Historical strategy warfare game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/26.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/31.jpg" },
            { title: "Triva Crack", desc: "Addictive trivia knowledge challenge", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/27.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/32.jpg" },
            { title: "Bow Masters", desc: "Precision archery physics game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/28.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/33.jpg" },
            { title: "Angry Birds", desc: "Classic physics puzzle destruction", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/29.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/34.jpg" },
            { title: "FNAF: World", desc: "RPG with FNAF characters", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/30.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/36.jpg" },
            { title: "Solar Smash", desc: "Planet destruction simulator", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/31.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/37.jpg" },
            { title: "Idle Mining Empire", desc: "Addictive mining clicker game", url: "https://noahsamazingtutoringhelp.github.io/sjsDjsaokdjsa/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/37.jpg" },
            { title: "Highway Racers 2", desc: "High-speed racing action", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/32.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/38.jpg" },
            { title: "Bounce Masters", desc: "Physics bouncing challenges", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/33.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/39.jpg" },
            { title: "R.E.P.O", desc: "Stealth vehicle repossession", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/34.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/40.jpg" },
            { title: "Raft", desc: "Ocean survival building floating home", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/35.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/41.jpg" },
            { title: "Side Effects", desc: "Puzzle cause and effect relationships", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/36.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/42.jpg" },
            { title: "Slender", desc: "Horror survival exploration game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/37.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/43.jpg" },
            { title: "Line Rider", desc: "Creative physics track drawing", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/38.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/44.jpg" },
            { title: "Kindergarten 3", desc: "Dark humor school adventure", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/39.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/45.jpg" },
            { title: "Kindergarten 2", desc: "Strange school comedy sequel", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/40.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/46.jpg" },
            { title: "Kindergarten", desc: "Strange school comedy sequel", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/41.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/47.jpg" },
            { title: "Granny 3", desc: "Horror escape with new challenges", url: "https://noahsamazingtutoringhelp.github.io/ideal-parakeet/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/48.jpg" },
            { title: "Granny 2", desc: "Sequel horror escape game", url: "https://noahsamazingtutoringhelp.github.io/Granny1/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/49.jpg" },
            { title: "Granny", desc: "Classic horror escape game", url: "https://noahsamazingtutoringhelp.github.io/symmetrical-meme/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/50.jpg" },
            { title: "Bad Parenting", desc: "Dark comedy parenting simulation", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/42.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/51.jpg" },
            { title: "Baldis Basics", desc: "Survival horror educational parody", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/43.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/52.jpg" },
            { title: "Bendy and the Ink Machine", desc: "Horror adventure in animation studio", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/44.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/53.jpg" },
            { title: "Candy Crush", desc: "Addictive match-3 puzzle game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/45.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/54.jpg" },
            { title: "Geometry Dash", desc: "Rhythm-based platformer challenges", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/46.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/55.jpg" },
            { title: "That's Not My Neighbor", desc: "Doorman identity verification game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/47.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/56.jpg" },
            { title: "ULTRAKILL", desc: "Fast-paced retro-style shooter", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/48.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/57.jpg" },
            { title: "WebFishing", desc: "Relaxing fishing simulation game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/49.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/58.jpg" },
            { title: "Super Falling Fred", desc: "Endless falling obstacle avoidance", url: "https://noahsamazingtutoringhelp.github.io/ASDOKAS/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/59.jpg" },
            { title: "Timberman", desc: "Fast-paced tree chopping game", url: "https://noahsamazingtutoringhelp.github.io/saJKLDPAW/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/60.jpg" },
            { title: "Stupid Zombies 2", desc: "Physics zombie shooting puzzles", url: "https://noahsamazingtutoringhelp.github.io/ASJDIPAJ/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/61.jpg" },
            { title: "Pokemon Emerald", desc: "Classic Pokemon RPG adventure", url: "https://noahsamazingtutoringhelp.github.io/ASLDO-PWA-/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/62.jpg" },
            { title: "Impossible Quiz 2", desc: "Tricky brain-teasing questions", url: "https://xoriushourz.github.io/ImpossibleQuiz2/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/63.jpg" },
            { title: "Super Smash Flash 2", desc: "Platform fighting game", url: "https://script.google.com/macros/s/AKfycbwSChHrprN7EV_1tBZU8Mi2KGB4uJX4PQOEf7xpPfo_iCvuojtCu7s0Mp8oRZJRPzZ7Og/exec", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/64.jpg" },
            { title: "Idle Breakout", desc: "Addictive brick breaking idle game", url: "https://noahsamazingtutoringhelp.github.io/SKAODLMWASD/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/65.jpg" },
            { title: "Gun Mayhem 2", desc: "Chaotic platform shooter battles", url: "https://noahsamazingtutoringhelp.github.io/AKSPDL-MA-/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/66.jpg" },
            { title: "Gun Mayhem", desc: "Original chaotic platform shooter", url: "https://noahsamazingtutoringhelp.github.io/SAKDOWPA/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/67.jpg" },
            { title: "Big Tower Tiny Square", desc: "Precision platforming challenges", url: "https://noahsamazingtutoringhelp.github.io/odkoasdmlwa/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/68.jpg" },
            { title: "Big Tower Tiny Square 2", desc: "Sequel precision platformer", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/50.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/69.jpg" },
            { title: "Unicycle Hero", desc: "Balancing unicycle stunt game", url: "https://noahsamazingtutoringhelp.github.io/sdajoiASODhsa/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/70.jpg" },
            { title: "Murder", desc: "Mystery deduction social game", url: "https://noahsamazingtutoringhelp.github.io/hjhjbjbjkbnlkhb/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/71.jpg" },
            { title: "Pokemon Firered", desc: "Classic Pokemon adventure remake", url: "https://noahsamazingtutoringhelp.github.io/BIGBLACKNEGABALLS/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/72.jpg" },
            { title: "Stake Mines", desc: "Cryptocurrency mining strategy", url: "https://noahsamazingtutoringhelp.github.io/ILOVEGAMBLING/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/73.jpg" },
            { title: "Blumgi Slime", desc: "Physics-based slime platformer", url: "https://noahsamazingtutoringhelp.github.io/BlumgiSlime/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/74.jpg" },
            { title: "Raft Wars 2", desc: "Strategic water balloon battles", url: "https://noahsamazingtutoringhelp.github.io/raft-wars-2/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/75.jpg" },
            { title: "Earn to Die", desc: "Zombie apocalypse vehicle escape", url: "https://noahsamazingtutoringhelp.github.io/EarnToDie/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/76.jpg" },
            { title: "8Ball Pool", desc: "Realistic pool physics game", url: "https://noahsamazingtutoringhelp.github.io/Lindy-Leighton-Reis/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/79.jpg" },
            { title: "President Simulator", desc: "Political decision-making game", url: "https://noahsamazingtutoringhelp.github.io/PresidentSimulator/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/80.jpg" },
            { title: "Escape Road", desc: "Puzzle road navigation game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/51.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/81.jpg" },
            { title: "OvO", desc: "Minimalist platformer challenges", url: "https://noahsamazingtutoringhelp.github.io/Uduak-Pitsiulaaq-Pusk-s/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/82.jpg" },
            { title: "Moving Truck", desc: "Physics-based truck loading", url: "https://noahsamazingtutoringhelp.github.io/Sophea-Vanja-Andrei/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/83.jpg" },
            { title: "Fruit Ninja", desc: "Slice flying fruit with precision", url: "https://noahsamazingtutoringhelp.github.io/Wanangwa-Shaked-Aikawa/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/84.jpg" },
            { title: "Ball Sort Puzzle", desc: "Color sorting puzzle challenge", url: "https://noahsamazingtutoringhelp.github.io/Dada-Ahmose-Acardi/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/85.jpg" },
            { title: "They're Coming", desc: "Horror survival defense game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/52.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/86.jpg" },
            { title: "Flappy Bird", desc: "Addictive timing-based flying", url: "https://noahsamazingtutoringhelp.github.io/Qinnuajuaq-Jindra-Rosenfeld/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/87.jpg" },
            { title: "Recoil", desc: "Physics-based shooting game", url: "https://godlover89.github.io/Santana-Yannick-Pinto/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/88.jpg" },
            { title: "Twitch Tetris", desc: "Classic block stacking puzzle", url: "https://godlover89.github.io/Twitch-Tetris/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/89.jpg" },
            { title: "Ultimate Car Driving Game", desc: "Realistic driving simulation", url: "https://noahsamazingtutoringhelp.github.io/Jimmie-Phuntso-Cuoco/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/90.jpg" },
            { title: "Crazy Cattle 3D", desc: "Funny cattle herding game", url: "https://noahsamazingtutoringhelp.github.io/Ashton-Aston-Rowe/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/91.jpg" },
            { title: "Run 3", desc: "Space tunnel running game", url: "https://lekug.github.io/tn6pS9dCf37xAhkJv/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/92.jpg" },
            { title: "Vex 8", desc: "Challenging obstacle course platformer", url: "https://noahsamazingtutoringhelp.github.io/Abioye-Temitope-Quaranta/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/93.jpg" },
            { title: "Apple Shooter", desc: "Precision apple shooting game", url: "https://noahsamazingtutoringhelp.github.io/imbouttokum/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/94.jpg" },
            { title: "Running Fred", desc: "Endless running obstacle course", url: "https://noahsamazingtutoringhelp.github.io/Akpofure-Thato-Dickens/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/95.jpg" },
            { title: "Hextrix", desc: "Hexagon-based puzzle game", url: "https://noahsamazingtutoringhelp.github.io/Li-Min-Kron/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/96.jpg" },
            { title: "Jelly Truck", desc: "Physics-based truck driving", url: "https://noahsamazingtutoringhelp.github.io/Vanna-Adisa-Allison/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/97.jpg" },
            { title: "Rooftop Snipers 2", desc: "2D shooter duel game", url: "https://noahsamazingtutoringhelp.github.io/Leofd-g-Lior-Maekawa/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/98.jpg" },
            { title: "Color Switch", desc: "Color-matching obstacle game", url: "https://noahsamazingtutoringhelp.github.io/Lee-Kam-Lane/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/99.jpg" },
            { title: "Hole.io", desc: "Black hole consuming game", url: "https://noahsamazingtutoringhelp.github.io/Mahpiya-D-lg-n-Coiro/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/100.jpg" },
            { title: "Color Tunnel 2", desc: "3D color tunnel runner", url: "https://noahsamazingtutoringhelp.github.io/Avital-Passang-Hubert/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/101.jpg" },
            { title: "Wrassling", desc: "Comical wrestling game", url: "https://noahsamazingtutoringhelp.github.io/Micajah-Sky-Pell-/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/102.jpg" },
            { title: "Brain Test", desc: "Tricky puzzle brain teasers", url: "https://noahsamazingtutoringhelp.github.io/EASMEL/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/103.jpg" },
            { title: "Hillclimb Racing", desc: "Physics-based hill climbing", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/53.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/104.jpg" },
            { title: "Level Devil", desc: "Challenging platformer levels", url: "https://noahsamazingtutoringhelp.github.io/ChemistryHomeworkHero/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/105.jpg" },
            { title: "Temple Run 2", desc: "Endless running adventure", url: "https://noahsamazingtutoringhelp.github.io/MarketingStudyMate/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/106.jpg" },
            { title: "Boxing Physics 2", desc: "Physics-based boxing game", url: "https://dddavit.github.io/igra-fizika-boxa-2/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/107.jpg" },
            { title: "Street Ball Jam", desc: "Urban basketball game", url: "", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/108.jpg" },
            { title: "Super Mario 64", desc: "Classic 3D platformer adventure", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/54.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/109.jpg" },
            { title: "Fruit Merge", desc: "Merge fruit puzzle game", url: "https://llerrah.com/https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/fruitmerge/index.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/110.jpg" },
            { title: "Wheelie Bike 2", desc: "Motorcycle stunt game", url: "https://noahsamazingtutoringhelp.github.io/AccountingTutorPro/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/111.jpg" },
            { title: "Park Out", desc: "Challenging parking puzzle", url: "https://noahsamazingtutoringhelp.github.io/ArchitectureTutoringPro/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/112.jpg" },
            { title: "Bloxorz", desc: "Block rolling puzzle game", url: "https://noahsamazingtutoringhelp.github.io/LawHomeworkHub/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/113.jpg" },
            { title: "Save The Doge", desc: "Rescue puzzle challenges", url: "https://noahsamazingtutoringhelp.github.io/MedicalSchoolHelper/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/114.jpg" },
            { title: "Worlds Hardest Game", desc: "Extremely challenging puzzles", url: "https://noahsamazingtutoringhelp.github.io/FinanceHomeworkHelp/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/115.jpg" },
            { title: "Idle Digging Tycoon", desc: "Mining empire building", url: "https://noahsamazingtutoringhelp.github.io/wonderoveryonder/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/116.jpg" },
            { title: "Impossible Quiz", desc: "Tricky question challenges", url: "https://noahsamazingtutoringhelp.github.io/lemmegetuhhhh/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/117.jpg" },
            { title: "Stickman Hook", desc: "Swinging physics game", url: "https://noahsamazingtutoringhelp.github.io/smallasianman/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/118.jpg" },
            { title: "Rio Rex", desc: "Dinosaur platformer adventure", url: "https://noahsamazingtutoringhelp.github.io/bustherdooniesdown/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/119.jpg" },
            { title: "Idle Tree City", desc: "Tree-growing idle game", url: "https://noahsamazingtutoringhelp.github.io/idle-tree-city/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/120.jpg" },
            { title: "Snake MLG", desc: "Classic snake with memes", url: "https://noahsamazingtutoringhelp.github.io/cansomeonegrabbomb/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/121.jpg" },
            { title: "Stacktris", desc: "Tetris-inspired stacking game", url: "https://noahsamazingtutoringhelp.github.io/mommahuevo/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/123.jpg" },
            { title: "Stickman Ragdoll Crash", desc: "Physics ragdoll crashes", url: "https://noahsamazingtutoringhelp.github.io/whatsafather/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/124.jpg" },
            { title: "Plinko", desc: "Classic probability ball drop", url: "https://noahsamazingtutoringhelp.github.io/bug-free-pancake/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/125.jpg" },
            { title: "Gambling Table Games", desc: "Various casino games", url: "https://noahsamazingtutoringhelp.github.io/poker/?&balance=null&theme=slate", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/126.jpg" },
            { title: "Blocky Snakes", desc: "Block-based snake game", url: "https://noahsamazingtutoringhelp.github.io/AnatomyStudyAid/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/127.jpg" },
            { title: "Crossy Road", desc: "Endless road crossing", url: "https://noahsamazingtutoringhelp.github.io/EconomicsExamExpert/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/128.jpg" },
            { title: "Happy Room", desc: "Weapons testing sandbox", url: "https://noahsamazingtutoringhelp.github.io/OrganicChemHelper/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/129.jpg" },
            { title: "Zombocalypse", desc: "Zombie survival shooter", url: "https://noahsamazingtutoringhelp.github.io/GermanGrammarGuide/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/131.jpg" },
            { title: "Pou", desc: "Virtual pet care game", url: "https://noahsamazingtutoringhelp.github.io/FrenchTutoringPro/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/133.jpg" },
            { title: "Backrooms", desc: "Liminal space exploration", url: "https://noahsamazingtutoringhelp.github.io/SpanishStudySupport/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/134.jpg" },
            { title: "Getaway Shootout", desc: "Chaotic platform shooter", url: "https://noahsamazingtutoringhelp.github.io/GeographyGuruOnline/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/135.jpg" },
            { title: "Snow Rider 3D", desc: "Snowboarding trick game", url: "https://noahsamazingtutoringhelp.github.io/GeometryGeniusHelp/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/136.jpg" },
            { title: "Gladihoppers", desc: "Physics gladiator battles", url: "https://noahsamazingtutoringhelp.github.io/BiologyHomeworkHero/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/137.jpg" },
            { title: "Paper.io 2", desc: "Territory conquest game", url: "https://noahsamazingtutoringhelp.github.io/CodingHomeworkHelp/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/138.jpg" },
            { title: "Poly Track", desc: "Geometric racing game", url: "https://noahsamazingtutoringhelp.github.io/LiteratureLearningLab/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/139.jpg" },
            { title: "Club Penguin", desc: "Virtual world social game", url: "https://play.cplegacy.com/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/140.jpg" },
            { title: "Sausage Flip", desc: "Physics sausage flipping", url: "https://noahsamazingtutoringhelp.github.io/GeekSquad/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/141.jpg" },
            { title: "Ragdoll Hit", desc: "Ragdoll physics combat", url: "https://noahsamazingtutoringhelp.github.io/PhysicsProblemPro/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/142.jpg" },
            { title: "Gun Spin", desc: "Weapon spinning challenge", url: "https://noahsamazingtutoringhelp.github.io/CalculusCoachHub/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/143.jpg" },
            { title: "Thorns and Balloons", desc: "Balloon popping game", url: "https://noahsamazingtutoringhelp.github.io/ScienceStudyBuddy/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/144.jpg" },
            { title: "Subway Surfers", desc: "Endless running adventure", url: "https://noahsamazingtutoringhelp.github.io/GeologyAssignments/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/145.jpg" },
            { title: "Block Blast", desc: "Block matching puzzle", url: "https://noahsamazingtutoringhelp.github.io/MathMasteryOnline/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/146.jpg" },
            { title: "Stack Bounce", desc: "Ball bouncing challenge", url: "https://noahsamazingtutoringhelp.github.io/ScienceHelping/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/147.jpg" },
            { title: "Plants Vs Zombies", desc: "Tower defense strategy", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/56.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/148.jpg" },
            { title: "Drive Mad", desc: "Crazy driving challenges", url: "https://noahsamazingtutoringhelp.github.io/EnglishHomeworkHelper/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/149.jpg" },
            { title: "Drift Boss", desc: "Precision drifting game", url: "https://noahsamazingtutoringhelp.github.io/CellTheory/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/150.jpg" },
            { title: "Friday Night Funkin", desc: "Rhythm music battles", url: "https://noahsamazingtutoringhelp.github.io/2/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/151.jpg" },
            { title: "COD Nazi Zombies Portable", desc: "Zombie survival shooter", url: "https://noahsamazingtutoringhelp.github.io/HistoryNatureVideos/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/152.jpg" },
            { title: "Adventure Capitalist", desc: "Business idle clicker", url: "https://noahsamazingtutoringhelp.github.io/SmartMoneyStudying/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/153.jpg" },
            { title: "1v1.lol", desc: "Building and shooting battles", url: "https://noahsamazingtutoringhelp.github.io/VegetableVerbs/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/154.jpg" },
            { title: "Ragdoll Archers", desc: "Physics archery combat", url: "https://noahsamazingtutoringhelp.github.io/FilmCameraSale/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/155.jpg" },
            { title: "Dante", desc: "Action platformer adventure", url: "https://noahsamazingtutoringhelp.github.io/VegetarianBurger/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/156.jpg" },
            { title: "Minecraft", desc: "Block building survival", url: "https://noahsamazingtutoringhelp.github.io/ChemistyStudies/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/157.jpg" },
            { title: "Retro Bowl", desc: "Football management game", url: "https://noahsamazingtutoringhelp.github.io/MathLover/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/158.jpg" },
            { title: "Half Life", desc: "Sci-fi FPS adventure", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/57.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/159.jpg" },
            { title: "Jetpack Joyride", desc: "Endless flying adventure", url: "https://noahsamazingtutoringhelp.github.io/saldw/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/160.jpg" },
            { title: "Bloons TD 4", desc: "Tower defense strategy", url: "https://spew45.github.io/game-assets/btd4/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/161.jpg" },
            { title: "Sand Game", desc: "Physics sand simulation", url: "https://noahsamazingtutoringhelp.github.io/AlgebraTutoring/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/162.jpg" },
            { title: "Stack Bump", desc: "Stacking puzzle game", url: "https://noahsamazingtutoringhelp.github.io/ChemistyNotes/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/163.jpg" },
            { title: "FNAF", desc: "Original horror survival", url: "https://noahsamazingtutoringhelp.github.io/PsychologyStudyAid/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/164.jpg" },
            { title: "FNAF 2", desc: "Sequel horror survival", url: "https://noahsamazingtutoringhelp.github.io/UDAGOASequel horror survival/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/165.jpg" },
            { title: "FNAF 3", desc: "Third installment horror", url: "https://noahsamazingtutoringhelp.github.io/bug-free-memory/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/166.jpg" },
            { title: "FNAF 4", desc: "Nightmare horror survival", url: "https://noahsamazingtutoringhelp.github.io/crispy-telegram/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/167.jpg" },
            { title: "Madalin Stunt Cars 3", desc: "Car stunt driving", url: "https://noahsamazingtutoringhelp.github.io/BuisnessAssistance/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/168.jpg" },
            { title: "Tiny Fishing", desc: "Relaxing fishing game", url: "https://noahsamazingtutoringhelp.github.io/GeometryWebAssistance/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/169.jpg" },
            { title: "Chrome Dino", desc: "Endless running dinosaur", url: "https://noahsamazingtutoringhelp.github.io/OnlineHistoryHelper/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/170.jpg" },
            { title: "Dodge Ball", desc: "Dodgeball game I made (pretty fun)", url: "https://noahsamazingtutoringhelp.github.io/dskadlwasdmw-a/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/171.jpg" },
            { title: "Age of War 2", desc: "Evolution strategy game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/58.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/172.jpg" },
            { title: "Pandemic 2", desc: "Virus spread simulation", url: "https://noahsamazingtutoringhelp.github.io/SocialAssistance/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/173.jpg" },
            { title: "Happy Wheels", desc: "Physics obstacle course", url: "https://noahsamazingtutoringhelp.github.io/SocialStudies/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/174.jpg" },
            { title: "Slope", desc: "3D ball rolling game", url: "https://noahsamazingtutoringhelp.github.io/Chikondi-Josey-Spitznageasd/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/175.jpg" },
            { title: "Sprinter", desc: "Track running simulation", url: "https://noahsamazingtutoringhelp.github.io/sprinter/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/176.jpg" },
            { title: "Cookie Clicker", desc: "Addictive clicking game", url: "https://noahsamazingtutoringhelp.github.io/AKSDOAW/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/177.jpg" },
            { title: "Bitlife", desc: "Life simulation game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/60.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/178.jpg" },
            { title: "Drift Hunters", desc: "Realistic drifting simulation", url: "https://webglmath.github.io/drift-hunters/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/179.jpg" },
            { title: "Cut The Rope", desc: "Physics puzzle game", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/61.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/180.jpg" },
            { title: "Sort The Court", desc: "Kingdom management game", url: "https://noahsamazingtutoringhelp.github.io/skdpiwjamoksld/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/181.jpg" },
            { title: "Tomb of the Mask", desc: "Arcade maze game", url: "https://noahsamazingtutoringhelp.github.io/kdwajdskpwmasd/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/182.jpg" },
            { title: "Wordle", desc: "Word guessing puzzle", url: "https://bosorioo.github.io/wordle-unlimited/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/183.jpg" },
            { title: "Monkey Mart", desc: "Store management tycoon", url: "https://noahsamazingtutoringhelp.github.io/AmazingAlgebraHelper/", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/184.jpg" },
            { title: "Short Ride", desc: "Quick racing challenges", url: "https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/62.html", image: "https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/images/185.jpg" }
        ];
        
        function generateGameCards() {
            const popularContainer = document.getElementById('popularLessonsGrid');
            const allContainer = document.getElementById('allLessonsGrid');
            
            popularContainer.innerHTML = '';
            allContainer.innerHTML = '';
            
            const popularGames = games.filter(game => game.popular);
            popularGames.forEach(game => {
                const gameCard = createGameCard(game);
                popularContainer.appendChild(gameCard);
            });
            
            games.forEach(game => {
                const gameCard = createGameCard(game);
                allContainer.appendChild(gameCard);
            });
            
            updateSearchStats();
            
            initCursorHover();
        }
        
        function createGameCard(game) {
            const card = document.createElement('div');
            card.className = 'lesson-card';
            
            const launchCommand = game.title.toUpperCase()
                .replace(/[^A-Z0-9]/g, '_')
                .replace(/_+/g, '_')
                .replace(/^_|_$/g, '');
            
            card.innerHTML = `
                <img src="${game.image}" alt="${game.title}" class="lesson-image">
                <h3 class="lesson-title">${game.title}</h3>
                <p class="lesson-desc">${game.desc}</p>
                <span class="launch-command">[LAUNCH: ${launchCommand}]</span>
            `;
            
            card.onclick = function() {
                openLesson(game.title, game.url);
            };
            
            return card;
        }
        
        function updateSearchStats() {
            const cards = document.querySelectorAll('#allLessonsGrid .lesson-card');
            document.getElementById('searchStats').textContent = `Showing ${cards.length} of ${cards.length} lessons`;
        }
        
        function initCursorHover() {
            const interactive = document.querySelectorAll('.lesson-card');
            const cursor = document.getElementById('custom-cursor');
            
            if (!cursor) return;
            
            interactive.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });
        }
        
        window.pageLoadTime=Date.now();
        const canvas=document.getElementById('matrix-bg'),ctx=canvas.getContext('2d');
        canvas.width=window.innerWidth;canvas.height=window.innerHeight;
        const chars='01',charArray=chars.split(''),fontSize=14,columns=canvas.width/fontSize,drops=[];
        for(let x=0;x<columns;x++)drops[x]=1;
        function drawMatrix(){
            ctx.fillStyle='rgba(10,10,10,0.04)';ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle=window.matrixColor||'#c27c15';ctx.font=fontSize+'px monospace';
            for(let i=0;i<drops.length;i++){
                const text=charArray[Math.floor(Math.random()*charArray.length)];
                ctx.fillText(text,i*fontSize,drops[i]*fontSize);
                if(drops[i]*fontSize>canvas.height&&Math.random()>.975)drops[i]=0;
                drops[i]++;
            }
        }
        setInterval(drawMatrix,35);
        window.addEventListener('resize',()=>{
            canvas.width=window.innerWidth;canvas.height=window.innerHeight;
        });
        
        function trackEvent(c,a,l,v){if(typeof gtag!=='undefined')gtag('event',a,{'event_category':c,'event_label':l,'value':v})}
        if(typeof gtag!=='undefined')gtag('event','page_view',{'page_title':document.title,'page_location':window.location.href,'page_path':window.location.pathname});
        
        function openLesson(t,u){
            trackEvent('game_interaction','game_launch',t,1);
            const timeOnSite=Math.round((Date.now()-window.pageLoadTime)/1000);
            if(typeof gtag!=='undefined')gtag('event','timing_complete',{'name':'time_to_first_game','value':timeOnSite,'event_category':'engagement'});
            document.getElementById('gameTitle').textContent=t;
            document.getElementById('gameFrame').src=u;
            document.getElementById('gamePage').classList.add('active');
            document.getElementById('main-container').classList.add('slide-down');
        }
        function closeLesson(){
            trackEvent('game_interaction','game_exit',document.getElementById('gameTitle').textContent,1);
            document.getElementById('gamePage').classList.add('slide-down');
            document.getElementById('main-container').classList.remove('slide-down');
            setTimeout(()=>{
                document.getElementById('gamePage').classList.remove('active','slide-down');
                document.getElementById('gameFrame').src='';
                document.getElementById('gameFrame').classList.remove('fullscreen');
            },500);
        }
        async function initiateDownload(g,t){
            try{
                const m=g.match(/games\/(\d+)\.html/);
                if(!m)throw new Error('Could not extract game number from URL');
                const n=m[1];
                const u=`https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor@master/games/${n}.html`;
                console.log('Downloading from:',u);
                const r=await fetch(u);
                if(!r.ok)throw new Error('Network response was not ok');
                let c=await r.text();
                const b=`<div style="position:fixed;bottom:10px;right:10px;z-index:9999;"><a href="https://noahs-calculus-tutor.pages.dev" target="_blank" style="color:white;text-decoration:none;display:flex;align-items:center;gap:8px;font-size:12px;background:rgba(0,0,0,0.8);padding:8px 12px;border-radius:6px;font-family:Arial,sans-serif;"><span>Downloaded from Noah's Tutoring Hub</span><img src="https://cdn.jsdelivr.net/gh/NoahsAmazingTutoringHelp/reimagined-octo-winner@main/pictures/5.png" style="height:18px;width:auto;"></a></div>`;
                if(c.includes('</body>'))c=c.replace('</body>',b+'</body>');else c+=b;
                if(c.includes('<title>'))c=c.replace(/<title>.*?<\/title>/i,`<title>${t}</title>`);
                const f=new Blob([c],{type:'text/html'}),fu=URL.createObjectURL(f),dl=document.createElement('a');
                dl.href=fu;dl.download=`${t.replace(/[^a-z0-9]/gi,'_')}.html`;document.body.appendChild(dl);dl.click();document.body.removeChild(dl);URL.revokeObjectURL(fu);
                trackEvent('game_interaction','download_success',t,1);
            }catch(e){
                console.error('Download error:',e);trackEvent('game_interaction','download_error',t,1);
                alert('Unable to download game. Please try again later.');
            }
        }
        function downloadCurrentGame(){
            const f=document.getElementById('gameFrame'),u=f.src,t=document.getElementById('gameTitle').textContent;
            console.log('Download attempted for:',u,'Title:',t);
            if(u&&u.includes('https://raw.githack.com/NoahsAmazingTutoringHelp/Noahs-Calculus-Tutor/master/games/')&&u.includes('.html')){
                trackEvent('game_interaction','download_attempt',t,1);initiateDownload(u,t);
            }else{
                trackEvent('game_interaction','download_failed',t,1);alert('Sorry, this game is not downloadable. Try another one.');
            }
        }
        function toggleFullscreen(){
            const f=document.getElementById('gameFrame'),e=!f.classList.contains('fullscreen');
            trackEvent('game_interaction',e?'fullscreen_enter':'fullscreen_exit',document.getElementById('gameTitle').textContent,1);
            const el=document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement||document.mozFullScreenElement;
            if(el){
                if(document.exitFullscreen)document.exitFullscreen();
                else if(document.webkitExitFullscreen)document.webkitExitFullscreen();
                else if(document.msExitFullscreen)document.msExitFullscreen();
                else if(document.mozCancelFullScreen)document.mozCancelFullScreen();
            }else{
                if(f.requestFullscreen)f.requestFullscreen();
                else if(f.webkitRequestFullscreen)f.webkitRequestFullscreen();
                else if(f.msRequestFullscreen)f.msRequestFullscreen();
                else if(f.mozRequestFullScreen)f.mozRequestFullScreen();
            }
        }
        
        document.getElementById('searchInput').addEventListener('input',function(e){
            const t=e.target.value.toLowerCase(),c=document.querySelectorAll('#allLessonsGrid .lesson-card');
            let v=0;c.forEach(card=>{
                const ti=card.querySelector('.lesson-title').textContent.toLowerCase(),
                      d=card.querySelector('.lesson-desc').textContent.toLowerCase();
                if(ti.includes(t)||d.includes(t)){card.style.display='block';v++;}else card.style.display='none';
            });document.getElementById('searchStats').textContent=`Showing ${v} of ${c.length} lessons`;
        });
        
        function hideWarning(){document.getElementById('warningOverlay').classList.add('hidden');}
        
        function switchTab(tab){
            const lessonsTab=document.getElementById('lessonsTab');
            const partnersTab=document.getElementById('partnersTab');
            const lessonsSection=document.getElementById('lessons-section');
            const allLessonsSection=document.getElementById('all-lessons');
            const partnersSection=document.getElementById('partners-section');
            
            if(tab==='lessons'){
                lessonsTab.classList.add('active');
                partnersTab.classList.remove('active');
                lessonsSection.style.display='block';
                allLessonsSection.style.display='block';
                partnersSection.style.display='none';
            }else{
                lessonsTab.classList.remove('active');
                partnersTab.classList.add('active');
                lessonsSection.style.display='none';
                allLessonsSection.style.display='none';
                partnersSection.style.display='block';
            }
        }
        
        const themes=['default','rainbow','cyber-green','ice-blue','solarized','purple-haze'];
        let currentThemeIndex=0;
        document.getElementById('themeToggle').addEventListener('click',function(){
            const b=document.body,c=themes[currentThemeIndex];
            b.classList.remove('theme-rainbow','theme-cyber-green','theme-ice-blue','theme-solarized','theme-purple-haze');
            currentThemeIndex=(currentThemeIndex+1)%themes.length;const n=themes[currentThemeIndex];
            if(n!=='default')b.classList.add(`theme-${n}`);
            if(n==='rainbow')window.matrixColor='#ff0080';
            else if(n==='cyber-green')window.matrixColor='#00ff00';
            else if(n==='ice-blue')window.matrixColor='#00ccff';
            else if(n==='solarized')window.matrixColor='#2aa198';
            else if(n==='purple-haze')window.matrixColor='#9b59b6';
            else window.matrixColor='#c27c15';
            trackEvent('theme','switch',n,1);
        });
        
        (function(){
    const c = document.getElementById('custom-cursor');
    if (!c) return;
    
    let mx = 0, my = 0, cx = 0, cy = 0;
    let cursorHidden = false;
    let cursorTimeout;
    
    const style = document.createElement('style');
    style.textContent = `
        #custom-cursor {
            transition: opacity 0.3s ease, transform 0.12s, width 0.15s, height 0.15s;
        }
        #custom-cursor.hidden {
            opacity: 0;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
    
    function lerp(s, e, a) {
        return (1 - a) * s + a * e;
    }
    
    function hideCursor() {
        if (!cursorHidden) {
            c.classList.add('hidden');
            cursorHidden = true;
        }
    }
    
    function showCursor() {
        if (cursorHidden) {
            c.classList.remove('hidden');
            cursorHidden = false;
        }
    }
    
    function resetCursorTimeout() {
        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
            if (!cursorHidden) {
                hideCursor();
            }
        }, 3000);
    }
    
    document.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        showCursor();
        resetCursorTimeout();
        
        const element = document.elementFromPoint(mx, my);
        if (element && (element.tagName === 'IFRAME' || element.closest('iframe'))) {
            hideCursor();
        } else {
            showCursor();
        }
    });
    
    function animate() {
        if (!cursorHidden) {
            cx = lerp(cx, mx, 0.25);
            cy = lerp(cy, my, 0.25);
            c.style.left = cx + 'px';
            c.style.top = cy + 'px';
        }
        requestAnimationFrame(animate);
    }
    animate();
    
    document.addEventListener('mousedown', () => {
        showCursor();
        c.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        showCursor();
        c.classList.remove('click');
    });
    
    document.addEventListener('mouseleave', () => {
        hideCursor();
    });
    
    document.addEventListener('mouseenter', () => {
        showCursor();
    });
    
    document.addEventListener('mousemove', (e) => {
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        const isOverIframe = elements.some(el => 
            el.tagName === 'IFRAME' || 
            (el.closest && el.closest('iframe'))
        );
        
        if (isOverIframe) {
            hideCursor();
        } else {
            showCursor();
        }
    });
    
    const observer = new MutationObserver(() => {
        const gameFrame = document.getElementById('gameFrame');
        if (gameFrame) {
            gameFrame.addEventListener('mouseenter', () => {
                hideCursor();
            });
            
            gameFrame.addEventListener('mouseleave', () => {
                showCursor();
            });
        }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    const interactive = document.querySelectorAll('button, a, .partner-card, .nav-tab, .btn, .search-box, input, .lesson-card');
    interactive.forEach(el => {
        el.addEventListener('mouseenter', () => {
            showCursor();
            c.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            showCursor();
            c.classList.remove('hover');
        });
    });
    

    resetCursorTimeout();
})();
        
        document.addEventListener('DOMContentLoaded', function() {
            generateGameCards();
        });
