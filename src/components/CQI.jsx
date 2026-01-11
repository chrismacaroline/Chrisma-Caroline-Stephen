import Card from "react-bootstrap/Card";
// import cqiMain from "../../images/CQI-main.svg"; // adjust filename
// import demoVideo from "../../videos/cqi-demo.mp4";

function CQI() {
  return (
    <>
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
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
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
              This work was carried out on a secure messaging and calling
              platform developed by Cogia Intelligence, designed to support
              end-to-end encrypted communication for government and
              public-sector organisations.
            </Card.Text>
          </section>

          {/* Overview */}
          <section className="py-4">
            <Card.Title className="fs-2 mb-3">The Problem Statement</Card.Title>
            <Card.Text className="fs-5 text-muted">
              As shown below, the call screen lacked any visual indicators to
              signal changes in connection quality. The existing call screen was
              reviewed to identify user pain points and define a clear, solvable
              problem.
            </Card.Text>
            <div className="col-12 col-md-6 d-flex justify-content-center w-100 pb-5">
              <img
                src="../images/mainmockup.png"
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
            <Card.Text className="fs-5 text-muted">
              Key problems and questions considered:
            </Card.Text>
            <ul className="fs-5 text-muted ps-3">
              <li className="mb-2">
                What if the connection for a participant is weak or poor? How is
                the lack of the information affecting user experience?
              </li>
              <li className="mb-2">
                What if users can’t hear a participant clearly and the reason is
                not obvious to the user?
              </li>
              <li className="mb-2">
                 What if a participant suddenly dropped out due to loss of
                connection but there were no warnings to the other participants?
              </li>
            </ul>
            <Card.Text className="fs-5 text-muted">
              The problem was then clearly identified as below:
            </Card.Text>
            <ul className="fs-5 text-muted ps-3">
              <li className="mb-2">
                <strong>Primary issue: Lack of visual feedback</strong>{" "}
                Participants were shown as “connected” even when network quality
                degraded, making it difficult for users to understand the cause
                of call issues such as dropped words, poor audio and lost
                connections. This led to confusion and misplaced blame,
                particularly in group calls with multiple peer connections.
              </li>
              <li className="mb-2">
                <strong>Resulting impact:</strong> Call experience was
                negatively impacted, leading to user frustration and decreased
                trust in the application.
              </li>
            </ul>
          </section>

          {/* Research */}
          <section className="py-4">
            <Card.Title className="fs-3 mb-3">Research</Card.Title>
            <Card.Subtitle className="fs-4 mb-4">
              Competitive Analysis:
            </Card.Subtitle>
            <Card.Text className="fs-5 text-muted">
              Competitive analysis across WhatsApp, Telegram, Signal, Zoom, and
              Google Meet revealed that most platforms only surface local
              connection state. On our application, the challenge was greater
              due to a mesh-based WebRTC architecture requiring monitoring of
              multiple peer connections in real time.
            </Card.Text>
            <div className="row justify-content-center pb-5 g-sm-5">
              <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0 px-sm-2">
                <img
                  src="../images/whatsapp.svg"
                  alt="image of indicator on whatsapps"
                  className="img-fluid rounded-3"
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

              <div className="col-12 col-md-6 d-flex justify-content-center px-sm-2">
                <img
                  src="../images/telegram.svg"
                  alt="image of a call screen"
                  className="img-fluid rounded-3"
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
            </div>
          </section>
          <Card.Subtitle className="fs-4 mb-4">
              Observations:
            </Card.Subtitle>
          <ul className="fs-5 text-muted ps-3">
              <li className="mb-2">
                Most apps do not monitor or display other participants’ connection strength — users only see their own connection status.
              </li>
              <li className="mb-2">
                The style and clarity of indicators vary, ranging from signal bars to vague toast messages like “Connecting…”
              </li>
              <li className="mb-2">
                There were clear gaps in visual feedback and diagnostics, making it difficult for users to understand the cause of call disruptions, especially in group settings
              </li>
            </ul>
          {/* Technical Approach */}
          <section className="py-4">
               <Card.Subtitle className="fs-4 mb-4">
              Technical research:
            </Card.Subtitle>
            <Card.Text className="fs-5 text-muted">
              WebRTC connection metrics and ICE candidate data were analysed from logs of many peer to peer calls to 
              derive reliable thresholds for connection quality. Conservative
              limits were chosen to prioritise early warnings, with plans to
              iteratively refine thresholds based on real-world usage.
            </Card.Text>
          </section>

          {/* Impact */}
          <section className="py-4">
            <Card.Title className="fs-3 mb-3">Impact</Card.Title>
            <Card.Text className="fs-5 text-muted">
              The indicator improved transparency during calls, reduced
              confusion, and helped users understand when issues were
              network-related. This led to clearer expectations, better
              communication, and an overall improvement in call confidence and
              experience.
            </Card.Text>
          </section>
        </Card.Body>
      </Card>
    </>
  );
}

export default CQI;
