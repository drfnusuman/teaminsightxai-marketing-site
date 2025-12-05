// app/page.tsx

// Import necessary React hooks for state management and handling form events
'use client'; // This directive is necessary to use client-side hooks like useState and event handlers

import { useState } from 'react';
import Image from 'next/image';

// --- Secure Access Key ---
// This variable reads the key you securely saved in Vercel.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

// --- Form Submission Handler ---
async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  
  // Basic validation to ensure the key is present (for security/testing)
  if (!ACCESS_KEY) {
    alert("Error: Web3Forms key not configured correctly.");
    return;
  }
  
  const formData = new FormData(event.currentTarget);
  // Crucial: Append the secure key to the form data
  formData.append("access_key", ACCESS_KEY); 

  // Send the data to the Web3Forms endpoint
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  
  if (result.success) {
    alert("Thank you for your interest in OrgSightXAI! We will be in touch shortly.");
    event.currentTarget.reset(); // Clear the form fields
  } else {
    // You can console.log(result.message) here for debugging
    alert("Submission failed. Please check your network and try again.");
  }
}

// --- Main Homepage Component ---
export default function Home() {
  // Simple state for a potential call-to-action button
  const [ctaText, setCtaText] = useState('Explore OrgSightXAI Demo');

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* 1. Hero Section: Mission and CTA */}
      <section className="bg-white py-20 shadow-md">
        <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                OrgSightXAI
          </h1>
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Smarter Teams Stronger Execution
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transforming Team Performance with AI
          <p className="text-xl text-gray-600 mb-8"></p>
            Our mission is to surface hidden productivity killers and team friction points using advanced AI analytics, powering better collaboration and results.
          </p>
          <a
            href="https://your-orgsightxai-demo-link.com" // IMPORTANT: Replace this with your Streamlit demo link later
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-lg transition duration-300"
            onMouseEnter={() => setCtaText('Click to See Insights Now!')}
            onMouseLeave={() => setCtaText('Explore OrgSightXAI Demo')}
          >
            {ctaText}
          </a>
        </div>
      </section>

      {/* 2. Modular Solution Section (REPLACES the old "Key Information Section") */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Modular Insights for Every Role (OrgSightXAI)
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Choose the exact Persona your team needs: from deep dive analytics to high-level strategic oversight.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Module 1: Team Manager */}
            <div className="p-6 border-t-4 border-indigo-600 rounded-lg shadow-xl bg-gray-50">
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">Team Manager Module</h3>
              <p className="text-gray-700 mb-3">Focus on individual and team velocity, recognizing bottlenecks and optimizing resource allocation within a single team.</p>
              <p className="text-sm font-semibold text-gray-800">Persona Focus: Real-time action and team health.</p>
            </div>
            
            {/* Module 2: Executive Module */}
            <div className="p-6 border-t-4 border-red-600 rounded-lg shadow-xl bg-gray-50">
              <h3 className="text-2xl font-bold text-red-600 mb-2">Executive Overview Module</h3>
              <p className="text-gray-700 mb-3">High-level, cross-organizational visibility, tracking strategic KPIs, budget alignment, and identifying org-wide friction points.</p>
              <p className="text-sm font-semibold text-gray-800">Persona Focus: Strategic planning and ROI.</p>
            </div>

            {/* Module 3: Admin Module */}
            <div className="p-6 border-t-4 border-teal-600 rounded-lg shadow-xl bg-gray-50">
              <h3 className="text-2xl font-bold text-teal-600 mb-2">Admin/HR Module</h3>
              <p className="text-gray-700 mb-3">Focus on platform security, user permissions, compliance tracking, and organizational well-being metrics (e.g., burnout detection).</p>
              <p className="text-sm font-semibold text-gray-800">Persona Focus: Governance and employee retention.</p>
            </div>

            {/* Module 4: Team Resources Module */}
            <div className="p-6 border-t-4 border-yellow-600 rounded-lg shadow-xl bg-gray-50">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">Team Resources Module</h3>
              <p className="text-gray-700 mb-3">Provides self-service dashboards for teams to monitor their own efficiency, process metrics, and collaboration quality transparently.</p>
              <p className="text-sm font-semibold text-gray-800">Persona Focus: Team autonomy and data literacy.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. Contact Form Section (Uses the secure handleSubmit function) */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get in Touch with OrgSightXAI</h2>
          <p className="text-center text-gray-600 mb-8">We'd love to hear about your team's biggest challenges.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <input 
              type="hidden" 
              name="subject" 
              value="New Inquiry from OrgSightXAI Website" 
            />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                id="name" 
                type="text" 
                name="name" 
                required 
                placeholder="John Doe" 
                className="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                id="email" 
                type="email" 
                name="email" 
                required 
                placeholder="your.work.email@company.com" 
                className="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                placeholder="Tell us about your team's current needs or inquire about a demo..." 
                rows={5} 
                className="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} OrgSightXAI. All rights reserved. | 
          <a href="/privacy" className="underline ml-2">Privacy Policy</a> | 
          <a href="/terms" className="underline ml-2">Terms of Service</a>
        </div>
      </footer>

    </main>
  );
}