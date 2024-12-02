import type { Metadata } from 'next';
import { IService } from '@/app/constants/type';
import { ErrorMsg } from '@/app/components/ConditionalComponents/Error';
type tParams = Promise<{ _id: string }>;
import { getService } from '@/app/utils/assistFunctions/serviceFunction';
import { EditServiceForm } from '@/app/components/FormRelated/EditForm/EditServiceForm';
export const generateMetadata = async (props: {
  params: tParams;
}): Promise<Metadata> => {
  const { _id } = await props.params;
  const serviceInfo: IService = await getService(_id);

  return {
    title: serviceInfo.title,
    description: serviceInfo.description,
    keywords: ['中野', 'パーソナルトレーニング'],
    openGraph: {
      title: serviceInfo.title,
      description: serviceInfo.description,
      type: 'article',
      images: serviceInfo.thumbnail,
    },
  };
};

export default async function Page(props: { params: tParams }) {
  let error: boolean = false;
  const { _id } = await props.params;
  const serviceInfo = await getService(_id);
  await console.log(serviceInfo);
  if (serviceInfo == null) {
    error = true;
  }
  if (error) {
    return <ErrorMsg />;
  }
  return (
    <>
      <div id='editService' className='pageContainer'>
        <h2>
          <p className='subHeader'>EDIT SERVICE</p>
          <p className='mainHeader'>{serviceInfo?.title}</p>
        </h2>
        <EditServiceForm service={serviceInfo} />
      </div>
    </>
  );
}
