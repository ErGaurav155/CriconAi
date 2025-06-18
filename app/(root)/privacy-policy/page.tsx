import { Footer } from "@/components/shared/Footer";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen  text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="border border-[#333] rounded-2xl p-6 md:p-10 mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
            Privacy Policy
          </h1>

          <div className="space-y-10">
            <Section
              title="Introduction"
              content={
                <>
                  <p className="mb-5">
                    Cricon AI (&quot;Company,&quot; &quot;we,&quot; or
                    &quot;us&quot;) is committed to protecting the privacy of
                    our users (&quot;you&quot; or &quot;your&quot;). This
                    Privacy Policy explains how we collect, use, and share
                    information about you through our website,
                    https://criconai.com (the &quot;Website&quot;), and the
                    services we offer (the &quot;Services&quot;).
                  </p>
                  <p>
                    By using the Website or Services, you consent to the
                    collection, use, and sharing of your information as
                    described in this Privacy Policy.
                  </p>
                </>
              }
            />

            <Section
              title="Data Retention and Deletion"
              content={
                <>
                  <p className="mb-5">
                    We retain your information for as long as your account is
                    active or as needed to provide you with our Services.
                  </p>
                  <p>
                    If you wish to delete your entire data, you may send a
                    request to
                    <span className="text-[#00F0FF]">
                      {" "}
                      support@criconai.com
                    </span>
                    , and we will process your request in accordance with
                    applicable laws.
                  </p>
                </>
              }
            />

            <Section
              title="Use of Your Information"
              content={
                <p>
                  We use the information we collect to provide, maintain, and
                  improve our Services, to communicate with you, and to better
                  understand the demographics of our users. We may also use the
                  information to send you promotional and marketing materials.
                </p>
              }
            />

            <Section
              title="Accounts"
              content={
                <>
                  <p className="mb-5">
                    To access certain features of the Service, you must create
                    an account. You agree to provide accurate and complete
                    information when creating your account, and you agree to
                    keep your account information up-to-date.
                  </p>
                  <p>
                    You are responsible for all activities that occur under your
                    account, including any unauthorized activities. If you
                    suspect that someone has gained unauthorized access to your
                    account, you should notify
                    <span className="text-[#00F0FF]"> Cricon AI</span>{" "}
                    immediately.
                  </p>
                </>
              }
            />

            <Section
              title="Information Collection"
              content={
                <p>
                  We collect information you provide directly to us, such as
                  when you create an account, use our Services, or communicate
                  with us. This may include personal information like your name,
                  email address, payment information, and any other information
                  you choose to provide.
                </p>
              }
            />

            <Section
              title="Information Sharing"
              content={
                <p>
                  We may share your information with third-party service
                  providers who perform services on our behalf, such as payment
                  processing, data analysis, email delivery, hosting services,
                  and customer service. We require these providers to maintain
                  the confidentiality and security of your information.
                </p>
              }
            />

            <Section
              title="Security"
              content={
                <p>
                  We implement reasonable security measures designed to protect
                  your information from unauthorized access, use, or disclosure.
                  However, no method of transmission over the internet or method
                  of electronic storage is 100% secure, so we cannot guarantee
                  absolute security.
                </p>
              }
            />

            <Section
              title="Changes to This Policy"
              content={
                <p>
                  We may update this Privacy Policy from time to time. If we
                  make material changes, we will notify you by email or by
                  posting a notice on our Website prior to the change becoming
                  effective. We encourage you to periodically review this page
                  for the latest information on our privacy practices.
                </p>
              }
            />

            <Section
              title="Contact Us"
              content={
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                  <br />
                  <span className="text-[#00F0FF]">support@criconai.com</span>
                </p>
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Reusable Section Component
const Section = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => (
  <div className="border-b border-[#333] pb-8 last:border-0 last:pb-0">
    <h2 className="text-2xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
      {title}
    </h2>
    <div className="text-gray-300">{content}</div>
  </div>
);

export default PrivacyPolicy;
