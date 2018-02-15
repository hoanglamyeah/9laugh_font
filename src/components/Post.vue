<template>
  <section class="post cell small-12">
    <h1 class="title">{{data.title}}</h1>
    <nav aria-label="You are here:" role="navigation">
      <ul class="breadcrumbs">
        <li><router-link to="/" exact>Home</router-link></li>
        <li>
          <span class="show-for-sr">Current: </span> {{data.title}}
        </li>
      </ul>
    </nav>
    <div class="content small-12">
      <div>
        <p>{{data.Description}}</p>
        <div class="grid-x">
          <div class="large-3 grid-x">
            <vote :id="'a'" class="auto"></vote>
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
        <div class="grid-x meta">
          <div class="small-12 text-left"><i class="fa fa-calendar"></i> 10 months ago by 9Laugh</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  /* eslint-disable */
  import Vote from './Vote'

  export default {
    name: "post",
    components: {Vote},
    data() {
      return {
        data: {
          title: "Lorem ipsum dolor sit amet, no idque urbanitas nec.",
          Description: "Lorem ipsum dolor sit amet, no idque urbanitas nec. Duo ne novum principes rationibus, mei et delenit percipit forensibus. An inermis probatus scribentur nam. Fastidii tincidunt id pro, ei nec habeo timeam quaerendum, nam soluta consequat quaerendum ad."
        },
        shows: []
      };
    },
  }
</script>

<style scoped>

</style>
