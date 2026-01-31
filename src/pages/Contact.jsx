import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "bi-envelope",
      title: "Email",
      value: "lisanwory@gmail.com",
      link: "mailto:lisanwory@gmail.com",
    },
    {
      icon: "bi-phone",
      title: "Phone",
      value: "+2 (519) 3682-5567",
      link: "tel:+251936825567",
    },
    {
      icon: "bi-geo-alt",
      title: "Location",
      value: "ETHIOPIA, TEPI",
      link: "https://www.google.com/maps/search/?api=1&query=7.20104,35.40693",
    },
    {
      icon: "bi-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/yeshwond-lisanwork-430098397/",
      link: "https://www.linkedin.com/in/yeshwond-lisanwork-430098397/",
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-background">
        <div className="contact-page py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-3">Get In Touch</h1>
                <p className="lead">
                  Feel free to reach out for collaborations or just a friendly
                  hello
                </p>
              </div>
            </div>

            <div className="row g-5">
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-5">
                    <h2 className="h3 mb-4">Send me a message</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">
                              Your Name
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email" className="form-label">
                              Your Email
                            </label>
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="subject" className="form-label">
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="message" className="form-label">
                              Message
                            </label>
                            <textarea
                              className="form-control form-control-lg"
                              id="message"
                              name="message"
                              rows="5"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg w-100"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-5">
                    <h2 className="h3 mb-4">Contact Information</h2>
                    <p className="text-muted mb-5">
                      I'm always open to discussing new opportunities, creative
                      projects, or just having a chat about technology.
                    </p>

                    <div className="row g-4">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="col-md-6">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <div
                                className="bg-primary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "50px", height: "50px" }}
                              >
                                <i className={`bi ${info.icon} fs-5`}></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h5 className="h6 mb-1">{info.title}</h5>
                              <a
                                href={info.link}
                                className="text-decoration-none"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {info.value}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5">
                      <h3 className="h5 mb-3">Follow Me</h3>
                      <div className="d-flex gap-3">
                        <a
                          href="https://github.com/yeshumax"
                          className="text-decoration-none"
                        >
                          <i className="bi bi-github fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
