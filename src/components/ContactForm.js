const ContactForm = () => {
    
    return (
        <div>
            <h1 className="sub-header" id="Contact">Contact Me</h1>
            <form target="_blank" action="https://formsubmit.co/jordanulves@gmail.com" method="POST">
                <div className="form-row">
                    <input type="text" name="name" placeholder="Full Name" required></input>
                    <input type="email" name="email" placeholder="Email Address" required></input>
                </div>
                <textarea name="message" placeholder="Your Message" rows="10" required></textarea>
                <button type="submit" style={{borderRadius: '5px'}}>Submit Form</button>
            </form>
        </div>
    );
}

export default ContactForm;