/* eslint-disable no-irregular-whitespace */
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
          <section className="py-4">
          <Card.Title className="fs-2 mb-3">
            WebRTC Connection Quality Indicator
          </Card.Title>

          <Card.Text className="fs-4 text-muted">
            Introducing a real-time network quality indicator for peer-to-peer
            calls in a secure messenger's mobile application.
          </Card.Text>
          {/* Hero Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center w-100 py-5">
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
          </section>

          {/* Outcome Summary */}
          <section className="py-4">
            <Card.Title className="fs-2 mb-3">Summary</Card.Title>
            <Card.Text className="fs-4 text-muted">
              Designed and shipped a real-time connection quality indicator for mesh-based WebRTC calls, helping users understand when call issues were caused by network conditions rather than the application. The feature reduced confusion during degraded calls and is now used across all white-labelled versions of the messenger.
            </Card.Text>
          </section>

          {/* Role */}
          <section className="py-4">
            <Card.Title className="fs-2 mb-3">Role</Card.Title>
            <Card.Text className="fs-4 text-muted">
                Product Designer responsible for UX and UI, working closely with product
  management, mobile engineering, and QA from concept through production.
            </Card.Text>
          </section>

          {/* Tools */}
          <section className="py-4">
            <Card.Title className="fs-2 mb-3">Tools</Card.Title>
            <Card.Text className="fs-4 text-muted">
              WebRTC, RTCPeerConnection, Figma, Notion, GitLab, Slack
            </Card.Text>
          </section>

          {/* Context and Timeline */}
          <section className="py-4">
            <Card.Title className="fs-2 mb-3">Context</Card.Title>
            <Card.Text className="fs-4 text-muted">
              This work was carried out on a secure messaging and calling
              platform developed by Cogia Intelligence, designed to support
              end-to-end encrypted communication for government and
              public-sector organisations.
            </Card.Text>
          </section>

          {/* ------------------------------------------------------------ */}

          {/* Problem */}
          <section className="py-4">
            <Card.Title className="fs-2 mb-3">The Problem Statement</Card.Title>
            <Card.Text className="fs-4 text-muted">
              As shown below, the call screen lacked any visual indicators to
              signal changes in connection quality. The existing call screen was
              reviewed to identify user pain points and define a clear, solvable
              problem.
            </Card.Text>
            <div className="col-12 col-md-6 d-flex justify-content-center w-100 py-5">
              <img
                src="../images/mainmockup.png"
                alt="image of a call screen"
                className="img-fluid w-100 rounded-3"
                style={{
                  maxWidth: "500px",
                  maxHeight: "700px",
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
            <Card.Subtitle className="fs-3 mb-2">
             User Experience Issues Identified:
            </Card.Subtitle>
            <div className="py-1 ps-1 ps-md-4">
              <ol className="fs-4 text-muted">
                <li className="mb-2">
                 Users could not tell when call issues were caused by poor network conditions.
                </li>
                <li className="mb-2">
                  Audio dropouts and disconnects lacked explanation or warning.
                </li>
                <li className="mb-2">
                  Participants were shown as “connected” even when connection quality had degraded.
                </li>
              </ol>
            </div>

            <Card.Subtitle className="fs-3 mb-2">
              These insights shaped a clear problem definition:
            </Card.Subtitle>
            <div className="py-1 ps-1 ps-md-4">
              <ol className="fs-4 text-muted">
                <li className="mb-3">
                  <strong>Primary issue: Lack of visual feedback.</strong>{" "}
                  This led to confusion and misplaced blame,
                  particularly in group calls with multiple peer connections.
                </li>
                <li className="mb-3">
                  <strong>Resulting impact:</strong> Inconsistent call quality caused frustration during group calls and reduced overall usage of the feature.
                </li>
              </ol>
            </div>
          </section>

          {/* ------------------------------------------------------------ */}

          {/* Research */}
          <section className="py-4">
            <Card.Title className="fs-2 mb-3">Research</Card.Title>
            <Card.Subtitle className="fs-3 mb-4">
              Competitive Analysis:
            </Card.Subtitle>
            <Card.Text className="fs-5 text-muted">
              Competitive analysis was perfomed across various messenger and call platforms including WhatsApp, Telegram, Signal, Zoom, and
              Google Meet. 
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
         
          <Card.Subtitle className="fs-3 mb-4">Observations:</Card.Subtitle>
          <ul className="fs-5 text-muted ps-2">
            <li className="mb-2">
              Most applications do not monitor or display other participants’ connection
              strength. Users only see their own connection status.
            </li>
            <li className="mb-2">
             Indicator styles varied, including text labels, icons, and animations, from signal bars to toast messages like “Connecting…”.
            </li>
            <li className="mb-2">
              Visual feedback and diagnostics were inconsistent, and it was often unclear whose connection was affected.
            </li>
          </ul>

          <Card.Subtitle className="fs-4 mb-4">
            {" "}
            A Unique Technical & UX/UI Challenge for our product:
          </Card.Subtitle>
          <Card.Text className="fs-5 text-muted">
            Mesh-based peer-to-peer call meant that every participant connected directly to each other.
            This architecture demanded:
          </Card.Text>
          <ol className="fs-5 text-muted ps-3">
            <li className="mb-2">
              Real-time monitoring of multiple peer connections, not just local
              network strength.
            </li>
            <li className="mb-2">
              A method to define and implement thresholds for signal quality.
            </li>
            <li className="mb-2">
              A minimal, unobtrusive UI that could give users helpful
              feedback about connection issues without overwhelming the call screen
              interface.
            </li>
          </ol>
           </section>
          {/* Technical Approach */}
          <section className="py-4">
            <Card.Subtitle className="fs-3 mb-4">
              Technical research:
            </Card.Subtitle>
            <Card.Text className="fs-4 text-muted">
              The technical research focused on the available WebRTC metrics to find answers to:
            </Card.Text>
            <ol className="fs-4 text-muted ps-1">
              <li className="mb-2">
                Which metrics should be considered to calculate connection
                strength?
              </li>
              <li className="mb-2">
                How to efficiently monitor the entire mesh, throughout the call?
              </li>
              <li className="mb-2">
                How to balance between sensitivity and reducing visual noise for
                users?
              </li>
              <li className="mb-2">
                How to translate these metrics into a clear UI indicator that
                users can understand at a glance?
              </li>
            </ol>
            <Card.Subtitle className="fs-4 text-muted">Research methods:</Card.Subtitle>
            <ul className="fs-4 text-muted ps-1">
              <li className="fs-4 text-muted mb-2">
                <strong>Call log analysis: </strong>
                Analysed historical call logs from multiple peer-to-peer
                sessions.
              </li>
              <li className="fs-4 text-muted mb-2">
                <strong>WebRTC Protocol & Standards Review: </strong>
                Reviewed WebRTC peer-to-peer connectivity documentation,
                including ICE workflows and RTCIceCandidate negotiation.
              </li>
            </ul>
            <Card.Subtitle className="fs-3 mb-4">
              Technical summary for connection quality indicators:
            </Card.Subtitle>
            <ol className="fs-4 text-muted ps-1">
              <li className="fs-4 text-muted mb-2">
                Connection strength is calculated using a combination of network
                cost values and round-trip time (RTT), with conservative
                thresholds chosen to prioritise early detection of degraded call
                quality.
              </li>
              <li className="fs-4 text-muted mb-2">
                Network cost thresholds were defined for the first
                implementation:
                <ul className="fs-4 text-muted mt-2">
                  <li>Good connection: Less than 300</li>
                  <li>Weak connection: 300–600</li>
                  <li>Poor connection: Above 600</li>
                </ul>
              </li>
              <li className="mb-2">
                These thresholds were set as initial hypotheses, to
                be iteratively refined based on testing and user feedback.
              </li>
            </ol>
            {/* <Card.Text className="fs-4 text-muted">
              This approach allowed us to surface connection issues early,
              without overwhelming users with fluctuating or noisy indicators.
            </Card.Text> */}
          </section>
          {/* UI Indicator */}
          <section className="py-4">
            <Card.Subtitle className="fs-3 mb-4">
              Designing the Indicator:
            </Card.Subtitle>
            <Card.Text className="fs-4 text-muted">
              The indicator needed to communicate connection quality at a
              glance, attract attention only when necessary, integrate
              seamlessly into a complex call UI, and align with users’ existing
              mental models from other communication apps.
            </Card.Text>
            {/* Iteration One */}
            <Card.Subtitle className="fs-3 mb-4">Iteration One: Icon-only Indicators</Card.Subtitle>
            <div className="col-12 col-md-6 d-flex justify-content-center w-100">
              <img
                src="../images/iterationone.png"
                alt="image of iteration one of design"
                className="img-fluid w-100 rounded-3"
                style={{
                  maxWidth: "500px",
                  maxHeight: "700px",
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
            <Card.Text as="div" className="fs-4 text-muted">
              What worked:
              <ul className="ps-3 mt-2">
                <li>
                  This first iteration allowed us to visualise how the indicator
                  interacted with the existing call UI.
                </li>
                <li>
                  Directly informed decisions that led to a cleaner, less
                  visually congested layout.
                </li>
              </ul>
            </Card.Text>

            <Card.Text as="div" className="fs-4 text-muted">Key learnings:
              <ul className="ps-1 mt-2">
                <li>Indicators were oversized and visually dominant.</li>
                <li>
                  Icon placement distracted from core call
                  actions.
                </li>
                <li>
                  Connection status labels and indicators lacked clear visual
                  association.
                </li>
              </ul>
            </Card.Text>
          </section>

          {/* Iteration Two*/}
          <section>
            <Card.Subtitle className="fs-3 mb-4">Iteration Two: Label-based Feedback</Card.Subtitle>
            <div className="col-12 col-md-6 d-flex justify-content-center w-100">
              <img
                src="../images/iterationtwo.png"
                alt="image of iteration one of design"
                className="img-fluid w-100 rounded-3"
                style={{
                  maxWidth: "500px",
                  maxHeight: "700px",
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
            <Card.Text as="div" className="fs-4 text-muted">
              What worked:
              <ul className="ps-1 mt-2">
                <li>
                  The more space and clarity in the UI when the connection indicator did not crowd the core controls.
                </li>
                <li>
                  The text labels provided feedback on the status of the
                  connection.
                </li>
              </ul>
            </Card.Text>

            <Card.Text as="div" className="fs-4 text-muted">
              Key learnings:
              <ul className="ps-1 mt-2">
                <li>
                  High cognitive load: Users had to actively read and interpret
                  status labels during live calls.
                </li>
                <li>
                  Poor visual hierarchy and clarity: Multiple text colours
                  failed to meet UI and UX standards for glanceable
                  status indicators.
                </li>
              </ul>
            </Card.Text>
          </section>

          {/* Iteration Three*/}
          <section>
            <Card.Subtitle className="fs-3 mb-4">
              Iteration Three: Icon + Label Design
            </Card.Subtitle>
            <div className="col-12 col-md-6 d-flex justify-content-center w-100">
              <img
                src="../images/iterationthree.png"
                alt="image of iteration three of design"
                className="img-fluid w-100 rounded-3"
                style={{
                  maxWidth: "800px",
                  maxHeight: "800px",
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
            <Card.Text as="div" className="fs-4 text-muted">
             What worked:
              <ul className="ps-1 mt-2">
                <li>
                  This iteration validated indicator placement, as it fit well with the rest of the UI
                  and communicated each participant's connection quality.
                </li>
                <li>
                  The standard coloured label text + icon improved readability.
                </li>
              </ul>
            </Card.Text>

            <Card.Text as="div" className="fs-5 text-muted">
              Insights and learnings:
              <ul className="ps-3 mt-2">
                <li>
                  The UI is heavy with information which increases
                  cognitive load.
                </li>
                <li>
                  Need to minimise and simplify the UI while the design is maintained.
                </li>
              </ul>
            </Card.Text>
          </section>
          {/* Iteration Four*/}
          <section>
            <Card.Subtitle className="fs-3 mb-4">
              Final Design: Contextual Icon + Label
            </Card.Subtitle>
            <div className="col-12 col-md-6 d-flex justify-content-center w-100">
              <img
                src="../images/iterationfour.png"
                alt="image of iteration three of design"
                className="img-fluid w-100 rounded-3"
                style={{
                  maxWidth: "800px",
                  maxHeight: "800px",
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
            <Card.Text as="div" className="fs-4 text-muted">
              The good:
              <ul className="ps-1 mt-2">
                <li>
                  The connection status is highlighted only when there is an
                  issue (weak, poor). This drastically reduces coginitive load.
                </li>
                <li>
                  The indicators and labels blended in with the UI, and moved
                  the design into production.
                </li>
              </ul>
            </Card.Text>

            <Card.Text as="div" className="fs-4 text-muted">
              Insights and learnings:
              <ul className="ps-1 mt-2">
                <li>
                 Show indicators only when contextually necessary.
                </li>
              </ul>
            </Card.Text>
          </section>

          {/* Design Handoff and First implementation */}
          <section className="py-4">
            <Card.Title className="fs-2 mb-3">
              Post-launch technical adjustments
            </Card.Title>
            <Card.Text className="fs-4 text-muted">
              After the first implementation and testing, the technical
              calculations for call quality had to be tightened in order to
              reduce flickering and rapid changes in the indication. The changes
              implemented include:
              <ol className="ps-1 mt-2">
                <li>
                  Incorporate the round trip time to improve accuracy of the
                  calulations.
                </li>
                <li>
                  Pace the changes to the UI by setting time intervals before a
                  new state is shown to the user. This reduced the flickering of
                  the icons.
                </li>
              </ol>
            </Card.Text>
          </section>

          {/* Impact */}
          <section className="py-4">
            <Card.Title className="fs-2 mb-3">Impact</Card.Title>
            <Card.Text className="fs-4 text-muted">
              The connection quality indicator helped users understand when call
              issues were caused by poor network conditions rather than the
              application itself. By showing problems early, users could know
              the reason for dropped audio or disconnects instead of guessing or
              blaming the messenger. This reduced confusion during calls and
              protected the trust in the application's call experience.
            </Card.Text>
          </section>
        </Card.Body>
      </Card>
    </>
  );
}

export default CQI;
