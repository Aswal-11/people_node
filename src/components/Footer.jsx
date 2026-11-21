import { Globe } from 'lucide-react'
import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaLinkedin } from 'react-icons/fa6'
import { PrimaryButton } from './ui.jsx'

const columns = [
  { title: 'Linked Fusion', links: ['Download', 'About', 'Careers', 'Customers', 'Community', 'Affiliate & Referrals', 'Reviews', 'Press', 'Brand', 'Product Roadmap', 'Status'] },
  { title: 'Resources', links: ['Help Documents', 'On-Demand Demo', 'LinkedFusion', 'Webinars', 'Events', 'Templates', 'Import', 'API', 'Consultants', 'Partners', 'Contact Us'] },
  { title: 'Features', links: ['Gantt Chart', 'Dashboards', 'Native Time Tracking', 'Mind Maps', 'Automations', 'Notepad', 'Integrations', 'Email', 'To-Do List', 'Kanban Board', 'Sprints'] },
  { title: 'Learn', links: ['Blogs', 'Software Team Hub', 'Agency Hub'], cta: true },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cols">
        {columns.map((c) => (
          <div key={c.title} className="footer__col">
            <h4>{c.title}</h4>
            <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            {c.cta && <PrimaryButton className="footer__cta">Start Free Trial</PrimaryButton>}
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <p>
          © 2025 LinkedFusion
          <a href="#">Security</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </p>
        <div className="footer__social">
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={15} /></a>
          <a href="#" aria-label="Website"><Globe size={16} /></a>
          <a href="#" aria-label="LinkedIn page"><FaLinkedin size={15} /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF size={15} /></a>
          <a href="#" aria-label="Twitter"><FaXTwitter size={15} /></a>
        </div>
      </div>
    </footer>
  )
}
