import { Hero } from "../containers";

function TermsConditions() {
  return (
    <div>
      <Hero title="Terms & Conditions" content="" showGetStarted="false" />
      <div className="article">
        <div className="section-margin secton-padding">
          <h2>1. Service Provision:</h2>
          <ol>
            <li>
              The Company provides natural gas services including supply,
              distribution, and maintenance.
            </li>
            <li>
              The services are available to residential, commercial, and
              industrial customers within the designated service area.
            </li>
            <li>
              The Company will make reasonable efforts to provide uninterrupted
              service, but does not guarantee continuous availability due to
              factors beyond its control such as natural disasters, equipment
              failures, or regulatory changes.
            </li>
          </ol>

          <h2>2. Customer Responsibilities:</h2>
          <ol>
            <li>
              Customers must provide accurate and up-to-date information during
              the registration process and promptly notify the Company of any
              changes.
            </li>
            <li>
              Customers are responsible for ensuring the safety and proper use
              of natural gas facilities within their premises.
            </li>
            <li>
              Customers must promptly report any gas leaks, suspected
              malfunctions, or emergencies to the Company's designated emergency
              contact number.
            </li>
          </ol>

          <h2>3. Billing and Payment:</h2>
          <ol>
            <li>
              Customers will be billed on a regular basis for the natural gas
              services provided. The billing cycle and payment due dates will be
              communicated by the Company.
            </li>
            <li>
              Customers must pay the invoices in full by the due date specified
              on the bill.
            </li>
            <li>
              Late payments may incur penalties or interest charges as
              determined by the Company.
            </li>
            <li>
              In the event of non-payment, the Company reserves the right to
              suspend or terminate the natural gas services.
            </li>
            <li>
              Any disputes regarding billing or charges must be reported to the
              Company within a reasonable timeframe for investigation and
              resolution.
            </li>
          </ol>

          <h2>4. Safety and Compliance:</h2>
          <ol>
            <li>
              Customers must comply with all applicable laws, regulations, and
              safety standards related to the use of natural gas.
            </li>
            <li>
              Customers should exercise caution and follow all safety guidelines
              provided by the Company to prevent accidents, injuries, or
              property damage.
            </li>
            <li>
              The Company reserves the right to inspect and maintain its
              facilities for safety and compliance purposes.
            </li>
          </ol>

          <h2>5. Intellectual Property:</h2>
          <ol>
            <li>
              All intellectual property rights, including trademarks, logos, and
              copyrighted material, associated with the Company's services are
              owned by the Company or its licensors.
            </li>
            <li>
              Customers are prohibited from using, reproducing, or distributing
              any intellectual property without the Company's explicit written
              consent.
            </li>
          </ol>

          <h2>6. Limitation of Liability:</h2>
          <ol>
            <li>
              The Company shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising out of or
              related to the use or inability to use its services.
            </li>
            <li>
              The Company shall not be responsible for any damages caused by
              interruptions, delays, or inaccuracies in the natural gas supply
              or services.
            </li>
            <li>
              In no event shall the Company's liability exceed the fees paid by
              the customer for the affected services.
            </li>
          </ol>

          <h2>7. Termination and Suspension:</h2>
          <ol>
            <li>
              The Company may suspend or terminate the provision of services to
              customers for violation of these terms, non-payment, safety
              concerns, or other valid reasons as determined by the Company.
            </li>
            <li>
              Customers may terminate their services by providing written notice
              to the Company, subject to any contractual obligations or
              outstanding payments.
            </li>
          </ol>

          <h2>8. Amendments:</h2>
          <ol>
            <li>
              The Company reserves the right to modify or update these terms at
              any time.
            </li>
            <li>
              Notice of any changes will be provided to customers through
              appropriate means, such as email, website notification, or written
              correspondence.
            </li>
          </ol>

          <h2>9. Governing Law and Jurisdiction:</h2>
          <ol>
            <li>
              This Agreement shall be governed by and construed in accordance
              with [applicable governing law].
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
