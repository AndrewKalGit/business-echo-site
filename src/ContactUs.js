import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUs.css";

//TODO:
//Make sure it changes to sent onsubmit only!

export const ContactUs = () => {

const [emailSent, setEmailSent] = useState(false);

const sent = () => {
  setEmailSent(!emailSent);
}

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iyih0jt', 'template_9mcw1oi', form.current, 'pWK-1B7t6ZNPqH79e')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
<div class="py-4 lg:py-24">
<h1>
    Header with css here *centered
</h1>
<section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <p class="max-w-xl text-lg">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium aspernatur quidem dolorem quos maiores ipsa nam. Maiores reprehenderit ut consequuntur mollitia, eum, nulla est et, deserunt veritatis laboriosam cumque.
        </p>

        <div class="mt-8">
          <a href="tel:732-515-8724" class="text-2xl font-bold text-blue-500">
            (+1) 732-515-8724
          </a>

          <address class="mt-2 not-italic">
            echowebllc@gmail.com
          </address>
        </div>
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form ref={form} onSubmit={sendEmail} class="space-y-4">
          <div>
            <label class="sr-only" for="Name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              pattern='^[A-Za-z]+(?:\s[A-Za-z]+)*$'
              placeholder="Name"
              type="text"
              id="name"
              name="from_name"
              required
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                pattern="^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$"
                name="reply_to_email"
                required
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                pattern='^\+?\d{1,3}[- ]?\d{3,4}[- ]?\d{4}$'
                name="reply_to_number"
                required
              />
            </div>
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
            >
              <span onSubmit={sent} className="ContactConfirm">
                {emailSent ? 'Sent' : 'Confirm'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
    );
};

export default ContactUs;