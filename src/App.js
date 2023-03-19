
import Header from './Header';
import Template from './components/Template';

import Card from './components/Pricecard'
import Imagecard from './components/Imagecard';
import Greengradientcard from './components/Greengradientcard';
import Bluegradientcard from './components/Bluegradientcard';



function App() {
  
  return (
    <div>

      <Header />

      <main className='mt-10 px-10 flex flex-row flex-wrap gap-3 justify-between '>

        <Template type='Card' compName='Pricecard'>
          <Card title="$$$" caption="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nihil?"/>
        </Template>

        <Template type="Card" compName="Imagecard">
          <Imagecard title="Explorer" desc="Affordable products"/>
        </Template>

        <Template type="Card" compName="Greengradientcard">
          <Greengradientcard content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti animi delectus eveniet pariatur ut quaerat magnam, harum eaque provident fuga. Dolore, harum.' />
        </Template>

        <Template type="Card" compName="Bluegradientcard">
          <Bluegradientcard content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus pariatur consequatur doloribus incidunt autem? Fuga aperiam ut deserunt cupiditate." />
          
        </Template>

        <Template>
            
        </Template>

      </main>
    </div>
  );
}

export default App;
