"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  CircleDot,
  Clock3,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useReducedMotion } from "@/components/n8n/use-reduced-motion";
import type { WorkflowDemoCase } from "@/content/n8n";

type WorkflowDemoProps = {
  cases: readonly WorkflowDemoCase[];
  steps: readonly string[];
};

export function WorkflowDemo({ cases, steps }: WorkflowDemoProps) {
  const reducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(cases[0]?.id ?? "");
  const [activeStep, setActiveStep] = useState(steps.length - 1);
  const [isRunning, setIsRunning] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const activeCase = useMemo(
    () => cases.find((item) => item.id === activeId) ?? cases[0],
    [activeId, cases],
  );

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => clearTimeout(timer));
    timers.current = [];
  }, []);

  const runPreview = useCallback(
    (nextId?: string) => {
      clearTimers();
      if (nextId) {
        setActiveId(nextId);
      }

      if (reducedMotion) {
        setActiveStep(steps.length - 1);
        setIsRunning(false);
        return;
      }

      setActiveStep(0);
      setIsRunning(true);

      steps.slice(1).forEach((_, index) => {
        const timer = setTimeout(() => {
          const nextStep = index + 1;
          setActiveStep(nextStep);
          if (nextStep === steps.length - 1) {
            setIsRunning(false);
          }
        }, (index + 1) * 360);
        timers.current.push(timer);
      });
    },
    [clearTimers, reducedMotion, steps],
  );

  useEffect(() => clearTimers, [clearTimers]);

  if (!activeCase) {
    return null;
  }

  const isComplete = !isRunning && activeStep === steps.length - 1;

  return (
    <div className="n8n-demo" data-running={isRunning ? "true" : "false"}>
      <div className="n8n-demo__picker" aria-label="Choose a workflow preview">
        <p>Choose an example input</p>
        <div className="n8n-demo__choices">
          {cases.map((item) => (
            <button
              aria-pressed={item.id === activeCase.id}
              className="n8n-demo__choice"
              data-active={item.id === activeCase.id ? "true" : undefined}
              key={item.id}
              onClick={() => runPreview(item.id)}
              type="button"
            >
              <span>{item.label}</span>
              <small>{item.category}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="n8n-demo__workspace">
        <section className="n8n-demo__input" aria-labelledby="demo-input-title">
          <div className="n8n-panel-heading">
            <div>
              <span className="n8n-panel-kicker">01 · Incoming data</span>
              <h3 id="demo-input-title">Inquiry received</h3>
            </div>
            <span className="n8n-live-chip">
              <CircleDot aria-hidden="true" size={12} /> Demo input
            </span>
          </div>

          <blockquote>{activeCase.input}</blockquote>
          <button
            className="n8n-run-button"
            disabled={isRunning}
            onClick={() => runPreview()}
            type="button"
          >
            {isRunning ? (
              <>
                <Sparkles aria-hidden="true" size={17} /> Processing preview…
              </>
            ) : (
              <>
                {isComplete ? (
                  <RotateCcw aria-hidden="true" size={17} />
                ) : (
                  <Play aria-hidden="true" size={17} />
                )}
                {isComplete ? "Replay workflow" : "Run workflow preview"}
              </>
            )}
          </button>
          <p className="n8n-demo__disclosure">
            Local predefined demonstration — no live AI model or external API is being called.
          </p>
        </section>

        <section className="n8n-demo__execution" aria-labelledby="demo-execution-title">
          <div className="n8n-panel-heading">
            <div>
              <span className="n8n-panel-kicker">02 · Orchestration</span>
              <h3 id="demo-execution-title">Workflow execution</h3>
            </div>
            <span className="n8n-execution-time">
              <Clock3 aria-hidden="true" size={13} /> {activeCase.demoTime} demo
            </span>
          </div>

          <ol className="n8n-demo-steps">
            {steps.map((step, index) => {
              const state = isComplete || index < activeStep
                ? "complete"
                : index === activeStep
                  ? "active"
                  : "waiting";
              return (
                <li data-state={state} key={step}>
                  <span className="n8n-demo-steps__marker" aria-hidden="true">
                    {state === "complete" ? <Check size={13} /> : index + 1}
                  </span>
                  <span>{step}</span>
                  {index < steps.length - 1 && <ArrowRight aria-hidden="true" size={14} />}
                </li>
              );
            })}
          </ol>
          <div className="n8n-demo__step-output">
            <small>{isComplete ? "Final step output" : "Current step output"}</small>
            <p>{activeCase.steps[activeStep]?.output}</p>
          </div>
          <p className="visually-hidden" aria-live="polite">
            {isRunning
              ? `Preview processing: ${steps[activeStep]}`
              : `Preview complete for ${activeCase.label}`}
          </p>
        </section>

        <section className="n8n-demo__analysis" aria-labelledby="demo-analysis-title">
          <div className="n8n-panel-heading">
            <div>
              <span className="n8n-panel-kicker">03 · Structured analysis</span>
              <h3 id="demo-analysis-title">Extracted fields</h3>
            </div>
            <span className="n8n-priority-chip">{activeCase.priority} priority</span>
          </div>

          <dl className="n8n-field-grid">
            {activeCase.extractedFields.map((field) => (
              <div key={field.label}>
                <dt>{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>

          <div className="n8n-decision-row">
            <div>
              <small>Missing details</small>
              <p>{activeCase.missingDetails.join(" · ") || "None identified"}</p>
            </div>
            <div>
              <small>AI decision output</small>
              <p>{activeCase.decision}</p>
            </div>
          </div>
        </section>

        <section className="n8n-demo__result" aria-labelledby="demo-result-title">
          <div className="n8n-panel-heading">
            <div>
              <span className="n8n-panel-kicker">04 · Final structured result</span>
              <h3 id="demo-result-title">Prepared for action</h3>
            </div>
            <span className="n8n-success-chip">
              <CheckCircle2 aria-hidden="true" size={14} /> Success
            </span>
          </div>

          <div className="n8n-result-grid">
            <div className="n8n-tool-log">
              <small>Tool activity</small>
              <ul>
                {activeCase.toolActivity.map((activity) => (
                  <li key={activity}>
                    <Check aria-hidden="true" size={12} /> {activity}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="n8n-json-result">
              <div>
                <dt>destination</dt>
                <dd>&quot;{activeCase.finalResult.destination}&quot;</dd>
              </div>
              <div>
                <dt>owner</dt>
                <dd>&quot;{activeCase.finalResult.owner}&quot;</dd>
              </div>
              <div>
                <dt>next_action</dt>
                <dd>&quot;{activeCase.finalResult.nextAction}&quot;</dd>
              </div>
            </dl>
          </div>
          <div className="n8n-prepared-response">
            <small>Prepared response</small>
            <p>{activeCase.response}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
