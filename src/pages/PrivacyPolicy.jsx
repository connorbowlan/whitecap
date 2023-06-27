import { Hero } from "../containers";

function PrivacyPolicy() {
  return (
    <div>
      <Hero title="Privacy Policy" content="" showGetStarted="false" />
      <div className="article">
        <div className="section-margin secton-padding">
          <p>Effective Date: 06/24/2023</p>
          <p>
            At WhiteCap ("we," "us," or "our"), we understand the
            importance of protecting your privacy. This Privacy Policy outlines
            how we collect, use, disclose, and safeguard your personal
            information when you use our software for billing as provided by our
            natural gas company. By using our software, you consent to the
            practices described in this policy.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Personal Information:</h3>
          <p>
            We may collect certain personal information from you, including but
            not limited to:
          </p>
          <ul>
            <li>
              Contact information (such as name, address, email address, and
              phone number)
            </li>
            <li>Billing and payment information</li>
            <li>Usage and account details related to our software</li>
          </ul>

          <h3>1.2 Non-Personal Information:</h3>
          <p>
            We may also collect non-personal information, such as aggregated
            data and usage statistics, which does not directly identify you.
          </p>

          <h2>2. How We Use Your Information</h2>

          <h3>2.1 Provide and Improve Services:</h3>
          <p>We may use the personal information we collect to:</p>
          <ul>
            <li>Provide and deliver our software and related services</li>
            <li>Process payments and maintain billing records</li>
            <li>Respond to customer inquiries, requests, and support needs</li>
            <li>Personalize and improve user experience</li>
            <li>
              Analyze usage patterns and trends to enhance our software and
              services
            </li>
            <li>Ensure the security and integrity of our systems</li>
          </ul>

          <h3>2.2 Communication:</h3>
          <p>
            We may use your contact information to send you administrative
            notifications, software updates, service announcements, and other
            communications relevant to your use of our software.
          </p>

          <h3>2.3 Aggregated Data:</h3>
          <p>
            We may aggregate and anonymize data collected from multiple users to
            create statistical information that does not identify any
            individual. This aggregated data may be used for analytical or
            research purposes, to improve our services, or for other business
            purposes.
          </p>

          <h2>3. Information Sharing and Disclosure</h2>

          <h3>3.1 Third-Party Service Providers:</h3>
          <p>
            We may engage trusted third-party service providers to assist us in
            delivering our services, maintaining our software, and performing
            other business functions. These service providers have access to
            your personal information only to the extent necessary to fulfill
            their obligations and are contractually obligated to maintain the
            confidentiality and security of your information.
          </p>

          <h3>3.2 Compliance with Laws:</h3>
          <p>
            We may disclose your personal information if required by law or in
            response to valid legal requests, such as subpoenas, court orders,
            or government regulations.
          </p>

          <h3>3.3 Business Transfers:</h3>
          <p>
            In the event of a merger, acquisition, or sale of all or a portion
            of our assets, your personal information may be transferred as part
            of the transaction. We will notify you via email or prominent notice
            on our website of any change in ownership or use of your personal
            information.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to protect the security of your personal
            information and maintain its confidentiality. However, no method of
            transmission over the internet or electronic storage is completely
            secure. While we strive to use commercially acceptable means to
            protect your personal information, we cannot guarantee its absolute
            security.
          </p>

          <h2>5. Your Choices and Rights</h2>

          <h3>5.1 Access and Correction:</h3>
          <p>
            You may access, correct, or update your personal information by
            contacting us using the contact details provided below.
          </p>

          <h3>5.2 Marketing Communications:</h3>
          <p>
            You can opt out of receiving marketing communications from us by
            following the unsubscribe instructions included in the communication
            or by contacting us directly.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Our software and services are not intended for individuals under the
            age of 16. We do not knowingly collect or solicit personal
            information from children. If we become aware that we have collected
            personal information from a child without parental consent, we will
            promptly delete such information.
          </p>

          <h2>7. Changes to this Privacy Policy</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Any
            changes will be effective immediately upon posting the updated
            policy on our website. Your continued use of our software after any
            modifications constitutes your acceptance of the revised Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
