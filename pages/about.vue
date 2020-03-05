<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero title="About me" image="/uploads/about-hero.jpg">
      <div class="social columns is-mobile">
        <div class="column has-text-centered">
          <a title="Facebook" href="https://facebook.com/tuttiquintella">
            <img src="img/facebook.svg" alt="Facebook" />
          </a>
        </div>
        <div class="column has-text-centered">
          <a title="Twitter" href="https://twitter.com/tuttiq">
            <img className="fas fa-lg" src="img/twitter.svg" alt="Twitter" />
          </a>
        </div>
        <div class="column has-text-centered">
          <a title="Instagram" href="https://instagram.com/tuttiquintella">
            <img src="img/instagram.svg" alt="Instagram" />
          </a>
        </div>
        <div class="column has-text-centered">
          <a title="LinkedIn" href="https://linkedin.com/in/tuttiq">
            <img src="img/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
        <div class="column has-text-centered">
          <a title="Github" href="https://github.com/tuttiq">
            <img src="img/github.svg" alt="Github" />
          </a>
        </div>
      </div>
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
            I have a weird story of how I got into programming, but I actually
            majored in Computer Engineering (which, back at that time, was
            basically Computer Science + some random Engineering core subjects
            like Mechanics, Chemistry and a sh*t ton of Calculus and Physics).
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
          <p>
            Quipper was acquired by the giant Japanese corporation
            <a href="https://recruit-holdings.com/">Recruit Holdings</a> and
            after about 2 years working for them in London, I decided to try out
            moving to their office in Tokyo.
          </p>
          <div class="columns is-desktop">
            <div class="column">
              <p>
                I've been in Japan since September 2017, and around October 2018
                I moved from Quipper to become an Engineering Manager at
                <a href="https://about.mercari.com/en/">Mercari</a>. My team is
                called Engineering Office and we're a team of engineers and
                non-engineers converted into Technical Program Managers, working
                on projects to improve the overall practices and processes among
                Mercari engineering teams and provide a better employee
                experience to all engineers and leaders of the Engineering
                division (~300 people).
              </p>
              <p>
                I wrote an article about how we're
                <a
                  href="/shaping-engineering-culture-in-a-chaotic-environment-part-1"
                >
                  shaping the Engineering culture in a chaotic environment
                </a>
                , and I plan on sharing more about my work in the future.
              </p>
            </div>
            <div class="column">
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

          <div class="social columns is-mobile">
            <div class="column is-1 is-offset-3 has-text-centered">
              <a title="Facebook" href="https://facebook.com/tuttiquintella">
                <img src="img/facebook.svg" alt="Facebook" />
              </a>
            </div>
            <div class="column is-1 has-text-centered">
              <a title="Twitter" href="https://twitter.com/tuttiq">
                <img
                  className="fas fa-lg"
                  src="img/twitter.svg"
                  alt="Twitter"
                />
              </a>
            </div>
            <div class="column is-1 has-text-centered">
              <a title="Instagram" href="https://instagram.com/tuttiquintella">
                <img src="img/instagram.svg" alt="Instagram" />
              </a>
            </div>
            <div class="column is-1 has-text-centered">
              <a title="LinkedIn" href="https://linkedin.com/in/tuttiq">
                <img src="img/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
            <div class="column is-1 has-text-centered">
              <a title="Github" href="https://github.com/tuttiq">
                <img src="img/github.svg" alt="Github" />
              </a>
            </div>
          </div>
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
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
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

.social {
  padding-top: 1em;
}

.social a {
  padding: 0.5em 0.5em 0.3em 0.5em;
  border-radius: 1em;
  background-color: #e0dfd5;
  vertical-align: middle;
  display: inline;
}

.social img {
  width: 1em;
  height: 1em;
}
</style>
