import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';


const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
      title={'Conheça os profissionais'} 
      subtitle={'Preencha seu endereço e veja os profissionais da sua localidade'}
      />
    </div>
  )
}

export default Home
