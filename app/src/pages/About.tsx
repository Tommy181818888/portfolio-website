import { motion } from 'framer-motion';
import { ExternalLink, Database, BarChart3, Code, TrendingUp, Users, Target, Award, Briefcase } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';

export function About() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About"
        description="Data Analyst at TCS | Transforming data into actionable insights and driving business intelligence solutions."
      />

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with Current Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent-purple/10 text-accent-purple px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              Currently at Tata Consultancy Services
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Data Analyst & Business Intelligence Professional
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              I transform complex datasets into meaningful insights, build analytical dashboards,
              and drive data-driven decision making to help businesses optimize their performance and strategy.
            </p>
          </motion.div>

          {/* Current Role & Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-accent-purple/5 to-accent-blue/5 rounded-2xl p-8 border border-accent-purple/10">
              <h2 className="font-semibold text-text-primary mb-6 text-xl flex items-center gap-3">
                <Target className="w-6 h-6 text-accent-purple" />
                Current Role: Data Analyst at TCS
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-text-primary mb-3">Key Responsibilities</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start gap-2">
                      <Database className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                      Analyze large datasets to extract actionable business insights
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                      Design and develop interactive dashboards and reports
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                      Identify trends, patterns, and opportunities in data
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                      Collaborate with cross-functional teams to support data-driven decisions
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-3">Daily Activities</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Data cleaning and preprocessing</li>
                    <li>• Statistical analysis and modeling</li>
                    <li>• KPI monitoring and reporting</li>
                    <li>• Stakeholder presentations</li>
                    <li>• Process optimization recommendations</li>
                    <li>• ETL pipeline management</li>
                  </ul>
                </div>
              </div>

              {/* Client Information */}
              <div className="mt-8 pt-6 border-t border-accent-purple/20">
                <h3 className="font-medium text-text-primary mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-purple" />
                  Key Client: Apple Inc.
                </h3>
                <div className="bg-white/30 dark:bg-black/30 rounded-lg p-4 border border-accent-purple/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs"></span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">Apple Inc.</h4>
                      <p className="text-text-secondary text-xs">Global Technology Leader</p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Working directly with Apple, one of the world's most innovative technology companies.
                    Responsible for analyzing complex datasets, creating business intelligence solutions,
                    and providing data-driven insights to support Apple's strategic initiatives and global operations.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-accent-purple/10 text-accent-purple text-xs rounded-full">Global Operations</span>
                    <span className="px-2 py-1 bg-accent-blue/10 text-accent-blue text-xs rounded-full">Business Intelligence</span>
                    <span className="px-2 py-1 bg-accent-pink/10 text-accent-pink text-xs rounded-full">Strategic Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-semibold text-text-primary mb-6 text-xl">Professional Journey</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">University Gold Medalist - BCA</h3>
                  <p className="text-text-secondary text-sm mb-1">Academic Excellence & Leadership</p>
                  <p className="text-text-muted text-xs">Achieved gold medal for outstanding academic performance and contributions to university life.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Thrift Store Entrepreneur</h3>
                  <p className="text-text-secondary text-sm mb-1">Startup Founder & Business Owner</p>
                  <p className="text-text-muted text-xs">Founded and managed a successful thrift store business, gaining valuable entrepreneurial experience and business acumen.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-pink/10 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Digital Marketing Internship</h3>
                  <p className="text-text-secondary text-sm mb-1">Roku Taxi - Marketing Excellence</p>
                  <p className="text-text-muted text-xs">Excelled in digital marketing internship, receiving a job offer and gaining hands-on experience in campaign management and analytics.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                  <Database className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">TCS Graduate Trainee</h3>
                  <p className="text-text-secondary text-sm mb-1">Professional Development Program</p>
                  <p className="text-text-muted text-xs">Completed comprehensive training program covering software development, project management, and industry best practices.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-semibold text-text-primary mb-6 text-xl">Technical Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/50 dark:bg-black/50 rounded-xl p-6 border border-border">
                <Database className="w-8 h-8 text-accent-purple mb-3" />
                <h3 className="font-medium text-text-primary mb-2">Data Analysis</h3>
                <p className="text-text-secondary text-sm">SQL, Python, R, Excel, Statistical Analysis, Data Visualization</p>
              </div>
              <div className="bg-white/50 dark:bg-black/50 rounded-xl p-6 border border-border">
                <BarChart3 className="w-8 h-8 text-accent-blue mb-3" />
                <h3 className="font-medium text-text-primary mb-2">Business Intelligence</h3>
                <p className="text-text-secondary text-sm">Power BI, Tableau, Looker, Dashboard Design, KPI Monitoring</p>
              </div>
              <div className="bg-white/50 dark:bg-black/50 rounded-xl p-6 border border-border">
                <Code className="w-8 h-8 text-accent-pink mb-3" />
                <h3 className="font-medium text-text-primary mb-2">Programming</h3>
                <p className="text-text-secondary text-sm">Python, SQL, JavaScript, ETL Processes, Data Pipelines</p>
              </div>
            </div>
          </motion.div>

          {/* Personal Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-semibold text-text-primary mb-6 text-xl">Beyond the Data</h2>
            <div className="bg-gradient-to-r from-accent-purple/5 to-accent-blue/5 rounded-2xl p-8 border border-accent-purple/10">
              <p className="text-text-secondary leading-relaxed mb-4">
                When I'm not analyzing datasets or building dashboards, I enjoy exploring the intersection of technology and creativity.
                My entrepreneurial journey with the thrift store taught me valuable lessons about business strategy, customer relations, and strategic decision-making.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                I believe in continuous learning and staying updated with the latest trends in data science and analytics.
                My goal is to leverage data to solve real-world problems and help organizations make informed decisions that drive growth and innovation.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I'm passionate about mentoring aspiring data professionals and sharing knowledge about data analytics best practices.
                Whether it's through technical expertise or entrepreneurial insights, I strive to make a meaningful impact in everything I do.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="font-semibold text-text-primary mb-6 text-xl">Let's Connect</h2>
            <div className="bg-white/50 dark:bg-black/50 rounded-xl p-6 border border-border">
              <p className="text-text-secondary leading-relaxed mb-4">
                I'm always interested in discussing data analytics projects, business intelligence solutions,
                or opportunities to collaborate on data-driven initiatives.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/amitshetty18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-purple hover:text-accent-pink transition-colors"
                >
                  LinkedIn <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Amit-Shatagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-purple hover:text-accent-pink transition-colors"
                >
                  GitHub <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="/work"
                  className="inline-flex items-center gap-2 text-accent-purple hover:text-accent-pink transition-colors"
                >
                  View My Work <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-text-muted text-xs mt-4">
                Feel free to reach out for collaborations, data analytics discussions, or professional opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
