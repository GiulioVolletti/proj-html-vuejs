console.log("hello world");
const app = new Vue({

  el: '#wrapper-script',

  data: {
    scrollPosition: null,
    telephoneNumber:  "+1 (305) 1234-5678",
    contactEMail: " hello@example.com",
    companyAddress: "Main Avenue, 987",
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      // console.log(this.scrollPosition);
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }

})
