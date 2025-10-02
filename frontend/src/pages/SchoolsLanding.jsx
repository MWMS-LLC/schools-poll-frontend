import React from 'react'
import { useNavigate } from 'react-router-dom'
import HamburgerMenu from '../components/HamburgerMenu.jsx'
import Footer from '../components/Footer.jsx'

const SchoolsLanding = () => {
  const navigate = useNavigate()

  return (
    <div style={styles.container}>
      {/* Hamburger Menu */}
      <HamburgerMenu />
      
      {/* Main Content */}
      <div style={styles.content}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <div style={styles.logoContainer}>
            <div style={styles.logoText}>My World My Say</div>
            <div style={styles.logoGlow}></div>
          </div>
          
          <div style={styles.taglineContainer}>
            <div style={styles.tagline}>For Schools</div>
            <div style={styles.mainTagline}>Help teens listen to each other anonymously</div>
            <div style={styles.subtitle}>A free emotional reflection tool that complements your school's efforts</div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div style={styles.sectionsContainer}>
          
          {/* What We Offer Section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>What We Offer</h2>
            <p style={styles.sectionText}>
              Our polls validate feelings, give parents insight, and remind teens they're not alone. 
              The empathetic, uplifting soundtrack makes the experience inviting.
            </p>
            <p style={styles.sectionText}>
              Teens say they value this app for its honesty, the anonymity, and the comfort of knowing 
              others feel the same way.
            </p>
            <p style={styles.sectionText}>
              The more students who join—from different communities—the richer the insights become.
            </p>
          </div>

          {/* Why It Matters Section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Why It Matters</h2>
            <p style={styles.sectionText}>
              Teen mental health is more visible than ever, but support is still uneven across school districts. 
              A <a href="https://news.harvard.edu/gazette/story/2025/08/public-schools-a-weak-link-in-efforts-to-protect-teen-mental-health-study-suggests/" target="_blank" rel="noopener noreferrer" style={styles.link}>2025 Harvard Medical School study</a> found that only 30% of U.S. public schools screen students for mental health issues.
            </p>
            <p style={styles.sectionText}>
              Our platform is not a replacement for clinical care, but it offers a free emotional reflection tool 
              that complements school efforts and gives students a safe way to express what they're feeling.
            </p>
          </div>

          {/* Student Voices Section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Student Voices Already Involved</h2>
            <p style={styles.sectionText}>
              Two female students from Seaforth High School (NC) have already helped shape our project by giving 
              detailed feedback on the wording and emotional tone of reflection questions. Their insight helped us 
              avoid adult-sounding phrases and ensure the platform feels teen-centered, not adult-scripted.
            </p>
            <p style={styles.sectionText}>
              Two students from Chapel Hill High School (NC) have also shared their thoughts as male teens—emphasizing 
              how hard it is for boys to talk about emotions, and why safe spaces matter. All four students appreciated 
              the platform's anonymous format—it gave them space to open up and helped them feel less alone with their thoughts.
            </p>
          </div>

          {/* How Schools Can Help Section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>How Schools Can Help</h2>
            <p style={styles.sectionText}>
              We would love to involve a few more students from different backgrounds. Their voices can help ensure 
              our app resonates with a wide range of users. We are simply inviting honest feedback from those who 
              understand what it feels like to grow up today.
            </p>
            <p style={styles.sectionText}>
              If your school is interested, please reach out. We are happy to collaborate with counselors, 
              club advisors, or teachers to involve students in a safe and meaningful way.
            </p>
          </div>

          {/* Contact Section */}
          <div style={styles.contactSection}>
            <div style={styles.contactBox}>
              <p style={styles.contactTitle}>Please contact us at</p>
              <p style={styles.contactEmail}>
                <a href="mailto:info@MyWorldMySay.com" style={styles.emailLink}>info@MyWorldMySay.com</a>
              </p>
            </div>
          </div>

          {/* Links to Other Sites */}
          <div style={styles.linksSection}>
            <div style={styles.linkBox}>
              <p style={styles.linkText}>Want to see the teen experience?</p>
              <a 
                href="https://myworldmysay.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.linkButton}
              >
                Visit Teen Site →
              </a>
            </div>
            
            <div style={styles.linkBox}>
              <p style={styles.linkText}>Interested in the parent perspective?</p>
              <a 
                href="https://parents.myworldmysay.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.linkButton}
              >
                Visit Parents Site →
              </a>
            </div>
          </div>

          <p style={styles.noteText}>
            Note: This page is for school administrators, counselors, educators, and parents. 
            Teens using the app will continue to engage anonymously and safely inside the app environment.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0A0F2B 0%, #1A1F3B 50%, #2A2F4B 100%)',
    position: 'relative',
    overflowY: 'auto',
    padding: '20px'
  },
  
  content: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto'
  },
  
  headerSection: {
    marginTop: '60px',
    marginBottom: '40px',
    textAlign: 'center'
  },
  
  logoContainer: {
    position: 'relative',
    marginBottom: '20px'
  },
  
  logoText: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadow: '0 0 20px #2D7D7A, 0 0 40px #2D7D7A, 0 0 60px #2D7D7A, 0 0 80px #2D7D7A, 0 0 100px #2D7D7A',
    animation: 'logoFloat 3s ease-in-out infinite'
  },
  
  logoGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(45, 125, 122, 0.1) 0%, transparent 60%)',
    filter: 'blur(10px)',
    zIndex: -1
  },
  
  taglineContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 20px'
  },
  
  tagline: {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '15px',
    fontStyle: 'italic',
    lineHeight: '1.6'
  },
  
  mainTagline: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'white',
    letterSpacing: '1px'
  },
  
  subtitle: {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '15px',
    fontWeight: '500'
  },
  
  sectionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)'
  },
  
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4ECDC4',
    marginBottom: '15px',
    textAlign: 'center'
  },
  
  sectionText: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
    marginBottom: '15px'
  },
  
  link: {
    color: '#4ECDC4',
    textDecoration: 'underline',
    fontWeight: '500'
  },
  
  contactSection: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  },
  
  contactBox: {
    backgroundColor: 'rgba(78, 205, 196, 0.1)',
    borderRadius: '15px',
    padding: '25px',
    border: '2px solid rgba(78, 205, 196, 0.3)',
    textAlign: 'center',
    maxWidth: '400px'
  },
  
  contactTitle: {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '10px',
    fontWeight: '500'
  },
  
  contactEmail: {
    fontSize: '20px',
    color: '#4ECDC4',
    fontWeight: 'bold'
  },
  
  emailLink: {
    color: '#4ECDC4',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  },
  
  linksSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '30px'
  },
  
  linkBox: {
    backgroundColor: 'rgba(78, 205, 196, 0.1)',
    borderRadius: '15px',
    padding: '20px',
    border: '2px solid rgba(78, 205, 196, 0.3)',
    textAlign: 'center'
  },
  
  linkText: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '15px',
    fontWeight: '500'
  },
  
  linkButton: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#4ECDC4',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(78, 205, 196, 0.3)'
  },
  
  noteText: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: '30px',
    fontStyle: 'italic',
    lineHeight: '1.5'
  }
}

export default SchoolsLanding
