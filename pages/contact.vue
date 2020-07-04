<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero title="Contact" image="/uploads/contact-hero.jpg"></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Hello!
              </p>
              <p class="subtitle">
                What can I do for you?
              </p>
              <figure class="image">
                <opti-image
                  :src="require('~/static/img/about-tuttiq.jpg').src"
                  :srcset="require('~/static/img/about-tuttiq.jpg').srcSet"
                />
              </figure>
              <br />
              <div class="content">
                <social-media />
                <p>
                  No need to be shy! Feel free to reach me in any of my social
                  media or send your message through this contact form and I'll
                  get back to you as soon as possible :)
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <div
                v-if="successMessage"
                class="notification is-primary is-light"
              >
                <button class="delete" @click="closeNotification"></button>
                Thank you for your message!
              </div>
              <contact-form />
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
import SocialMedia from '~/components/SocialMedia'
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    ContactForm,
    SocialMedia
  },
  data: () => ({
    successMessage: false
  }),
  mounted() {
    this.checkSuccess()
  },
  methods: {
    checkSuccess() {
      this.successMessage = this.$route.query.status === 'success'
    },
    closeNotification() {
      this.successMessage = false
    }
  }
}
</script>
