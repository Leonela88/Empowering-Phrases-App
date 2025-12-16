const phrases = [
    {name : "Gloria Steinem", 
     role : "American Journalist & Social-political Activist",
     phrase :"Don't think about making women fit the world - think about making the world fit women.",
     photo : "./photos/Gloria-Steinem.png"
    },

    {name : "Lady Gaga",
    role : "Singer-songwriter & Musician",
    phrase : "I am my own sanctuary and I can be reborn as many times as I choose throughout my life.",
    photo : "./photos/Lady-Gaga.png"
    },

    {name : "Michelle Obama", 
     role : "American Attorney, Author & Former First Lady of the United States", 
     phrase : "There is no limit to what we, as women, can accomplish.",
         photo : "./photos/Michelle-Obama.png"
    },

    {name : "Malala Yousafzai",
     role : "Activist",
     phrase : "I think realizing that you're not alone, that you are standing with millions of your sisters around the world is vital.",
         photo : "./photos/Malala-Yousafzai.png"
    },

    {name : "Coco Chanel",
     role : "Fashion Designer & Businesswoman",
     phrase : "A girl should be two things: Who and what she wants.",
         photo : "./photos/Coco-Chanel.png"
    },

    {name : "Judy Garland", 
     role : "Actress & Singer",
     phrase : "Always be a first-rate version of yourself instead of a second-rate version of somebody else.",
         photo : "./photos/Judy-Garland.png"
    },

    {name : "Serena Williams",
     role : "Tennis Champion",
     phrase : "Every woman's success should be an inspiration to another. We're strongest when we cheer each other on.",
         photo : "./photos/Serena-Williams.webp"
    },

    {name : "Sheryl Sandberg", 
     role : "Technology Executive, Philanthropist & Writer",
     phrase : "We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women's voices are heard and heeded, not overlooked and ignored.",
         photo : "./photos/Sheryl-Sandberg.png"
    },

    {name : "Megan Rapinoe", 
     role : "Professional Soccer Player",
     phrase : "Every person has a responsibility to be a participant in this society and make it a better place for everybody, in whatever capacity they can.",
         photo : "./photos/Megan-Rapinoe.png"
    },

    {name : "Reese Witherspoon",
     role : "Actress & Producer",
     phrase : "I encourage women to step up. Don't wait for somebody to ask you.",
         photo : "./photos/Reese-Witherspoon.png"
    },

    {name : "Ntozake Shange",
     role : "Playwright & Poet", 
     phrase : "Where there is a woman, there is magic.",
         photo : "./photos/Ntozake-Shange.png"
    },

    {name : "Elaine Welteroth", 
     role : "Author, Journalist, Editor & Television Host",
     phrase : "Friends. Sisters. Mothers. Professors. When women affirm women, it unlocks our power. It gives us permission to shine brighter.",
         photo : "./photos/Elaine-Welteroth.png"
    },

    {name : "Viola Davis", 
     role : "Actress & Film Producer",
     phrase : "Do not live someone else's life and someone else's idea of what womanhood is. Womanhood is you.",
         photo : "./photos/Viola-Davis.png"
    },

    {name : "Beyoncé",
     role : "Singer, Songwriter & Businesswoman",
     phrase : "If everything was perfect, you would never learn, and you would never grow.",
     photo : "./photos/Beyoncé.png"
    },

    {name : "Audre Lorde", 
     role : "Writer, Professor, Philosopher, Poet & Civil Rights Activist", 
     phrase : "I am not free while any woman is unfree, even when her shackles are very different from my own.",
         photo : "./photos/Audre-Lorde.png"
    },

    {name : "Isabel Allende",
     role : "Author",
     phrase : "I can promise you that women working together - linked, informed, and educated - can bring peace and prosperity to this forsaken planet.",
         photo : "./photos/Isabel-Allende.png"
    },

    {name : "Alex Elle",
     role : "Author, Wellness Educator & Podcast Host",
     phrase : "I am thankful for my struggle because, without it, I wouldn't have stumbled across my strength",
         photo : "./photos/Alex-Elle.png"
    },

    {name : "G.D. Anderson", 
     role : "Writer & Founder of The Cova Project",
     phrase : "Feminism isn't about making women strong. Women are already strong. It's about changing the way the world perceives that strength.",
         photo : "./photos/G.D.-Anderson.png"
    },

    {name : "Jane Goodall", 
     role : "Primatologist & Anthropologist",
     phrase : "One individual cannot possibly make a difference, alone. It is individual efforts, collectively, that makes a noticeable difference - all the difference in the world!",
         photo : "./photos/Jane-Goodall.png"
    },

    {name : "Laverne Cox", 
     role : "Actress & Activist",
     phrase : "I've never been interested in being invisible and erased.",
         photo : "./photos/Laverne-Cox.png"
    },

    {name : "Lucille Ball", 
     role : "Actress",
     phrase : "I'd rather regret the things I've done than regret the things I haven't done.",
         photo : "./photos/Lucille-Ball.png"
    },

    {name : "Arianna Huffington", 
     role : "Author, Syndicated Columnist & Businesswoman",
     phrase : "Fearlessness is like a muscle. I know from my own life that the more I exercise it the more natural it becomes to not let my fears run me.",
         photo : "./photos/Arianna-Huffington.png"
    },

    {name : "Jane Fonda", 
     role : "Actress & Actor",
     phrase : "Feminism is not just about women; it's about letting all people lead fuller lives.",
         photo : "./photos/Jane-Fonda.png"
    },

    {name : "Brené Brown", 
     role : "Professor, Author & Podcast host", 
     phrase : "Let go of who you think you're supposed to be; embrace who you are.",
         photo : "./photos/Brené-Brown.png"
    },

    {name : "Emma Watson", 
     role : "Actress, Activist & Model",
     phrase : "Girls should never be afraid to be smart.",
         photo : "./photos/Emma-Watson.png"
    },

    {name : "Beverly Sills", 
     role : "Operatic Soprano",
    phrase : "You may be disappointed if you fail, but you are doomed if you don't try.",
        photo : "./photos/Beverly-Sills.png"
    },

    {name : "Margaret Fuller", 
     role : "Journalist, Editor, Critic, Translator & Activist",
     phrase : "If you have knowledge, let others light their candles in it.",
         photo : "./photos/Margaret-Fuller.png"
    },

    {name : "Marilyn Monroe", 
     role : "Actress & Model",
     phrase : "Sometimes things fall apart, so that better things can fall together.",
         photo : "./photos/Marilyn-Monroe.png"
    },

    {name : "Angela Yee", 
     role : "Radio Personality",
     phrase : "I can encourage the women who are striving to get their footing in the world to keep pushing and to express themselves.",
         photo : "./photos/Angela-Yee.png"
    },

    {name : "Carolina Herrera", 
     role : "Fashion Designer",
     phrase : "I don't get my inspiration from books or a painting. I get it from the women I meet.",
         photo : "./photos/Carolina-Herrera.png"
    },

    {name : "Emma Raducanu", 
     role : "Tennis Player",
     phrase : "I don't really think about other people's opinions or expectations. The only ones I have are that of myself, to improve and get better.",
         photo : "./photos/Emma-Raducanu.webp"
    },

    {name : "Greta Thunberg",
     role : "Activist",
     phrase : "I have learned you are never too small to make a difference.",
         photo : "./photos/Greta-Thunberg.png"
    },

    {name : "Amani Al-Khatahtbeh", 
     role : "Author, activist & Technology Entrepreneur",
     phrase : "She has a voice. If you can't hear it, it's because you're too busy talking.",
         photo : "./photos/Amani-Al-Khatahtbeh.png"
    },

    {name : "Helen Keller",
     role : "Author, Disability Rights Advocate, Political Activist & Lecturer",
     phrase : "Alone we can do so little; together we can do so much.",
         photo : "./photos/Helen-Keller.png"
    },
]

export {phrases}