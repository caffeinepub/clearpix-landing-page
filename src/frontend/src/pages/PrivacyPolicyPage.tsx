export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">
          Last updated: March 30, 2026
        </p>

        <div className="text-gray-300 space-y-8 text-sm leading-relaxed">
          <p>
            At ClearPix ("we", "our", or "us"), your privacy is important to us.
            This Privacy Policy explains how information is collected, used,
            processed, and protected when you use the ClearPix: AI Photo
            Enhancer application ("the App").
          </p>
          <p>
            ClearPix does not require account registration, login, or signup to
            use the App.
          </p>

          <Section title="1. Information We Collect">
            <SubSection title="a. Personal Information">
              <p>
                ClearPix does not collect personal information, such as names,
                email addresses, phone numbers, login credentials, or payment
                details.
              </p>
            </SubSection>
            <SubSection title="b. Photos & Media (User Content and Face Data)">
              <p>
                ClearPix may request permission to access photos stored on your
                device so that you can select images to enhance using AI-powered
                features.
              </p>
              <p>
                Photos processed by ClearPix may include human faces. During
                processing, the App may temporarily detect facial features (such
                as eyes, nose, mouth, and facial contours) solely for the
                purpose of improving image quality, including sharpening,
                deblurring, restoration, and resolution enhancement.
              </p>
              <p className="font-medium text-white">ClearPix does not:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Collect or store biometric identifiers</li>
                <li>Perform face recognition or face identification</li>
                <li>Create or store face templates or face profiles</li>
                <li>
                  Use face data for authentication, tracking, advertising,
                  analytics, or profiling
                </li>
              </ul>
              <p>
                All photo and face-related processing occurs only when the user
                actively selects a photo and initiates enhancement.
              </p>
            </SubSection>
            <SubSection title="c. Device & Usage Data (Non-Personal Information)">
              <p>
                We may automatically collect limited, non-personal information,
                including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Device type and operating system</li>
                <li>App version</li>
                <li>Anonymous usage statistics</li>
                <li>Crash reports and performance diagnostics</li>
              </ul>
              <p>
                This data is used only to improve app stability, performance,
                and user experience.
              </p>
            </SubSection>
            <SubSection title="d. Permissions">
              <p>
                The App may request access to photos or media storage strictly
                to allow image selection for enhancement. These permissions are
                not used to collect personal data.
              </p>
            </SubSection>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>ClearPix uses collected information only to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Enhance photos selected by the user using AI technology</li>
              <li>
                Temporarily process facial features to improve image quality
              </li>
              <li>Improve app performance and reliability</li>
              <li>Diagnose crashes and technical issues</li>
            </ul>
            <p>
              ClearPix does not use any information, including facial features,
              for user identification, advertising, tracking, profiling, or AI
              training beyond the immediate enhancement task.
            </p>
          </Section>

          <Section title="3. Data Storage and Retention">
            <p>ClearPix does not permanently store user photos or face data.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Photos and facial features are processed temporarily</li>
              <li>
                Processing lasts only as long as required to complete the
                enhancement
              </li>
              <li>
                No images or face data are retained on servers or databases
              </li>
            </ul>
            <p>Users retain full control over their photos at all times.</p>
          </Section>

          <Section title="4. Sharing and Disclosure of Information">
            <p>ClearPix does not sell, rent, or trade user data.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Facial features detected during processing are not shared with
                third parties
              </li>
              <li>
                Photos and face data are not used for marketing, analytics, or
                profiling
              </li>
              <li>
                Aggregated, non-personal diagnostic data may be shared with
                trusted service providers solely to improve app performance
              </li>
              <li>
                Information may be disclosed if required by law or legal process
              </li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            <p>
              We apply reasonable and industry-standard security practices to
              protect data processed by the App. Since ClearPix does not store
              photos or facial data, most processing occurs locally on the
              user's device.
            </p>
          </Section>

          <Section title="6. Children's Privacy">
            <p>
              ClearPix is not intended for children under the age of 13. We do
              not knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="7. Your Choices and Controls">
            <ul className="list-disc pl-5 space-y-1">
              <li>Grant or revoke photo permissions via device settings</li>
              <li>Delete photos from your device at any time</li>
              <li>Uninstall the App whenever you choose</li>
            </ul>
          </Section>

          <Section title="8. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected by updating the "Last updated" date above.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
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
