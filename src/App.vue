<template>
  <div id="app">
    <div class="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
      <button class="menu-icon" type="button" data-toggle="responsive-menu"></button>
      <div class="title-bar-title">Menu</div>
    </div>
    <aside class="off-canvas position-left" id="offCanvas" data-off-canvas>
      <ul class="sidebar-menu" data-close="offCanvas">
        <li>
          <router-link to="/reveal" exact>#Reveal</router-link>
        </li>
        <li>
          <router-link to="/slider" exact>#Slider</router-link>
        </li>
        <li>
          <router-link to="/tooltip" exact>#Tooltip</router-link>
        </li>
        <li>
          <router-link to="/dropdown-menu" exact>#Dropdown Menu</router-link>
        </li>
        <li>
          <router-link to="/drilldown-menu" exact>#Drilldown Menu</router-link>
        </li>
        <li>
          <router-link to="/accordion-menu" exact>#Accordion Menu</router-link>
        </li>
        <li>
          <router-link to="/magellan" exact>#Magellan</router-link>
        </li>
        <li>
          <router-link to="/accordion" exact>#Accordion</router-link>
        </li>
        <li>
          <router-link to="/dropdown" exact>#Dropdown</router-link>
        </li>
        <li>
          <router-link to="/tabs" exact>#Tabs</router-link>
        </li>
        <li>
          <router-link to="/orbit" exact>#Orbit</router-link>
        </li>
      </ul>
    </aside>
    <div class="off-canvas-content grid-container full" data-off-canvas-content>
      <header class="top-bar" id="responsive-menu">
        <div class="top-bar-left">
          <ul class="dropdown menu" data-dropdown-menu>
            <li class="logo">
              <router-link to="/">9Laugh<span>.com</span></router-link>
            </li>
            <li><a href="#"><i class="fa fa-fire"></i> Top</a></li>
            <li><a href="#"><i class="fa fa-fire"></i> Fresh</a></li>
            <li><a href="#"><i class="fa fa-random"></i> Random</a></li>
            <li>
              <router-link to="/today" exact><i class="fa fa-calendar-o"></i> Today</router-link>
            </li>
            <li><a href="#"><i class="fa fa-user-circle"></i> Jokers</a></li>
          </ul>
        </div>
        <div class="top-bar-right">
          <ul class="menu">
            <li class="account">
              <router-link to="/login" exact>
                <i class="fa fa-user"></i>
                <span> Account</span>
              </router-link>
            </li>
          </ul>
        </div>
      </header>
      <main class="content-wrapper">
        <div class="main-content">
          <router-view></router-view>
        </div>
        <a class="button small menu-button abs-button" data-toggle="offCanvas"><i class="fa fa-bars"></i></a>
      </main>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'app',
    mounted() {
      $(this.$el).foundation()
    },
  };
</script>

<style lang="scss">
  @import "./css/settings";
  @import './css/global';

  // Chrome Reset
  a:focus {
    outline: none;
  }

  .logo {
    width: 160px;
    float: left;
    position: relative;
    height: 30px;
    a {
      color: #fefefe !important;
      font-size: 23px !important;
      margin-left: 5px;
      position: absolute;
      bottom: 0px;
      text-transform: unset !important;
      font-family: 'Luckiest Guy', cursive !important;
      line-height: 0.6;
      span {
        color: #3de688;
        font-size: 11px;
      }
    }
  }

  .top-bar {
    .menu {
      li {
        a {
          color: #ffffff;
          padding: 7px 15px;
          font-size: 14px;
          font-weight: bold;
        }
      }

      .account {
        a {
          border: 1px solid #eeeeee;
          border-radius: 2px;
        }
        img {

        }
        span {

        }
      }
    }
  }

  .top-bar, .top-bar ul {
    background-color: #0085be;
  }

  li a.menu-button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    float: right;
    background: #334c82;
  }

  .content-wrapper {
    padding: 3rem 0;
    .main-content {
      max-width: 640px;
      margin: 0 auto;
      min-height: calc(100vh - 9.5rem);
      border: 0px solid #eee;
      border-radius: 2px;
    }
    .abs-button {
      position: fixed;
      top: 45vh;
      left: -10px;
      background: #000;
      border-radius: 3px;
    }
  }

  .sidebar-menu {
    @include menu-base();
    @include menu-direction(vertical);
    a {
      color: $secondary-color;
      font-weight: normal;
    }
    a.active {
      color: #ffffff;
    }
  }
</style>
