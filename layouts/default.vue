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
          hid: 'type',
          name: 'type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'image',
          name: 'image',
          property: 'og:image',
          content:
            (process.env.URL ? process.env.URL : '') +
            require(`~/assets${this.$store.state.featureImage}`)
        },
        {
          hid: 'image:width',
          name: 'image:width',
          property: 'og:image:width',
          content: 1200
        },
        {
          hid: 'image:height',
          name: 'image:height',
          property: 'og:image:height',
          content: 630
        },
        {
          hid: 'url',
          name: 'url',
          property: 'og:url',
          content: (process.env.URL ? process.env.URL : '') + this.$route.path
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
          hid: 'p:domain_verify',
          name: 'p:domain_verify',
          content: 'f7f41f032bb60f0c1c08094bb273f254'
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
