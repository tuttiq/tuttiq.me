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
        <h3 class="subtitle with-title-link">
          Tags
        </h3>
        <a
          class="title-link has-text-grey-light has-text-weight-bold is-size-7"
          @click="clearTags()"
        >
          <font-awesome-icon icon="times" class="clear-icon" />
          Clear
        </a>
        <div class="panel tags">
          <a
            v-for="tag in allTags"
            :key="tag.slug"
            :class="['tag', isSelected(tag) ? 'is-dark' : 'is-primary']"
            @click="toggleTag(tag)"
          >
            {{ tag.name }}
            <button v-if="isSelected(tag)" class="delete is-small"></button>
          </a>
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
      allCats: [],
      allTags: [],
      selectedTags: []
    }
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
    this.allTags = await this.$cms.tag.getAll()
  },
  methods: {
    clearTags() {
      this.selectedTags = []
    },
    toggleTag(tag) {
      if (this.isSelected(tag)) {
        const index = this.selectedTags.indexOf(tag.slug)
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(tag.slug)
      }
    },
    isSelected(tag) {
      return this.selectedTags.indexOf(tag.slug) !== -1
    }
  }
}
</script>

<style>
.with-title-link {
  display: inline-block;
}
.title-link {
  display: inline-block;
  margin-left: 1em;
  vertical-align: middle;
}
.clear-icon {
  margin-right: 0.25em;
}
a.tag {
  opacity: 0.93;
}
a.tag:hover {
  text-decoration: none;
  opacity: 1;
}
</style>
