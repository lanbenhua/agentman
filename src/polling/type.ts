export type PollingInit<T> = {
  interval: number;
  pollingOn: (
    error?: Error | null,
    response?: T | null
  ) => boolean | Promise<boolean>;
};

export type PollingRunner<T> = () => Promise<T | undefined>;
export type PollingCancel = () => void;
