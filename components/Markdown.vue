<template>
  <v-runtime-template
    class="content blog-post"
    :template="content"
  ></v-runtime-template>
</template>

<script>
import MarkdownIt from 'markdown-it'
import VRuntimeTemplate from 'v-runtime-template'

export default {
  name: 'Markdown',
  components: { VRuntimeTemplate },
  props: {
    tag: { type: String, default: 'article' },
    markdown: { type: String, required: true }
  },
  computed: {
    content() {
      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true
      })
        .use(require('markdown-it-deflist'))
        .use(require('markdown-it-sub'))
        .use(require('markdown-it-sup'))
        .use(require('markdown-it-footnote'))
      let html = md.render(this.markdown)

      html = this.useComputedImages(html)
      html = this.wrapTable(html)
      html = html.replace(/<table>/g, '<table class="table is-striped">')

      return `<div class="content">${html}</div>`
    }
  },
  methods: {
    useComputedImages(html) {
      const images = html.match(/<img(.*?)>/g)
      if (images) {
        images.forEach((image) => {
          const imgSrc = image
            .match(/src="([^"]*)"/g)[0]
            .replace('src="', '')
            .replace('"', '')

          let newImgSrc = `src="${imgSrc}"`

          if (imgSrc.startsWith('/')) {
            const computedImage = require(`~/assets${imgSrc}`)
            newImgSrc = `src="${computedImage.src}" srcset="${computedImage.srcSet}"`
          }

          const imgCaption = image
            .match(/alt="([^"]*)"/g)[0]
            .replace('alt="', '')
            .replace('"', '')

          const newImgTag = image
            .replace('>', '/>')
            .replace(/src="([^"]*)"/g, newImgSrc)

          const wrappedImg =
            `<figure class="image">${newImgTag}` +
            `<figcaption>${imgCaption}</figcaption>` +
            `</figure>`

          html = html.replace(image, wrappedImg)
        })
      }
      return html
    },
    wrapTable(html) {
      html = html.replace(/<table/g, `<div class="table-wrapper"><table`)
      html = html.replace(/<\/table>/g, `</table></div>"`)
      return html
    }
  }
}
</script>

<style scoped></style>
