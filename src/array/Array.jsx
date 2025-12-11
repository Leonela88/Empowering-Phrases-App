const phrases = [
    {name : "Gloria Steinem", 
     role : "American Journalist & Social-political Activist",
     phrase :"Don't think about making women fit the world - think about making the world fit women."
    },

    {name : "Lady Gaga",
    role : "Singer-songwriter & Musician",
    phrase : "I am my own sanctuary and I can be reborn as many times as I choose throughout my life."
    },
    
    {name : "Ruth Bader Ginsburg",
     role : "American Lawyer and Jurist",
     phrase : "As women achieve power, the barriers will fall. As society sees what women can do, as women see what women can do, there will be more women out there doing things, and we'll all be better off for it."
    },

    {name : "Michelle Obama", 
     role : "American Attorney, Author & Former First Lady of the United States", 
     phrase : "There is no limit to what we, as women, can accomplish."
    },

    {Name : "Malala Yousafzai",
     role : "Activist",
     phrase : "I think realizing that you're not alone, that you are standing with millions of your sisters around the world is vital."
    },

    {name : "Coco Chanel",
     role : "Fashion Designer & Businesswoman",
     phrase : "A girl should be two things: Who and what she wants."
    },

    {name : "Dolly Parton",
     role : "Singer-songwriter & Musician",
     phrase : "As long as you live. there's something new everyday."
    },

    {name : "Judy Garland", 
     role : "Actress & Singer",
     phrase : "Always be a first-rate version of yourself instead of a second-rate version of somebody else."
    },

    {name : "Serena Williams",
     role : "Tennis Champion",
     phrase : "Every woman's success should be an inspiration to another. We're strongest when we cheer each other on."
    },

    {name : "Sheryl Sandberg", 
     role : "Technology Executive, Philanthropist & Writer",
     phrase : "We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women's voices are heard and heeded, not overlooked and ignored."
    },

    {name : "Megan Rapinoe", 
     role : "Professional Soccer Player",
     phrase : "Every person has a responsibility to be a participant in this society and make it a better place for everybody, in whatever capacity they can.",
    },

    {name : "Reese Witherspoon",
     role : "Actress & Producer",
     phrase : "I encourage women to step up. Don't wait for somebody to ask you."
    },

    {name : "Ntozake Shange",
     role : "Playwright & Poet", 
     phrase : "Where there is a woman, there is magic."
    },

    {name : "Elaine Welteroth", 
     role : "Author, Journalist, Editor & Television Host",
     phrase : "Friends. Sisters. Mothers. Professors. When women affirm women, it unlocks our power. It gives us permission to shine brighter."
    },

    {name : "Viola Davis", 
     role : "Actress & Film Producer",
     phrase : "Do not live someone else's life and someone else's idea of what womanhood is. Womanhood is you."
    },

    {name : "Beyoncé", 
     role : "Singer, Songwriter & Businesswoman",
     phrase : "If everything was perfect, you would never learn, and you would never grow."
    },

    {name : "Audre Lorde", 
     role : "Writer, Professor, Philosopher, Poet & Civil Rights Activist", 
     phrase : "I am not free while any woman is unfree, even when her shackles are very different from my own."
    },

    {name : "Rupi Kaur", 
     role : "Poet, Illustrator, Photographer & Author",
     phrase : "What's the greatest lesson a woman should learn? That since day one, she's already had everything she needs within herself. It's the world that convinced her she did not."
    },

    {name : "June Sarpong",
     role : "Television Presenter & Executive",
     phrase : "Believe in yourself and be proud of who you are. Don't let anyone tell you differently. There is beauty in everyone and no one should stop you from growing into a confident and strong young person."
    },

    {name : "Isabel Allende",
     role : "Author",
     phrase : "I can promise you that women working together - linked, informed, and educated - can bring peace and prosperity to this forsaken planet."
    },

    {name : "Beanie Feldstein",
     role : "Actress", 
     phrase : "Take the wisdoms of the women in this world and keep them at your side, always."
    },

    {name : "Alex Elle",
     role : "Author, Wellness Educator & Podcast Host",
     phrase : "I am thankful for my struggle because, without it, I wouldn't have stumbled across my strength"
    },

    {name : "Alaa Murabit", 
     role : "Physician", 
     phrase : "I will always be the girl who believed she could make it to the moon, in a world that still debates whether girls should have an education and whether women should have reproductive rights."
    },

    {name : "G.D. Anderson", 
     role : "Writer & Founder of The Cova Project",
     phrase : "Feminism isn't about making women strong. Women are already strong. It's about changing the way the world perceives that strength."
    },

    {name : "Jameela Jamil", 
     role : "Actress & Activist",
     phrase : "Do not ever sell yourself short."
    },

    {name : "Maya Angelou", 
     role : "Memoirist, Poet & Civil Rights Activist",
     phrase : "I am grateful to be a woman. I must have done something great in another life."
    },

    {name : "Jane Goodall", 
     role : "Primatologist & Anthropologist",
     phrase : "One individual cannot possibly make a difference, alone. It is individual efforts, collectively, that makes a noticeable difference - all the difference in the world!"
    },

    {name : "Laverne Cox", 
     role : "Actress & Activist",
     phrase : "I've never been interested in being invisible and erased."
    },

    {name : "Lucille Ball", 
     role : "Actress",
     phrase : "I'd rather regret the things I've done than regret the things I haven't done."
    },

    {name : "Matilda Joslyn Gage", 
     role : "Writer & Activist",
     phrase : "The women of today are the thoughts of their mothers and grandmothers, embodied and made alive. They are active, capable, determined and bound to win. They have one-thousand generations back of them...Millions of women dead and gone are speaking through us today."
    },

    {name : "Arianna Huffington", 
     role : "Author, Syndicated Columnist & Businesswoman",
     phrase : "Fearlessness is like a muscle. I know from my own life that the more I exercise it the more natural it becomes to not let my fears run me."
    },

    {name : "Jane Fonda", 
     role : "Actress & Actor",
     phrase : "Feminism is not just about women; it's about letting all people lead fuller lives."
    },

    {name : "Brené Brown", 
     role : "Professor, Author & Podcast host", 
     phrase : "Let go of who you think you're supposed to be; embrace who you are."
    },

    {name : "Emma Watson", 
     role : "Actress, Activist & Model",
     phrase : "Girls should never be afraid to be smart."
    },

    {name : "Beverly Sills", 
     role : "Operatic Soprano",
    phrase : "You may be disappointed if you fail, but you are doomed if you don't try."
    },

    {name : "Mindy Kaling", 
     role : "Actress, Screenwriter & Producer",
     phrase : "If you don't see a clear path for what you want, sometimes you have to make it yourself."
    },

    {name : "Dame Jessica Ennis-Hill",
     role : "Track & Field Athlete",
     phrase : "The only one who can tell you 'you can't win' is you, and you don't have to listen."
    },

    {name : "Margaret Fuller", 
     role : "Journalist, Editor, Critic, Translator & Activist",
     phrase : "If you have knowledge, let others light their candles in it."
    },

    {name : "Marilyn Monroe", 
     role : "Actress & Model",
     phrase : "Sometimes things fall apart, so that better things can fall together."
    },

    {name : "Oprah Winfrey",
     role : "Talk Show Host, Television Producer, Actress & Author",
     phrase : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
    },

    {name : "Angela Yee", 
     role : "Radio Personality",
     phrase : "I can encourage the women who are striving to get their footing in the world to keep pushing and to express themselves."
    },

    {name : "Blake Lively", 
     role : "Actress",
     phrase : "The most beautiful thing a woman can wear is confidence."
    },

    {name : "Carolina Herrera", 
     role : "Fashion Designer",
     phrase : "I don't get my inspiration from books or a painting. I get it from the women I meet."
    },

    {name : "Emma Raducanu", 
     role : "Tennis Player",
     phrase : "I don't really think about other people's opinions or expectations. The only ones I have are that of myself, to improve and get better."
    },

    {name : "Greta Thunberg",
     role : "Activist",
     phrase : "I have learned you are never too small to make a difference."
    },

    {name : "Misty Copeland", 
     role : "Ballet Dancer",
     phrase : "Be strong, be fearless, be beautiful. And believe that anything is possible when you have the right people there to support you."
    },

    {name : "Nikita Gill", 
     role : "Poet, Playwright, Writer & Illustrator",
     phrase : "Never ever mistake her silence for weakness. Remember that sometimes the air stills before the onset of a hurricane."
    },

    {name : "Amani Al-Khatahtbeh", 
     role : "Author, activist & Technology Entrepreneur",
     phrase : "She has a voice. If you can't hear it, it's because you're too busy talking."
    },

    {name : "Helen Keller",
     role : "Author, Disability Rights Advocate, Political Activist & Lecturer",
     phrase : "Alone we can do so little; together we can do so much."
    },
]

export {phrases}