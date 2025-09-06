
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-12 px-6 text-center">
  
      <h1 className="text-3xl  mb-4">Get In Touch</h1>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ut maxime
        corrupti dolores ex rerum iste ipsam soluta quis dolorum doloribus
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
      
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <MapPin className="mx-auto text-emerald-600 w-8 h-8 mb-3" />
          <h3 className="font-medium">102 Street 2714 Donovan</h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolar site amet discont
          </p>
        </div>

        
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <Phone className="mx-auto text-emerald-600 w-8 h-8 mb-3" />
          <h3 className="font-medium">+02 1234 567 88</h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolar site amet discont
          </p>
        </div>

        
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <Mail className="mx-auto text-emerald-600 w-8 h-8 mb-3" />
          <h3 className="font-medium">info@example.com</h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolar site amet discont
          </p>
        </div>
      </div>

      
      <div className="w-full max-w-3xl bg-white shadow-md rounded-2xl p-8 mx-auto">
        <h1 className="text-3xl  text-center mb-2">Send Us</h1>
        <p className="text-gray-600 text-center mb-8">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>

        <form className="space-y-5">
        
          <div>
            <label className="block text-left text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          
          <div>
            <label className="block text-left text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          
          <div>
            <label className="block text-left text-gray-700 mb-1">
              Phone number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          
          <div>
            <label className="block text-left text-gray-700 mb-1">
              Your message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

