export default function Home() {
  const sectionTitle = {
    fontSize: "38px",
    fontWeight: "bold",
    textAlign: "center" as const,
    marginBottom: "16px",
    color: "#0f172a",
  };

  const sectionText = {
    textAlign: "center" as const,
    color: "#64748b",
    maxWidth: "700px",
    margin: "0 auto 50px",
    fontSize: "17px",
    lineHeight: "1.7",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.95)",
    border: "1px solid #e2e8f0",
    borderRadius: "24px",
    padding: "30px",
    boxShadow: "0 12px 35px rgba(15, 23, 42, 0.08)",
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background:
          "linear-gradient(180deg, #f8fcff 0%, #eef7ff 45%, #ffffff 100%)",
        color: "#1e293b",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#0ea5e9",
              letterSpacing: "0.5px",
            }}
          >
            BrightSmile
          </div>

          <nav
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a href="#home" style={{ textDecoration: "none", color: "#334155" }}>
              Home
            </a>
            <a
              href="#services"
              style={{ textDecoration: "none", color: "#334155" }}
            >
              Services
            </a>
            <a
              href="#benefits"
              style={{ textDecoration: "none", color: "#334155" }}
            >
              Benefits
            </a>
            <a
              href="#reviews"
              style={{ textDecoration: "none", color: "#334155" }}
            >
              Reviews
            </a>
            <a
              href="#doctors"
              style={{ textDecoration: "none", color: "#334155" }}
            >
              Doctors
            </a>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                background: "#0ea5e9",
                color: "white",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: "bold",
              }}
            >
              Book Now
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "90px 24px 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              background: "#e0f2fe",
              color: "#0369a1",
              padding: "8px 16px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Modern Family Dental Care
          </div>

          <h1
            style={{
              fontSize: "56px",
              lineHeight: "1.1",
              marginBottom: "22px",
              color: "#0f172a",
            }}
          >
            A confident smile starts with exceptional dental care
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#475569",
              marginBottom: "32px",
              maxWidth: "620px",
            }}
          >
            BrightSmile Dental Clinic provides advanced dentistry in a calm,
            elegant, patient-friendly environment. From preventive checkups to
            cosmetic treatments, we help every patient smile with confidence.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "34px",
            }}
          >
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                background: "#0ea5e9",
                color: "white",
                padding: "14px 24px",
                borderRadius: "14px",
                fontWeight: "bold",
                boxShadow: "0 10px 24px rgba(14,165,233,0.3)",
              }}
            >
              Schedule Visit
            </a>

            <a
              href="#services"
              style={{
                textDecoration: "none",
                background: "white",
                color: "#0f172a",
                padding: "14px 24px",
                borderRadius: "14px",
                fontWeight: "bold",
                border: "1px solid #cbd5e1",
              }}
            >
              Explore Services
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
              gap: "16px",
              maxWidth: "520px",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "20px",
                boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#0ea5e9" }}>
                15+
              </div>
              <div style={{ color: "#64748b", fontSize: "14px" }}>
                Years Experience
              </div>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "20px",
                boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#0ea5e9" }}>
                5k+
              </div>
              <div style={{ color: "#64748b", fontSize: "14px" }}>
                Happy Patients
              </div>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "20px",
                boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#0ea5e9" }}>
                24/7
              </div>
              <div style={{ color: "#64748b", fontSize: "14px" }}>
                Support
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
            alt="Dental clinic"
            style={{
              width: "100%",
              borderRadius: "30px",
              boxShadow: "0 20px 50px rgba(15, 23, 42, 0.15)",
              objectFit: "cover",
              minHeight: "520px",
            }}
          />
        </div>
      </section>

      <section
        id="services"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px 80px",
        }}
      >
        <h2 style={sectionTitle}>Our Premium Dental Services</h2>
        <p style={sectionText}>
          We combine medical precision, modern technology, and gentle care to
          deliver excellent results for every patient.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Teeth Whitening",
              text: "Professional whitening treatments designed for a brighter and more radiant smile.",
            },
            {
              title: "Dental Implants",
              text: "Durable and natural-looking implant solutions for missing teeth restoration.",
            },
            {
              title: "Orthodontics",
              text: "Modern alignment treatments including braces and smile correction plans.",
            },
            {
              title: "Preventive Care",
              text: "Routine cleanings and exams that keep your smile healthy long term.",
            },
          ].map((item, i) => (
            <div key={i} style={cardStyle}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "#e0f2fe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                ✨
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "14px",
                  color: "#0f172a",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#64748b", lineHeight: "1.7" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="benefits"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px 80px",
        }}
      >
        <h2 style={sectionTitle}>Why Patients Choose BrightSmile</h2>
        <p style={sectionText}>
          Every detail of our clinic is designed to give patients a smooth,
          comfortable, and professional experience.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              ...cardStyle,
              background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
              color: "white",
            }}
          >
            <h3 style={{ fontSize: "30px", marginBottom: "18px" }}>
              Personalized treatment with modern technology
            </h3>
            <p style={{ lineHeight: "1.8", color: "#e0f2fe", marginBottom: "24px" }}>
              Our team uses advanced equipment and tailored treatment plans to
              ensure comfort, efficiency, and excellent clinical outcomes.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(120px, 1fr))",
                gap: "16px",
              }}
            >
              <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "18px", padding: "18px" }}>
                Gentle care
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "18px", padding: "18px" }}>
                Expert team
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "18px", padding: "18px" }}>
                Latest equipment
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "18px", padding: "18px" }}>
                Flexible booking
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: "24px" }}>
            {[
              "Calm and welcoming clinic atmosphere",
              "Transparent pricing and treatment plans",
              "Family-friendly service for all ages",
            ].map((item, i) => (
              <div key={i} style={cardStyle}>
                <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "#0f172a" }}>
                  {item}
                </h3>
                <p style={{ color: "#64748b", lineHeight: "1.7" }}>
                  We focus on trust, clarity, and comfort so each visit feels
                  easy and reassuring from start to finish.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="doctors"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px 80px",
        }}
      >
        <h2 style={sectionTitle}>Meet Our Doctors</h2>
        <p style={sectionText}>
          Experienced specialists dedicated to healthy, beautiful smiles.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              name: "Dr. Emily Carter",
              role: "Cosmetic Dentist",
              img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
            },
            {
              name: "Dr. Michael Reed",
              role: "Orthodontic Specialist",
              img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
            },
            {
              name: "Dr. Sophia Bennett",
              role: "Implant Expert",
              img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
            },
          ].map((doctor, i) => (
            <div key={i} style={{ ...cardStyle, padding: "20px" }}>
              <img
                src={doctor.img}
                alt={doctor.name}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  marginBottom: "18px",
                }}
              />
              <h3 style={{ fontSize: "22px", marginBottom: "8px", color: "#0f172a" }}>
                {doctor.name}
              </h3>
              <p style={{ color: "#0ea5e9", fontWeight: "bold" }}>{doctor.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="reviews"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px 80px",
        }}
      >
        <h2 style={sectionTitle}>What Our Patients Say</h2>
        <p style={sectionText}>
          A few words from people who trusted us with their smile.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            "The clinic looks amazing, the staff are kind, and the treatment was completely stress-free.",
            "Very professional dentists and excellent service. I felt cared for from start to finish.",
            "BrightSmile gave me confidence in my smile again. Clean, modern, and beautifully designed clinic.",
          ].map((text, i) => (
            <div key={i} style={cardStyle}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>⭐️⭐️⭐️⭐️⭐️</div>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "20px" }}>
                “{text}”
              </p>
              <div style={{ fontWeight: "bold", color: "#0f172a" }}>Happy Patient</div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
            borderRadius: "32px",
            padding: "55px 30px",
            textAlign: "center",
            color: "white",
            boxShadow: "0 18px 45px rgba(15,23,42,0.22)",
          }}
        >
          <h2 style={{ fontSize: "42px", marginBottom: "18px" }}>
            Ready to transform your smile?
          </h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 30px",
              color: "#cbd5e1",
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            Book your consultation today and experience premium dental care in a
            clinic designed around your comfort.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
              marginBottom: "26px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "14px 20px",
                borderRadius: "16px",
              }}
            >
              123 Smile Street, Health City
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "14px 20px",
                borderRadius: "16px",
              }}
            >
              +1 (234) 567-890
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "14px 20px",
                borderRadius: "16px",
              }}
            >
              info@brightsmile.com
            </div>
          </div>

          <a
            href="mailto:info@brightsmile.com"
            style={{
              display: "inline-block",
              textDecoration: "none",
              background: "white",
              color: "#0f172a",
              padding: "14px 26px",
              borderRadius: "14px",
              fontWeight: "bold",
            }}
          >
            Contact Clinic
          </a>
        </div>
      </section>
    </main>
  );
}
