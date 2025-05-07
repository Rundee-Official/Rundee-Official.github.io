import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>
      <p>Feel free to reach out via the platforms below:</p>
      <motion.div
        className="contact-links"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a href="mailto:rundee.official@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email</a>
        <a href="https://github.com/Rundee-Official" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
        <a href="https://linkedin.com/in/haneul-lee-ba1262199" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
      </motion.div>
    </motion.section>
  );
}
