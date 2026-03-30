export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
        <p className="text-gray-400 text-sm mb-10">
          Last updated: March 30, 2026
        </p>

        <div className="text-gray-300 space-y-8 text-sm leading-relaxed">
          <p>
            This Cookie Policy explains how ClearPix ("we", "our", or "us") uses
            cookies and similar tracking technologies when you visit our
            website. By using our website, you consent to the use of cookies as
            described in this policy.
          </p>

          <Section title="1. What Are Cookies?">
            <p>
              Cookies are small text files placed on your device when you visit
              a website. They are widely used to make websites work more
              efficiently and to provide information to site owners. Cookies do
              not contain personally identifiable information but may link to
              information that does.
            </p>
          </Section>

          <Section title="2. Types of Cookies We Use">
            <SubSection title="Essential Cookies">
              <p>
                These cookies are strictly necessary for the website to function
                correctly. They enable core functionality such as page
                navigation and access to secure areas. The website cannot
                function properly without these cookies.
              </p>
            </SubSection>
            <SubSection title="Analytics Cookies">
              <p>
                We use analytics cookies to understand how visitors interact
                with our website — which pages are visited, how long users stay,
                and where they come from. This helps us improve the website
                experience. All data collected is aggregated and anonymous.
              </p>
            </SubSection>
            <SubSection title="Preference Cookies">
              <p>
                Preference cookies remember your settings and choices (such as
                language preferences) so we can provide a more personalized
                experience on return visits.
              </p>
            </SubSection>
            <SubSection title="Marketing Cookies">
              <p>
                We may use marketing cookies to track visits across websites and
                show you relevant advertisements. These cookies collect
                information about your browsing habits. You can opt out of these
                at any time (see Section 5).
              </p>
            </SubSection>
          </Section>

          <Section title="3. Third-Party Cookies">
            <p>
              Some cookies on our website are set by third-party services,
              including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-white">Google Analytics</strong> — to
                measure site traffic and usage patterns
              </li>
              <li>
                <strong className="text-white">
                  Google Play / Apple App Store
                </strong>{" "}
                — for download link tracking and attribution
              </li>
              <li>
                <strong className="text-white">Vimeo</strong> — for embedded
                video content
              </li>
            </ul>
            <p>
              These third parties have their own privacy and cookie policies. We
              recommend reviewing them for more detail on how they use cookies.
            </p>
          </Section>

          <Section title="4. How Long Do Cookies Last?">
            <p>Cookies can be either:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-white">Session cookies</strong> —
                temporary cookies deleted when you close your browser
              </li>
              <li>
                <strong className="text-white">Persistent cookies</strong> —
                cookies that remain on your device until they expire or you
                delete them
              </li>
            </ul>
            <p>
              Most of our analytics cookies are persistent and expire after
              12–24 months.
            </p>
          </Section>

          <Section title="5. Managing and Disabling Cookies">
            <p>You can control and manage cookies in several ways:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-white">Browser settings</strong> — most
                browsers allow you to refuse or delete cookies via their
                settings. Refer to your browser's help documentation for
                instructions.
              </li>
              <li>
                <strong className="text-white">Opt-out tools</strong> — for
                analytics, you can use the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF3A5C] hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
            </ul>
            <p>
              Please note that disabling certain cookies may affect the
              functionality of the website.
            </p>
          </Section>

          <Section title="6. Do Not Track">
            <p>
              Some browsers include a "Do Not Track" (DNT) feature. Our website
              currently does not respond to DNT signals, as there is no
              universally accepted standard for how websites should respond to
              such signals.
            </p>
          </Section>

          <Section title="7. Changes to This Cookie Policy">
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in technology, legislation, or our practices. Changes will
              be published on this page with an updated "Last updated" date.
            </p>
          </Section>

          <Section title="8. Contact Us">
            <p>
              If you have questions about our use of cookies or this policy,
              please contact us:
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:support@eleganceme.info"
                className="text-[#FF3A5C] hover:underline"
              >
                support@eleganceme.info
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function SubSection({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-base font-medium text-gray-200 mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
