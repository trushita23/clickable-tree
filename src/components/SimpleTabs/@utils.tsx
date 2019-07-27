export function a11yProps(index: number, label?: string) {
    return {
      id: `${label || 'tab'}-${index}`,
      'aria-controls': `${label || 'tab'}-${index}panel-${index}`,
    };
  }