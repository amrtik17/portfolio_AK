export default function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-6 py-16 flex justify-center items-center"
    >
      <div className="max-w-3xl w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Contact Me
        </h2>

        <p className="text-center text-gray-700 text-lg mb-10">
          Feel free to reach out for collaborations, opportunities, or just to say hello 👋
        </p>

        {/* Contact Form */}
        <form className="bg-gray-100 p-8 rounded-xl shadow-md space-y-6">

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
             
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-lg text-gray-700">
            📧 Email: <strong>26amruta@gmail.com</strong>
          </p>

          <p className="text-lg text-gray-700">
            📍 Location: <strong>Pune, Maharashtra</strong>
          </p>

          <p className="text-lg text-gray-700">
            📱 Phone: <strong>7387344735</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
