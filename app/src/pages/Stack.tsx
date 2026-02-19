import { motion } from 'framer-motion';
import { PageHeader } from '@/components/shared/PageHeader';
import { AppIcon } from '@/components/shared/AppIcon';
import { apps } from '@/lib/data';

export function Stack() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Tech Stack"
        description="Comprehensive overview of my expertise in data analytics, business intelligence, technical development, design, and professional skills."
      />
      
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Data Analytics & Business Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl"
          >
            <h2 className="text-lg font-semibold text-text-primary mb-4 text-center">Data Analytics & Business Intelligence</h2>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p><strong className="text-accent-purple">Excel:</strong> Advanced formulas, Pivot Tables, Macros, and VBA for automation.</p>
              <p><strong className="text-accent-blue">Power BI:</strong> Developing interactive dashboards and DAX-based calculated measures.</p>
              <p><strong className="text-accent-green">Tableau:</strong> Creating complex visual analytics and high-impact data stories.</p>
              <p><strong className="text-accent-pink">Looker Studio:</strong> Building cloud-integrated reports for marketing and web data.</p>
              <p><strong className="text-accent-purple">Statistical Analysis:</strong> Applying hypothesis testing, regression, and probability.</p>
              <p><strong className="text-accent-blue">Data Storytelling:</strong> Contextualizing raw data into persuasive business narratives.</p>
            </div>
          </motion.div>

          {/* Technical Stack & Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl"
          >
            <h2 className="text-lg font-semibold text-text-primary mb-4 text-center">Technical Stack & Development</h2>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p><strong className="text-accent-purple">SQL (PostgreSQL/MySQL):</strong> Database querying, schema management, and optimization.</p>
              <p><strong className="text-accent-blue">Python (Pandas/NumPy):</strong> Scripting for data manipulation and advanced computation.</p>
              <p><strong className="text-accent-green">Machine Learning:</strong> Predictive modeling using Scikit-learn for trend forecasting.</p>
              <p><strong className="text-accent-pink">ETL Pipelines:</strong> Automating the Extraction, Transformation, and Loading of data.</p>
              <p><strong className="text-accent-purple">GitHub:</strong> Version control, code documentation, and collaborative development.</p>
              <p><strong className="text-accent-blue">Cloud Analytics:</strong> Managing datasets within Snowflake, BigQuery, or AWS.</p>
            </div>
          </motion.div>

          {/* Design & Creative Suite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl"
          >
            <h2 className="text-lg font-semibold text-text-primary mb-4 text-center">Design & Creative Suite</h2>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p><strong className="text-accent-purple">Figma:</strong> Prototyping dashboard UI/UX and user-centric data interfaces.</p>
              <p><strong className="text-accent-blue">Adobe Creative Suite:</strong> Designing professional-grade infographics and brand assets.</p>
              <p><strong className="text-accent-green">Canva:</strong> Rapid creation of branded presentations and social data snippets.</p>
              <p><strong className="text-accent-pink">UI/UX Principles:</strong> Applying layout logic to ensure data tools are intuitive.</p>
            </div>
          </motion.div>

          {/* Corporate & Professional Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl"
          >
            <h2 className="text-lg font-semibold text-text-primary mb-4 text-center">Corporate & Professional Soft Skills</h2>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p><strong className="text-accent-purple">Stakeholder Management:</strong> Aligning technical results with executive business goals.</p>
              <p><strong className="text-accent-blue">Client Communication:</strong> Translating complex jargon into actionable insights for clients.</p>
              <p><strong className="text-accent-green">Handling Pressure:</strong> Maintaining accuracy and focus during tight reporting cycles.</p>
              <p><strong className="text-accent-pink">Task Management:</strong> Prioritizing multiple high-stakes projects simultaneously.</p>
              <p><strong className="text-accent-purple">Team Collaboration:</strong> Working as a cross-functional player between IT and Business.</p>
              <p><strong className="text-accent-blue">Conflict Resolution:</strong> Managing differing data interpretations to find a "single source of truth."</p>
            </div>
          </motion.div>

          {/* Management & Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl"
          >
            <h2 className="text-lg font-semibold text-text-primary mb-4 text-center">Management & Process</h2>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p><strong className="text-accent-purple">Agile/Scrum:</strong> Managing project lifecycles through iterative sprints.</p>
              <p><strong className="text-accent-blue">Business Acumen:</strong> Understanding industry-specific KPIs like ROI and Churn.</p>
              <p><strong className="text-accent-green">Data Governance:</strong> Ensuring compliance with privacy laws (GDPR) and data security.</p>
              <p><strong className="text-accent-pink">Continuous Learning:</strong> Rapidly adapting to new AI-powered analytical tools.</p>
            </div>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl"
          >
            <h2 className="text-lg font-semibold text-text-primary mb-6 text-center">Tools & Technologies</h2>
            <div className="grid grid-cols-5 gap-4">
              {apps.map((app, index) => (
                <AppIcon key={app.id} app={app} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
