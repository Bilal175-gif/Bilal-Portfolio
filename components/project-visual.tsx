type ProjectVisualProps = {
  slug: string;
  title: string;
};

export function ProjectVisual({ slug, title }: ProjectVisualProps) {
  if (slug === "launchmind-ai") {
    return (
      <div
        className="project-visual project-visual--launchmind"
        role="img"
        aria-label={`${title} interface preview`}
      >
        <div className="project-visual__toolbar" aria-hidden="true">
          <span className="project-visual__brand">LM</span>
          <span />
          <i />
          <i />
          <i />
        </div>
        <div className="launchmind-ui" aria-hidden="true">
          <div className="launchmind-ui__sidebar">
            <span className="is-active" />
            <span />
            <span />
            <span />
          </div>
          <div className="launchmind-ui__workspace">
            <div className="ui-kicker">Your startup workspace</div>
            <div className="ui-title" />
            <div className="ui-copy" />
            <div className="ui-prompt">
              <span>Turn your idea into a focused plan</span>
              <i>→</i>
            </div>
            <div className="ui-grid">
              <div>
                <b>01</b>
                <span />
                <span />
              </div>
              <div>
                <b>02</b>
                <span />
                <span />
              </div>
              <div>
                <b>03</b>
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-visual project-visual--vivid"
      role="img"
      aria-label={`${title} interface preview`}
    >
      <div className="project-visual__toolbar" aria-hidden="true">
        <span className="project-visual__brand">VH</span>
        <span />
        <i />
        <i />
        <i />
      </div>
      <div className="vivid-ui" aria-hidden="true">
        <div className="vivid-ui__nav">
          <strong>Editorial</strong>
          <span className="is-active" />
          <span />
          <span />
          <i />
        </div>
        <div className="vivid-ui__workspace">
          <div className="vivid-ui__heading">
            <div>
              <span>Content overview</span>
              <b />
            </div>
            <i>New article</i>
          </div>
          <div className="vivid-ui__metrics">
            <div>
              <span>Published</span>
              <b>128</b>
            </div>
            <div>
              <span>In review</span>
              <b>12</b>
            </div>
            <div>
              <span>Drafts</span>
              <b>24</b>
            </div>
          </div>
          <div className="vivid-ui__table">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
