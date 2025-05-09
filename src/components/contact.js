// Contact.jsx
import React, { useState } from 'react';
import '../styles/contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xovdlvpw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000); // Le message disparaît après 5 secondes
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-section">
      <div className="connect-section">
        <h2>Se Connecter Avec Moi</h2>
        <div className="social-icons">
          <a href="https://github.com/JLeb0nX" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/johan-lebon-5a00712a5/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <h2>Me Contacter</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Votre Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {status === 'success' && (
            <div className="alert success">Message envoyé avec succès!</div>
          )}
          {status === 'error' && (
            <div className="alert error">Une erreur s'est produite.</div>
          )}
          <button type="submit" className="submit-btn" disabled={status === 'success'}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {status === 'success' ? 'Envoyé !' : 'Envoyer'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;