
import React from 'react';
import { ProductIcon, GearIcon, AgileIcon } from './IconComponents';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: ProductIcon,
    title: 'Product Management',
    description: 'From idea to launch, we guide your product strategy, roadmap, and execution to build products that customers love and drive business growth.',
  },
  {
    icon: GearIcon,
    title: 'Process Efficiency Improvements',
    description: 'We streamline end-to-end processes, focusing on cross-functional collaboration, root cause analysis, and effective tracking to reduce cycle time and improve quality.',
  },
  {
    icon: AgileIcon,
    title: 'Agile Consulting',
    description: 'Transform your organization with agile methodologies. We help you adopt Scrum, Kanban, and Lean principles to deliver value faster and more efficiently.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="mb-6">
      <service.icon className="h-12 w-12 text-indigo-600" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
    <p className="text-slate-600 leading-relaxed">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Expertise</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            We provide end-to-end solutions to build, design, and scale your digital products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;