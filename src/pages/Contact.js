import React from "react";

function Contact() {

  return (

    <div className="page">

      <h1>Contact Us</h1>

      <hr />

      <h2>Send Us Your Opinion</h2>

      <form>

        <label>Name:</label>
        <br />
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <br />

        <label>Email:</label>
        <br />
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <br />

        <label>Gender:</label>
        <br />
        <input type="radio" name="gender" value="male" /> Male

        <input type="radio" name="gender" value="female" /> Female
        <br />
        <br />

        <label>Favorite Sport:</label>
        <br />

        <input type="radio" name="sport" value="football" /> Football
        <br />

        <input type="radio" name="sport" value="basketball" /> Basketball
        <br />

        <input type="radio" name="sport" value="mma" /> MMA
        <br />

        <input type="radio" name="sport" value="tennis" /> Tennis
        <br />
        <br />

        <label>Who is your favorite player and why?</label>
        <br />

        <textarea
          name="message"
          rows="4"
          cols="40"
          placeholder="Write here..."
        ></textarea>

        <br />
        <br />

        <input type="checkbox" name="agree" />
        I agree to send this message

        <br />
        <br />

        <input type="submit" value="Send" />

        <input type="reset" value="Reset" />

      </form>

      <hr />

      <p>
        You can also contact us directly via email:
        <a href="mailto:12410339@students.liu.edu.lb"> Send Email</a>
      </p>

    </div>

  );

}

export default Contact;