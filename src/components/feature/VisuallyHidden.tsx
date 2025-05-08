const hiddenStyles = {
  display: "inline-block",
  positions: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
  return <span style={hiddenStyles}>{children}</span>;
};

export default VisuallyHidden;
