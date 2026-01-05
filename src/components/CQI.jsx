import Card from "react-bootstrap/Card";
// import cqiMain from "../../images/CQI-main.svg"; // adjust filename
// import demoVideo from "../../videos/cqi-demo.mp4";

function CQI() {
  return (
    <Card
      className="container-fluid my-4 px-3 px-md-4 px-lg-5"
      style={{ maxWidth: "1200px", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}
    >
      <Card.Body>

        {/* Header */}
        <Card.Title className="fs-1 mb-3">
          WebRTC Connection Quality Indicator
        </Card.Title>

        <Card.Subtitle className="fs-4 text-muted mb-4">
          A real-time network quality indicator for peer-to-peer calls in a secure messenger.
        </Card.Subtitle>

        {/* Hero Image */}
        <div className="w-100 mb-5">
          <img
            // src={}
            alt="Connection Quality Indicator UI"
            className="img-fluid w-100 rounded-3"
          />
        </div>

        {/* Overview */}
        <section className="py-4">
          <Card.Title className="fs-2 mb-3">Overview</Card.Title>
          <Card.Text className="fs-5 text-muted">
            In peer-to-peer calls, users often struggled to understand whether
            poor audio or dropped words were caused by network issues.
            A WebRTC-based connection quality indicator was introduced to surface
            real-time network health directly within the call UI, helping users
            distinguish between connection problems and application issues.
          </Card.Text>
        </section>

        {/* Problem */}
        <section className="py-4">
          <Card.Title className="fs-3 mb-3">The Problem</Card.Title>
          <Card.Text className="fs-5 text-muted">
            Call participants were always shown as “connected,” even when
            network quality degraded. This lack of feedback caused confusion,
            misattributed blame, and poor call experiences—especially in group
            calls where multiple peer connections were involved.
          </Card.Text>
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
            and helped users understand when issues were network-related.
            This led to clearer expectations, better communication, and an
            overall improvement in call confidence and experience.
          </Card.Text>
        </section>

      </Card.Body>
    </Card>
  );
}

export default CQI;
