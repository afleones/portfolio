import self from "../img/self.jpeg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import LogoDc from '../img/LogoDc.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Andrés",
    lastName: "Leones",
    initials: 'al', // don't change this unless you want to name your self-portrait in the "img" folder something else!
    position: "a Full Stack Developer", // this is what you do, like "a Full Stack Developer" or "a Software Engineer"
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🍺',
            text: 'fueled by beer'
        },
        {
            emoji: '🌎',
            text: 'based in Colombia'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer", // this is what you do, like "a Full Stack Developer" or "a Software Engineer" and DevOps"
        },
        {
            emoji: "📧",
            text: "hola@leones.dev"
        },
        {
            emoji: LogoDc,
            text: "PM at D&C IDEM COMUNICACIONES S.A.S"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/andresleonesco",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/afleones",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/backdev97/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I am Andrés. I am a Full Stack Developer. I studied AdsI at Sena, I enjoy traveling, knowing and learning new things and I believe that artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
    {
        proficientWith: ['typescript', 'ruby on rails', 'git', 'docker', 'github', 'laravel', 'expressjs', 'django', 'nestjs', 'servers admin', 'react'],
        exposedTo: ['nodejs', 'python', 'php', 'mysql', 'postgresql', 'redis', 'kubernetes', 'aws', 'graphql'],
    }
    ,
    hobbies: [
        {
            label: 'develop',
            emoji: '👨🏻‍💻'
        },
        {
            label: 'Music',
            emoji: '🎧'
        },
        {
            label: 'Basketball',
            emoji: '🏀'
        },
        {
            label: 'eat',
            emoji: '😋'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "#", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/afleones", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "#",
            source: "https://github.com/afleones",
            image: mock2
        },
        {
            title: "Project 3",
            live: "#",
            source: "https://github.com/afleones",
            image: mock3
        },
        {
            title: "Project 4",
            live: "#",
            source: "https://github.com/afleones",
            image: mock4
        },
        {
            title: "Project 5",
            live: "#",
            source: "https://github.com/afleones",
            image: mock5
        }
    ]
}