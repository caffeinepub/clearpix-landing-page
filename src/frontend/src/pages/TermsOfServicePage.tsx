export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">
          Effective Date: December 5, 2025
        </p>

        <div className="text-gray-300 space-y-8 text-sm leading-relaxed">
          <p>
            Welcome to ClearPix ("we", "our", or "us"). By downloading,
            installing, or using the ClearPix app ("the App"), you agree to be
            bound by these Terms &amp; Conditions. Please read them carefully.
            If you do not agree, do not use the App.
          </p>

          <Section title="1. Use of the App">
            <p>
              ClearPix provides tools and features for image enhancement and
              editing. You agree to use the App only for lawful purposes and in
              accordance with these Terms.
            </p>
            <p>You may not use the App to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>
                Upload or process illegal, harmful, or copyrighted content you
                do not have rights to
              </li>
              <li>Reverse-engineer or modify the App</li>
            </ul>
          </Section>

          <Section title="2. No Account Required">
            <p>
              ClearPix does not require users to create an account or log in.
              All features are accessible without registration.
            </p>
          </Section>

          <Section title="3. User Content">
            <p>
              You retain full ownership of all images and media you edit using
              ClearPix.
            </p>
            <p>ClearPix:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Does not store your images</li>
              <li>Does not upload your content to external servers</li>
              <li>Does not collect your media files</li>
            </ul>
            <p>
              All image processing happens locally on your device unless stated
              otherwise. You are responsible for ensuring that the content you
              upload or modify does not violate any third-party rights or laws.
            </p>
          </Section>

          <Section title="4. License to Use the App">
            <p>
              We grant you a limited, non-exclusive, non-transferable license
              to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Download and use ClearPix for personal, non-commercial use
              </li>
              <li>Use the App according to these Terms</li>
            </ul>
            <p>You may not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Copy, modify, or distribute the App</li>
              <li>Decompile or reverse-engineer the software</li>
              <li>Use the App for commercial services unless permitted</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              All trademarks, logos, designs, and content within the App
              (excluding your personal images) are the property of ClearPix or
              its licensors. You may not use these without written permission.
            </p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>
              The App may include third-party tools or open-source components.
              We are not responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Third-party content</li>
              <li>Third-party services</li>
              <li>External website privacy practices</li>
            </ul>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>ClearPix is provided "as is" and "as available."</li>
              <li>
                We do not guarantee the App will be error-free, uninterrupted,
                or compatible with all devices.
              </li>
              <li>
                We are not liable for any damages, including loss of data,
                device issues, or misuse of the App.
              </li>
            </ul>
            <p>You use the App at your own risk.</p>
          </Section>

          <Section title="8. Privacy">
            <p>
              Your privacy is important to us. Please review our{" "}
              <a
                href="/privacy-policy"
                className="text-[#FF3A5C] hover:underline"
              >
                Privacy Policy
              </a>{" "}
              to understand how we handle information.
            </p>
            <p>
              Privacy Policy Contact:{" "}
              <a
                href="mailto:support@eleganceme.info"
                className="text-[#FF3A5C] hover:underline"
              >
                support@eleganceme.info
              </a>
            </p>
          </Section>

          <Section title="9. Changes to the Terms">
            <p>
              We may update these Terms occasionally. Any changes will be posted
              within the App or on the official distribution page. The updated
              version will replace all previous versions and become effective
              once posted.
            </p>
            <p>Current Effective Date: December 5, 2025</p>
          </Section>

          <Section title="10. Termination">
            <p>
              We may suspend or terminate access to the App if you violate these
              Terms or misuse the service. You may stop using the App at any
              time by uninstalling it.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have questions about these Terms, please contact us:</p>
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
