import { useEffect } from 'react';
import './assets/css/normalize.css';
import './assets/css/reset.css';
import Calendar from './DynamicCalendar/Calendar';

function App() {

  useEffect(() => {

    //console.log("Atualizando fora com componente");
  })

  let data = [

    {date:new Date(2022,6,1), eventType:"holiday", content: "Dia de alguma coisa"},
    {date:new Date(2022,6,2), eventType:"holiday", content: "Dia de outra coisa"},
    {date:new Date(2022,6,8), eventType:"internal", content: "Happy Hour Pit"},
    {date:new Date(2022,6,8), eventType:"internal", content: "Migração"},
    {date:new Date(2022,6,31), eventType:"birthday", content: "Fulano Faz aniversário"}
  ]



  function selectEvent(dateData){
    console.log("Mês Selecionado");
    console.log(dateData);
  }


  return (
    <div className="App">
      <h3>Fora do componente</h3>
      <header className="App-header">
        
        <Calendar data={data} onSelectMonthEvent={selectEvent} />

      </header>
    </div>
  );
}

export default App;
