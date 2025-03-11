import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <section className="home-introduction-section">
          <div className="home-introduction-section-content">
            <h1>Sonna Studios</h1>
            <h2>Photography & Videography</h2>
            <p>Make an Enquiry</p>
            <p>
              Sonna is a premium event photo & video coverage for Australia &
              New Zealand, capturing the biggest and best events in town.
              Working alongside global and local brands alike, Sonna is the
              ‘go-to’ event photographer and videographer in NZ and a preferred
              supplier to government departments, charities, businesses, brands
              and corporations.
            </p>
          </div>
        </section>
        <div className="home-image-text-module">
          <p>
            We deliver premium event photo & video coverage New Zealand wide,
            capturing the biggest and best events in town. Working alongside
            global and local brands alike, Sonna is the ‘go-to’ event
            photographer and videographer in NZ and a preferred supplier to
            government departments, charities, businesses, brands and
            corporations.
          </p>
        </div>
        <div className="home-medium-paragraph-module">
          <h2>
            We deliver premium event photo & video coverage New Zealand wide,
            capturing the biggest and best events in town. Working alongside
            global and local brands alike, Sonna is the ‘go-to’ event
            photographer and videographer in NZ and a preferred supplier to
            government departments, charities, businesses, brands and
            corporations.
          </h2>
        </div>
        <div className="home-image-carousel-module"></div>
        <div className="home-sticky-book-a-shoot-module">
          <p>
            We deliver premium event photo & video coverage New Zealand wide,
            capturing the biggest and best events in town. Working alongside
            global and local brands alike, Sonna is the ‘go-to’ event
            photographer and videographer in NZ and a preferred supplier to
            government departments, charities, businesses, brands and
            corporations.We deliver premium event photo & video coverage New
            Zealand wide, capturing the biggest and best events in town. Working
            alongside global and local brands alike, Sonna is the ‘go-to’ event
            photographer and videographer in NZ and a preferred supplier to
            government departments, charities, businesses, brands and
            corporations.
          </p>
          <button>Book A Shoot</button>
        </div>
        <div className="home-sticky-scroll-photography-module">
          <h3>
            We deliver premium event photo & video coverage New Zealand wide,
            capturing the biggest and best events in town. Working alongside
            global and local brands alike, Sonna is the ‘go-to’ event
            photographer and videographer in NZ and a preferred supplier to
            government departments, charities, businesses, brands and
            corporations.
          </h3>
          <button>View All Photography</button>
        </div>
      </main>
    </div>
  );
}
