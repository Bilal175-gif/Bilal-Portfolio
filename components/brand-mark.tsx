type BrandMarkProps = {
  name: string;
  title?: string;
  compact?: boolean;
};

export function BrandMark({ name, title, compact = false }: BrandMarkProps) {
  return (
    <span className="brand">
      <span className="brand__signal" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      {!compact && (
        <span className="brand__copy">
          <strong>{name}</strong>
          {title && <span>{title}</span>}
        </span>
      )}
    </span>
  );
}
