


import BechlareSvg from '../assets/svg/BechlareSvg.svg';
import BagSvg from '../assets/svg/BagSvg.svg';
import OpenBookSvg from '../assets/svg/OpenBookSvg.svg';
import PuzzaleSvg from '../assets/svg/PuzzleSvg.svg';
import metrics from './metrics';
import images from './images';

const months = [
  { fullLabel: 'January', value: 1, shortLabel: 'Jan' },
  { fullLabel: 'February', value: 2, shortLabel: 'Feb' },
  { fullLabel: 'March', value: 3, shortLabel: 'Mar' },
  { fullLabel: 'April', value: 4, shortLabel: 'Apr' },
  { fullLabel: 'May', value: 5, shortLabel: 'May' },
  { fullLabel: 'June', value: 6, shortLabel: 'Jun' },
  { fullLabel: 'July', value: 7, shortLabel: 'Jul' },
  { fullLabel: 'August', value: 8, shortLabel: 'Aug' },
  { fullLabel: 'September', value: 9, shortLabel: 'Sep' },
  { fullLabel: 'October', value: 10, shortLabel: 'Oct' },
  { fullLabel: 'November', value: 11, shortLabel: 'Nov' },
  { fullLabel: 'December', value: 12, shortLabel: 'Dec' }
];

const aboutData  = ['About Me','My Preferences']

 const generateYears = (startYear, endYear) => {
  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push({ fullLabel: i });
  }
  return years;
};
// 
const userInfoData = [
  {
    svg:<BechlareSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />,
    title:'Bachelor of Fine Arts in Graphic Design',
    description:'Bachelors, Kingston University'
  },
  {
    svg:<BagSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />,
    title:'Graphic Designer',
    description:'PixelCraft Studios'
  },
  {
    svg:<OpenBookSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />,
    title:'Scientology',
    description:'Believes in Science'
  },
  {
    svg:<PuzzaleSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />,
    title:'INTJ',
    description:'The Architect'
  },
];
const reportData = [
  {
    title:`Abuse`,
    data:[
      {
        name:'Verbal Abuse / Insults'
      },
      {
        name:'Hate Speech / Discrimination'
      },
      {
        name:'Threats of Violence'
      },
      {
        name:'Sexual Harassment'
      },
      {
        name:'Bullying'
      },
      {
        name:'Intimidation'
      },
      {
        name:'Emotional Manipulation'
      },
    ]
  },
  {
    title:`Inappropriate Content`,
    data:[
      {
        name:'Explicit Sexual Content'
      },
      {
        name:'Nudity'
      },
      {
        name:'Graphic Violence'
      },
      {
        name:'Illegal Activities'
      },
      {
        name:'Underage Users'
      },
      {
        name:'Drug or Alcohol Abuse'
      },
      {
        name:'Self-Harm Content'
      },
    ]
  },
  {
    title:`Inappropriate Content`,
    data:[
      {
        name:'Explicit Sexual Content'
      },
      {
        name:'Nudity'
      },
      {
        name:'Graphic Violence'
      },
      {
        name:'Illegal Activities'
      },
      {
        name:'Underage Users'
      },
      {
        name:'Drug or Alcohol Abuse'
      },
      {
        name:'Self-Harm Content'
      },
    ]
  },
  
]


const likeData = [
  {
    name:`Art and Design: There's something magical about turning ideas into visual masterpieces.`
  },
  {
    name:`Traveling to new places: Exploring different cultures and landscapes fuels my sense of adventure.`
  },
  {
    name:`Coffee shop conversations: I believe the best talks happen over a hot cup of coffee.`
  },
  {
    name:`Outdoor adventures: Whether it's hiking a trail or relaxing on the beach, nature rejuvenates me.`
  },
  {
    name:`Board games and game nights: A competitive spirit combined with laughter and strategy – what's not to love?`
  },
  {
    name:`A good balance of staying in and going out: From movie nights at home to exploring the local scene`
  },
]

const disLikeData = [
  {
    name:`Negativity: Life's too short to dwell on the downside.`
  },
  {
    name:`Cold weather (more of a beach person): Give me sunshine and waves over snow any day`
  },
  {
    name:`Long queues: Patience is a virtue, but waiting in line tests it.`
  },
  {
    name:`Pineapple on pizza: (Sorry, not sorry!) Let's keep pizza toppings a sacred art.`
  },
]

const quickLinkData = [
  {
    name:'Stan',
    image:images.images.quickLinkImage1
  },
  {
    name:'Karry',
    image:images.images.quickLinkImage2
  },
  {
    name:'Fin',
    image:images.images.quickLinkImage3
  },
  {
    name:'Grey',
    image:images.images.quickLinkImage1
  },
  {
    name:'Dan',
    image:images.images.quickLinkImage2
  },
  {
    name:'Stan',
    image:images.images.quickLinkImage1
  },
  {
    name:'Karry',
    image:images.images.quickLinkImage2
  },
  {
    name:'Fin',
    image:images.images.quickLinkImage3
  },
  {
    name:'Grey',
    image:images.images.quickLinkImage1
  },
  {
    name:'Dan',
    image:images.images.quickLinkImage2
  },
]


const chatLisitngData = [
  {
    name:'Ash Ray',
    image:images.images.quickLinkImage1,
    message:'Last place I went to was Atlantis',
    seen:true,
    time:'09:41 AM'
  },
  {
    name:'Raymond',
    image:images.images.quickLinkImage2,
    message:'Last place I went to was Atlantis',
    seen:false,
    time:'09:41 AM',
    count : 7
  },
  {
    name:'jat Ray',
    image:images.images.quickLinkImage3,
    message:'Last place I went to was Atlantis',
    seen:true,
    time:'09:41 AM'
  },
  {
    name:'Raymond',
    image:images.images.quickLinkImage2,
    message:'Last place I went to was Atlantis',
    seen:false,
    time:'09:41 AM'
  },
  {
    name:'Raymond',
    image:images.images.quickLinkImage2,
    message:'Last place I went to was Atlantis',
    seen:false,
    time:'09:41 AM'
  },
  {
    name:'jat Ray',
    image:images.images.quickLinkImage3,
    message:'Last place I went to was Atlantis',
    seen:true,
    time:'09:41 AM'
  },
  {
    name:'Raymond',
    image:images.images.quickLinkImage2,
    message:'Last place I went to was Atlantis',
    seen:false,
    time:'09:41 AM'
  },
]


const chatData = [
  {
    right:false,
    name:'madi',
    message:'Hey, How are you?'
  },
  {
    right:true,
    name:'AR',
    message:'good , u?'
  },
  {
    right:true,
    name:'AR',
    message:'Hey!???'
  },
  {
    right:false,
    name:'madi',
    message:'Blah blah'
  },
  {
    seen:false,
    right:true,
    name:'madi',
    message:'Lorem ipsum'
  },
  {
    seen:true,
    right:true,
    name:'AR',
    message:'Lorem ipsum'
  },
  
]
const attendanceData = [
  {
    name:'jat Ray',
    image:images.images.quickLinkImage1,
  },
  {
    name:'jat Ray1',
    image:images.images.quickLinkImage3,
  }
]

  export {months,generateYears ,aboutData,userInfoData,likeData,disLikeData,reportData,quickLinkData,chatLisitngData,chatData,attendanceData}