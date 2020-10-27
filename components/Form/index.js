import HubspotForm from 'react-hubspot-form';

export default function Form() {
  return (
    <HubspotForm
      portalId='8717753'
      formId='d7cd7691-ed22-4a8f-b152-9fae760d07a2'
      onSubmit={() => console.log('Submit!')}
      onReady={(form) => console.log('Form ready!')}
      loading={<div>Loading...</div>}
    />
  )
}
