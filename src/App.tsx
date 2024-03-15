import { MapsComponent, LayersDirective, LayerDirective,Inject, Legend ,DataLabel,MapsTooltip} from '@syncfusion/ej2-react-maps';
import { world_map } from './world_map'

import './App.css';

let uncountries: object[] = [
  { Country: 'China', Membership: 'Permanent' },
  { Country: 'France', Membership: 'Permanent' },
  { Country: 'Russia', Membership: 'Permanent' },
  { Country: 'United Kingdom', Membership: 'Permanent' },
  { Country: 'United States', Membership: 'Permanent' },
  { Country: 'Bolivia', Membership: 'Non-Permanent' },
  { Country: 'Eq. Guinea', Membership: 'Non-Permanent' },
  { Country: 'Ethiopia', Membership: 'Non-Permanent' },
  { Country: "Côte d'Ivoire", Membership: 'Permanent' },
  { Country: 'Kazakhstan', Membership: 'Non-Permanent' },
  { Country: 'Kuwait', Membership: 'Non-Permanent' },
  { Country: 'Netherlands', Membership: 'Non-Permanent' },
  { Country: 'Peru', Membership: 'Non-Permanent' },
  { Country: 'Poland', Membership: 'Non-Permanent' },
  { Country: 'Sweden', Membership: 'Non-Permanent' },
  ];
  
function App() {
  return (
    <div className="App">
      <MapsComponent titleSettings={ { text: 'Members of the UN Security Council' } }
      legendSettings={ { visible: true } }>
               <Inject services={[Legend,DataLabel,MapsTooltip]} />
               <LayersDirective>
                  <LayerDirective shapeData={world_map}
                  dataSource={uncountries} shapeDataPath='Country' shapePropertyPath='name'
                  tooltipSettings={ {
                    visible: true,
                    valuePath: 'Country'
                } }
                  dataLabelSettings={ {
                    visible: true,
                    smartLabelMode: 'Trim'
                } }
                  shapeSettings={ {
                    colorValuePath: 'Membership',
                    colorMapping: [
                        {
                            value: 'Permanent', color: '#EDB46F'
                        },
                        {
                            value: 'Non-Permanent', color: '#F1931B'
                        }],
                        fill: '#E5E5E5'
                } }
                >
                  </LayerDirective>
               </LayersDirective>
         </MapsComponent>
    </div>
  );
}

export default App;
