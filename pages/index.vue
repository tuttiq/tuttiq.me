<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="$siteConfig.tagLine" image="/uploads/home-hero.jpg">
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe to my newsletter
      </button>
    </site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <p class="title">
          Latest content
        </p>
        <posts-grid :per-row="2" :number="4" />

        <p class="content has-text-centered">
          <a class="button is-primary is-outlined" href="/categories">
            More posts
          </a>
        </p>
        <p class="title">
          Browse by category
        </p>
        <categories-grid :per-row="3" />
      </template>

      <template v-slot:sidebar>
        <div class="content has-text-centered">
          <span class="title">Meet Tutti</span>
          <figure class="image profile">
            <opti-image
              class="is-rounded"
              :src="require('~/static/img/about-tuttiq.jpg').src"
              :srcset="require('~/static/img/about-tuttiq.jpg').srcSet"
            />
          </figure>
          <p class="is-size-7 is-size-6-widescreen is-size-6-mobile">
            💻 <code>@tuttiq</code> <br />
            🗣 She / her / hers<br />
            From 🇧🇷 → 🇬🇧 → 🇯🇵<br />
            💼 Manager @
            <a href="https://about.mercari.com/en/" target="_blank">Mercari</a>
            <br />
            🎗️ Director @
            <a href="https://womenwhocode.com/tokyo" target="_blank">
              WWCode Tokyo
            </a>
          </p>
          <social-media />

          <span class="title">
            On Twitter
          </span>
          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              STOP THE JAPANESE INTERNET! IT IS FINALLY HERE!<br /><br />
              We are finally launching
              <a
                href="https://twitter.com/hashtag/SpeakHerJp?src=hash&amp;ref_src=twsrc%5Etfw"
              >
                #SpeakHerJp
              </a>
              : An online database of women speakers in Japan!! 🎉<br /><br />
              Yes, WE ARE HERE! And your event does not have to be all male
              speakers 👊
              <a href="https://t.co/8YoOGwPlRo">https://t.co/8YoOGwPlRo</a>
            </p>
            &mdash; Tutti Q. 🍒 (@tuttiq)
            <a
              href="https://twitter.com/tuttiq/status/1300410209014169601?ref_src=twsrc%5Etfw"
            >
              August 31, 2020
            </a>
          </blockquote>
        </div>
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData, loadPageWidgets } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'
import SocialMedia from '~/components/SocialMedia'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    NewsLetterFormModal,
    SocialMedia
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  },
  mounted() {
    loadPageWidgets()
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}

.image.profile {
  max-width: 156px;
  margin: auto;
}

.twitter-tweet iframe {
  border: none;
}
</style>
