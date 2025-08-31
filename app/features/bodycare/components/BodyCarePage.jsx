import { MetaContent } from "../../shared/components/utility/MetaContent";
import { useEffect, useState } from "react";

import "../styles/bodycare.css";
import { Link } from "react-router";

const sections = [
  { id: "facials", label: "Facials", icon: "bi-emoji-smile" },
  { id: "waxing", label: "Waxing", icon: "bi-stars" },
  { id: "body-treatment-services", label: "Body treatment", icon: "bi-heart" },
  { id: "feature-enhancing-services", label: "Features", icon: "bi-gem" },
];

const BodyCarePage = () => {
  const [active, setActive] = useState("facials");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <MetaContent
        title="Body Services"
        description="JT Body Care services, facials, waxing, headspa, body treatments, and more."
      />
      <div className="min-w-screen lg:max-w-6xl 2xl:max-w-7xl lg:mx-auto my-4 mx-4">
        <header className="pt-24 !pb-12 text-center">
          <h1 className="font-bold text-7xl p-4 text-center">
            <i className="bi bi-flower1 mx-auto text-black"></i>
          </h1>
          <h2 className="font-bold text-5xl lg:text-7xl text-black">
            <span className="bg-jt-grad-text">Body</span> Services
          </h2>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Sticky Section Nav */}
          <aside className="col-span-3 hidden lg:block">
            <nav className="sticky top-36">
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <Link
                      className={`bc-nav-link ${active === s.id ? "bc-nav-link-active" : ""}`}
                      to={`#${s.id}`}
                      viewTransition={false}
                    >
                      <i className={`bi ${s.icon} text-xl`}></i>
                      <span>{s.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <main className="col-span-12 lg:col-span-9 flex flex-col gap-10">
            <section className="bc-intro"></section>

            <section id="facials" className="bc-section">
              <h2 className="bc-h2">
                <i className="bi bi-emoji-smile"></i> Facials
              </h2>

              <p className="bc-lead">
                JT Body Care offers a full range of customized facials designed
                to nourish, restore, and elevate all skin types. Whether you're
                looking to address specific concerns or simply indulge in
                self-care, you’ll find a treatment tailored just for you—choose
                from options targeting anti-aging, deep hydration, clarifying
                acne-prone skin, brightening dull complexions, or calming
                redness and rosacea. Each facial experience includes gentle
                cleansing, exfoliation, targeted treatments, soothing masks,
                nourishing hydration, and a relaxing massage to melt away
                tension and leave your skin glowing.
              </p>

              <h3 className="bc-h3">60-Minute Custom Facial</h3>
              <p className="italic text-gray-600">
                (each 60-minute facial service includes gentle cleansing,
                exfoliation, targeted treatments, soothing masks, nourishing
                hydration, and a relaxing massage)
              </p>

              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Classic Facial</h4>
                  <span className="bc-price">$75</span>
                </div>
                <p>
                  A calming, skin-nourishing facial perfect for sensitive skin
                  or anyone seeking pure relaxation. Using mild, non-targeted
                  products, this treatment focuses on restoring balance,
                  hydrating the skin, and relieving stress through gentle
                  massage and soothing care.
                </p>
              </div>

              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Deep Hydration Facial</h4>
                  <span className="bc-price">$75</span>
                </div>
                <p>
                  A thirst-quenching treatment that replenishes moisture and
                  restores the skin’s natural barrier. This facial soothes
                  dryness, softens texture, and leaves the skin feeling plump,
                  dewy, and deeply nourished. Perfect for dry, dehydrated, or
                  seasonally stressed skin in need of a hydration boost.
                </p>
              </div>

              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Clarifying Facial</h4>
                  <span className="bc-price">$75</span>
                </div>
                <p>
                  Designed to deeply cleanse and rebalance the skin, this facial
                  targets congestion, excess oil, and breakouts—making it an
                  ideal choice for acne-prone or reactive skin. Gentle
                  extractions, purifying masks, and soothing treatments help
                  calm inflammation and promote a clearer, more refined
                  complexion. Great for all skin types needing a fresh reset.
                </p>
              </div>

              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Brightening Facial</h4>
                  <span className="bc-price">$75</span>
                </div>
                <p>
                  This facial is perfect if you’re looking to brighten your skin
                  and target hyper-pigmentation and sun damage. This effective,
                  natural skin-brightening facial, rich with vitamins A and C,
                  results in radiant, more even-toned skin after the first
                  treatment.
                </p>
              </div>

              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Anti-Redness/Rosacea Facial</h4>
                  <span className="bc-price">$75</span>
                </div>
                <p>
                  This calming facial is specially formulated to reduce redness,
                  soothe inflammation, and strengthen the skin’s protective
                  barrier. Using gentle, cooling ingredients, it helps calm
                  sensitive or rosacea-prone skin while restoring comfort,
                  balance, and a healthy glow. Ideal for anyone experiencing
                  irritation, flushing, or reactive skin.
                </p>
              </div>

              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Anti-Aging Facial</h4>
                  <span className="bc-price">$75</span>
                </div>
                <p>
                  Rich in antioxidants, this facial helps to minimize fine
                  lines, stimulate collagen and improve skin tone and radiance.
                  Deep hydration and firming massage techniques leave the skin
                  feeling plump, lifted, and visibly refreshed. Ideal for anyone
                  looking to restore a youthful glow and support long-term skin
                  health.
                </p>
              </div>
              <h3 className="bc-h3">Deluxe Facial</h3>
              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Luxe Lift Facial</h4>
                  <span className="bc-price">$95</span>
                </div>
                <p>
                  This rejuvenating treatment targets fine lines, loss of
                  firmness, and dullness with collagen-boosting ingredients and
                  deep hydration. Includes gentle exfoliation, firming serums,
                  nourishing masks, and a lifting facial massage to leave skin
                  smooth, plump, and radiant. An arm and hand massage is also
                  included in this ritual to fully relax your mind and body.
                </p>
              </div>
              <h3 className="bc-h3">
                <i className="bi bi-plus-circle"></i> Additional Facial Services
              </h3>
              <div className="bc-mini-grid">
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Back Facial</div>
                    <div className="bc-mini-price">$55</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">
                      30 Minute Quick Glow Facial
                    </div>
                    <div className="bc-mini-price">$45</div>
                  </div>
                  <div className="bc-mini-sub">
                    (includes a double cleanse, exfoliation, and hydration)
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">
                      Chemical Peel (without facial)
                    </div>
                    <div className="bc-mini-price">$50</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Chemical Peel Facial</div>
                    <div className="bc-mini-price">$105</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Scalp Massage</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                  <div className="bc-mini-sub">
                    (For facial services only; this service is included in
                    headspa services)
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Lip Treatment</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                  <div className="bc-mini-sub">(scrub, mask, hydration)</div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Hand Treatment</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                  <div className="bc-mini-sub">(scrub, mask, hydration)</div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Foot Treatment</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                  <div className="bc-mini-sub">(scrub, mask, hydration)</div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Arm Massage</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Foot Massage</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Lower Leg Massage</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">High Frequency</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                  <div className="bc-mini-sub">
                    (great for extra attention to anti-aging or acne)
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Jellymask</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">
                      Firming Anti-Aging Facial Mask Upgrade
                    </div>
                    <div className="bc-mini-price">$20</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="waxing" className="bc-section">
              <h2 className="bc-h2">
                <i className="bi bi-stars"></i> Waxing
              </h2>
              <p>
                At JT Body Care, we offer a full range of facial and body waxing
                services in a calm, professional setting. Whether you're
                maintaining your routine or trying waxing for the first time,
                each service is done with care, precision, and attention to your
                skin’s comfort.
              </p>
              <p className="italic text-gray-600 mt-6">
                Please let your service provider know if you have recently used
                AHAs, BHAs, Retinols, Accutane, antibiotics, or any new
                prescriptions or skin treatments since your last visit.
              </p>
              <div className="bc-mini-grid">
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Eyebrow</div>
                    <div className="bc-mini-price">$20</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Lip</div>
                    <div className="bc-mini-price">$15</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Chin</div>
                    <div className="bc-mini-price">$15</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Eyebrow & Lip</div>
                    <div className="bc-mini-price">$30</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Underarm</div>
                    <div className="bc-mini-price">$25</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Half Leg</div>
                    <div className="bc-mini-price">$35</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Full Leg</div>
                    <div className="bc-mini-price">$65</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Stomach</div>
                    <div className="bc-mini-price">$18</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Back</div>
                    <div className="bc-mini-price">$45</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Toe</div>
                    <div className="bc-mini-price">$10</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="headspa-services" className="bc-section">
              <h2 className="bc-h2">
                <i className="bi bi-droplet"></i> Headspa Services
              </h2>
              <p className="italic text-gray-600">
                (Each headspa experience, besides the dry headspa experience,
                leaves your hair wet at the conclusion of your service. A
                self-blow-dry bar is available for your use after your service.)
              </p>

              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Dry headspa Experience</h4>
                  <span className="bc-price">$38</span>
                </div>
                <p>
                  This completely dry headspa experience has you in and out the
                  door in 30 minutes. This ritual focuses heavily on scalp
                  massage and scalp stimulation perfect for targeting hair
                  growth and tension relief in the middle of your busy day. A
                  facial massage is included to focus on sinus pressure and head
                  tension relief. You may also choose to upgrade your service
                  with an arm and hand massage
                </p>
              </div>

              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Headspa</h4>
                  <span className="bc-price">$89</span>
                </div>
                <p>
                  A deeply relaxing 60-minute treatment focused on scalp health
                  and stress relief. This service includes a thorough scalp
                  cleansing, exfoliation, a custom scalp mask, targeted
                  treatments, and deep hydration—paired with soothing head,
                  neck, and shoulder massage. Designed to refresh the scalp,
                  promote healthy hair growth, and melt away tension. A facial
                  sheet mask is also included in this service.
                </p>
              </div>

              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Headspa & Facial</h4>
                  <span className="bc-price">$130</span>
                </div>
                <p>
                  This 90 minute service combines the luxurious headspa
                  experience with any custom facial of your choosing. In
                  addition, enjoy a relaxing arm and hand massage.
                </p>
              </div>
            </section>

            <section id="body-treatment-services" className="bc-section">
              <h2 className="bc-h2">
                <i className="bi bi-heart"></i> Body Treatment Services
              </h2>
              <p>
                Our body treatments are designed to smooth, detoxify, and deeply
                nourish your skin while melting away tension. Each service
                combines exfoliation, masking, hydration, and massage techniques
                to leave you feeling refreshed, radiant, and renewed from head
                to toe.
              </p>
              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Body Treatment</h4>
                  <span className="bc-price">$85</span>
                </div>
                <p>
                  60-minute session of dry brush, scrub, mask, hydration, and
                  massage.
                </p>
              </div>
            </section>

            <section id="ultimate-spa-day" className="bc-section">
              <h3 className="bc-h3">
                <i className="bi bi-brightness-high"></i> The Ultimate Spa Day
                Package
              </h3>
              <p>
                Indulge in two full hours of pure luxury with our most
                comprehensive treatment experience. This all-inclusive service
                weaves together everything our spa has to offer — beginning with
                a rejuvenating headspa ritual, followed by a fully customized
                facial, a restorative body treatment, and a deeply relaxing
                scalp, arm, and hand massage. From head to toe, every detail is
                designed to restore balance, melt away tension, and leave you
                glowing inside and out.
              </p>
              <div className="bc-card">
                <div className="bc-card-header">
                  <h4 className="bc-h4">Spa Day Package</h4>
                  <span className="bc-price">$250</span>
                </div>
                <p>
                  2-hour spa service; includes headspa, custom facial, body
                  treatment/massage, and a complimentary hair blowout.
                </p>
              </div>
            </section>

            <section id="feature-enhancing-services" className="bc-section">
              <h2 className="bc-h2">
                <i className="bi bi-gem"></i> Feature Enhancing Services
              </h2>
              <p>
                Highlight your natural beauty with treatments designed to
                define, shape, and enhance. From brow laminations to lash and
                brow tints, these finishing touches create a polished,
                effortless look that lasts.
              </p>
              <div className="bc-mini-grid">
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Lash Tint</div>
                    <div className="bc-mini-price">$20</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Eyebrow Tint</div>
                    <div className="bc-mini-price">$15</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Eyebrow Wax</div>
                    <div className="bc-mini-price">$20</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Brow Wax/Tint</div>
                    <div className="bc-mini-price">$30</div>
                  </div>
                </div>
                <div className="bc-mini-card">
                  <div className="bc-mini-card-header">
                    <div className="bc-mini-title">Eyebrow Lamination</div>
                    <div className="bc-mini-price">$65</div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BodyCarePage;
