// import { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//     alert('Message sent! Check console for data.');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-black bg-opacity-80 text-white p-6 rounded-xl shadow-lg max-w-md mx-auto"
//     >
//       <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//         className="w-full border border-gray-400 bg-transparent p-2 mb-4 rounded text-white placeholder-gray-400"
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Your Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         className="w-full border border-gray-400 bg-transparent p-2 mb-4 rounded text-white placeholder-gray-400"
//       />

//       <input
//         type="text"
//         name="subject"
//         placeholder="Subject"
//         value={formData.subject}
//         onChange={handleChange}
//         required
//         className="w-full border border-gray-400 bg-transparent p-2 mb-4 rounded text-white placeholder-gray-400"
//       />

//       <textarea
//         name="message"
//         placeholder="Your Message"
//         value={formData.message}
//         onChange={handleChange}
//         required
//         className="w-full border border-gray-400 bg-transparent p-2 mb-4 rounded text-white placeholder-gray-400 h-24"
//       />

//       <button
//         type="submit"
//         className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 w-full"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// }

'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const err = await res.json();
        setStatus(`Error: ${err.error || 'Failed to send message'}`);
      }
    } catch (error) {
      console.error('Submit Error:', error);
      setStatus('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black bg-opacity-80 text-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-400 bg-transparent p-2 mb-4 rounded text-white placeholder-gray-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-400 bg-transparent p-2 mb-4 rounded text-white placeholder-gray-400"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full border border-gray-400 bg-transparent p-2 mb-4 rounded text-white placeholder-gray-400"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-400 bg-transparent p-2 mb-4 rounded text-white placeholder-gray-400 h-24"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 w-full"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status && (
        <p className="text-center mt-4 text-sm text-yellow-300">{status}</p>
      )}
    </form>
  );
}
