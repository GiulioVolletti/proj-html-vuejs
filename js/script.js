console.log("hello world");
const app = new Vue({

  el: '#wrapper-script',

  data: {
    scrollPosition: null,
    telephoneNumber:  "+1 (305) 1234-5678",
    contactEMail: " hello@example.com",
    companyAddress: "Main Avenue, 987",
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
