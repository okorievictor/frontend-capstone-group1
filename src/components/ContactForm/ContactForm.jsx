import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 100) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone) || formData.phone.length < 5) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 100) {
      newErrors.message = 'Message must be 100 characters or less';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {

      const submitData = new URLSearchParams();
      Object.keys(formData).forEach(key => submitData.append(key, formData[key]));

      const response = await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submitData.toString()
      });

      // Since mode is 'no-cors', the response is opaque and response.ok will be false.
      // We assume the submission succeeded if no network exception was thrown.
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section" data-reveal>
      <div className="contact-container">
        <h2 className="contact-heading">Have Questions About Planetary Science?</h2>
        <p className="contact-subtext">
          Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?<br />
          Reach out and we'll get back to you.
        </p>

        {isSuccess ? (
          <div className="success-message">
            Thank you! Your message has been sent successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-grid">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name<span className="required-star">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'error-input' : ''}
                    placeholder="Full name"
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number<span className="required-star">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error-input' : ''}
                    placeholder="Phone number"
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="email">Email<span className="required-star">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error-input' : ''}
                    placeholder="Email"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message<span className="required-star">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error-input' : ''}
                    maxLength={100}
                    rows={1}
                    placeholder="Message"
                  />
                  <div className="message-footer">
                    <span className="char-counter">100 characters</span>
                    <span className="error-container">
                      {errors.message && <span className="error-text">{errors.message}</span>}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
