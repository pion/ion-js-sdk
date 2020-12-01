import IonSFUJSONRPCSignal from './json-rpc-impl';
import IonSFUGRPCWebSignal from './grpc-web-impl';
import { Trickle } from '../client';

export interface Signal {
  onnegotiate?: (jsep: RTCSessionDescriptionInit) => void;
  ontrickle?: (trickle: Trickle) => void;

  join(sid: string, offer: RTCSessionDescriptionInit): Promise<RTCSessionDescriptionInit>;
  offer(offer: RTCSessionDescriptionInit): Promise<RTCSessionDescriptionInit>;
  answer(answer: RTCSessionDescriptionInit): void;
  trickle(trickle: Trickle): void;
  close(): void;
}

export { IonSFUJSONRPCSignal, IonSFUGRPCWebSignal, Trickle };
