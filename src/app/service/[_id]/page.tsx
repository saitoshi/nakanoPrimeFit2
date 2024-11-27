import type { Metadata } from 'next';
type tParams = Promise<{ _id: string }>;
import { getService } from '@/app/utils/assistFunctions/serviceFunction';

export const generateMetadata = async (props: {
  params: tParams;
}): Promise<Metadata> => {
  const { _id } = await props.params;

  return {
    title: 'Not Found',
  };
};
