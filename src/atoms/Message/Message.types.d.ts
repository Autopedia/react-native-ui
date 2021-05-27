export type BaseMessageProps = {
  mine?: boolean;
  timestamp?: boolean;
  createdAt: string | Date;
  status: 'pending' | 'sended' | 'failed';
  unread?: number;
};

export type TextMessageProps = BaseMessageProps & {
  type: 'text';
  text: string;
};

export type ImageMessageProps = BaseMessageProps & {
  type: 'image';
  url: string;
  width: number;
  height: number;
  onPressImage: () => void;
};

export type VideoMessageProps = BaseMessageProps & {
  type: 'video';
  url: string;
  width: number;
  height: number;
  duration: number;
};

export type EventMessageProps = BaseMessageProps & {
  type: 'event';
  thumbnailUrl: string;
  title: string;
};

export type PostMessageProps = BaseMessageProps & {
  type: 'post';
  thumbnailUrl: string;
  title: string;
};

export type CounselCaseMessageProps = BaseMessageProps & {
  type: 'counsel';
  thumbnailUrl: string;
  title: string;
};

export type ShopMessageProps = BaseMessageProps & {
  type: 'shop';
  name: string;
  address: string;
  lat: number;
  lng: number;
  onPressDetail: () => void;
  onPressNavigate: () => void;
};

export type FeedbackMessageProps = BaseMessageProps & {
  type: 'feedback';
  link: string;
};

export type ReviewMessageProps = BaseMessageProps & {
  type: 'review';
  onPressReview: () => void;
};

export type EndMessageProps = BaseMessageProps & {
  type: 'end';
  disabled?: boolean;
  onPressFinish: () => void;
};

export type EndConfirmedMessageProps = BaseMessageProps & {
  type: 'endconfirmed';
};

export type OutdatedMessageProps = BaseMessageProps & {
  type: 'outdated';
  disabled?: boolean;
  days?: number;
  onPressFinish: () => void;
};

export type MessageProps =
  | TextMessageProps
  | ImageMessageProps
  | VideoMessageProps
  | EventMessageProps
  | PostMessageProps
  | CounselCaseMessageProps
  | ShopMessageProps
  | FeedbackMessageProps
  | ReviewMessageProps
  | EndMessageProps
  | EndConfirmedMessageProps
  | OutdatedMessageProps;
