import React from 'react';

function Contact(props) {
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
          <a href="" class="text-2xl font-bold text-blue-500">
            (+1) 732-515-8724
          </a>

          <address class="mt-2 not-italic">
            echowebllc@gmail.com
          </address>
        </div>
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
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
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
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
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
    );
}

export default Contact;