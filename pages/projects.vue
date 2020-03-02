<template>
  <div id="projects-page" class="page-wrapper projects-page content-page">
    <site-hero
      title="Projects & Organizations"
      image="/uploads/projects-hero.png"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div id="wwcode-tokyo" class="content project">
          <h2>Women Who Code Tokyo</h2>
          <p>
            <a href="https://www.womenwhocode.com">
              https://www.womenwhocode.com
            </a>
            <br />
            <a href="https://www.meetup.com/Women-Who-Code-Tokyo">
              WWCode Tokyo @ Meetup.com
            </a>
          </p>
          <div class="columns is-desktop">
            <div class="column">
              <p>
                Women Who Code is a global non-profit organization dedicated to
                inspiring women to excel in technology careers. I'm a Director
                of the
                <a href="https://www.womenwhocode.com/tokyo">Tokyo chapter</a>.
                We organize events focused on networking, knowledge sharing,
                development of technical and non-technical skills, inspiration
                and mentorship. We also provide volunteer leadership and public
                speaking opportunities. In
                <a href="/what-women-who-code-is-doing-in-tokyo">
                  this article
                </a>
                I explain in a bit more detail about what we're doing at Women
                Who Code Tokyo.
              </p>
            </div>
            <div class="column">
              <figure class="image">
                <opti-image
                  :src="require('~/assets/uploads/wwcode_tokyo.png').src"
                  :srcset="require('~/assets/uploads/wwcode_tokyo.png').srcSet"
                />
              </figure>
            </div>
          </div>
          <p class="subtitle">
            Contact / Getting Involved
          </p>
          <ul>
            <li>
              <a href="https://www.womenwhocode.com/">Become a member</a>
              to get access to many helpful resources and events all over the
              world
            </li>
            <li>
              Join
              <a href="https://www.meetup.com/Women-Who-Code-Tokyo/">
                WWCode Tokyo meetup group
              </a>
              and come to our local events
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSegYdr64FwX09AyyMcaDnp-rool2kYzqKYsH2dA1NE1QGWy0w/viewform"
              >
                Become a leader
              </a>
              in one of the WWCode chapters across the world
            </li>
            <li>
              No chapter in your city? Be the badass leader that will
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmKjtd6rixuJyfUoWejcVKqQDizs_j2DcDaDLoWCc_jkLsWg/viewform"
              >
                start one
              </a>
            </li>
            <li>
              Become a local sponsor by
              <a href="https://opencollective.com/wwcodetokyo">donating</a> or
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe2N7GINl0a5fQUeBAyX-gGZbGG1EPXlH6TBk0hjItmD3ugOg/viewform"
              >
                hosting our events
              </a>
            </li>
            <li>
              <a href="https://www.womenwhocode.com/sponsors">
                Become a global sponsor
              </a>
            </li>
            <li>
              Or simply support us on social media:
              <a href="https://twitter.com/wwcode_tokyo">Twitter</a>,
              <a href="https://www.facebook.com/wwcode.tokyo/">Facebook</a>,
              <a href="https://www.instagram.com/wwcode_tokyo/">Instagram</a>
            </li>
          </ul>
        </div>

        <div id="leaddev-tokyo" class="content project">
          <h2>The Lead Dev Meetup (Tokyo)</h2>
          <p>
            <a href="https://theleaddeveloper.com">
              https://theleaddeveloper.com
            </a>
            <br />
            <a href="https://www.meetup.com/The-Lead-Developer-Meetup-Tokyo/">
              Lead Dev Tokyo @ Meetup.com
            </a>
          </p>
          <div class="columns is-desktop">
            <div class="column">
              <p>
                Lead Dev is a series of conferences and meetups designed with
                the needs and pain points of technical team leads in mind. It
                started with a conference in London and expanded to have events
                in Edinburgh, New York, Austin, Berlin, San Francisco, and
                Tokyo. I'm one of the organizers of
                <a href="https://theleaddeveloper.com/meetup">
                  the meetup series
                </a>
                in Tokyo. All the events are around three key themes: Teams,
                Tech & Tools. We invite speakers to talks about their experience
                in these areas and have some networking time over food and
                drinks.
              </p>
            </div>
            <div class="column">
              <figure class="image">
                <opti-image
                  :src="require('~/assets/uploads/leaddev_banner.png').src"
                  :srcset="
                    require('~/assets/uploads/leaddev_banner.png').srcSet
                  "
                />
              </figure>
            </div>
          </div>
          <p class="subtitle">
            Contact / Getting Involved
          </p>
          <ul>
            <li>
              Check out more about The Lead Dev and official events on the
              <a href="https://theleaddeveloper.com/">official website</a>
            </li>
            <li>
              Join
              <a href="https://www.meetup.com/The-Lead-Developer-Meetup-Tokyo/">
                our Tokyo Meetup group
              </a>
              and come to our local events
            </li>
            <li>
              Join the conversation on Twitter by following
              <a href="https://twitter.com/TheLeadDev">
                @TheLeadDev
              </a>
              or using the hashtag
              <a href="https://twitter.com/hashtag/LeadDevMeetup">
                #LeadDevMeetup
              </a>
            </li>
            <li>
              <a
                href="https://leaddev.submittable.com/submit/149863/lead-dev-meetups"
              >
                Submit your talk proposal
              </a>
              to one of the meetups
            </li>
            <li>
              <a
                href="mailto:sponsorships@whiteoctoberevents.co.uk?subject=The%20Lead%20Developer%20Meetup%20hosting%20enquiry"
              >
                Get in touch
              </a>
              to become a host or sponsor
            </li>
          </ul>
        </div>

        <div id="tuttiqme" class="content project">
          <h3>tuttiq.me (this website!)</h3>
          <p>
            <a href="https://tuttiq.me">
              https://tuttiq.me
            </a>
            <br />
            <a href="https://github.com/tuttiq/tuttiq.me">
              tuttiq.me on Github
            </a>
          </p>
          <div class="columns is-desktop">
            <div class="column">
              <p>
                This is my personal website. A project I started in an attempt
                to aggregate all the content I create, projects and
                organizations I'm involved in a nice, online portifolio of my
                own. It was also an excuse to try out a few modern static site
                technologies and CMS engines (is Wordpress dead yet?). This
                website uses
                <a href="https://github.com/danielkellyio/awake-template">
                  Awake
                </a>
                , a
                <a href="https://nuxtjs.org/">
                  Nuxt.js
                </a>
                template to build static websites, deployed on
                <a href="https://www.netlify.com/">
                  Netlify
                </a>
                and using Netlify CMS to manage the blog posts.
              </p>
              <p>
                You can find how to contact me on the
                <a href="/contact">Contact</a> page.
              </p>
            </div>
            <div class="column">
              <figure class="image">
                <opti-image
                  :src="require('~/assets/uploads/tuttiqme_banner.png').src"
                  :srcset="
                    require('~/assets/uploads/tuttiqme_banner.png').srcSet
                  "
                />
              </figure>
            </div>
          </div>
        </div>

        <div id="others" class="content project">
          <h3>Others (WIP, coming soon, etc)</h3>
          <p>
            I always have millions of ideas and get excited to work on many
            different things. And being horrible at prioritizing like I am, I'm
            always trying out these new ideas (although almost always giving up
            halfway through lol). Here's some of the most recent stuff that I
            started or plan on start working on and that I may or may not make
            enough progress to eventually move it to it's own section above:
          </p>
          <ul>
            <li>
              The
              <a href="https://github.com/WWCodeTokyo/wwcode-tokyo-web-app">
                Women Who Code Tokyo Web App
              </a>
              <ul>
                <li>
                  An attempt to build a web app to manage the local community in
                  Tokyo. Besides a contentful public site, the idea is to have a
                  leaders-only admin area with some features like events & SNS
                  publisher (automating some of the cross-posting, image
                  resizing, maybe even English ⟷ Japanese translation), a local
                  blog, etc.
                </li>
                <li>
                  So far it only has a URL shortener and a bunch of security
                  vulnerabilities lol
                </li>
                <li>
                  Ideally it would also be the API for the
                  <a href="https://github.com/WWCodeTokyo/wwcode-tokyo-iOS-app">
                    mobile app
                  </a>
                  other leaders are trying to build.
                </li>
              </ul>
            </li>
            <li>
              Something related to Data Science and Machine Learning (I know,
              very specific!)
              <ul>
                <li>
                  I took a high level
                  <a href="https://www.coursera.org/learn/ai-for-everyone">
                    AI Course
                  </a>
                  on <a href="https://www.coursera.org/">Coursera</a> and got
                  super excited about it. Then I started another course on
                  <a
                    href="https://www.coursera.org/specializations/data-science-python"
                  >
                    Applied Data Science with Python
                  </a>
                  (which, honestly, have not been nearly as exciting lol). I'm
                  still on brainstroming phase, but eventually I want to try out
                  a first project using Data Science and ML.
                </li>
              </ul>
            </li>
            <li>
              Structured courses and workshops
              <ul>
                <li>
                  This website is only the first step to aggregate, organize and
                  publish more of my own content online. The next step I have in
                  mind is to create structured courses and workshops to share
                  some useful knowledge and skills I accumulated during my
                  personal and professional and journey.
                </li>
                <li>
                  The main idea is to focus on professional skills that can help
                  people get a job, step up on their careers or get better
                  salaries in the modern economy. Most of it would be around key
                  technical knowledge for less technical folks, leadership and
                  management for anyone.
                </li>
              </ul>
            </li>
            <li>
              Check out other (possibly) great ideas that never left the "Hello
              World" stage on <a href="https://github.com/tuttiq">my github</a>.
            </li>
          </ul>
        </div>
      </template>

      <template v-slot:sidebar>
        <a
          class="twitter-timeline"
          data-lang="en"
          data-theme="light"
          data-height="600"
          href="https://twitter.com/WWCode_Tokyo?ref_src=twsrc%5Etfw"
        >
          Tweets by WWCode_Tokyo
        </a>
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Projects & Organizations | ${this.$siteConfig.siteName}`
    }
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
.project {
  padding-top: 1em;
}
</style>
