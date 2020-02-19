<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero
      title="Articles | Talks | Podcasts | etc"
      image="/uploads/content-hero.jpg"
    />
    <main-section theme="one-column">
      <categories-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Content | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
