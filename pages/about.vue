<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero title="About me" image="/uploads/about-hero.jpg">
      <social-media></social-media>
    </site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Hi 👋 I'm Tutti</h3>
          <div class="columns">
            <div class="column">
              <p>
                If you don't know me yet, I'm Tutti (or
                <a href="https://twitter.com/tuttiq">@tuttiq</a> online). I'm a
                software engineer, manager, and volunteer leader of some
                developer communities and organizations.
              </p>
              <p>
                I'm originally from Brazil (Campinas, São Paulo), where I got my
                CS major, moved to work in London for a while and currently I'm
                living and working in Tokyo.
              </p>
            </div>
            <div class="column is-one-third">
              <figure class="image img-small">
                <opti-image
                  class="is-rounded"
                  :src="require('~/static/img/about-tuttiq.jpg').src"
                  :srcset="require('~/static/img/about-tuttiq.jpg').srcSet"
                />
              </figure>
            </div>
          </div>

          <h4 class="subtitle">
            A quick summary of my career
          </h4>
          <p>
            I have
            <a
              href="/how-i-created-an-unprofitable-business-when-i-was-15-years-old"
            >
              a weird story of how I got into programming
            </a>
            , but I actually majored in Computer Engineering (which, back at
            that time, was basically Computer Science + some random Engineering
            core subjects like Mechanics, Chemistry and a ton of Calculus and
            Physics).
          </p>
          <p>
            On my 4th year of college (2011) I started working as a Software
            Engineer, mainly with web technologies like Java, C#, Ruby on Rails
            and Javascript (Coffeescript and jQuery at that time!). Then I went
            on to work a bit with Android app development at Samsung Brasil, and
            after that was when I moved to London to be a Ruby on Rails engineer
            for an EdTech startup named
            <a href="https://www.quipper.com/">Quipper</a>.
          </p>
          <div class="columns is-desktop">
            <div class="column">
              <p>
                Quipper was acquired by the giant Japanese corporation
                <a href="https://recruit-holdings.com/">Recruit Holdings</a> and
                after about 2 years working for them in London, I decided to try
                out moving to their office in Tokyo.
              </p>
              <p>
                ---
              </p>
              <p>
                I've been in Japan since September 2017, and around October 2018
                I moved from Quipper to become an Engineering Program Manager at
                <a href="https://about.mercari.com/en/">Mercari</a>. I've
                managed a team called Engineering Office, composed of technical
                program managers (engineers and non-engineers), working on
                technical trainings and projects to improve the overall
                engineering culture at Mercari. At that time, I wrote an article
                exaplaining our approach to
                <a
                  href="/shaping-engineering-culture-in-a-chaotic-environment-part-1"
                >
                  shaping the Engineering culture in a chaotic environment
                </a>
                .
              </p>
              <p>
                After working with people-centric programs on the engineering
                divison, I've now moved to manage the People Programs team, a
                team focused on company-wide D&I (Diversity & Inclusion) and L&D
                (Learning & Development) programs. In this team we manage all
                programs related to diversity & inclusion, onboarding and
                training of new employees and leadership development for
                managers, focused on strategy, execution and people management.
                <a href="https://mercan.mercari.com/en/articles/24520/">
                  This Mercan article
                </a>
                explains a bit about the background and scope of the People
                Programs team.
              </p>
            </div>
            <div class="column">
              <figure class="image">
                <opti-image
                  :src="
                    require('~/assets/uploads/quipper-london-jan2016.png').src
                  "
                  :srcset="
                    require('~/assets/uploads/quipper-london-jan2016.png')
                      .srcSet
                  "
                />
                <figcaption>
                  Quipper London team, January 2016
                </figcaption>
              </figure>
              <figure class="image">
                <opti-image
                  :src="require('~/assets/uploads/mercari-build.jpg').src"
                  :srcset="require('~/assets/uploads/mercari-build.jpg').srcSet"
                />
                <figcaption>
                  I'm also part of the Women@Mercari team, that works on cool
                  stuff like
                  <a href="https://mercan.mercari.com/articles/19631/">
                    this internship program for underrepresented folks.
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          <h4 class="subtitle">
            On the other side
          </h4>
          <p>
            Besides my main job, I also find time (somehow) to be involved with
            some developer communities and organizations. I'm a volunteer
            Director of
            <a href="/projects#wwcode-tokyo">Women Who Code Tokyo</a> and
            organizer of the
            <a href="/projects#leaddev-tokyo">Lead Dev meetup</a> here.
          </p>
          <p>
            I mainly help these communities organizing events, finding sponsors
            and hosts, finding speakers or speaking myself when I have a new
            talk to put out.
          </p>
          <div class="columns is-desktop">
            <div class="column">
              <figure class="image">
                <opti-image
                  :src="require('~/assets/uploads/tuttiq_speaking.png').src"
                  :srcset="
                    require('~/assets/uploads/tuttiq_speaking.png').srcSet
                  "
                />
              </figure>
            </div>
            <div class="column">
              <p>
                Particularly with Women Who Code, I engage on all other aspects
                of managing and scaling the community, like online engagement on
                Slack or social media channels, connecting with leaders in other
                countries to share knowledge or organize larger regional events
                (
                <a href="https://asia.womenwhocode.dev/">
                  WWCode CONNECT Asia
                </a>
                !), producing branded swags, onboarding new volunteers and
                meeting with the other local Directors to strategize our
                efforts. Sometimes I also mentor or coach some of our members
                directly, or try to gather people to work on some cool
                <a href="/projects#others">side-project</a> for learning
                purposes.
              </p>
            </div>
          </div>
          <p>
            I wrote an article about
            <a href="/what-women-who-code-is-doing-in-tokyo">
              what we are doing at Women Who Code Tokyo
            </a>
            , so check it out for more details and some useful links.
          </p>

          <p>
            And of course, like any other human being, sometimes I need to
            disconnect and just spend some time on my random forms of leisure.
            My favorite activities are to hangout with friends (usually on a
            hunt for the best brunch places in Tokyo!), reading (I can finally
            say that after so many years that I never touched a book!) and
            cooking (I occasionally post my <s>masterpieces</s> attempts on
            Instagram 🙂).
          </p>

          <h4 class="subtitle">
            Contact
          </h4>
          <p>
            You can find me on social media following the links below or fill
            out my <a href="/contact">Contact Form</a> on this website.
          </p>

          <social-media />
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import SocialMedia from '~/components/SocialMedia'

export default {
  head() {
    return {
      title: `About me | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    SocialMedia
  }
}
</script>
<style>
.image.img-small {
  max-width: 150px;
  margin: auto;
}

.image.img-medium {
  max-width: 300px;
  margin: auto;
}
</style>
