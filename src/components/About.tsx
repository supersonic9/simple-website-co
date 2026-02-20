import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo">
            <div className="about-photo-placeholder" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="40" cy="30" r="16" fill="currentColor" opacity="0.35" />
                <path
                  d="M8 72c0-17.673 14.327-32 32-32s32 14.327 32 32"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.35"
                />
              </svg>
            </div>
          </div>

          <div className="about-content">
            <h2>About Us</h2>
            <p className="about-description">
              Simple Web Co was built to solve a simple problem — great web development
              was out of reach for most small businesses in Porto. We created a studio
              that delivers professional, fast websites without the complexity or cost
              of a big agency.
            </p>
            <p className="about-description">
              We work closely with local businesses to understand what they actually need,
              then build it properly. No bloated templates, no mystery pricing — just clean,
              effective websites that make a real difference.
            </p>

            <div className="about-owner">
              <div className="about-owner-name">Founder, Simple Web Co</div>
              <p className="about-owner-bio">
                Based in Porto, with a background in building digital products for small
                businesses. Started Simple Web Co to help local business owners get online
                without the headaches. When not at the keyboard, you'll find me exploring
                the city's coffee shops for inspiration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
