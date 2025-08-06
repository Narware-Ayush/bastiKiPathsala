// src/components/About.js
import React from "react";

export default function About() {
  return (
    <section className="bg-white text-gray-800 py-24 px-6">
      <div className="w-full mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">About Us</h2>

        <div className="text-lg leading-relaxed space-y-8">
          <p>
            <strong>Basti Ki Pathshala Foundation</strong> is a grassroots, non-governmental organization committed to delivering
            inclusive and equitable education to children in underserved and marginalized communities. Established with a vision to
            create a world where education is a right and not a privilege, we aim to eliminate the educational disparities that
            persist in our society.
          </p>

          <p>
            Our foundation is built on the principles of compassion, integrity, and collective responsibility. We conduct
            open-access classes, creative workshops, mentorship programs, and social awareness drives in slums and remote areas where
            educational infrastructure is lacking or inaccessible. Through volunteer participation and localized engagement,
            we provide tailored learning opportunities that suit the pace, needs, and environment of every child.
          </p>

          <p>
            What sets us apart is our belief in holistic education. Beyond textbooks, we emphasize emotional development,
            life skills, hygiene awareness, and community well-being. We actively collaborate with local leaders, parents, youth, and
            schools to create a sustainable ecosystem for learning and development.
          </p>

          <p>
            Over the years, Basti Ki Pathshala has expanded its footprint, reaching hundreds of children and forming a diverse network
            of educators, social workers, and changemakers. Our learning centers operate not only as places of knowledge but also as
            safe spaces for dialogue, creativity, and inclusion.
          </p>

          <p>
            We remain dedicated to bridging educational gaps with empathy and innovation. By empowering children today, we lay the
            foundation for a more just, informed, and compassionate society tomorrow.
          </p>

          <p className="text-center text-xl font-semibold text-green-700">
            "When education walks into a community, transformation follows."
          </p>
        </div>
      </div>
    </section>
  );
}
