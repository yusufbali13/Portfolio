import "./Contact.scss";

function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div name="contact" className="contact w-full h-screen  p-4 text-white">
      <div className="contact-bgImg-container">
        <main className="contact">
          <h2>Contact Me ...</h2>
          <div className="contact__list">
            <div className="contact__item">
              <i className="fas fa-envelope"></i> Email
              <div style={{ color: "#be6adf" }}>baliyusuf675@gmail.com</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-mobile-alt"></i> Phone
              <div style={{ color: "#be6adf" }}>+90 555 555 55 55</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-map-marker-alt"></i> Address
              <div style={{ color: "#be6adf" }}>
                Fatih Mahallesi 1755. Sokak Bağcılar/İstanbul
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            Contact
          </p>
          <p className="py-6 font-bold ">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b bg-purple-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
