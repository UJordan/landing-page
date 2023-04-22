const ContactForm = () => {
    return (
        <div>
            <section>
                <h1 className="portfolio" id="Contact">Contact Me</h1>
                <form target="_blank" action="https://formsubmit.co/jordanulves@gmail.com" method="POST">
                    <div className="form-row">
                        <input type="text" name="name" placeholder="Full Name" required></input>
                        <input type="email" name="email" placeholder="Email Address" required></input>
                    </div>
                    <textarea name="message" placeholder="Your Message" rows="10" required></textarea>
                    <button type="submit">Submit Form</button>
                </form>
            </section>
        </div>
    );
}

export default ContactForm;