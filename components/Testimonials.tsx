
import React from 'react';
import { ClockIcon, GearIcon, LightbulbIcon, ChartIcon } from './IconComponents';

const caseStudies = [
  {
    icon: ClockIcon,
    title: "AGILITY COACHING USING DOJO FRAMEWORK (HANDS-ON)",
    description: "Guided teams through the Dojo, applying agile practices on real backlog items. Focused on predictability, and customer value.",
    outcomes: ["Faster feedback", "Stronger collaboration", "Embedded agility"],
    borderColor: "border-green-500",
  },
  {
    icon: GearIcon,
    title: "IMPROVING VEHICLE ISSUE RESOLUTION EFFICIENCY",
    description: "Streamlined end-to-end process from problem identification to final delivery. Focused cross-functional collaboration, faster root cause analysis, and tracking.",
    outcomes: ["Reduced cycle time", "Improved quality", "Higher customer satisfaction"],
    borderColor: "border-sky-500",
  },
  {
    icon: LightbulbIcon,
    title: "COACHING PRODUCT MANAGEMENT ON IDEA-TO-PROTOTYPE",
    description: "Coached PMs to validate ideas quickly through customer discovery, experiments, and rapid prototyping. Focused on value, alignment, and outcomes.",
    outcomes: ["Faster validation", "Reduced risk", "Higher product success"],
    borderColor: "border-amber-500",
  },
  {
    icon: ChartIcon,
    title: "SCALING AGILITY",
    description: "Scaled agility across 500 members spanning business, and AI. Focused on alignment, delivery at speed and outcome-driven practices.",
    outcomes: ["Improved collaboration", "Faster value delivery", "Organizational agility"],
    borderColor: "border-teal-500",
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section id="success-stories" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Driving Impact: My Client Success Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-lg border-t-4 ${study.borderColor} flex flex-col`}>
              <div className="flex items-start mb-4">
                <study.icon className="h-8 w-8 text-slate-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{study.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-4 text-base">{study.description}</p>
              <div className="mt-auto">
                <p className="font-semibold text-slate-800 mb-2">Outcomes:</p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  {study.outcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;