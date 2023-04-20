const ContactPage = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="bborder-gray-500 inline border-b-4 text-4xl font-bold">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="jusify-center flex items-center">
          <form action="" className="flex w-full flex-col md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            ></textarea>
            <button
              className="text-whit mx-auto flex items-center rounded-md bg-gradient-to-b 
            from-cyan-500 to-blue-500 px-6 py-3 duration-300 hover:scale-105"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
