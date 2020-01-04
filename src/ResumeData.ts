export const ResumeData = {
  name: 'Bharat Middha',
  location: 'Chicago, IL',
  email: 'me@bharatmiddha.com',
  summary: 'Seeking full-time developer positions',
  links: {
    github: 'https://github.com/bmiddha',
    linkedin: 'https://linkedin.com/in/bmiddha',
    website: 'https://bharatmiddha.com'
  },
  skills: [
    {
      title: 'Programming and Web',
      values: [
        'TypeScript',
        'C#',
        'C++',
        'C',
        'JavaScript',
        'Node.js',
        'React.js',
        'Express.js',
        'HTML5/CSS3',
        'Sass',
        'SQL',
        'Kusto'
      ]
    },
    {
      title: 'DevOps, SysAdmin, and IoT',
      values: [
        'Docker',
        'Kubernetes',
        'GitHub Actions',
        'Azure DevOps',
        'Azure',
        'Travis CI',
        'Linux & Windows Systems Administration',
        'Networking',
        'Raspberry Pi',
        'Arduino'
      ]
    },
    {
      title: 'Languages',
      values: ['English', 'Hindi']
    }
  ],
  education: [
    {
      school: 'University of Illinois at Chicago',
      degree: 'Bachelor of Science in Computer Science',
      start: 'January 2018',
      end: 'December 2021 (expected)'
    }
  ],
  experience: [
    {
      organization: 'Microsoft',
      location: 'Redmond, WA',
      position: 'Software Engineering Intern',
      start: 'May 2020',
      end: 'August 2020',
      points: []
    },
    {
      organization:
        'University of Illinois at Chicago | Department of Electrical and Computer Engineering',
      location: 'Chicago, IL',
      position: 'Systems Administrator',
      start: 'January 2020',
      end: 'Present',
      points: []
    },
    {
      organization: 'Microsoft | OneDrive SharePoint Experiences Engineering',
      location: 'Redmond, WA',
      position: 'Explore Intern',
      start: 'May 2019',
      end: 'August 2019',
      points: [
        'Gained experience using TypeScript, React.js, Knockout.js, and Node.js to update components for better performance.',
        'Utilized Azure Data Explorer and Kusto to retrieve and analyse performance metrics.',
        'Wrote UI/UX tests to find and patch UI/UX bugs and issues.'
      ]
    },
    {
      organization: 'University of Illinois at Chicago | Electronic Visualization Laboratory (EVL)',
      location: 'Chicago, IL',
      position: 'Research Volunteer',
      start: 'August 2018',
      end: 'May 2019',
      points: [
        'Gained experience using Node.js and Express.js to handle data requests primarily utilizing web sockets.',
        'Utilized Mongoose to interface with MongoDB to create schemas and store live data efficiently.',
        'Used Vue.js to create intuitive front end interfaces to interact with remote devices.',
        'Worked with various APIs for devices such as microphones and Z-Wave devices.'
      ]
    }
    // {
    //   organization: 'University of Illinois at Chicago | UIC Tech Center',
    //   location: 'Chicago, IL',
    //   position: 'Retail Sales Aide',
    //   start: 'May 2018',
    //   end: 'September 2019',
    //   points: [
    //     'Customer Service.',
    //     'Marketing and inventory of products.',
    //     'Diagnosing issues with customer products.',
    //     'Performing repairs on customer computers.'
    //   ]
    // }
  ],
  associations: [
    {
      organization: 'Association for Computing Machinery (ACM), UIC',
      start: 'February 2018',
      end: 'Present',
      position: 'President 2019-2020 | Systems Administrator',
      points: [
        'Configured, monitored, upgraded and maintained systems hardware, software and related infrastructure.',
        'Organized events to educate students about system administration.'
      ]
    },
    {
      organization: 'Linux Users Group (LUG), UIC',
      start: 'April 2018',
      end: 'Present',
      position: 'Vice-President 2018-2019 | Systems Administrator',
      points: [
        'Presided and chaired events and meetings; represented the organization at all events.',
        'Increased club membership by 15%.',
        'Organized events to educate students about GNU/Linux and Open Source software.',
        'Managed projects and planned fun and informative events.'
      ]
    },
    {
      organization: 'Institute of Electrical and Electronics Engineers (IEEE), UIC',
      start: 'February 2018',
      end: 'February 2019',
      position: 'Member',
      points: ['Learned about programming Arduinos and making IoT(Internet of Things) devices.']
    }
  ],
  volunteer: [
    {
      organization: 'Office of International Services, UIC',
      start: 'May 2018',
      end: 'May 2019',
      position: 'Global Ambassador',
      points: [
        'Welcomed new International Student and advised them about life at UIC and Chicago.',
        'Answered their queries regarding academics and the university.',
        'Took them on a trolley tour around Chicago and briefed them about the history behind the city.'
      ]
    }
  ],
  projects: [
    {
      name: 'Archlinux Install Script - ACM@UIC',
      link: 'https://github.com/bmiddha/archlinux-install-script-acm-uic',
      technologies: ['BASH', 'Active Directory', 'Linux'],
      points: [
        'BASH script which installs and configures Archlinux ACM@UIC style.',
        'ACM@UIC style: Use local mirrors, mount file shares, join domain',
        'Includes functions to setup a server as a hypervisor with KVM and QEMU.'
      ]
    },
    {
      name: 'Linux Mirror Sync',
      link: 'https://github.com/bmiddha/linux-mirrors-sync',
      technologies: ['BASH'],
      points: [
        'Easy to use BASH script to sync Linux mirrors.',
        'Easy to add and remove new mirrors and debug syncing errors.'
      ]
    },
    {
      name: 'CS Lounge Display',
      link: 'https://github.com/bmiddha/archlinux-install-script-acm-uic',
      technologies: ['Javascript', 'Node.js', 'Express.js', 'HTML5/CSS3', 'Sass', 'Raspberry Pi'],
      points: [
        'Project for the Computer Science Department at UIC.',
        'Displays upcoming events and messages from CS student organizations and the CS Department.',
        'Displays current weather and time.',
        'Hosted on a Raspberry Pi running a Node.js server and Chromium browser.'
      ]
    },
    {
      name: 'ACM/LUG Clock',
      link: 'https://github.com/bmiddha/simple-js-clock',
      technologies: ['TypeScript', 'Node.js', 'Express.js', 'Raspberry Pi', 'HTML5/CSS3', 'Sass'],
      points: [
        'Project for the Association for Computing Machinery (ACM) and Linux Users Group (LUG).',
        'Serves as a clock replacement.',
        'Uses Node.js to get data from the CTA, Google Maps and OpenWeatherMap APIs to display CTA times, live traffic and weather.',
        'Hosted on a Raspberry Pi running a Node.js server and Chromium browser.'
      ]
    }
  ]
};

export default ResumeData;
