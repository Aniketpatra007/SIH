"use client";
import React from 'react';
import { Shield, Users, BookOpen, AlertTriangle, MapPin, Trophy, Eye, MessageSquare } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "Interactive Learning Modules",
      description: "Region-specific disaster education with engaging digital content tailored to local risks and hazards."
    },
    {
      icon: <Trophy size={24} />,
      title: "Gamified Experience",
      description: "Quizzes, challenges, and reward systems that make disaster preparedness training engaging and memorable."
    },
    {
      icon: <Eye size={24} />,
      title: "Virtual Reality Drills",
      description: "Safe simulations of earthquakes, floods, and fires that build confidence without real-world risks."
    },
    {
      icon: <Users size={24} />,
      title: "Admin Dashboard",
      description: "Comprehensive monitoring of preparedness scores, drill participation, and institutional readiness metrics."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Emergency Communication",
      description: "Quick access to emergency contacts and real-time alert systems for coordinated responses."
    },
    {
      icon: <MapPin size={24} />,
      title: "Localized Awareness",
      description: "Curriculum-integrated guidelines specific to regional disaster patterns and local emergency protocols."
    }
  ];

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#0f0e17',
    color: '#fffffe',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const navStyle = {
    borderBottom: '1px solid #444',
    padding: '1rem 1.5rem'
  };

  const navContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const navButtonsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  };

  const signInButtonStyle = {
    padding: '0.5rem 1.5rem',
    borderRadius: '0.5rem',
    border: '1px solid #a7a9be',
    color: '#fffffe',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  };

  const signUpButtonStyle = {
    padding: '0.5rem 1.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#ff8906',
    color: '#fffffe',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  };

  const heroSectionStyle = {
    padding: '5rem 1.5rem',
    textAlign: 'center' as const
  };

  const heroContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
  };

  const iconBgStyle = {
    padding: '1rem',
    borderRadius: '1rem',
    backgroundColor: '#232323'
  };

  const heroTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  };

  const heroSubtitleStyle = {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: '#a7a9be',
    maxWidth: '800px',
    margin: '0 auto 2rem auto',
    lineHeight: '1.6'
  };

  const buttonGroupStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    alignItems: 'center'
  };

  const primaryButtonStyle = {
    padding: '1rem 2rem',
    borderRadius: '0.75rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    backgroundColor: '#ff8906',
    color: '#fffffe',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const secondaryButtonStyle = {
    padding: '1rem 2rem',
    borderRadius: '0.75rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    border: '1px solid #a7a9be',
    color: '#fffffe',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'transform 0.2s'
  };

  const problemSectionStyle = {
    padding: '4rem 1.5rem',
    backgroundColor: '#232323'
  };

  const problemContainerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center' as const
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#fffffe'
  };

  const sectionTextStyle = {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    color: '#a7a9be'
  };

  const featuresSectionStyle = {
    padding: '5rem 1.5rem'
  };

  const featuresContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const featuresHeaderStyle = {
    textAlign: 'center' as const,
    marginBottom: '4rem'
  };

  const featuresHeaderTextStyle = {
    fontSize: '1.125rem',
    maxWidth: '600px',
    margin: '0 auto',
    color: '#a7a9be'
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  };

  const featureCardStyle = {
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor: '#232323',
    border: '1px solid #444',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const featureIconStyle = {
    width: '3rem',
    height: '3rem',
    borderRadius: '0.5rem',
    backgroundColor: '#ff8906',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    color: '#fffffe'
  };

  const featureTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#fffffe'
  };

  const featureDescStyle = {
    color: '#a7a9be',
    lineHeight: '1.6'
  };

  const innovationSectionStyle = {
    padding: '5rem 1.5rem',
    backgroundColor: '#232323'
  };

  const innovationContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center'
  };

  const innovationTextStyle = {
    fontSize: '1.125rem',
    marginBottom: '2rem',
    lineHeight: '1.7',
    color: '#a7a9be'
  };

  const benefitsListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const benefitItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
    color: '#fffffe'
  };

  const bulletStyle = {
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '50%',
    backgroundColor: '#ff8906'
  };

  const innovationVisualStyle = {
    position: 'relative' as const
  };

  const visualGridStyle = {
    aspectRatio: '1',
    borderRadius: '1rem',
    padding: '2rem',
    backgroundColor: '#0f0e17',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem'
  };

  const visualItemStyle = {
    aspectRatio: '1',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const ctaSectionStyle = {
    padding: '5rem 1.5rem'
  };

  const ctaContainerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center' as const
  };

  const ctaTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#fffffe'
  };

  const ctaTextStyle = {
    fontSize: '1.125rem',
    marginBottom: '2.5rem',
    color: '#a7a9be'
  };

  const footerStyle = {
    borderTop: '1px solid #444',
    padding: '2rem 1.5rem'
  };

  const footerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
    gap: '1rem'
  };

  const footerLogoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const footerTextStyle = {
    color: '#a7a9be'
  };

  return (
    <div style={containerStyle}>
      {/* Navigation */}
      <nav style={navStyle}>
        <div style={navContentStyle}>
          <div style={logoStyle}>
            <Shield size={32} color="#ff8906" />
            <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fffffe' }}>
              DisasterEd
            </h1>
          </div>
          <div style={navButtonsStyle}>
            <button 
              style={signInButtonStyle}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              Sign In
            </button>
            <button 
              style={signUpButtonStyle}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContainerStyle}>
          <div style={iconContainerStyle}>
            <div style={iconBgStyle}>
              <AlertTriangle size={64} color="#ff8906" />
            </div>
          </div>
          
          <h1 style={heroTitleStyle}>
            Transform Disaster<br />
            <span style={{ color: '#ff8906' }}>Preparedness Education</span>
          </h1>
          
          <p style={heroSubtitleStyle}>
            Interactive modules, gamified learning, and virtual drills that build confidence and ensure faster, 
            coordinated emergency responses tailored to local risks.
          </p>
          
          <div style={buttonGroupStyle}>
            <button 
              style={primaryButtonStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 137, 6, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Start Learning Today
            </button>
            <button 
              style={secondaryButtonStyle}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section style={problemSectionStyle}>
        <div style={problemContainerStyle}>
          <h2 style={sectionTitleStyle}>
            The Challenge We're Solving
          </h2>
          <p style={sectionTextStyle}>
            Traditional disaster preparedness training relies on infrequent manual drills and generic guidelines. 
            When real emergencies strike, panic takes over, responses are uncoordinated, and precious time is lost. 
            Educational institutions need a modern, engaging approach that builds genuine preparedness through 
            continuous learning and practice.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section style={featuresSectionStyle}>
        <div style={featuresContainerStyle}>
          <div style={featuresHeaderStyle}>
            <h2 style={sectionTitleStyle}>
              Our Solution
            </h2>
            <p style={featuresHeaderTextStyle}>
              A comprehensive digital platform that makes disaster preparedness engaging, 
              measurable, and effective through innovative technology.
            </p>
          </div>
          
          <div style={featuresGridStyle}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={featureCardStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 137, 6, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={featureIconStyle}>
                  {feature.icon}
                </div>
                <h3 style={featureTitleStyle}>
                  {feature.title}
                </h3>
                <p style={featureDescStyle}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section style={innovationSectionStyle}>
        <div style={innovationContainerStyle}>
          <div>
            <h2 style={sectionTitleStyle}>
              Innovation That Makes a Difference
            </h2>
            <p style={innovationTextStyle}>
              Unlike traditional manual drills, our platform integrates gamification, localized awareness, 
              and data-driven dashboards into a unified system. We make disaster training engaging, 
              scalable, and measurable—building safer, more resilient educational institutions.
            </p>
            <ul style={benefitsListStyle}>
              <li style={benefitItemStyle}>
                <div style={bulletStyle}></div>
                <span>Continuous, practical learning process</span>
              </li>
              <li style={benefitItemStyle}>
                <div style={bulletStyle}></div>
                <span>Reduces panic and builds confidence</span>
              </li>
              <li style={benefitItemStyle}>
                <div style={bulletStyle}></div>
                <span>Faster, coordinated responses</span>
              </li>
              <li style={benefitItemStyle}>
                <div style={bulletStyle}></div>
                <span>Tailored to local risks and hazards</span>
              </li>
            </ul>
          </div>
          <div style={innovationVisualStyle}>
            <div style={visualGridStyle}>
              <div style={{...visualItemStyle, backgroundColor: '#ff8906'}}>
                <BookOpen size={32} color="#fffffe" />
              </div>
              <div style={{...visualItemStyle, backgroundColor: '#e53170'}}>
                <Trophy size={32} color="#fffffe" />
              </div>
              <div style={{...visualItemStyle, backgroundColor: '#f25f4c'}}>
                <Eye size={32} color="#fffffe" />
              </div>
              <div style={{...visualItemStyle, backgroundColor: '#a7a9be'}}>
                <Users size={32} color="#fffffe" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <div style={ctaContainerStyle}>
          <h2 style={ctaTitleStyle}>
            Ready to Build Safer Institutions?
          </h2>
          <p style={ctaTextStyle}>
            Join educational institutions worldwide in transforming disaster preparedness 
            through innovative, engaging digital learning experiences.
          </p>
          <div style={buttonGroupStyle}>
            <button 
              style={primaryButtonStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 137, 6, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Started Free
            </button>
            <button 
              style={secondaryButtonStyle}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <div style={footerLogoStyle}>
            <Shield size={24} color="#ff8906" />
            <span style={{ fontWeight: '600', color: '#fffffe' }}>
              DisasterEd
            </span>
          </div>
          <p style={footerTextStyle}>
            © 2025 DisasterEd. Building resilient communities through education.
          </p>
        </div>
      </footer>
    </div>
  );
}
