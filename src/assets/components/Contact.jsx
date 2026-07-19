import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { useState } from "react";



const Contact = () => {
  const [result, setResult] = useState("");
  const [error, seterror] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
   
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      seterror( "Please fill out all required fields")
      setResult("")
      return
    }
    formData.append("access_key", "f624a5c5-9c17-4fa3-9a19-1dadba2b87e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(data.success ? "Message Sent Successfully ✅" : "Something Went Wrong!");
      seterror('')
    }
    e.target.reset()
  };

  return (
    <section id="contact" className="py-20">
      <div className="container w-[90%]  mx-auto text-center text-[#f316b0]">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#f316b0]">Contact Me</h2>
        <div className='bg-[#f316b0] h-1 w-10 mx-auto mb-16'></div>
        <div className="w-full flex flex-col md:flex-row md:gap-12 gap-6 items-center justify-center">
          {/* Form Section */}
          <div className="input-box w-full md:w-[48%] bg-zinc-950 p-7 rounded-xl">
            <form onSubmit={onSubmit} className="w-full">
              <h2 className="text-left text-2xl pb-4 font-medium text-white">
                Just say Hello
              </h2>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-zinc-900 text-zinc-400 outline-none p-3 mb-4 border border-zinc-900 rounded focus:border-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-zinc-900 text-zinc-400 outline-none p-3 mb-4 border border-zinc-900 rounded focus:border-black"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full bg-zinc-900 text-zinc-400 outline-none p-3 mb-4 border border-zinc-900 rounded focus:border-black"
                rows="5"
              ></textarea>
              <button type="submit"
                className="w-full bg-[#f316b0] text-white py-2 rounded hover:bg-[#d0139d]"
              >
                Send Message
              </button>
            </form>
            <p className="text-green-400 mt-3">{result}</p>
            <p className="text-red-500 mt-3">{error}</p>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info md:relative  md:bottom-12 w-[94%] md:w-[48%]">
            <h2 className="font-bold text-center md:text-left text-[28px] pb-3 text-white">
              Contact Info
            </h2>
            <p className="text-[14px] text-balance md:text-left text-center text-gray-500 font-bold mb-6">
              Have a project or idea you'd like to discuss? I'm always open to exciting opportunities and collaborations. Let's connect!
            </p>
            <div className='md:p-0 md:pl-0 md:mr-0  md:ml-0 p-7 pl-[34px]'>
              {/* Email Info */}
              <div className="email-area flex items-center gap-3 mb-6">
                <span className="text-[24px] p-2 bg-[#f316b0] text-white rounded-full">
                  <MdEmail />
                </span>
                <div>
                  <h3 className="text-left text-lg text-white font-semibold">
                    Email
                  </h3>
                  <p className="text-zinc-500">raunakraza63@gmail.com</p>
                </div>
              </div>
              {/* Phone Info */}
              <div className="phone-area flex items-center gap-3 mb-6">
                <span className="text-[24px] p-2 bg-[#f316b0] text-white rounded-full">
                  <FaPhone />
                </span>
                <div>
                  <h3 className="text-left text-lg text-white font-semibold">
                    Phone
                  </h3>
                  <p className="text-zinc-500">+91 8076128701</p>
                </div>
              </div>
              {/* Address Info */}
              <div className="address flex items-center gap-3">
                <span className="text-[24px] p-2 bg-[#f316b0] text-white rounded-full">
                  <FaLocationDot />
                </span>
                <div>
                  <h3 className="text-left text-lg text-white font-semibold">
                    Address
                  </h3>
                  <p className="text-zinc-500 md:text-base text-sm break-all text-balance text-left">
                    P-4/345 Sultanpuri, New Delhi, Delhi 110086
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
