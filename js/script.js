console.log("hello world");
const app = new Vue({

  el: '#wrapper-script',

  data: {
    scrollPosition: null,
    telephoneNumber:  "+1 (305) 1234-5678",
    contactEMail: " hello@example.com",
    companyAddress: "Main Avenue, 987",
    socialLink: [
      {
        tipe: "Facebook",
        iconClass: "fab fa-facebook-f",
        url: "#",
      },
      {
        tipe: "Twitter",
        iconClass: "fab fa-twitter",
        url: "#",
      },
      {
        tipe: "Linkedin",
        iconClass: "fab fa-linkedin-in",
        url: "#",
      },
    ],
    navBarFixed: [
      {
        name: "home",
        link: "#",
      },
      {
        name: "about",
        link: "#",
      },
      {
        name: "service",
        link: "#",
      },
      {
        name: "pricing",
        link: "#",
      },
      {
        name: "blog",
        link: "#",
      },
    ],
    infoDropdown:["Info 1", "Info 2", "Info 3"],
    footerLinkAbout: [
      {
        name: "The Company",
        url: "#",
      },
      {
        name: "Institutional",
        url: "#",
      },
      {
        name: "Social & Events",
        url: "#",
      },
      {
        name: "Innovation",
        url: "#",
      },
      {
        name: "Environment",
        url: "#",
      },
      {
        name: "Technology",
        url: "#",
      },
    ],
    footerLinkServices: [
      {
        name: "Audit & Assurance",
        url: "#",
      },
      {
        name: "Financial Advisory",
        url: "#",
      },
      {
        name: "Analytics M&A",
        url: "#",
      },
      {
        name: "Middle Marketing",
        url: "#",
      },
      {
        name: "Legal Consulting",
        url: "#",
      },
      {
        name: "Regulatory Risk",
        url: "#",
      },
    ],
    footerLinkSupport: [
      {
        name: "Responsibility",
        url: "#",
      },
      {
        name: "Terms of Use",
        url: "#",
      },
      {
        name: "About Cookies",
        url: "#",
      },
      {
        name: "Privacy Policy",
        url: "#",
      },
      {
        name: "Accessibility",
        url: "#",
      },
      {
        name: "Information",
        url: "#",
      },
    ],
    classIndex: null,
    animationTop: false,
    animationAbout:false,
    animationService: false,
    animationPrice: false,
  },

  methods: {
    mouseEnterClassChange (list){
      this.classIndex = list.name;
    },
    mouseLeave () {
      this.classIndex = null;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 200) {
        this.animationTop = true
      }
      if (this.scrollPosition > 700) {
        this.animationAbout = true
      }
      if (this.scrollPosition > 1700) {
        this.animationService = true
      }
      if (this.scrollPosition > 2800) {
        this.animationPrice = true
      }
    },

  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }

})
