import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Download,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Star,
  Send,
  Check,
  AlertCircle
} from 'lucide-react';

interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    textMuted: string;
    background: string;
    surface: string;
  };
}

const themes: { light: Theme; dark: Theme } = {
  light: {
    name: 'vintage',
    colors: {
    primary: '#5A4FCF',       // Rich indigo for buttons/CTAs (pairs with dark's primary)
    secondary: '#D6D4E0',     // Light lavender-gray for subtle surfaces
    accent: '#F78C6B',        // Soft coral for warmth and highlights
    text: '#1F1F25',          // Deep charcoal for readability
    textMuted: '#6C6C7A',     // Cool muted gray for less prominent text
    background: '#F9F9FB',    // Very light gray, not pure white
    surface: '#FFFFFF'        // Clean white for cards/sections
    }
  },
  dark: {
    name: 'technical',
    colors: {
   primary: '#8F7CEC',       // Soft violet-blue (for buttons/CTAs)
    secondary: '#3D3A5A',     // Muted indigo-gray
    accent: '#FFAD5E',        // Warm orange for highlights (e.g., links, icons)
    text: '#E6E1E5',          // Light grayish white (main text)
    textMuted: '#A29EAB',     // Muted lavender-gray (secondary text)
    background: '#1A1A1F',    // Dark charcoal (main background)
    surface: '#2B2B35'        // Slightly lighter surface for cards/sections
    }
  }
};

const projects = [
  {
    id: 1,
    title: 'Formula Student Electric Car',
    category: 'Automotive',
    description: 'Complete vehicle design and manufacturing for international competition',
    tools: ['SolidWorks', 'CATIA V5', 'CAD/CAM'],
    outcome: 'Successfully competed in Formula Student competition with optimized weight-to-power ratio',
    images: ['https://images.pexels.com/photos/163016/car-race-ferrari-racing-car-163016.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 2,
    title: 'MFCC & CAC Instrument Consoles',
    category: 'Aerospace',
    description: 'Military-grade flight control console design and manufacturing',
    tools: ['SolidWorks', 'AutoCAD', 'GD&T'],
    outcome: '30% reduction in manufacturing complexity while maintaining mil-spec standards',
    images: ['https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 3,
    title: 'NESCOM VPS Console',
    category: 'Defense',
    description: 'Specialized console design for defense applications',
    tools: ['CATIA V5', 'Creo Parametric', 'Sheet Metal'],
    outcome: 'Delivered ruggedized solution meeting all environmental specifications',
    images: ['https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 4,
    title: 'Flight Simulator Casings',
    category: 'Simulation',
    description: 'Precision-engineered protective casings for flight simulation equipment',
    tools: ['SolidWorks', 'Sheet Metal', '3D Printing'],
    outcome: '40% weight reduction with improved thermal management',
    images: ['https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 5,
    title: 'UPS & Raspberry Pi Enclosures',
    category: 'Electronics',
    description: 'Custom enclosure design for electronic components',
    tools: ['Autodesk Inventor', '3D Printing', 'Ultimaker CURA'],
    outcome: 'Cost-effective solution with 50% faster prototyping cycle',
    images: ['https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800']
  },
  {
    id: 6,
    title: 'Race Car Chassis',
    category: 'Automotive',
    description: 'Lightweight chassis design for high-performance racing',
    tools: ['SolidWorks', 'MATLAB', 'FEA Analysis'],
    outcome: '25% weight reduction while increasing structural rigidity by 15%',
    images: ['https://images.pexels.com/photos/6249/red-sports-car-on-road.jpg?auto=compress&cs=tinysrgb&w=800']
  }
];

const experiences = [
  {
    title: 'Product Development & Parts Localization Engineer',
    company: 'Changan Automobile Pakistan',
    period: 'Jul 2022 – Oct 2022',
    achievements: [
      'Localized CKD parts resulting in 36% cost reduction',
      'Achieved 80% faster shipping times through supply chain optimization',
      'Boosted production efficiency by 25% through process improvements'
    ]
  },
  {
    title: 'Mechanical Design Engineer',
    company: 'DIGITEKK Vision',
    period: 'Oct 2021 – Jun 2022',
    achievements: [
      'Specialized in sheet-metal design and 3D-printing R&D',
      'Reduced prototyping time by 50% through optimized workflows',
      'Increased junior designer productivity by 30% through mentoring'
    ]
  },
  {
    title: 'Mechanical Engineering Intern',
    company: 'Dewan Farooque Motors',
    period: 'Feb 2018 – Mar 2018',
    achievements: [
      'Completed comprehensive cradle-to-grave manufacturing report',
      'Gained hands-on experience in automotive manufacturing processes'
    ]
  }
];

const skills = [
  { name: 'SolidWorks', level: 95 },
  { name: 'AutoCAD', level: 90 },
  { name: 'CATIA V5', level: 85 },
  { name: 'Autodesk Inventor', level: 88 },
  { name: 'Creo Parametric', level: 80 },
  { name: 'MATLAB', level: 75 },
  { name: '3D Printing', level: 85 },
  { name: 'GD&T', level: 90 }
];

const achievements = [
  'Karachi Youth Award (2021)',
  'University Sports Captain',
  'Vice President, Cricket Club',
  'Head of CAD for F1 Team Endeavour',
  'DICE Energy & Water Innovation Event Organizer',
  'Head of Sports Council'
];

const testimonials = [
  {
    name: 'Dr. Ahmed Khan',
    title: 'Senior Engineering Manager',
    company: 'Changan Automobile Pakistan',
    text: 'Hasan demonstrated exceptional technical skills and delivered cost savings that exceeded our expectations. His ability to optimize designs while maintaining quality standards is remarkable.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Sarah Mitchell',
    title: 'Lead Designer',
    company: 'DIGITEKK Vision',
    text: 'Working with Hasan was a pleasure. His innovative approach to 3D printing and rapid prototyping significantly improved our development cycles.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const currentTheme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.style.setProperty('--color-primary', currentTheme.colors.primary);
    document.documentElement.style.setProperty('--color-secondary', currentTheme.colors.secondary);
    document.documentElement.style.setProperty('--color-accent', currentTheme.colors.accent);
    document.documentElement.style.setProperty('--color-text', currentTheme.colors.text);
    document.documentElement.style.setProperty('--color-text-muted', currentTheme.colors.textMuted);
    document.documentElement.style.setProperty('--color-background', currentTheme.colors.background);
    document.documentElement.style.setProperty('--color-surface', currentTheme.colors.surface);
  }, [isDark, currentTheme]);

  const toggleTheme = () => setIsDark(!isDark);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.honeypot) return; // Spam protection
    
    setContactStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setContactStatus('success');
      setContactForm({ name: '', email: '', message: '', honeypot: '' });
      setTimeout(() => setContactStatus('idle'), 3000);
    }, 1000);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: currentTheme.colors.background,
        color: currentTheme.colors.text,
        fontFamily: "'Open Sans', sans-serif"
      }}
    >
      {/* Navigation Header */}
      <header 
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300"
        style={{ 
          backgroundColor: `${currentTheme.colors.surface}95`,
          borderColor: currentTheme.colors.accent
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 
                className="text-xl font-bold cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={() => scrollToSection('home')}
              >
                Hasan Saeed
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'experience', 'skills', 'achievements', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:opacity-80 transition-opacity ${
                    activeSection === item ? 'font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-colors hover:opacity-80"
                style={{ backgroundColor: currentTheme.colors.accent }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ backgroundColor: currentTheme.colors.accent }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div 
              className="md:hidden py-4 border-t"
              style={{ borderColor: currentTheme.colors.accent }}
            >
              <nav className="flex flex-col space-y-2">
                {['home', 'about', 'projects', 'experience', 'skills', 'achievements', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left py-2 px-4 capitalize hover:opacity-80 transition-opacity"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Mechanical Design Engineer
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto" style={{ color: currentTheme.colors.textMuted }}>
              Cost-Saving • CAD • Sustainable Product Development
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              Highly skilled mechanical design & product development engineer specializing in 3D CAD modeling, assemblies, 
              and process optimization. Proven track record reducing material costs by up to 36%, boosting production efficiency by 25%, 
              and applying sustainable practices throughout the product life cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: currentTheme.colors.accent,
                  color: currentTheme.colors.text
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:scale-105"
                style={{ 
                  borderColor: currentTheme.colors.accent,
                  color: currentTheme.colors.text
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20"
        style={{ backgroundColor: currentTheme.colors.surface }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                About Me
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Based in Northampton, United Kingdom, I am a passionate mechanical design engineer with expertise in 
                3D CAD modeling, product development, and sustainable engineering practices. My journey began at NED University 
                of Engineering & Technology, where I earned my Bachelor's in Mechanical Engineering, followed by an MSc in 
                Advanced Design & Manufacturing from the University of Northampton.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Throughout my career, I've consistently delivered measurable results: reducing material costs by 36% at 
                Changan Automobile Pakistan, accelerating prototyping by 50% at DIGITEKK Vision, and leading innovative 
                projects from Formula Student cars to military-grade consoles.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-lg" style={{ backgroundColor: currentTheme.colors.background }}>
                  <div className="text-2xl font-bold" style={{ color: currentTheme.colors.accent }}>36%</div>
                  <div className="text-sm" style={{ color: currentTheme.colors.textMuted }}>Cost Reduction</div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: currentTheme.colors.background }}>
                  <div className="text-2xl font-bold" style={{ color: currentTheme.colors.accent }}>50%</div>
                  <div className="text-sm" style={{ color: currentTheme.colors.textMuted }}>Faster Prototyping</div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: currentTheme.colors.background }}>
                  <div className="text-2xl font-bold" style={{ color: currentTheme.colors.accent }}>25%</div>
                  <div className="text-sm" style={{ color: currentTheme.colors.textMuted }}>Efficiency Gain</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Syed Muhammad Hasan Saeed"
                className="w-80 h-80 object-cover rounded-full mx-auto shadow-2xl"
              />
              <div className="mt-8 flex justify-center space-x-4">
                <div className="flex items-center space-x-2" style={{ color: currentTheme.colors.textMuted }}>
                  <MapPin size={16} />
                  <span className="text-sm">Northampton, UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ backgroundColor: currentTheme.colors.surface }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div 
                    className="text-xs font-semibold mb-2 px-2 py-1 rounded inline-block"
                    style={{ 
                      backgroundColor: currentTheme.colors.accent,
                      color: currentTheme.colors.text
                    }}
                  >
                    {project.category}
                  </div>
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: currentTheme.colors.textMuted }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span 
                        key={tool}
                        className="text-xs px-2 py-1 rounded"
                        style={{ 
                          backgroundColor: currentTheme.colors.background,
                          color: currentTheme.colors.textMuted
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className="py-20"
        style={{ backgroundColor: currentTheme.colors.surface }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Professional Experience
            </h2>
            <button
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ 
                backgroundColor: currentTheme.colors.accent,
                color: currentTheme.colors.text
              }}
            >
              <Download size={20} />
              <span>Download Full Resume</span>
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div 
                  className="absolute left-0 top-0 w-4 h-4 rounded-full"
                  style={{ backgroundColor: currentTheme.colors.accent }}
                />
                {index < experiences.length - 1 && (
                  <div 
                    className="absolute left-2 top-4 w-0.5 h-full -ml-px"
                    style={{ backgroundColor: currentTheme.colors.accent }}
                  />
                )}
                
                <div className="ml-6">
                  <h3 
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {exp.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="text-sm" style={{ color: currentTheme.colors.textMuted }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check size={16} className="mt-1 flex-shrink-0" style={{ color: currentTheme.colors.accent }} />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Skills & Certifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm" style={{ color: currentTheme.colors.textMuted }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full rounded-full h-2" style={{ backgroundColor: currentTheme.colors.surface }}>
                      <div 
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ 
                          backgroundColor: currentTheme.colors.accent,
                          width: `${skill.level}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Certifications</h3>
              <div className="space-y-3">
                {[
                  'SolidWorks Certified Professional',
                  'SolidWorks Sheet Metal Specialist',
                  'SolidWorks Drawing Specialist',
                  'SolidWorks Surface Modeling',
                  'DriveWorksXpress Certified',
                  'Autodesk Inventor 2022 Essentials',
                  'Rapid Prototyping for Product Design',
                  'MATLAB Certified'
                ].map((cert) => (
                  <div key={cert} className="flex items-center space-x-3">
                    <Award size={16} style={{ color: currentTheme.colors.accent }} />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section 
        id="achievements" 
        className="py-20"
        style={{ backgroundColor: currentTheme.colors.surface }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Achievements & Awards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="p-6 rounded-lg text-center hover:scale-105 transition-transform"
                style={{ backgroundColor: currentTheme.colors.background }}
              >
                <Star className="mx-auto mb-3" size={24} style={{ color: currentTheme.colors.accent }} />
                <p className="font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            What Colleagues Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg shadow-lg"
                style={{ backgroundColor: currentTheme.colors.surface }}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm" style={{ color: currentTheme.colors.textMuted }}>
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20"
        style={{ backgroundColor: currentTheme.colors.surface }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={20} style={{ color: currentTheme.colors.accent }} />
                  <span>hasan199822@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} style={{ color: currentTheme.colors.accent }} />
                  <span>+44 7552 060 815</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} style={{ color: currentTheme.colors.accent }} />
                  <span>Northampton, United Kingdom</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin size={20} style={{ color: currentTheme.colors.accent }} />
                  <a 
                    href="https://linkedin.com/in/syed-muhammad-hasan-saeed-36a0aa1bb"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot"
                  value={contactForm.honeypot}
                  onChange={(e) => setContactForm({ ...contactForm, honeypot: e.target.value })}
                  className="hidden"
                />
                
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: currentTheme.colors.background,
                      borderColor: currentTheme.colors.accent,
                      color: currentTheme.colors.text
                    }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: currentTheme.colors.background,
                      borderColor: currentTheme.colors.accent,
                      color: currentTheme.colors.text
                    }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none"
                    style={{ 
                      backgroundColor: currentTheme.colors.background,
                      borderColor: currentTheme.colors.accent,
                      color: currentTheme.colors.text
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={contactStatus === 'sending'}
                  className="w-full px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  style={{ 
                    backgroundColor: currentTheme.colors.accent,
                    color: currentTheme.colors.text
                  }}
                >
                  {contactStatus === 'sending' ? (
                    <span>Sending...</span>
                  ) : contactStatus === 'success' ? (
                    <>
                      <Check size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {contactStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-500">
                    <AlertCircle size={16} />
                    <span className="text-sm">Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: currentTheme.colors.accent }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://linkedin.com/in/syed-muhammad-hasan-saeed-36a0aa1bb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hasan199822@gmail.com"
              className="hover:opacity-80 transition-opacity"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm" style={{ color: currentTheme.colors.textMuted }}>
            © 2024 Syed Muhammad Hasan Saeed. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div 
            className="max-w-4xl max-h-[90vh] w-full rounded-lg overflow-hidden overflow-y-auto"
            style={{ backgroundColor: currentTheme.colors.surface }}
          >
            <div className="relative">
              <img
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8">
              <div 
                className="text-sm font-semibold mb-2 px-3 py-1 rounded inline-block"
                style={{ 
                  backgroundColor: currentTheme.colors.accent,
                  color: currentTheme.colors.text
                }}
              >
                {selectedProject.category}
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {selectedProject.title}
              </h3>
              <p className="mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Tools & Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 rounded text-sm"
                      style={{ 
                        backgroundColor: currentTheme.colors.background,
                        color: currentTheme.colors.textMuted
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: currentTheme.colors.background }}>
                <h4 className="font-semibold mb-2">Project Outcome:</h4>
                <p className="text-sm">{selectedProject.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;