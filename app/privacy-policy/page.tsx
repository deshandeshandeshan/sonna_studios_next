import "../privacy-policy.css";
import "@/components/grid.css";

export default function privacyPolicy() {
  return (
    <main className="mobile-padding grid">
      <article className="privacy-policy type-sub">
        <header>
          <h1 className="type-sub spacing-16">PRIVACY POLICY</h1>
        </header>

        <section className="spacing-64">
          <h2 className="type-sub spacing-16">Introduction</h2>
          <p className="type-sub">
            Sonna (“we,” “our,” or “us”) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website{" "}
            <a className="text-grey" href="https://www.sonnastudios.com">
              www.sonnastudios.com
            </a>
            (the “Website”) or interact with our services. Please read this
            policy carefully to understand our practices regarding your
            information.
          </p>
        </section>

        <section className="spacing-64">
          <h2 className="type-sub spacing-16">Information We Collect</h2>

          <h3 className="type-sub spacing-12">1. Non-Personal Information</h3>
          <ul className="type-sub spacing-32">
            <li className="spacing-12">
              &#x2022;IP address, browser type, and operating system.
            </li>
            <li className="spacing-12">
              &#x2022;Pages viewed, time spent on the Website, and other
              analytics data.
            </li>
            <li className="spacing-12">
              &#x2022;Cookies and similar technologies to improve your browsing
              experience.
            </li>
          </ul>

          <h3 className="type-sub">2. Sensitive Information</h3>
          <p className="type-sub spacing-12">
            We do not intentionally collect sensitive personal information
            unless it is directly relevant to the service you request and you
            provide explicit consent.
          </p>
          <h2 className="type-sub spacing-12">How We Use Your Information</h2>
          <p className="spacing-12">We use your information to:</p>
          <ul className="type-sub spacing-12">
            <li>&#x2022;Provide and improve our services.</li>
          </ul>
        </section>

        <section className="spacing-64">
          <h2 className="type-sub">Sharing Your Information</h2>
          <p className="spacing-12">We may share your information with:</p>
          <ul className="type-sub spacing-12">
            <li className="spacing-12">
              &#x2022;Service Providers: Third-party vendors that help us
              analyse data or run marketing campaigns.
            </li>
            <li className="spacing-12">
              &#x2022;Legal Authorities: When required by law or to protect our
              rights.
            </li>
          </ul>
          <p className="type-sub">
            We never sell your personal information to third parties.
          </p>
        </section>

        <section className="spacing-64">
          <h2 className="type-sub">Cookies and Tracking Technologies</h2>
          <p className="spacing-12">
            We use cookies and similar technologies to:
          </p>
          <ul className="type-sub">
            <li className="spacing-12">&#x2022;Personalise your experience.</li>
            <li className="spacing-12">
              &#x2022;Analyse website traffic and performance.
            </li>
            <li className="spacing-12">
              &#x2022;Show targeted advertisements.
            </li>
          </ul>
          <p>
            You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="spacing-64">
          <h2 className="type-sub">Your Rights</h2>
          <p className="spacing-12">
            Depending on your location, you may have the right to:
          </p>
          <ul>
            <li className="spacing-12">
              &#x2022;Access, update, or delete your personal information.
            </li>
            <li className="spacing-12">
              &#x2022;Opt out of receiving marketing communications.
            </li>
            <li className="spacing-12">
              &#x2022;Request information on how we process your data.
            </li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a className="text-grey" href="mailto:info@sonnastudios.co">
              info@sonnastudios.co
            </a>
            .
          </p>
        </section>

        <section className="spacing-64">
          <h2 className="type-sub">Data Retention</h2>
          <p>
            We retain your information for as long as necessary to fulfil the
            purposes outlined in this Privacy Policy unless a longer retention
            period is required by law.
          </p>
        </section>

        <section className="spacing-64">
          <h2 className="type-sub">Security</h2>
          <p>
            We use industry-standard measures to protect your information from
            unauthorised access, disclosure, or destruction. However, no method
            of transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section className="spacing-64">
          <h2 className="type-sub">Third-Party Links</h2>
          <p>
            Our Website may contain links to third-party websites. We are not
            responsible for the privacy practices of these websites. Please
            review their privacy policies before submitting any information.
          </p>
        </section>

        <section className="spacing-64">
          <h2 className="type-sub">Children’s Privacy</h2>
          <p>
            Our services are not directed at individuals under the age of 13,
            and we do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="spacing-64">
          <h2 className="type-sub">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated “Effective Date.” We encourage
            you to review the policy periodically.
          </p>
        </section>

        <section>
          <h2 className="type-sub">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your information, please contact us:
          </p>
          <address>
            Email:{" "}
            <a className="text-grey" href="mailto:info@sonnastudios.co">
              info@sonnastudios.co
            </a>
          </address>
        </section>
      </article>
    </main>
  );
}
