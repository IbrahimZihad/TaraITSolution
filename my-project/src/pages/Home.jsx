import React from "react";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import heroBg from "../assets/hero-bg.png";

const Home = () => {
  // Example services data (can later come from API)
  const services = [
    {
      icon: "computer",
      title: "Web Development",
      description:
        "We design and build responsive, modern websites tailored to your business needs.",
      link: "/services/web",
    },
    {
      icon: "security",
      title: "Cyber Security",
      description:
        "Protect your business from digital threats with our advanced security solutions.",
      link: "/services/security",
    },
    {
      icon: "support_agent",
      title: "IT Consultation",
      description:
        "Get expert advice and support to optimize your IT infrastructure and operations.",
      link: "/services/consultation",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white h-[80vh]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Your Business with Innovative IT Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            From development to deployment, we help you build a smarter digital presence.
          </p>
          <Button variant="primary" size="lg" onClick={() => (window.location.href = "/contact")}>
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark transition-colors">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About / CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Why Choose TARA IT Solution?</h2>
          <p className="text-lg mb-6">
            With years of experience in IT development, support, and consultancy, 
            we ensure your business stays ahead in the digital era.
          </p>
          <Button variant="outline" size="md" onClick={() => (window.location.href = "/about")}>
            Learn More About Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
