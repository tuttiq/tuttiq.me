<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero
      title="Articles | Talks | Podcasts | etc"
      image="/uploads/content-hero.jpg"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <posts-grid />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">
          Categories
        </h3>
        <div class="panel">
          <nuxt-link
            :to="`/categories`"
            :class="{
              'panel-block': true,
              'is-active': true
            }"
          >
            All
          </nuxt-link>
          <nuxt-link
            v-for="cat in allCats"
            :key="cat.slug"
            :to="`/categories/${cat.slug}`"
            :class="{
              'panel-block': true
            }"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Content | ${this.$siteConfig.siteName}`
    }
  },
  data() {
    return {
      allCats: []
    }
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
  }
}
</script>
