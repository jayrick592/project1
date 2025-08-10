import { FaEnvelope, FaPhone, FaGlobe, FaFacebookF, FaTwitter, FaBehance, FaGooglePlusG, FaLinkedinIn, FaBriefcase, FaLightbulb, FaUser, FaThLarge, FaPencilAlt } from "react-icons/fa";
import { LuTriangle } from "react-icons/lu";
import logoDark from "./logo.png";
import logoLight from "./logo.png";
import styles from "./welcome.module.css";
import { useRef, useEffect, useState } from "react";

export function Welcome() {
  const servicesData = [
    {
      title: "CLEAN AND UNIQUE",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      icon: <LuTriangle size={32} color="#fff" />,
    },
    {
      title: "BUSINESS SOLUTION",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      icon: <FaBriefcase size={32} color="#fff" />,
    },
    {
      title: "ENHANCED CRAFTING",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      icon: <FaLightbulb size={32} color="#fff" />,
    },
    {
      title: "FREE CUSTOMISATION",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      icon: <FaThLarge size={32} color="#fff" />,
    },
    {
      title: "CREATIVE DESIGN",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      icon: <FaPencilAlt size={32} color="#fff" />,
    },
    {
      title: "ONLINE SUPPORT",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      icon: <FaUser size={32} color="#fff" />,
    },
  ];

  const projectRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBlogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation states
  const [heroVisible, setHeroVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [chooseUsVisible, setChooseUsVisible] = useState(false);
  const [expertSkillVisible, setExpertSkillVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const chooseUsRef = useRef<HTMLDivElement>(null);
  const expertSkillRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const handleObserve = (ref: React.RefObject<HTMLDivElement>, setter: (v: boolean) => void) => {
      if (!ref.current) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    };
    handleObserve(heroRef, setHeroVisible);
    handleObserve(servicesRef, setServicesVisible);
    handleObserve(aboutRef, setAboutVisible);
    handleObserve(chooseUsRef, setChooseUsVisible);
    // Add observer for expert skill section
    
    if (expertSkillRef.current) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setExpertSkillVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(expertSkillRef.current);
      return () => observer.disconnect();
    }
  }, []);

  // Animated counter hook
  function useCountUp(target: number, start: boolean, duration = 1200) {
    const [value, setValue] = useState(0);
    useEffect(() => {
      if (!start) return;
      let startTimestamp: number | null = null;
      function step(ts: number) {
        if (!startTimestamp) startTimestamp = ts;
        const progress = Math.min((ts - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setValue(target);
        }
      }
      requestAnimationFrame(step);
    }, [start, target, duration]);
    return value;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        overflow: "auto",
        background: "#fff"
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px"
        }}
      >
        {/* Hero Section */}
        <div
          id="home"
          style={{
            position: "relative",
            minHeight: 400,
            backgroundImage: "url('/welcome/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              zIndex: 1,
            }}
          />

          {/* Navbar */}
          <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
            {/* Top Bar */}
            <div
              style={{
                width: "100%",
                background: "#181716",
                color: "#c7b299",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem 2rem",
                letterSpacing: 1
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <span>
                  <FaEnvelope style={{ marginRight: 6 }} />
                  mail@infinitysupport.com
                </span>
                <span>
                  <FaPhone style={{ marginRight: 6 }} />
                  +1-(182)-871 971
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <span>
                  <FaGlobe style={{ marginRight: 6 }} />
                  Language: <span style={{ marginLeft: 4 }}>Eng</span>
                  <span style={{ marginLeft: 4, fontSize: 12 }}>▼</span>
                </span>
                <FaFacebookF />
                <FaTwitter />
                <FaBehance />
                <FaGooglePlusG />
                <FaLinkedinIn />
              </div>
            </div>
            {/* Main Nav */}
            <div
              style={{
                width: "100%",
                background: "rgba(20,20,20,0.95)",
                color: "#c7b299",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5rem 0 1.5rem 0",
                fontSize: "1.1rem",
                fontWeight: 500,
                letterSpacing: 2
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "60px" }}>
                {/* Logo Centered */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "60px" }}>
                  <img
                    src="/welcome/logo.png"
                    alt="Infinity Logo"
                    style={{ height: 48, marginBottom: 4 }}
                  />
                  <span style={{
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: 2,
                    color: "#c7b299",
                    textTransform: "uppercase"
                  }}>
                    INFINITY
                  </span>
                  <div style={{
                    width: 60,
                    height: 2,
                    background: "#c7b299",
                    marginTop: 4,
                    opacity: 0.5
                  }} />
                </div>
                {/* Nav Links */}
                <nav style={{ display: "flex", gap: "36px" }}>
                  <a href="#home" style={{
                    color: "#c7b299",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    letterSpacing: 2
                  }}>HOME</a>
                  <a href="#services" style={{
                    color: "#c7b299",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    letterSpacing: 2
                  }}>SERVICES</a>
                  <a href="#about" style={{
                    color: "#c7b299",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    letterSpacing: 2
                  }} onClick={handleAboutClick}>ABOUT</a>
                  <a href="#pricing" style={{
                    color: "#c7b299",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    letterSpacing: 2
                  }}>PRICING</a>
                  <a href="#project" style={{
                    color: "#c7b299",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    letterSpacing: 2
                  }} onClick={handleProjectClick}>PROJECT</a>
                  <a href="#testimonials" style={{
                    color: "#c7b299",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    letterSpacing: 2
                  }}>TESTIMONIALS</a>
                  <a href="#blog" style={{
                    color: "#c7b299",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    letterSpacing: 2
                  }} onClick={handleBlogClick}>BLOG</a>
                </nav>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div
            ref={heroRef}
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "calc(100vh - 100px)",
              textAlign: "center",
              color: "#fff",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 1s cubic-bezier(.77,0,.175,1), transform 1s cubic-bezier(.77,0,.175,1)"
            }}
          >
            <h2 style={{ fontWeight: 400, fontSize: "2rem", marginBottom: 0 }}>
              Unique And Clean Design
            </h2>
            <h1
              style={{
                fontWeight: 700,
                fontSize: "2.8rem",
                margin: "0.5rem 0 1.5rem 0",
                letterSpacing: 1,
              }}
            >
              Multi Purpose HTML Theme
            </h1>
            <p style={{ maxWidth: 500, fontSize: "1.1rem", margin: "0 auto" }}>
              Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className={styles.servicesSection}>
          <div
            ref={servicesRef}
            style={{
              ...(!servicesVisible && {
                opacity: 0,
                transform: "translateY(40px)"
              }),
              ...(servicesVisible && {
                opacity: 1,
                transform: "translateY(0)",
                transition: "opacity 1s .2s cubic-bezier(.77,0,.175,1), transform 1s .2s cubic-bezier(.77,0,.175,1)"
              })
            }}
            className={styles.servicesContainer}
          >
            {servicesData.map((service, i) => (
              <div key={service.title} className={styles.serviceItem}>
                <div className={styles.serviceIconBox}>
                  {service.icon}
                </div>
                <div className={styles.serviceTextBox}>
                  <div className={styles.serviceTitle}>{service.title}</div>
                  <div className={styles.serviceDesc}>{service.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* About Section */}
        <section id="about" className={styles.aboutSection} ref={aboutSectionRef}>
          <div
            ref={aboutRef}
            style={{
              ...(!aboutVisible && {
                opacity: 0,
                transform: "translateY(40px)"
              }),
              ...(aboutVisible && {
                opacity: 1,
                transform: "translateY(0)",
                transition: "opacity 1s .4s cubic-bezier(.77,0,.175,1), transform 1s .4s cubic-bezier(.77,0,.175,1)"
              })
            }}
            className={styles.aboutContainer}
          >
            {/* Left: Text and Sidebar */}
            <div className={styles.aboutLeft}>
              <h1 className={styles.aboutTitle}>
                About Infinity<span className={styles.aboutTitleDot}>.</span>
              </h1>
              <div className={styles.aboutSubtitle}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </div>
              <div className={styles.aboutContentRow}>
                {/* Sidebar */}
                <div className={styles.aboutSidebar}>
                  <div className={styles.aboutSidebarBox}>
                    {[
                      { label: "Our Plans", active: true },
                      { label: "Our Vision" },
                      { label: "History" },
                    ].map((item, idx) => (
                      <div
                        key={item.label}
                        className={item.active ? styles.sidebarItemActive : styles.sidebarItem}
                        style={{ borderBottom: idx < 2 ? "1px solid #eee" : "none" }}
                      >
                        {item.label}
                        <span className={styles.sidebarArrow}>&#8250;</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Main About Content */}
                <div className={styles.aboutMainContent}>
                  <div className={styles.aboutQuote}>
                    "If you want to build something big,<br />you have to start with a small step!"
                  </div>
                  <div className={styles.aboutText}>
                    Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                    <p> </p>
                    <div className={styles.signature}></div>
                    <img src="images/signature.png" alt="" className="img img-responsive"></img>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className={styles.aboutImageWrapper}>
              <img src="/about_us/about-man.jpg" alt="About Infinity" className={styles.aboutImage} />
            </div>
          </div>
        </section>


        {/* Expert Skill Section */}
        <section
          ref={expertSkillRef}
          style={{
            background: `url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
            padding: '80px 0',
            color: '#fff',
            position: 'relative',
            textAlign: 'center',
            minHeight: 400
          }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 10 }}>Expert Skill<span style={{ color: '#c7b299' }}>,</span></h2>
            <div style={{ fontSize: 18, marginBottom: 40, color: '#fff' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 60, flexWrap: 'wrap' }}>
              {[
                { value: 85, label: 'Javascript' },
                { value: 92, label: 'HTML' },
                { value: 75, label: 'php' },
                { value: 95, label: 'CSS' },
              ].map((skill, i) => {
                const animatedValue = useCountUp(skill.value, expertSkillVisible, 1200 + i * 200);
                return (
                  <div key={skill.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <svg width="140" height="140" viewBox="0 0 140 140">
                      <circle cx="70" cy="70" r="60" stroke="#fff" strokeWidth="8" fill="none" opacity="0.15" />
                      <circle
                        cx="70" cy="70" r="60"
                        stroke="#c7b299"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 60}
                        strokeDashoffset={2 * Math.PI * 60 * (1 - animatedValue / 100)}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 1s' }}
                      />
                      <text x="70" y="80" textAnchor="middle" fontSize="32" fill="#fff" fontWeight="bold">
                        {animatedValue}
                      </text>
                    </svg>
                    <div style={{ marginTop: 10, fontSize: 18 }}>{skill.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Optional: Overlay for dark effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.65)',
            zIndex: 1
          }} />
        </section>

        {/* Choose Us Section */}
        <section style={{ padding: "60px 0", background: "#fff" }}>
          <div
            ref={chooseUsRef}
            style={{
              ...(!chooseUsVisible && {
                opacity: 0,
                transform: "translateY(40px)"
              }),
              ...(chooseUsVisible && {
                opacity: 1,
                transform: "translateY(0)",
                transition: "opacity 1s .6s cubic-bezier(.77,0,.175,1), transform 1s .6s cubic-bezier(.77,0,.175,1)"
              })
            }}
          >
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <h2 style={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: "2.2rem",
                marginBottom: 8,
                letterSpacing: 1
              }}>
                Choose Us<span style={{ color: "#c7b299" }}>.</span>
              </h2>
              <div style={{ textAlign: "center", marginBottom: 40, color: "#444" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </div>
              {/* Row 1 */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 60,
                flexWrap: "wrap"
              }}>
                <div style={{ flex: "1 1 340px", maxWidth: 340 }}>
                  <div style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 10 }}>
                    Unique and Fully Responsive.
                  </div>
                  <div style={{ color: "#444", marginBottom: 18 }}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur.
                  </div>
                  <button style={{
                    background: "#c7b299",
                    color: "#fff",
                    border: "none",
                    padding: "10px 28px",
                    fontWeight: 700,
                    fontSize: 16,
                    borderRadius: 2,
                    cursor: "pointer"
                  }}>DETAILS</button>
                </div>
                <div style={{ flex: "1 1 220px", textAlign: "right" }}>
                  <img src="/choose_us/mobile.png" alt="Phone" style={{ maxWidth: 220, width: "100%" }} />
                </div>
              </div>
              {/* Row 2 */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 60,
                flexWrap: "wrap"
              }}>
                <div style={{ flex: "1 1 220px", textAlign: "left" }}>
                  <img src="/choose_us/laptop.jpg" alt="Laptop" style={{ maxWidth: 220, width: "100%" }} />
                </div>
                <div style={{ flex: "1 1 340px", maxWidth: 340 }}>
                  <div style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 10 }}>
                    Creative and Elegant Design
                  </div>
                  <div style={{ color: "#444", marginBottom: 18 }}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur.
                  </div>
                  <button style={{
                    background: "#c7b299",
                    color: "#fff",
                    border: "none",
                    padding: "10px 28px",
                    fontWeight: 700,
                    fontSize: 16,
                    borderRadius: 2,
                    cursor: "pointer"
                  }}>DETAILS</button>
                </div>
              </div>
              {/* Row 3 */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 0,
                flexWrap: "wrap"
              }}>
                <div style={{ flex: "1 1 340px", maxWidth: 340 }}>
                  <div style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 10 }}>
                    High-Res and Retina Ready
                  </div>
                  <div style={{ color: "#444", marginBottom: 18 }}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur.
                  </div>
                  <button style={{
                    background: "#c7b299",
                    color: "#fff",
                    border: "none",
                    padding: "10px 28px",
                    fontWeight: 700,
                    fontSize: 16,
                    borderRadius: 2,
                    cursor: "pointer"
                  }}>DETAILS</button>
                </div>
                <div style={{ flex: "1 1 220px", textAlign: "right" }}>
                  <img src="/choose_us/tablet.png" alt="Retina" style={{ maxWidth: 220, width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Banner Section */}
        <section style={{
          margin: "32px 0",
          display: "flex",
          justifyContent: "center"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "2px solid #c7b299",
            borderRadius: 2,
            background: "#fff",
            padding: "32px 40px",
            maxWidth: 1200,
            width: "100%"
          }}>
            {/* Left: Christmas Hat */}
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <img
                src="/promo/christmas-hat.png"
                alt="Christmas Hat"
                style={{ width: 64, height: 64 }}
              />
              <div>
                <div style={{ color: "#c7b299", fontWeight: 600, fontSize: 18, letterSpacing: 1, marginBottom: 2 }}>
                  CHRISTMAS OFFER
                </div>
                <div style={{ fontSize: 26, color: "#222", fontWeight: 400 }}>
                  Get our Service at 50% less price till the New Year!
                </div>
              </div>
            </div>
            {/* Right: Buy Now Button */}
            <button
              style={{
                background: "#111",
                color: "#fff",
                fontWeight: 700,
                fontSize: 20,
                border: "none",
                borderRadius: 2,
                padding: "18px 48px",
                cursor: "pointer",
                letterSpacing: 2
              }}
            >
              BUY NOW
            </button>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={styles.pricingSection}>
          <div className={styles.pricingContainer}>
            {[
              {
                title: 'STATER',
                price: 33,
                features: [
                  { text: 'perspiciatis unde omnis iste', included: true },
                  { text: 'natus error sit volupta', included: true },
                  { text: 'accusantium dolorem laud', included: true },
                  { text: 'antium totam rem aper', included: false },
                  { text: 'aqua ipsa quae', included: false },
                ],
              },
              {
                title: 'REGULAR',
                price: 33,
                features: [
                  { text: 'perspiciatis unde omnis iste', included: true },
                  { text: 'natus error sit volupta', included: true },
                  { text: 'accusantium dolorem laud', included: true },
                  { text: 'antium totam rem aper', included: false },
                  { text: 'aqua ipsa quae', included: false },
                ],
              },
              {
                title: 'PREMIUM',
                price: 33,
                features: [
                  { text: 'perspiciatis unde omnis iste', included: true },
                  { text: 'natus error sit volupta', included: true },
                  { text: 'accusantium dolorem laud', included: true },
                  { text: 'antium totam rem aper', included: false },
                  { text: 'aqua ipsa quae', included: false },
                ],
              },
            ].map((plan, idx) => (
              <div key={plan.title} className={styles.pricingCard}>
                <div className={styles.pricingHeader}>{plan.title}</div>
                <div className={styles.pricingCircle}>${plan.price}</div>
                <ul className={styles.pricingFeatures}>
                  {plan.features.map((f, i) => (
                    <li key={f.text} className={f.included ? styles.featureIncluded : styles.featureExcluded}>
                      <span className={styles.featureIcon}>{f.included ? '✔' : '✖'}</span> {f.text}
                    </li>
                  ))}
                </ul>
                <button className={styles.pricingButton}>GET PLAN</button>
              </div>
            ))}
          </div>
        </section>

        {/* Team/Stats Section */}
        <section
          style={{
            background: `url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`,
            padding: '60px 0',
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
            minHeight: 250
          }}
        >
          {/* Animated stats: useCountUp for each number */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 80, flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
            {/* Team Members */}
            <div>
              <div style={{
                width: 120, height: 120, borderRadius: '50%', border: '3px solid #c7b299', margin: '0 auto 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)'
              }}>
                <svg width="48" height="48" fill="#c7b299" viewBox="0 0 24 24"><path d="M16 11c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm-8 0c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05C15.67 13.36 18 14.28 18 15.5V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <div style={{ fontSize: 38, fontWeight: 700, marginBottom: 4 }}>
                {useCountUp(82, true, 1200)}
              </div>
              <div style={{ letterSpacing: 2, fontSize: 15 }}>TEAM MEMBERS</div>
            </div>
            {/* Line of Codes */}
            <div>
              <div style={{
                width: 120, height: 120, borderRadius: '50%', border: '3px solid #c7b299', margin: '0 auto 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)'
              }}>
                <svg width="48" height="48" fill="#c7b299" viewBox="0 0 24 24"><path d="M20 17H4V5h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14l-4-4 1.41-1.41L12 13.17l2.59-2.58L16 13l-4 4z"/></svg>
              </div>
              <div style={{ fontSize: 38, fontWeight: 700, marginBottom: 4 }}>
                {useCountUp(20000, true, 1400)}
              </div>
              <div style={{ letterSpacing: 2, fontSize: 15 }}>LINE OF CODES</div>
            </div>
            {/* Happy Codes */}
            <div>
              <div style={{
                width: 120, height: 120, borderRadius: '50%', border: '3px solid #c7b299', margin: '0 auto 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)'
              }}>
                <svg width="48" height="48" fill="#c7b299" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <div style={{ fontSize: 38, fontWeight: 700, marginBottom: 4 }}>
                {useCountUp(41, true, 1600)}
              </div>
              <div style={{ letterSpacing: 2, fontSize: 15 }}>HAPPY CODES</div>
            </div>
            {/* Quality Projects */}
            <div>
              <div style={{
                width: 120, height: 120, borderRadius: '50%', border: '3px solid #c7b299', margin: '0 auto 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)'
              }}>
                <svg width="48" height="48" fill="#c7b299" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-3h2v2h-2zm0-8h2v6h-2z"/></svg>
              </div>
              <div style={{ fontSize: 38, fontWeight: 700, marginBottom: 4 }}>
                {useCountUp(78, true, 1800)}
              </div>
              <div style={{ letterSpacing: 2, fontSize: 15 }}>QUALITY PROJECTS</div>
            </div>
          </div>
          {/* Overlay for dark effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.55)',
            zIndex: 1
          }} />
        </section>

        {/* Project Section */}
        <section id="project" className={styles.projectSection} ref={projectRef}>
          <div className={styles.projectContainer}>
            <h2 className={styles.projectTitle}>Recent Projects<span className={styles.projectTitleDot}>.</span></h2>
            <div className={styles.projectSubtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div className={styles.projectFilters}>
              <span className={styles.projectFilterActive}>All</span>
              <span className={styles.projectFilter}>/</span>
              <span className={styles.projectFilter}>Web</span>
              <span className={styles.projectFilter}>/</span>
              <span className={styles.projectFilter}>Photography</span>
              <span className={styles.projectFilter}>/</span>
              <span className={styles.projectFilter}>Design</span>
              <span className={styles.projectFilter}>/</span>
              <span className={styles.projectFilter}>Brand</span>
            </div>
            <div
              className={styles.projectGrid}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "32px",
                marginTop: "32px",
                marginBottom: "32px"
              }}
            >
              <img src="/recent_projects/img-7.jpg" alt="Project 1" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: 4 }} />
              <img src="/recent_projects/img-8.jpg" alt="Project 2" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: 4 }} />
              <img src="/recent_projects/img-3.jpg" alt="Project 3" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: 4 }} />
              <img src="/recent_projects/img-4.jpg" alt="Project 4" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: 4 }} />
              <img src="/recent_projects/img-5.jpg" alt="Project 5" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: 4 }} />
              <img src="/recent_projects/img-6.jpg" alt="Project 6" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: 4 }} />
            </div>
            <button className={styles.projectButton}>VIEW ALL</button>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{
          display: "flex",
          gap: 40,
          background: "#f5f5f5",
          padding: "48px 0",
          justifyContent: "center"
        }}>
          {/* Left: Image with Play Button */}
          <div style={{
            width: 480,
            height: 400,
            position: "relative",
            background: "#222",
            borderRadius: 4,
            overflow: "hidden",
            flexShrink: 0
          }}>
            <img
              src="/fag_folder/faq_poster.jpg"
              alt="FAQ"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
            />
            <button
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(255,255,255,0.85)",
                border: "none",
                borderRadius: "50%",
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="#b7a48c">
                <polygon points="10,8 26,16 10,24" />
              </svg>
            </button>
          </div>
          {/* Right: FAQ Content */}
          <div style={{ flex: 1, minWidth: 340 }}>
            <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: 8 }}>
              Frequently Asked Question.
            </h2>
            <div style={{ color: "#444", marginBottom: 18, fontSize: 16 }}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, con sectetur adipisci velit, sed quia non numquam
            </div>
            {/* Accordion */}
            <div style={{ marginBottom: 18 }}>
              {/* First (active) item */}
              <div style={{
                background: "#b7a48c",
                color: "#fff",
                fontWeight: 700,
                fontSize: 18,
                padding: "16px 24px",
                marginBottom: 0,
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
              }}>
                1. Sed ut perspiciatis unde omnis
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#fff", padding: "18px 24px 18px 24px", borderBottom: "none", borderRadius: "0 0 2px 2px", marginBottom: 18 }}>
                <img src="/faq_folder/faq-person.jpg" alt="Person" style={{ width: 56, height: 56, borderRadius: 4, objectFit: "cover" }} />
                <div style={{ color: "#444", fontSize: 15, lineHeight: 1.6 }}>
                  Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
              </div>
              {/* Other items */}
              <div style={{
                background: "#fff",
                color: "#222",
                fontWeight: 700,
                fontSize: 17,
                padding: "16px 24px",
                marginBottom: 8,
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                border: "none"
              }}>
                2. Emo enim ipsam voluptatem
              </div>
              <div style={{
                background: "#fff",
                color: "#222",
                fontWeight: 700,
                fontSize: 17,
                padding: "16px 24px",
                marginBottom: 8,
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                border: "none"
              }}>
                3. Uia voluptas sit aspernatur aut
              </div>
              <div style={{
                background: "#fff",
                color: "#222",
                fontWeight: 700,
                fontSize: 17,
                padding: "16px 24px",
                marginBottom: 0,
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                border: "none"
              }}>
                4. Sed ut perspiciatis unde omnis
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={styles.testimonialsSection}>
          <div className={styles.testimonialsContainer}>
            <h2 className={styles.testimonialsTitle}>Clients’ Testimonial<span className={styles.testimonialsTitleDot}>.</span></h2>
            <div className={styles.testimonialsSubtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div className={styles.testimonialsCards}>
              <div className={styles.testimonialCard}>
                <img src="/testimonials/img-1.jpg" alt="Irina Malkova" className={styles.testimonialAvatar} />
                <div className={styles.testimonialName}>Irina Malkova</div>
                <div className={styles.testimonialRole}>CEO, Real Friend</div>
                <div className={styles.testimonialText}>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</div>
              </div>
              <div className={styles.testimonialCard}>
                <img src="/testimonials/img-2.jpg" alt="Aaron Ramsy" className={styles.testimonialAvatar} />
                <div className={styles.testimonialName}>Aaron Ramsy</div>
                <div className={styles.testimonialRole}>CEO, Arsen Jenga</div>
                <div className={styles.testimonialText}>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</div>
              </div>
            </div>
            <div className={styles.testimonialsDots}>
              <span className={styles.testimonialsDotActive}></span>
              <span className={styles.testimonialsDot}></span>
              <span className={styles.testimonialsDot}></span>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <section className={styles.partnersSection}>
          <div className={styles.partnersContainer}>
            <h2 className={styles.partnersTitle}>Trusted Tartners<span className={styles.partnersTitleDot}>.</span></h2>
            <div className={styles.partnersSubtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div className={styles.partnersSlider}>
              <button className={styles.partnersNavBtn}>&lt;</button>
              <div className={styles.partnersLogos}>
                {[1,2,3,4].map(i => (
                  <div key={i} className={styles.partnerLogoBox}>
                    <img src="/trusted_tartners/img-1.png" alt="Partner Log" className={styles.partnerLogo} />
                  </div>
                ))}
              </div>
              <button className={styles.partnersNavBtn}>&gt;</button>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className={styles.footerSection} ref={footerRef}>x`x`
          <div className={styles.footerContainer}>

            {/* Logo & About */}
            <div className={styles.footerCol}>
              <img src="/logo_about/logo.png" alt="Infinity Logo" className={styles.footerLogo} />
              <div className={styles.footerBrand}>INFINITY</div>
              <div className={styles.footerAbout}>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</div>
              <div className={styles.footerCopyright}>2017 © All Rights Reserved</div>
              <div className={styles.footerSocials}>
                <FaFacebookF />
                <FaTwitter />
                <FaGooglePlusG />
                <FaLinkedinIn />
                <FaBehance />
              </div>
            </div>

            {/* Recent News */}
            <div className={styles.footerCol}>
              <div className={styles.footerColTitle}>RECENT NEWS</div>
              <div className={styles.footerNewsItem}>
                <img src="/recent_news/img-1.jpg" alt="News" className={styles.footerNewsImg} />
                <div>
                  <div className={styles.footerNewsTitle}>UK inflation rate falls in October</div>
                  <div className={styles.footerNewsMeta}><span className={styles.footerNewsIcon}>⏰</span> December 25</div>
                </div>
              </div>
              <div className={styles.footerNewsItem}>
                <img src="/recent_news/img-2.jpg " alt="News" className={styles.footerNewsImg} />
                <div>
                  <div className={styles.footerNewsTitle}>Infinity wins the “Awwwards”</div>
                  <div className={styles.footerNewsMeta}><span className={styles.footerNewsIcon}>⏰</span> December 25</div>
                </div>
              </div>
            </div>

            {/* Site Map */}
            <div className={styles.footerCol}>
              <div className={styles.footerColTitle}>SITE MAP</div>
              <ul className={styles.footerLinks}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Pages</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className={styles.footerCol}>
              <div className={styles.footerColTitle}>NEWSLETTER</div>
              <form className={styles.footerNewsletter} onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="email address.." className={styles.footerInput} />
                <button className={styles.footerSubscribeBtn}>SUBSCRIBE</button>
              </form>
              <div className={styles.footerNewsletterText}>Get Updates and Latest Offers from us.</div>
            </div>
          </div>
        </footer>
      </div>
    </div> 
  );
}
