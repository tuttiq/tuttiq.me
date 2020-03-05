<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="subtitle" :image="featureImage">
      <button
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
        <posts-grid :per-row="3" :number="3" />

        <p class="content has-text-centered">
          <a class="button is-primary is-outlined" src="/content">
            More posts
          </a>
        </p>
        <p class="title">
          Browse by category
        </p>
        <categories-grid :per-row="2" />
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
            From 🇧🇷, living in 🇯🇵<br />
            💼 Eng. Manager @
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
              “Glue work is the difference between a project that succeeds and
              one that fails”<br /><br />
              In teams without a project manager, it is likely to be considered
              “non-promotable” work.<br /><br />Who should do it then? How to
              recognize this work?<br /><br />Amazing piece by
              <a href="https://twitter.com/whereistanya?ref_src=twsrc%5Etfw">
                @whereistanya
              </a>
              <a href="https://t.co/PMHNNdEZzK">https://t.co/PMHNNdEZzK</a>
            </p>
            &mdash; Tutti Quintella (@tuttiq)
            <a
              href="https://twitter.com/tuttiq/status/1228537993750663168?ref_src=twsrc%5Etfw"
            >
              February 15, 2020
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
import { setPageData } from '../helper'
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
    const twitterWidget = document.createElement('script')
    twitterWidget.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    twitterWidget.async = true
    document.head.appendChild(twitterWidget)
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

.twitter-tweet {
  padding-top: 1em;
  margin-left: auto;
  margin-right: auto;
}
</style>
