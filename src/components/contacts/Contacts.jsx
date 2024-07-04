import "./contacts.css";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import styled from "styled-components";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 8px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contacts = () => {
  return (
    <section>
      <div className="w-[80%] mx-auto mt-24">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Contact
        </p>
        <p className="py-6 font-serif text-xl opacity-90">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>
      <div className="container">
        <main className="row  -mt-20">
          <section className="col left">
            <div className="contactInfo">
              <div className="iconGroup">
                <div className="icon flex justify-center items-center">
                  <BsTelephoneForwardFill className="text-lg text-pink-300" />
                </div>
                <div className="details">
                  <span className="">Phone</span>
                  <span className="opacity-90">+880 1611 640 847</span>
                </div>
              </div>

              <div className="iconGroup">
                <div className="icon flex justify-center items-center">
                  <MdEmail className="text-xl text-pink-300" />
                </div>
                <div className="details">
                  <span>Email</span>
                  <span className="opacity-90">hadiurahman139@gmail.com</span>
                </div>
              </div>

              <div className="iconGroup">
                <div className="icon flex justify-center items-center">
                  <FaAddressCard className="text-lg text-pink-300" />
                </div>
                <div className="details">
                  <span>Location</span>
                  <span className="opacity-90">Moulvibazar, Bangladesh</span>
                </div>
              </div>
            </div>

            <div className="socialMedia">
              <a
                href="https://www.facebook.com/hadiur.rahman.777/"
                className="li-background flex justify-center items-center"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://x.com/Hadiur007"
                className="li-background flex justify-center items-center"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/itz._.adib/"
                className="li-background flex justify-center items-center"
              >
                <GrInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/hadiur-rahman/"
                className="li-background flex justify-center items-center"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/DevHadiuR"
                className="li-background flex justify-center items-center"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </section>

          <section className="col right">
            {/* <form className="messageForm -mt-6">
              <div className="inputGroup halfWidth">
                <input type="text" name="" required="required" />
                <label>Your Name</label>
              </div>

              <div className="inputGroup halfWidth">
                <input type="email" name="" required="required" />
                <label>Email</label>
              </div>

              <div className="inputGroup fullWidth">
                <input type="text" name="" required="required" />
                <label>Subject</label>
              </div>

              <div className="inputGroup fullWidth">
                <textarea required="required"></textarea>
                <label>Say Something</label>
              </div>

              <div className="inputGroup fullWidth">
                <button>Send Message</button>
              </div>
            </form> */}
            <ContactForm action="https://getform.io/f/pagxxxkb" method="POST">
              <ContactTitle>Email Me 🚀</ContactTitle>
              <ContactInput
                placeholder="Your Email"
                name="email"
                type="email"
                required
              />
              <ContactInput
                placeholder="Your Name"
                type="text"
                name="name"
                required
              />
              <ContactInput
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <ContactInputMessage
                placeholder="Message"
                rows="4"
                name="message"
              />
              <ContactButton
                required
                className="cursor-pointer"
                type="submit"
                value="Send"
              />
            </ContactForm>
            {/* <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={() => setOpen(false)}
              message="Email sent successfully!"
              severity="success"
            /> */}
          </section>
        </main>
      </div>
    </section>
  );
};

export default Contacts;
