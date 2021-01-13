console.log("hello world");
const app = new Vue({

  el: '#wrapper-script',

  data: {
    scrollPosition: null
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      console.log(this.scrollPosition);
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }

})


// destroy() {
//   window.removeEventListener('scroll', this.updateScroll)
// }

// <div :class="{classA: scrollPosition < 100, classB: scrollPosition > 100}">
// </div>
