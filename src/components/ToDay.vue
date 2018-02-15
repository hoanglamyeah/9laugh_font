<template>
  <div class="grid-container">
    <div class="grid-x">
      <h1 class="page-title small-12">Today's Jokes</h1>
      <nav aria-label="You are here:" role="navigation" class="small-12">
        <ul class="breadcrumbs">
          <li>
            <router-link to="/" exact>Home</router-link>
          </li>
          <li>
            <span class="show-for-sr">Current: </span> Today
          </li>
        </ul>
      </nav>
      <div class="grid-x small-12">
        <div class="small-3 text-left"><a class="button small" href=""><i class="fa fa-angle-double-left"></i> Yesterday</a></div>
        <div class="small-6 text-center"><a class="button small secondary" href="">February 15, 2018</a></div>
        <div class="small-3 text-right"><a class="button small" href="">Tomorow <i class="fa fa-angle-double-right"></i></a></div>
      </div>
      <section class="post cell small-12" v-for="content, i in data">
        <h2 class="title">
          <router-link :to="{ name: 'post', params: { slug: 123 }}" exact>{{content.title}}</router-link>
        </h2>
        <div class="action small-12 text-center">
        </div>
        <div class="content small-12">
          <div>
            <transition name="fade">
              <div v-if="shows[i].active">
                <p v-html="content.Description"></p>
                <div class="grid-x">
                  <div class="large-3 grid-x">
                    <vote :id="i" class="auto"></vote>
                    <button class="button small"><i class="fa fa-comment"></i></button>
                  </div>
                  <social-sharing url="https://vuejs.org/" inline-template class="large-9 text-right">
                    <div>
                      <network class="button small" network="facebook"><i class="fa fa-fw fa-facebook"></i> Facebook
                      </network>
                      <network class="button small" network="reddit"><i class="fa fa-fw fa-reddit"></i> Reddit</network>
                      <network class="button small" network="twitter"><i class="fa fa-fw fa-twitter"></i> Twitter
                      </network>
                      <network class="button small" network="whatsapp"><i class="fa fa-fw fa-whatsapp"></i> Whatsapp
                      </network>
                    </div>
                  </social-sharing>
                </div>
              </div>
            </transition>
            <div class="grid-x meta" v-on:click="showThis(i)">
              <div class="small-6 text-left"><i class="fa fa-address-card"></i> 9Laugh - <i class="fa fa-calendar"></i>
                10 months ago.
              </div>
              <div class="action small-6 text-right">
                <button type="button" class="button"><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import Vote from './Vote'

  export default {
    name: 'ToDay',

    data() {
      return {
        msg: 'Vue + Foundation',
        show: false,
        data: [
          {
            title: "Lorem ipsum dolor sit amet, no idque urbanitas nec.",
            Description: 'Lorem ipsum dolor sit amet, no idque urbanitas nec. Fastidii tincidunt id pro, ei nec habeo '
          },
          {
            title: "Lorem ipsum dolor sit amet, no idque urbanitas nec.",
            Description: "Lorem ipsum dolor sit amet, no idque urbanitas nec. Duo ne novum principes rationibus, mei et delenit percipit forensibus. An inermis probatus scribentur nam. Fastidii tincidunt id pro, ei nec habeo timeam quaerendum, nam soluta consequat quaerendum ad. Tamquam voluptatum ad nam, eam justo dicant vidisse eu, ut wisi nemore discere est."
          },
          {
            title: "Lorem ipsum dolor sit amet, no idque urbanitas nec.",
            Description: "Lorem ipsum dolor sit amet, no idque urbanitas nec. Duo ne novum principes rationibus, mei et delenit percipit forensibus. An inermis probatus scribentur nam. Tamquam voluptatum ad nam, eam justo dicant vidisse eu, ut wisi nemore discere est."
          },
          {
            title: "Lorem ipsum dolor sit amet, no idque urbanitas nec.",
            Description: "Lorem ipsum dolor sit amet, no idque urbanitas nec. Duo ne novum principes rationibus, mei et delenit percipit forensibus. An inermis probatus scribentur nam. Fastidii tincidunt id pro, ei nec habeo timeam quaerendum, nam soluta consequat quaerendum ad. Tamquam voluptatum ad nam, eam justo dicant vidisse eu, ut wisi nemore discere est."
          },
          {
            title: "Lorem ipsum dolor sit amet, no idque urbanitas nec.",
            Description: "Lorem ipsum dolor sit amet, no idque urbanitas nec. Fastidii tincidunt id pro, ei nec habeo timeam quaerendum, nam soluta consequat quaerendum ad. Tamquam voluptatum ad nam, eam justo dicant vidisse eu, ut wisi nemore discere est."
          },
          {
            title: "Lorem ipsum dolor sit amet, no idque urbanitas nec.",
            Description: "Lorem ipsum dolor sit amet, no idque urbanitas nec. Duo ne novum principes rationibus, mei et delenit percipit forensibus. An inermis probatus scribentur nam. Fastidii tincidunt id pro, ei nec habeo timeam quaerendum, nam soluta consequat quaerendum ad. Tamquam voluptatum ad nam, eam justo dicant vidisse eu, ut wisi nemore discere est."
          },
        ],
        shows: []
      };
    },

    components: {Vote},

    methods: {
      showThis(i) {
        for (var j in this.shows) {
          if (this.shows[j].id == i) {
            if (this.shows[j].active) {
              this.$set(this.shows[j], 'active', false)
            } else {
              this.$set(this.shows[j], 'active', true)
            }
          }
        }
      },

      isShow(i) {
        for (var j in this.shows) {
          if (i === this.shows[j].id) {
            return this.shows[j].active
          }
        }
      }
    },

    mounted() {
      $(this.$el).foundation()

    },

    created() {
      for (var d in this.data) {
        this.shows.push({id: d, active: false})
      }
    }
  };

</script>

<style lang="scss" scoped>

  .image {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .call-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .post {
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 10px;
    .title {
      margin-bottom: 0rem;
      a {
        color: #3b3b3b;
        font-size: 26px;
      }
    }
    .action {
      button {
        padding: 0;
        margin: 0;
        background: none;
        color: #0a0a0a;
      }
    }
    .content {
      .off-canvas-absolute {
        background: none;
        height: max-content;
      }
      .position-top.is-transition-push {
        box-shadow: none;
      }
      .off-canvas-wrapper {
        overflow: -webkit-paged-y;
      }
      .meta {
        font-size: 13px;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

</style>
