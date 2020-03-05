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
                <div class="social columns is-mobile">
                  <div class="column has-text-centered">
                    <a
                      title="Facebook"
                      href="https://facebook.com/tuttiquintella"
                    >
                      <img src="img/facebook.svg" alt="Facebook" />
                    </a>
                  </div>
                  <div class="column has-text-centered">
                    <a title="Twitter" href="https://twitter.com/tuttiq">
                      <img
                        className="fas fa-lg"
                        src="img/twitter.svg"
                        alt="Twitter"
                      />
                    </a>
                  </div>
                  <div class="column has-text-centered">
                    <a
                      title="Instagram"
                      href="https://instagram.com/tuttiquintella"
                    >
                      <img src="img/instagram.svg" alt="Instagram" />
                    </a>
                  </div>
                  <div class="column has-text-centered">
                    <a title="LinkedIn" href="https://linkedin.com/in/tuttiq">
                      <img src="img/linkedin.svg" alt="LinkedIn" />
                    </a>
                  </div>
                  <div class="column has-text-centered">
                    <a title="Github" href="https://github.com/tuttiq">
                      <img src="img/github.svg" alt="Github" />
                    </a>
                  </div>
                </div>
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
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm }
}
</script>
