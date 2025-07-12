'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Globe, BrainCircuit } from 'lucide-react'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-800 via-stone-600 to-slate-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white font-bold text-xl"
            >
              Amin Asgharzadeh
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-stone-300 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-300/20 to-blue-300/15"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-700/10 to-stone-800/20"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I&apos;m{' '}
              <span className="gradient-text">Amin Asgharzadeh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A Data Scientist and GenAI Engineer crafting innovative solutions with cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="border border-stone-400 text-stone-300 hover:bg-stone-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="border border-stone-400 text-stone-300 hover:bg-stone-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-stone-400 text-stone-300 hover:bg-stone-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Asgharzade" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/amin-asgharzadeh/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:amin.asgharzadeh@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ArrowDown size={24} />
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-stone-800/30 to-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            
            {/* Personal Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-stone-400 shadow-2xl">
                <img 
                  src="https://i.postimg.cc/qvgy7BdZ/IMG000.jpg" 
                  alt="Amin Asgharzadeh"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I am a Senior Data Scientist at American Bureau of Shipping specializing in Generative AI and LLMs with 5+ years of ML experience.
              I&apos;ve built AI search platforms generating $4.2M in revenue, designed RAG chatbots, and implemented
              LLM safety protocols. My expertise includes time-series forecasting, predictive modeling, and
              leveraging vector databases with MLOps in Azure to deliver high-impact AI solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Data Science",
                description: "Expert in machine learning, statistical analysis, and data visualization using Python, R, SQL, and advanced analytics platforms like Dataiku and Azure Synapse Analytics."
              },
              {
                icon: <BrainCircuit className="w-8 h-8" />,
                title: "Generative AI",
                description: "Building intelligent systems with LLMs, NLP, and generative AI technologies using Langchain, LlamaIndex, HuggingFace, MCP, and Vector stores (Azure AI-Search) to solve complex business problems."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Application Development",
                description: "Developing backend systems and interactive dashboards using FastAPI, Flask, React, Streamlit, Tableau, Dash (Plotly), and PowerBI with CI/CD practices through Git, GitHub, and Azure DevOps."
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-stone-400 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Search Engine for Renewal Opportunities",
                description: "Developed an AI-driven search platform that identifies certification renewal opportunities, generating $4.2M in revenue for American Bureau of Shipping. Implemented CI/CD unit testing that reduced maintenance efforts by 3x and ensured AI model response consistency.",
                tech: ["Azure AI Search", "Azure OpenAI", "Azure VM", "Azure App Service", "Azure DevOps", "Python", "Flask", "SQL", "Locust"],
                image: "https://i.postimg.cc/RVPmzCFp/ai-powered-search-engine.jpg"
              },
              {
                title: "Text to SQL Agent",
                description: "A natural language to SQL query agent that uses LangChain, OpenAI, and PostgreSQL to convert plain text questions into SQL queries and provide answers with interactive CLI.",
                tech: ["LangChain", "OpenAI", "PostgreSQL", "Python", "CLI", "Streamlit", "Agentic AI"],
                image: "https://i.postimg.cc/3w8dJpcT/Chat-GPT-Image-Jul-6-2025-01-05-15-PM-1.png",
                github: "https://github.com/Asgharzade/txt2sql"
              },
              {
                title: "Income Demographic Analysis",
                description: "A machine learning project that analyzes demographic factors affecting income levels using census data, with data preprocessing, feature engineering, and model evaluation.",
                tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
                github: "https://github.com/Asgharzade/income-demographic-analysis"
              },
              {
                title: "Ship Detection System",
                description: "A CNN model to detect vessels using satellite imagery and classify their properties using computer vision and deep learning techniques for maritime surveillance.",
                tech: ["Computer Vision", "Deep Learning", "PIL", "NumPy", "Polars", "Jupyter"],
                image: "https://i.postimg.cc/52bC6j7f/20171106-184551-Location-4-A-Heading-East-Ship-Freighter.jpg",
                github: "https://github.com/Asgharzade/detect-the-ship"
              },
              {
                title: "MCP Chatbot with OpenAI Intent Detection",
                description: "An intelligent Streamlit-based chatbot that uses OpenAI's GPT-4.1 for smart intent detection and Serper API for real-time web search. Features automatic detection of when to search vs. chat, optimized search queries, chat history persistence, and MCP (Model Context Protocol) compliant tool integration.",
                tech: ["Streamlit", "OpenAI API", "Serper API", "MCP Protocol", "Python", "httpx", "Async/Await"],
                image: "https://i.postimg.cc/R0c5Hs5N/st-mcp.png",
                github: "https://github.com/Asgharzade/mcp-streamlit"
              },
              {
                title: "Amazon Chronos Time Series Analysis",
                description: "Advanced time series analysis and forecasting using Amazon Chronos with transformer-based models, LSTM networks, and ensemble methods for univariate and multivariate forecasting.",
                tech: ["PyTorch", "Chronos", "Transformers", "LSTM", "ARIMA", "Prophet"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
                github: "https://github.com/Asgharzade/amz-chronos"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-stone-600/20 text-stone-300 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-stone-400 hover:text-stone-300 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    {project.github ? (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-400 hover:text-stone-300 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    ) : (
                      <button className="text-stone-400 hover:text-stone-300 transition-colors">
                        <Github size={20} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-800/40 to-stone-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s connect and create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:amin.asgharzadeh@gmail.com"
                className="border border-stone-400 text-stone-300 hover:bg-stone-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/amin-asgharzadeh/"
                className="border border-stone-400 text-stone-300 hover:bg-stone-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-stone-600 bg-gradient-to-r from-stone-800/20 to-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Amin Asgharzadeh. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </footer>
    </main>
  )
} 