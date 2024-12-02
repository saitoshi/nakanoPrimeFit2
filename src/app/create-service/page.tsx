import { CreateServiceForm } from '../components/ServiceRelated/CreateServiceForm';

export default function Page() {
  return (
    <div className='pageContainer' id='addService'>
      <h2>
        <p className='subHeader'>CREATE SERVICE</p>
        <p className='mainHeader'>新規サービスの追加</p>
      </h2>
      <CreateServiceForm />
    </div>
  );
}
