import Card from "react-bootstrap/Card";
// import cqiMain from "../../images/CQI-main.svg"; // adjust filename
// import demoVideo from "../../videos/cqi-demo.mp4";

function CQI() {
  return (
    <Card
      xs={12}
      sm={10}
      md={8}
      lg={6}
      xl={4}
      className="container-fluid display-flex justify-content-center mb-4 border-1 bg-transparent"
      style={{ width: "95%", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)" }}
    >
      <Card.Body className="container-fluid display-flex justify-content-center">
        {/* Header */}
        <Card.Title className="fs-1 mb-3">
          WebRTC Connection Quality Indicator
        </Card.Title>

        <Card.Subtitle className="fs-4 text-muted mb-4">
          Introducing a real-time network quality indicator for peer-to-peer
          calls in a secure messenger's mobile application.
        </Card.Subtitle>
        {/* Hero Image */}
        <div className="col-12 col-md-6 d-flex justify-content-center w-100">
          <img
            src="../images/Indicators.svg"
            alt="image of a call screen"
            className="img-fluid w-100 rounded-3"
            style={{
              maxWidth: "500px",
              maxHeight: "500px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Role */}
        <section className="py-4">
          <Card.Title className="fs-3 mb-3">Role</Card.Title>
          <Card.Text className="fs-5 text-muted">
            UX/UI Designer, UX Researcher
          </Card.Text>
        </section>

        {/* Tools */}
        <section className="py-4">
          <Card.Title className="fs-3 mb-3">Tools</Card.Title>
          <Card.Text className="fs-5 text-muted">
            WebRTC, RTCPeerConnection, Figma, Notion, GitLab, Slack
          </Card.Text>
        </section>

        {/* Context and Timeline */}
        <section className="py-4">
          <Card.Title className="fs-3 mb-3">Context</Card.Title>
          <Card.Text className="fs-5 text-muted">
            This work was carried out on a secure messaging and calling platform
            developed by Cogia Intelligence, designed to support end-to-end
            encrypted communication for government and public-sector
            organisations.
          </Card.Text>
        </section>

        {/* Overview */}
        <section className="py-4">
          <Card.Title className="fs-2 mb-3">The Problem Statement</Card.Title>
          <Card.Text className="fs-5 text-muted">
            As shown below, the call screen lacked any visual indicators to signal changes in connection quality.
    The existing call screen was reviewed to identify user pain points and define a clear, solvable problem.
          </Card.Text>
          <div className="col-12 col-md-6 d-flex justify-content-center w-100 pb-5">
            <img
              src="../images/cqioriginal.svg"
              alt="image of a call screen"
              className="img-fluid w-100 rounded-3"
              style={{
                maxWidth: "500px",
                maxHeight: "500px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>

          <ul className="fs-5 text-muted ps-3">
 
  <li className="mb-2">
    <strong>Primary issue: Lack of visual feedback</strong> Participants were shown as “connected” even when network quality degraded, making it difficult for users to understand the cause of call issues. This led to confusion and misplaced blame, particularly in group calls with multiple peer connections.
  </li>
  <li className="mb-2">
    <strong>Resulting impact:</strong> Poor or unstable connections caused distorted audio and dropped words, directly degrading the call experience.
  </li>
</ul>

        </section>

        {/* Research */}
        <section className="py-4">
          <Card.Title className="fs-3 mb-3">Research & Constraints</Card.Title>
          <Card.Text className="fs-5 text-muted">
            Competitive analysis across WhatsApp, Signal, Zoom, and Google Meet
            revealed that most platforms only surface local connection state.
            Internally, the challenge was greater due to a mesh-based WebRTC
            architecture requiring monitoring of multiple peer connections in
            real time.
          </Card.Text>
        </section>

        {/* Technical Approach */}
        <section className="py-4">
          <Card.Title className="fs-3 mb-3">Technical Approach</Card.Title>
          <Card.Text className="fs-5 text-muted">
            WebRTC connection metrics and ICE candidate data were analysed to
            derive reliable thresholds for connection quality. Conservative
            limits were chosen to prioritise early warnings, with plans to
            iteratively refine thresholds based on real-world usage.
          </Card.Text>
        </section>

        {/* Impact */}
        <section className="py-4">
          <Card.Title className="fs-3 mb-3">Impact</Card.Title>
          <Card.Text className="fs-5 text-muted">
            The indicator improved transparency during calls, reduced confusion,
            and helped users understand when issues were network-related. This
            led to clearer expectations, better communication, and an overall
            improvement in call confidence and experience.
          </Card.Text>
        </section>
      </Card.Body>
    </Card>
  );
}

export default CQI;
