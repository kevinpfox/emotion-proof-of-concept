const a11yTabProps = (
  index: number,
  customName?: string
): Record<string, unknown> => {
  return {
    id: customName ? `tab-${index}-${customName}` : `tab-${index}`,
    "aria-controls": customName ? `tab-${index}-${customName}` : `tab-${index}`,
  };
};

export default a11yTabProps;
