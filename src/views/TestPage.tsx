import { useQuery, gql } from "@apollo/client";
import { AllPlanets } from "../graphQL/Queries";
import {
  DetailsList,
  buildColumns,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { Link } from "@fluentui/react/lib/Link";
import { useNavigate } from "react-router-dom";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { Panel } from "@fluentui/react/lib/Panel";
import { useBoolean } from "@fluentui/react-hooks";


const TestPage: React.FunctionComponent = () => {
      const { loading, error, data } = useQuery(AllPlanets);
        const navigate = useNavigate();
        const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
          useBoolean(false);
      console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
let items = ["Foo", "Bar"];
let columns: IColumn[] = [
  {
    key: "name",
    name: "Name",
    onRender: (item) => (
      // eslint-disable-next-line react/jsx-no-bind
      <Link key={item.id} onClick={() => openPanel()}>
        {item.name}
      </Link>
    ),
  } as IColumn,
  {
    key: "climates",
    name: "Climates",
    onRender: (item) => (
      // eslint-disable-next-line react/jsx-no-bind
      <>
        <div
          style={{ whiteSpace:'pre-wrap' }}
        >
          
          {item.climates.map((value: string,index:number) => index<item.climates.length-1?value+',':value)}
        </div>
        
      </>
    ),
  } as IColumn,
  {
    key: "gravity",
    name: "Gravity",
    onRender: (item) => (
      // eslint-disable-next-line react/jsx-no-bind
      <div> {item.gravity}</div>
    ),
  } as IColumn,
  {
    key: "population",
    name: "Population",
    onRender: (item) => (
      // eslint-disable-next-line react/jsx-no-bind
      <div> {item.population}</div>
    ),
  } as IColumn,
  {
    key: "rotationPeriod",
    name: "Rotation Period",
    onRender: (item) => (
      // eslint-disable-next-line react/jsx-no-bind
      <div> {item.rotationPeriod}</div>
    ),
  } as IColumn,
  {
    key: "terrains",
    name: "Terrains",
    onRender: (item) => (
      // eslint-disable-next-line react/jsx-no-bind
      <div> {item.terrains}</div>
    ),
  } as IColumn,
  {
    key: "surfaceWater",
    name: "Surface Water",
    onRender: (item) => (
      // eslint-disable-next-line react/jsx-no-bind
      <div> {item.surfaceWater}</div>
    ),
  } as IColumn,
];
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {/* {data.allPlanets.planets[0].name} */}
      <DetailsList items={data.allPlanets.planets} columns={columns} />
      <Panel
        headerText="Sample panel"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        <p>Content goes here.</p>
      </Panel>
    </div>
  );
};
export default TestPage;
