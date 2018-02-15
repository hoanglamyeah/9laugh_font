<template>
  <div class="vote-button switch">
    <input class="switch-input" :id="vote_button_id" type="checkbox" :name="vote_button_id" v-model="like">
    <label class="switch-paddle" :for="vote_button_id">
      <span class="switch-active"><i class="fa fa-thumbs-up" aria-hidden="true"></i></span>
      <span class="switch-inactive"><i class="fa fa-thumbs-down" aria-hidden="true"></i></span>
      <span class="count">{{ count }}</span>
    </label>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "vote",
    props: ['id'],
    data() {
      return {
        like: true,
        count: 0,
        vote_button_id: 'vote-button'
      }
    },

    created() {
      this.vote_button_id = this.vote_button_id + '-' + this.id
    }
  }
</script>

<style lang="scss" scoped>
  .vote-button {
    margin-bottom: 0;

  .switch-paddle {
    width: 4.5rem;

  .switch-active {
    left: 15%;
  }

  .switch-inactive {
  }

  }
  .switch-paddle:after {
    width: 2rem;
    z-index: 1;
  }

  input:checked ~ .switch-paddle::after {
    left: 2.25rem;
  }

  .count {
    z-index: 10;
    position: absolute;
    top: 0.25rem;
    left: 0.5rem;
    display: block;
    color: #907f7f;
  }

  input:checked ~ .switch-paddle .count {
    left: 2.5rem;
    color: #798288;
  }

  }
</style>
