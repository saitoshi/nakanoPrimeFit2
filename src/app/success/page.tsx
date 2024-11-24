import type { Metadata } from 'next';
import { SuccessMsg } from '../components/ConditionalComponents/SuccessMsg';

export default function Success() {
  return (
    <div>
      <SuccessMsg />
    </div>
  );
}
