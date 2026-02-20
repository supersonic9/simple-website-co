import './Services.css';

interface Service {
  title: string;
  description: string;
  iconBg: string;
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  {
    title: 'Simple Sites',
    description:
      'A clean, professional website that works on every device. Built to load fast and represent your business well.',
    iconBg: 'rgba(123, 167, 217, 0.15)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Ecommerce',
    description:
      'Sell your products online with an easy-to-manage store. Accept payments and reach customers anywhere in Portugal and beyond.',
    iconBg: 'rgba(168, 212, 200, 0.20)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    title: 'SEO & Care',
    description:
      'Show up in search results and stay there. We maintain and optimise your site so you can focus on running your business.',
    iconBg: 'rgba(143, 166, 135, 0.15)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="what-we-do" className="section">
      <div className="container">
        <h2 className="services-heading">What We Do</h2>
        <div className="services-grid">
          {SERVICES.map(service => (
            <article className="card services-card" key={service.title}>
              <div className="services-icon" style={{ background: service.iconBg }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="services-description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
