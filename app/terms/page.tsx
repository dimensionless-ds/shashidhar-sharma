'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ChevronDown } from 'lucide-react'

export default function TermsOfService() {
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({})

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content:
        'By accessing and using this website (shashidharsharma.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. These terms apply to all users, including browsers, vendors, customers, merchants, and contributors of content.',
    },
    {
      title: '2. Use License',
      content:
        'Permission is granted to temporarily download one copy of the materials (information or software) on Shashidhar Sharma&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: (a) modifying or copying the materials; (b) using the materials for any commercial purpose or for any public display; (c) attempting to decompile or reverse engineer any software contained on the website; (d) removing any copyright or other proprietary notations from the materials; or (e) transferring the materials to another person or "mirroring" the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Shashidhar Sharma at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.',
    },
    {
      title: '3. Disclaimer',
      content:
        'The materials on Shashidhar Sharma&apos;s website are provided "as is". Shashidhar Sharma makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Shashidhar Sharma does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
    },
    {
      title: '4. Limitations',
      content:
        'In no event shall Shashidhar Sharma or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Shashidhar Sharma&apos;s website, even if Shashidhar Sharma or an authorized representative has been notified orally or in writing of the possibility of such damage.',
    },
    {
      title: '5. Accuracy of Materials',
      content:
        'The materials appearing on Shashidhar Sharma&apos;s website could include technical, typographical, or photographic errors. Shashidhar Sharma does not warrant that any of the materials on the website are accurate, complete, or current. Shashidhar Sharma may make changes to the materials contained on the website at any time without notice. However, Shashidhar Sharma does not make any commitment to update the materials.',
    },
    {
      title: '6. Links',
      content:
        'Shashidhar Sharma has not reviewed all of the sites linked to the website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Shashidhar Sharma of the site. Use of any such linked website is at the user&apos;s own risk. If you believe any linked content violates your rights, please notify us immediately.',
    },
    {
      title: '7. Modifications',
      content:
        'Shashidhar Sharma may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
    },
    {
      title: '8. Governing Law',
      content:
        'These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in India.',
    },
    {
      title: '9. User-Generated Content',
      content:
        'If you submit, post or display content on or via the website (including comments, feedback, or inquiries through our contact form or chatbot), you grant Shashidhar Sharma a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such content in any media or medium and for any purposes. You represent and warrant that you own or otherwise control all of the rights to the content that you submit; that the content is accurate; and that the use of the content you supply does not violate these terms of service and will not cause injury to any person or entity.',
    },
    {
      title: '10. Prohibited Activities',
      content:
        'You agree not to use the website: (a) for any unlawful purpose or in violation of any applicable laws or regulations; (b) to harass, threaten, intimidate, or defame any person; (c) to upload viruses or malicious code; (d) to spam or send unsolicited messages; (e) to violate intellectual property rights; (f) to attempt to gain unauthorized access to the website or its systems; or (g) to engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website.',
    },
    {
      title: '11. Payment & Transactions',
      content:
        'This website uses Razorpay for payment processing. By making a payment through the website, you agree to Razorpay&apos;s terms and conditions. All transactions are conducted securely through Razorpay&apos;s encrypted payment gateway. We do not store your payment information on our servers. All prices are subject to change without notice. Orders are subject to acceptance and verification. We reserve the right to refuse or cancel any order.',
    },
    {
      title: '12. Privacy & Data Protection',
      content:
        'Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal data in accordance with applicable data protection laws, including but not limited to the Information Technology Act, 2000, and rules made thereunder.',
    },
    {
      title: '13. Intellectual Property Rights',
      content:
        'Unless otherwise stated, Shashidhar Sharma owns the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access this material for personal, non-commercial use only. You must not reproduce, republish, redistribute, or retransmit any content without obtaining prior written permission from Shashidhar Sharma.',
    },
    {
      title: '14. Contact & Complaints',
      content:
        'If you have any questions, complaints, or disputes regarding this Terms of Service or the website, please contact us through the contact form on the website or email us at contact@shashidharsharma.com. We will endeavor to respond to your inquiry within 7 business days.',
    },
    {
      title: '15. Severability',
      content:
        'If any provision of these terms of service is found to be invalid or unenforceable by a court of competent jurisdiction, such provision shall be severable and the remaining provisions shall continue in full force and effect.',
    },
    {
      title: '16. Entire Agreement',
      content:
        'These terms of service constitute the entire agreement between you and Shashidhar Sharma regarding the use of the website and supersede any prior agreements or understandings, whether written or oral.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-6 bg-secondary rounded-lg border border-border">
          <p className="text-foreground leading-relaxed">
            Welcome to Shashidhar Sharma&apos;s website. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, including all content, functionality, and services offered on or through the website (collectively, the &quot;Website&quot;). Please read these Terms carefully before using the Website. If you do not agree with any part of these Terms, you should not use the Website.
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-foreground/30 transition-colors"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-secondary hover:bg-secondary/80 transition-colors text-left"
              >
                <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    expandedSections[index] ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSections[index] && (
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-foreground leading-relaxed text-sm sm:text-base">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-8 bg-secondary rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
          <p className="text-foreground mb-6 leading-relaxed">
            If you have any questions or concerns about these Terms of Service, please don&apos;t hesitate to contact us.
          </p>
          <div className="space-y-3 text-sm text-foreground">
            <p>
              <strong>Email:</strong> contact@shashidharsharma.com
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a href="https://shashidharsharma.com" className="text-primary hover:underline">
                www.shashidharsharma.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
