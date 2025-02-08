import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-6 py-12 bg-black">
      <div className="w-full max-w-5xl bg-gray-900 shadow-2xl rounded-3xl p-8 md:p-12">
        {/* Header */}
        <h2 className="text-5xl font-bold text-rose-500 text-center">We Are Here to Help</h2>
        <p className="text-lg text-gray-100 mt-4 text-center">
          Have a question or need assistance? Contact us and our team will get back to you as soon as possible.
        </p>

        {/* Contact Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-rose-500/30 rounded-xl shadow-md">
            <FaPhoneAlt className="text-rose-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-100">Call Us</h3>
            <p className="text-lg text-gray-200 mt-2">+1 (800) 123-4567</p>
          </div>
          <div className="p-6 bg-rose-500/30 rounded-xl shadow-md">
            <FaEnvelope className="text-rose-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-100">Email Us</h3>
            <p className="text-lg text-gray-200 mt-2">support@atlasbank.com</p>
          </div>
          <div className="p-6 bg-rose-500/30 rounded-xl shadow-md">
            <FaMapMarkerAlt className="text-rose-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-100">Visit Us</h3>
            <p className="text-lg text-gray-200 mt-2">123 Finance Street, NY, USA</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-emerald-500 text-center">Send Us a Message</h3>
          <form className="mt-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 mt-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="w-full mt-6 bg-rose-400 text-white font-semibold py-3 rounded-lg hover:bg-rose-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
