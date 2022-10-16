// import styles from "./channel.css";

class Channel extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    //lifecycle event | dostaniemy ten call, gdy nasz element zostanie dodany do strony
    this.render();
  }

  //   async getStyle() {
  //     const style = await fetch("../static/channel.css");
  //     console.log(style);
  //     return style;
  //   }

  get style() {
    return `
            <style>
            .main {
                margin-top: 8px;
              }

              .channel__list {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                list-style: none;
                padding: 0;
                margin: 0;
              }

              .channel__list li {
                flex-basis: 100%;
              }

              .channel {
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 10px;
                align-items: center;
                background: #fff;
              }

              .channel__image {
                width: 35%;
                border: 4px solid #eceff1;
                border-radius: 50%;
                cursor: pointer;
              }

              .channel__image:hover {
                transform: scale(1.02);
              }

              h2.channel__header {
                font-size: 1.2em;
              }

              .channel__statistics {
                display: flex;
                justify-content: space-evenly;
                width: 100%;
                margin-bottom: 10px;
              }

              .wrapper__statistic {
                flex-basis: 33.33%;
                font-size: 0.7em;
                text-align: center;
              }

              .wrapper__statistic h3 {
                font-size: 1em;
                color: #818181;
                margin: 0;
              }

              .wrapper__statistic p {
                font-weight: bold;
                font-size: 1.3em;
                margin: 2px 0;
              }

              .subscribers {
              }
              h3.subscribers__title {
              }
              p.subscribers__count {
              }

              .videos {
              }
              h3.videos__title {
              }
              p.videos__count {
              }

              .views {
              }
              h3.views__title {
              }
              p.views__count {
              }

              @media only screen and (min-width: 544px) {
                .main {
                }

                .channel__list {
                }

                .channel__list li {
                }

                .channel {
                }

                .channel__image {
                  width: 45%;
                }

                h2.channel__header {
                  font-size: 1em;
                }

                .channel__statistics {
                }

                .wrapper__statistic {
                }

                .wrapper__statistic h3 {
                }

                .wrapper__statistic p {
                }

                .subscribers {
                }
                h3.subscribers__title {
                }
                p.subscribers__count {
                }

                .videos {
                }
                h3.videos__title {
                }
                p.videos__count {
                }

                .views {
                }
                h3.views__title {
                }
                p.views__count {
                }
              }

              @media only screen and (min-width: 768px) {
                .main {
                }

                .channel__list {
                }

                .channel__list li {
                  display: block;
                  flex-basis: calc(50% - 4px);
                }

                .channel {
                }

                .channel__image {
                  width: 60%;
                }

                h2.channel__header {
                  font-size: 1em;
                }

                .channel__statistics {
                }

                .wrapper__statistic {
                }

                .wrapper__statistic h3 {
                  font-size: 0.8em;
                }

                .wrapper__statistic p {
                  font-size: 1.1em;
                }

                .subscribers {
                }
                h3.subscribers__title {
                }
                p.subscribers__count {
                }

                .videos {
                }
                h3.videos__title {
                }
                p.videos__count {
                }

                .views {
                }
                h3.views__title {
                }
                p.views__count {
                }
              }

              @media only screen and (min-width: 1024px) {
                .main {
                }

                .channel__list {
                }

                .channel__list li {
                }

                .channel {
                }

                .channel__image {
                }

                h2.channel__header {
                  font-size: 1.3em;
                }

                .channel__statistics {
                }

                .wrapper__statistic {
                }

                .wrapper__statistic h3 {
                  font-size: 1em;
                }

                .wrapper__statistic p {
                  font-size: 1.3em;
                }

                .subscribers {
                }
                h3.subscribers__title {
                }
                p.subscribers__count {
                }

                .videos {
                }
                h3.videos__title {
                }
                p.videos__count {
                }

                .views {
                }
                h3.views__title {
                }
                p.views__count {
                }
              }

              @media only screen and (min-width: 1200px) {
                .main {
                }

                .channel__list {
                }

                .channel__list li {
                  flex-basis: calc(25% - 6px);
                }

                .channel {
                }

                .channel__image {
                  width: 75%;
                }

                h2.channel__header {
                  font-size: 1em;
                }

                .channel__statistics {
                }

                .wrapper__statistic {
                }

                .wrapper__statistic h3 {
                  font-size: 0.8em;
                }

                .wrapper__statistic p {
                  font-size: 1.1em;
                }

                .subscribers {
                }
                h3.subscribers__title {
                }
                p.subscribers__count {
                }

                .videos {
                }
                h3.videos__title {
                }
                p.videos__count {
                }

                .views {
                }
                h3.views__title {
                }
                p.views__count {
                }
              }

            </style>
        `;
  }

  static async asyncGetChannelsArray() {
    const response = await fetch("../static/channels.json");
    const channels = await response.json();
    return channels;
  }

  render() {
    Channel.asyncGetChannelsArray().then((channelsArr) => {
      const channelList = channelsArr.map((channel) => {
        return `
                <li>
                    <div class="channel">
                    <img
                        class="channel__image"
                        src="${channel.thumbnails.medium.url}"
                        alt="${"logo -" + channel.title}"
                    />
                    <h2 class="channel__header">${channel.title}</h2>
                    <div class="channel__statistics">
                        <div class="wrapper__statistic subscribers">
                        <h3 class="subscribers__title">SUBSCRIBERS:</h3>
                        <p class="subscribers__count">${
                          channel.statistics.subscriberCount
                        }</p>
                        </div>
                        <div class="wrapper__statistic videos">
                        <h3 class="videos__title">VIDEOS:</h3>
                        <p class="videos__count">${
                          channel.statistics.videoCount
                        }</p>
                        </div>
                        <div class="wrapper__statistic views">
                        <h3 class="views__title">VIEWS:</h3>
                        <p class="views__count">${
                          channel.statistics.viewCount
                        }</p>
                        </div>
                    </div>
                    </div>
                </li>
            `;
      });

      //   const style =
      //   ${this.getStyle()}

      this.shadow.innerHTML = `
            ${this.style}
                <div class="main">
                <ul class="channel__list">
                ${channelList.join("")}
                </ul>
            </div>
            `;
    });
  }
}

customElements.define("channel-list", Channel);

// STARA WERSJA ------------------------------------START-
// const channelsList = document.querySelector(".channel__list");
// const channelsListLi = document.querySelector(".channel__list li");
// console.log(channelsListLi);

// fetch("../static/channels.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.map((channel) => {
//       const liElement = document.createElement("li");

//       const title = channel.title;
//       const description = channel.description;
//       const customUrl = channel.customUrl;
//       const publishedAt = channel.publishedAt;
//       const thumbnails = channel.thumbnails;
//       const localized = channel.localized;
//       const country = channel.country;
//       const statistics = channel.statistics;

//       channelsList.appendChild(channelsListLi.cloneNode(true));
//     });
//   });
// STARA WERSJA ------------------------------------END-
