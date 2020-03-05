<template>
  <div
    :class="
      `site-layout-width-${$siteConfig.layout.width} posts-theme-${$siteConfig.posts.theme}`
    "
  >
    <site-nav />
    <nuxt />
    <news-letter-slide-out v-if="$siteConfig.newsletter.on" />
    <site-footer></site-footer>
  </div>
</template>

<script>
import 'animate.css/animate.min.css'
export default {
  transition: 'slide-fade',
  head() {
    return {
      title: `${this.$store.state.title} | ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'type',
          name: 'type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'title',
          name: 'title',
          property: 'og:title',
          content: this.$store.state.title
        },
        {
          hid: 'description',
          name: 'description',
          property: 'og:description',
          content: this.$store.state.subtitle
        },
        {
          hid: 'image',
          name: 'image',
          property: 'og:image',
          content: this.$store.state.featureImage
        },
        {
          hid: 'url',
          name: 'url',
          property: 'og:url',
          content: this.url
        },
        {
          hid: 'site_name',
          name: 'site_name',
          property: 'og:site_name',
          content: this.$siteConfig.siteName
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.$store.state.featureImage
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: this.url
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.$store.state.title
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.$store.state.subtitle
        }
      ]
    }
  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  },
  watch: {
    $route(to, from) {
      this.$eventBus.$emit('route-changed', this.$route)
    }
  },
  mounted() {
    this.$cms.lifeCycleHooks.mounted()
  },
  beforeCreate() {
    this.$cms.lifeCycleHooks.beforeCreate()
  },
  created() {
    this.$cms.lifeCycleHooks.created()
  },
  beforeMount() {
    this.$cms.lifeCycleHooks.beforeMount()
  },
  beforeUpdate() {
    this.$cms.lifeCycleHooks.beforeUpdate()
  },
  updated() {
    this.$cms.lifeCycleHooks.updated()
  },
  beforeDestroy() {
    this.$cms.lifeCycleHooks.beforeDestroy()
  },
  destroy() {
    this.$cms.lifeCycleHooks.destroy()
  }
}
</script>
