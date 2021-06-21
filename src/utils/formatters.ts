export const durationFormatter = (duration: number) => {
  const minutes = Math.floor(duration / 1000 / 60);
  const seconds = Math.round((duration - minutes * 1000 * 60) / 1000);
  const secondsString = seconds > 10 ? seconds : `0${seconds}`;

  return `${minutes}:${secondsString}`;
};

export const linebreakRemover = (string: string) => {
  return string.replace(/\n/g, ' ');
};
