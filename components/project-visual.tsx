import Image from "next/image";

type ProjectVisualProps = {
  slug: string;
  title: string;
};

export function ProjectVisual({ slug, title }: ProjectVisualProps) {
  if (slug === "launchmind-ai") {
    return (
      <div
        className="project-visual project-visual--launchmind project-visual--artwork"
      >
        <Image
          alt={`${title} dashboard showing saved startup analyses and planning tools`}
          className="project-visual__artwork"
          fill
          sizes="(max-width: 899px) calc(100vw - 2rem), (max-width: 1279px) 50vw, 720px"
          src="/launchmind-ai-dashboard.png"
        />
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
