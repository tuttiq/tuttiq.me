<template>
  <form
    name="contact-form"
    method="POST"
    data-netlify="true"
    action="/contact?status=success"
  >
    <input type="hidden" name="form-name" value="contact-form" />
    <!-- Name -->
    <div class="field">
      <label class="label is-medium">Name</label>
      <div class="control has-icons-left">
        <input
          name="name"
          class="input is-medium"
          type="text"
          placeholder="Sarah Connor"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email</label>
      <div class="control has-icons-left">
        <input
          name="email"
          class="input is-medium"
          type="email"
          placeholder="you@email.com"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope" />
        </span>
      </div>
    </div>
    <!-- Subject -->
    <div class="field">
      <label class="label is-medium">Subject</label>
      <div class="control has-icons-left">
        <input
          name="subject"
          class="input is-medium"
          type="text"
          placeholder="Brief summary"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="briefcase" />
        </span>
      </div>
    </div>
    <!-- Message -->
    <div class="field">
      <label class="label is-medium">Message</label>
      <div class="control">
        <textarea
          name="message"
          class="textarea"
          placeholder="Write your message here"
          rows="8"
        ></textarea>
      </div>
    </div>
    <div class="control">
      <button type="submit" class="button is-primary">
        Send
      </button>
    </div>
  </form>
</template>
