import  { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fadeIn">
          Let's Connect
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Got a project in mind? I'd love to hear about it!
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 animate-slideUp"
        >
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-indigo-500"
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 animate-fadeIn">
                {errors.name}
              </p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-indigo-500"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 animate-fadeIn">
                {errors.email}
              </p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className={`w-full px-4 py-3 border rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-indigo-500"
              }`}
              placeholder="Your message here..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 animate-fadeIn">
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 animate-bounce hover:scale-105"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-500 text-center mt-4 animate-fadeIn">
              Your message was sent successfully! 🎉
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;