import {
  QuranAppIMG,
  BootstrapIcon,
  CSSIcon,
  ExpressJSIcon,
  HTMLIcon,
  JavascriptIcon,
  LaravelIcon,
  MongoDBIcon,
  MySQLIcon,
  NextJSIcon,
  NikahYukIMG,
  NodeJSIcon,
  PHPIcon,
  ReactJSIcon,
  RealEstateIMG,
  KelulusanIMG,
} from '../assets/images';

export const skillsData = [
  {
    name: 'HTML',
    image: HTMLIcon,
  },
  {
    name: 'CSS',
    image: CSSIcon,
  },
  {
    name: 'Javascript',
    image: JavascriptIcon,
  },
  {
    name: 'Bootstrap',
    image: BootstrapIcon,
  },
  {
    name: 'PHP',
    image: PHPIcon,
  },
  {
    name: 'MySQL',
    image: MySQLIcon,
  },
  {
    name: 'Laravel',
    image: LaravelIcon,
  },
  {
    name: 'MongoDB',
    image: MongoDBIcon,
  },
  {
    name: 'Express.js',
    image: ExpressJSIcon,
  },
  {
    name: 'React.js',
    image: ReactJSIcon,
  },
  {
    name: 'Node.js',
    image: NodeJSIcon,
  },
  {
    name: 'Next.js',
    image: NextJSIcon,
  },
];

export const projectsData = [
  {
    image: KelulusanIMG,
    name: 'Pengumuman Kelulusan',
    tech: 'Laravel, Bootstrap',
    description: 'The Graduation Announcement Website is an online platform that provides the latest and accurate information regarding graduation outcomes for students or exam participants.',
    link: 'https://github.com/zachriek/kelulusan/',
  },
  {
    image: RealEstateIMG,
    name: 'Real Estate',
    tech: 'Laravel, Bootstrap',
    description:
      'Real Estate is an online platform that provides information about properties, such as houses, apartments, land, and commercial properties that are available for sale, rent, or lease.',
    link: 'https://github.com/zachriek/laravel-real-estate/',
  },
  {
    image: NikahYukIMG,
    name: 'NikahYuk',
    tech: 'Next.js, Express.js, Tailwind CSS',
    description: 'NikahYuk is an online platform that offers a convenient and modern way to create, customize, and send invitations for various events and occasions.',
    link: 'https://nikah-yuk.vercel.app/ali-zahra/',
  },
  {
    image: QuranAppIMG,
    name: 'Quran App',
    tech: 'React.js, Mantine UI',
    description:
      'Quran App is an online platform that provides access to the Quran, the holy book of Islam. It offers various features and resources to help individuals read, study, and understand the Quran more effectively.',
    link: 'https://quran-app-zachriek.vercel.app/',
  },
];
