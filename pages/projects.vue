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
              <p>
                Although we haven't been able to organize any in-person events
                since COVID-19, The Lead Dev has been holding some online events
                and they even started an online publication, with some great
                articles written by industry leaders. I also recently published
                my article with them:
                <a
                  href="https://leaddev.com/data-centric-approach-understanding-underrepresentation-and-its-impact"
                >
                  A data-centric approach to understanding underrepresentation.
                </a>
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

        <div id="speakherjp" class="content project">
          <h3>SpeakHer.jp</h3>
          <p>
            <a href="https://speakher.jp">
              https://speakher.jp
            </a>
            <br />
            <a href="https://github.com/WWCodeTokyo/speak-her-db">
              SpeakHer on Github
            </a>
          </p>
          <div class="columns is-desktop">
            <div class="column">
              <p>
                This idea came from my friend
                <a href="https://twitter.com/yanarchy">
                  Yan Fan
                </a>
                her friend
                <a href="https://linkedin.com/in/emitakemura/">
                  Emi Takemura
                </a>
                as a way to uncover and give vibility to women public speakers
                in Japan, encouraging more diversity in conference lineups and
                panels. So I gathered Yan and
                <a href="https://twitter.com/stonecoldkilzer">
                  Ann Kilzer
                </a>
                and we started working on this project together.
              </p>
              <p>
                The project is (for now) a serverless
                <a href="https://vuejs.org/">
                  Vue.js
                </a>
                site, using
                <a href="https://www.airtable.com/">
                  Airtable
                </a>
                as the database and hosted on
                <a href="https://www.netlify.com/">
                  Netlify
                </a>
                . It's also
                <a href="https://github.com/WWCodeTokyo/speak-her-db">
                  an open-source project
                </a>
                being developed under the the Women Who Code Tokyo github
                organization.
              </p>
            </div>
            <div class="column">
              <figure class="image">
                <opti-image
                  :src="require('~/assets/uploads/speakher_banner.png').src"
                  :srcset="
                    require('~/assets/uploads/speakher_banner.png').srcSet
                  "
                />
              </figure>
            </div>
          </div>
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
                  :src="require('~/static/banner.png').src"
                  :srcset="require('~/static/banner.png').srcSet"
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
              Check out other <s>abandoned</s> ideas that never left the "Hello
              World" stage on
              <a href="https://github.com/tuttiq">my github</a> lol
            </li>
          </ul>
        </div>
      </template>

      <template v-slot:sidebar>
        <div class="content has-text-centered">
          <h2>On Twitter</h2>
          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              Are you still social distancing but miss talking to other people?
              Join our online networking party and get to know other women
              passionate in technology!<br /><br />
              Saturday, Sep 26th at 15:00, we&#39;ll use Spatial Chat to chat in
              groups and have some music!
              <a
                href="https://twitter.com/hashtag/WWCode?src=hash&amp;ref_src=twsrc%5Etfw"
              >
                #WWCode
              </a>
              <a href="https://t.co/gjutuaeIGp">https://t.co/gjutuaeIGp</a>
            </p>
            &mdash; Women Who Code Tokyo (@WWCode_Tokyo)
            <a
              href="https://twitter.com/WWCode_Tokyo/status/1305818882389602307?ref_src=twsrc%5Etfw"
            >
              September 15, 2020
            </a>
          </blockquote>

          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              What does underrepresentation, and the gender gap in particular,
              really look like in today&#39;s tech industry?
              <a href="https://twitter.com/tuttiq?ref_src=twsrc%5Etfw">
                @tuttiq
              </a>
              shares her observations in this article.
              <a href="https://t.co/0IdUAwgOSu">https://t.co/0IdUAwgOSu</a>
            </p>
            &mdash; LeadDev (@TheLeadDev)
            <a
              href="https://twitter.com/TheLeadDev/status/1303670238744055808?ref_src=twsrc%5Etfw"
            >
              September 9, 2020
            </a>
          </blockquote>

          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              Hello! We created a website to help empower
              <a
                href="https://twitter.com/hashtag/women?src=hash&amp;ref_src=twsrc%5Etfw"
              >
                #women
              </a>
              speakers in Japan. Please share and nominate women who are
              interested in public speaking.
              <a
                href="https://twitter.com/hashtag/publicSpeaking?src=hash&amp;ref_src=twsrc%5Etfw"
              >
                #publicSpeaking
              </a>
              <a
                href="https://twitter.com/hashtag/Japan?src=hash&amp;ref_src=twsrc%5Etfw"
              >
                #Japan
              </a>
              <a
                href="https://twitter.com/hashtag/womenLeaders?src=hash&amp;ref_src=twsrc%5Etfw"
              >
                #womenLeaders
              </a>
              <a href="https://t.co/shgcaFUQ56">https://t.co/shgcaFUQ56</a>
            </p>
            &mdash; SpeakHer Japan (@speakherjapan)
            <a
              href="https://twitter.com/speakherjapan/status/1300416493260161025?ref_src=twsrc%5Etfw"
            >
              August 31, 2020
            </a>
          </blockquote>

          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              I was so focused (or daydreaming?) while working on
              <a href="https://twitter.com/speakherjapan?ref_src=twsrc%5Etfw">
                @speakherjapan
              </a>
              today that my bf came into the room, placed a bottle on my head
              and I still didn&#39;t move for long enough that he could take
              this stupid photo.
              <a href="https://t.co/3NKPBK9kzf">pic.twitter.com/3NKPBK9kzf</a>
            </p>
            &mdash; Tutti Q. 🍒 (@tuttiq)
            <a
              href="https://twitter.com/tuttiq/status/1307287003143127069?ref_src=twsrc%5Etfw"
            >
              September 19, 2020
            </a>
          </blockquote>
        </div>
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
.project:not(:first-child) {
  padding-top: 1em;
}
.is-one-quarter.right-sidebar {
  border: none;
}
</style>
