import type { Project, Story, App, TimelineEvent, Device } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Trafic Ranger',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    link: 'https://github.com/Amit-Shatagar/Trafic_Ranger',
    status: 'wip',
    description: 'AI-based traffic monitoring platform delivering real-time violation detection and analytical dashboards. Role: Data Analysis + Web Development.',
    category: 'work'
  },
  {
    id: '2',
    title: 'revenue_intelligence',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
    link: 'https://github.com/Amit-Shatagar/revenue_intelligence_project',
    status: 'new',
    description: 'Developed an end-to-end revenue analytics system that ingests raw sales data and converts it into actionable insights, real-time KPIs, and leadership dashboards—helping businesses spot growth opportunities and optimize revenue strategy.',
    category: 'work'
  },
  {
    id: '3',
    title: 'Kigen',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop',
    link: 'https://kigen.design',
    status: 'new',
    description: 'Figma plugin to generate design system variables and styles',
    category: 'work'
  },
  {
    id: '6',
    title: '3dicons',
    year: '2021-now',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop',
    link: 'https://3dicons.co',
    status: 'v2',
    description: 'Beautifully Crafted Open-source 3dicons library',
    category: 'work'
  },
  {
    id: '8',
    title: 'Practo',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop',
    link: 'https://practo.com',
    description: 'Help design team building design system and visual identity',
    category: 'work'
  },
  {
    id: '10',
    title: 'Fameo',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    link: '#',
    description: 'Visual Identity and App Design',
    category: 'work'
  }
];

export const stories: Story[] = [
  {
    id: '1',
    title: 'National Cadet Corps | Vlog',
    date: 'Feb 27, 2022',
    category: 'Traine',
    link: 'https://story.shetty.me'
  },
  {
    id: '2',
    title: 'Lance Corporal @NCC | TeamLead',
    date: 'July 30, 2022',
    category: 'Lead',
    link: 'https://story.shetty.me'
  },
  {
    id: '3',
    title: 'Thrift Store | Startup',
    date: 'Aug 08, 2023',
    category: 'Startup',
    link: 'https://story.shetty.me'
  },
  {
    id: '4',
    title: 'University Gold Meliest | BCA',
    date: 'July, 2024',
    category: 'GoldMedlist',
    link: 'https://story.shetty.me'
  },
  {
    id: '5',
    title: 'Tata Consultancy Services | Journey with TCS',
    date: 'Nov 07, 2024',
    category: 'Professional',
    link: 'https://story.shetty.me'
  }
];

export const apps: App[] = [
  {
    id: '1',
    name: 'Python',
    category: 'Programming',
    icon: 'Code',
    description: 'My primary programming language for data analysis, machine learning, and automation scripts.',
    link: 'https://python.org',
    color: '#3776AB'
  },
  {
    id: '2',
    name: 'SQL',
    category: 'Database',
    icon: 'Database',
    description: 'Essential for querying and managing relational databases in data analysis projects.',
    link: 'https://postgresql.org',
    color: '#336791'
  },
  {
    id: '3',
    name: 'Tableau',
    category: 'Visualization',
    icon: 'BarChart3',
    description: 'Powerful business intelligence tool for creating interactive dashboards and data visualizations.',
    link: 'https://tableau.com',
    color: '#E97627'
  },
  {
    id: '4',
    name: 'Power BI',
    category: 'Visualization',
    icon: 'BarChart',
    description: 'Microsoft\'s business analytics tool for creating reports and dashboards.',
    link: 'https://powerbi.microsoft.com',
    color: '#F2C811'
  },
  {
    id: '5',
    name: 'Excel',
    category: 'Spreadsheet',
    icon: 'FileSpreadsheet',
    description: 'Advanced spreadsheet tool for data analysis, pivot tables, and quick visualizations.',
    link: 'https://microsoft.com/excel',
    color: '#217346'
  },
  {
    id: '6',
    name: 'Figma',
    category: 'Design',
    icon: 'Figma',
    description: 'Design tool for UI/UX design and creating visual assets for projects.',
    link: 'https://figma.com',
    color: '#F24E1E'
  },
  {
    id: '7',
    name: 'Canva',
    category: 'Design',
    icon: 'Palette',
    description: 'User-friendly design tool for creating graphics, presentations, and marketing materials.',
    link: 'https://canva.com',
    color: '#00C4CC'
  },
  {
    id: '8',
    name: 'Adobe Suite',
    category: 'Design',
    icon: 'Image',
    description: 'Comprehensive suite for professional design, including Photoshop, Illustrator, and InDesign.',
    link: 'https://adobe.com',
    color: '#FF0000'
  },
  {
    id: '9',
    name: 'GitHub',
    category: 'Version Control',
    icon: 'Github',
    description: 'Platform for hosting code repositories, collaboration, and project management.',
    link: 'https://github.com',
    color: '#181717'
  },
  {
    id: '10',
    name: 'Looker Studio',
    category: 'Visualization',
    icon: 'BarChart3',
    description: 'Building cloud-integrated reports for marketing and web data.',
    link: 'https://lookerstudio.google.com',
    color: '#4285F4'
  }
];

export const devices: Device[] = [
  { id: '1', name: 'MacBook Pro', icon: 'Laptop' },
  { id: '2', name: 'iPad Pro', icon: 'Tablet' },
  { id: '3', name: 'iPhone', icon: 'Smartphone' },
  { id: '4', name: 'Apple Watch', icon: 'Watch' },
  { id: '5', name: 'AirPods', icon: 'Headphones' },
  { id: '6', name: 'LG Monitor', icon: 'Monitor' },
  { id: '7', name: 'Keychron', icon: 'Keyboard' },
  { id: '8', name: 'MX Master', icon: 'Mouse' },
  { id: '9', name: 'Sony XM5', icon: 'Headphones' },
  { id: '10', name: 'Stream Deck', icon: 'LayoutGrid' }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: 'Aug 08, 2023 - Jan 02, 2024',
    title: 'Thrift Store | Entrepreneurship',
    description: 'Started and managed my own thrift store startup. Successfully established the business, managed operations, and achieved profitability. Made the strategic decision to focus on career development in the IT field, leading to the closure of the venture to pursue professional growth opportunities.',
    tags: ['entrepreneurship', 'startup', 'business']
  },
  {
    id: '2',
    date: 'Mar 01, 2023 - May 01, 2023',
    title: 'Roku Taxi | Digital Marketing Internship',
    description: 'Completed a digital marketing internship at Roku Taxi, gaining hands-on experience in digital marketing strategies, social media management, content creation, and campaign analysis. Demonstrated strong performance throughout the internship, which led to receiving a job offer letter from the company.',
    tags: ['internship', 'digital-marketing', 'experience']
  },
  {
    id: '3',
    date: 'Nov 07, 2024 - Feb 01, 2025',
    title: 'Tata Consultancy Services | Graduate Trainee',
    description: 'Completed graduate training program at Tata Consultancy Services, gaining comprehensive knowledge in software development, project management, and industry best practices. Participated in various training modules covering technical skills, soft skills, and domain knowledge.',
    tags: ['work', 'training', 'tcs']
  },
  {
    id: '4',
    date: 'Feb 01, 2025 - Present',
    title: 'Tata Consultancy Services | Data Analyst',
    description: 'Working as a Data Analyst at TCS, focusing on data analysis, business intelligence, and providing actionable insights through data visualization and reporting. Responsible for analyzing large datasets, creating dashboards, and supporting data-driven decision making processes.',
    tags: ['work', 'data-analysis', 'tcs']
  }
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Amit-Shatagar', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amitshetty18', icon: 'Linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/amit_shetty___', icon: 'Instagram' }
];

export const featuredProjects = [
  { name: '3dicons', url: 'https://3dicons.co', icon: 'Box' },
  { name: 'Designletter', url: 'https://designletter.co', icon: 'Mail' },
  { name: 'Illlustrations', url: 'https://illlustrations.co', icon: 'Palette' }
];

export const footerLinks = [
  { name: 'GitHub', url: 'https://github.com/Amit-Shatagar', icon: 'Github' },
  { name: 'Portfolio', url: '/', icon: 'Home' },
  { name: 'Instagram', url: 'https://www.instagram.com/amit_shetty___', icon: 'Instagram' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amitshetty18', icon: 'Linkedin' }
];
