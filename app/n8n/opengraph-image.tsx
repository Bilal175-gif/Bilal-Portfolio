import { ImageResponse } from "next/og";

export const alt =
  "n8n automation and AI agent development by Muhammad Bilal and Abdur Rehman";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const nodeStyles = {
  trigger: {
    border: "1px solid rgba(68, 199, 255, 0.58)",
    background: "rgba(68, 199, 255, 0.10)",
    color: "#82ddff",
  },
  orchestration: {
    border: "1px solid rgba(255, 138, 31, 0.72)",
    background: "rgba(255, 138, 31, 0.12)",
    color: "#ffb057",
  },
  intelligence: {
    border: "1px solid rgba(139, 92, 246, 0.7)",
    background: "rgba(139, 92, 246, 0.13)",
    color: "#b9a0ff",
  },
  action: {
    border: "1px solid rgba(255, 209, 47, 0.56)",
    background: "rgba(255, 209, 47, 0.09)",
    color: "#ffe06a",
  },
} as const;

type WorkflowNodeProps = {
  label: string;
  detail: string;
  tone: keyof typeof nodeStyles;
  width?: string;
};

function WorkflowNode({
  label,
  detail,
  tone,
  width = "118px",
}: WorkflowNodeProps) {
  const toneStyle = nodeStyles[tone];

  return (
    <div
      style={{
        display: "flex",
        width,
        minHeight: "62px",
        flexDirection: "column",
        justifyContent: "center",
        border: toneStyle.border,
        borderRadius: "12px",
        background: toneStyle.background,
        padding: "10px 12px",
      }}
    >
      <span
        style={{
          display: "flex",
          color: toneStyle.color,
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: 1.15,
        }}
      >
        {label}
      </span>
      <span
        style={{
          display: "flex",
          marginTop: "5px",
          color: "#8f9bb7",
          fontSize: "10px",
          lineHeight: 1.25,
        }}
      >
        {detail}
      </span>
    </div>
  );
}

function FlowConnector({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        width: vertical ? "2px" : "28px",
        height: vertical ? "25px" : "2px",
        flex: "0 0 auto",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(90deg, rgba(68,199,255,0.28), rgba(255,138,31,0.9), rgba(139,92,246,0.36))",
        position: "relative",
      }}
    >
      <span
        style={{
          display: "flex",
          position: "absolute",
          width: "6px",
          height: "6px",
          borderRadius: "99px",
          background: "#ff9e3d",
        }}
      />
    </div>
  );
}

export default function N8nOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background: "#050715",
          color: "#f7f8ff",
          fontFamily: "Arial, sans-serif",
          padding: "52px 58px",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "-320px",
            right: "-160px",
            width: "720px",
            height: "720px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(255, 112, 31, 0.22), rgba(139, 92, 246, 0.08) 42%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "-360px",
            left: "-190px",
            width: "760px",
            height: "760px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(68, 199, 255, 0.18), rgba(68, 199, 255, 0.03) 46%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            inset: "24px",
            border: "1px solid rgba(125, 190, 255, 0.18)",
            borderRadius: "26px",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "24px",
            left: "260px",
            width: "340px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(68,199,255,0.72), rgba(139,92,246,0.8), rgba(255,138,31,0.8), transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#ffac52",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "3.2px",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: "9px",
                  height: "9px",
                  marginRight: "12px",
                  borderRadius: "99px",
                  background: "#ff8a1f",
                }}
              />
              n8n automation studio
            </div>
            <span
              style={{
                display: "flex",
                color: "#7fcff3",
                fontSize: "15px",
              }}
            >
              bilalgilani.me/n8n
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "560px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "#9ea9c3",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                Workflows · AI agents · integrations
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: "560px",
                  marginTop: "15px",
                  fontSize: "57px",
                  fontWeight: 700,
                  letterSpacing: "-2.8px",
                  lineHeight: 1.02,
                }}
              >
                n8n automation &amp; AI agent development.
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: "520px",
                  marginTop: "22px",
                  color: "#aab5ce",
                  fontSize: "21px",
                  lineHeight: 1.42,
                }}
              >
                Practical systems that connect business tools, reduce repetitive
                work, and keep humans involved where decisions matter.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: "440px",
                height: "360px",
                flexDirection: "column",
                border: "1px solid rgba(125, 190, 255, 0.24)",
                borderRadius: "20px",
                background:
                  "linear-gradient(145deg, rgba(68,199,255,0.055), rgba(139,92,246,0.05)), rgba(10,16,34,0.9)",
                padding: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "13px",
                  borderBottom: "1px solid rgba(125, 190, 255, 0.14)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    color: "#d9e2f4",
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  Lead routing workflow
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid rgba(68,199,255,0.26)",
                    borderRadius: "99px",
                    background: "rgba(68,199,255,0.08)",
                    color: "#7edcff",
                    fontSize: "10px",
                    padding: "5px 8px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      width: "5px",
                      height: "5px",
                      marginRight: "6px",
                      borderRadius: "99px",
                      background: "#44c7ff",
                    }}
                  />
                  Ready
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WorkflowNode
                  label="Inquiry"
                  detail="Form or webhook"
                  tone="trigger"
                  width="142px"
                />
                <FlowConnector vertical />
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WorkflowNode
                    label="n8n"
                    detail="Orchestration"
                    tone="orchestration"
                  />
                  <FlowConnector />
                  <WorkflowNode
                    label="AI agent"
                    detail="Analyse + decide"
                    tone="intelligence"
                  />
                  <FlowConnector />
                  <WorkflowNode
                    label="Validation"
                    detail="Rules + approval"
                    tone="intelligence"
                  />
                </div>
                <FlowConnector vertical />
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WorkflowNode label="CRM" detail="Record updated" tone="action" />
                  <div style={{ display: "flex", width: "12px" }} />
                  <WorkflowNode label="Team" detail="Owner notified" tone="action" />
                  <div style={{ display: "flex", width: "12px" }} />
                  <WorkflowNode label="Response" detail="Reply prepared" tone="action" />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "20px",
              borderTop: "1px solid rgba(125, 190, 255, 0.13)",
            }}
          >
            <span
              style={{
                display: "flex",
                color: "#f7f8ff",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Muhammad Bilal + Abdur Rehman
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#9ea9c3",
                fontSize: "14px",
              }}
            >
              <span style={{ display: "flex", color: "#44c7ff" }}>Build</span>
              <span style={{ display: "flex", margin: "0 9px", color: "#46516b" }}>
                →
              </span>
              <span style={{ display: "flex", color: "#b9a0ff" }}>Connect</span>
              <span style={{ display: "flex", margin: "0 9px", color: "#46516b" }}>
                →
              </span>
              <span style={{ display: "flex", color: "#ffb057" }}>Automate</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
