type WordsProps = {
  text: string;
  /** Delay before the first word, in milliseconds. */
  base?: number;
};

/**
 * Word-by-word mask reveal for display headlines. Pure markup + CSS so the
 * initial HTML is complete and readable before hydration.
 */
export function Words({ text, base = 0 }: WordsProps) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden py-[0.08em] align-bottom"
        >
          <span
            className="inline-block animate-rise"
            style={{ animationDelay: `${base + index * 120}ms` }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </>
  );
}
