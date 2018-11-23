
//FileName:ReactJSX.jsx(PascalCase)

/*
Use PascalCase for React components and camelCase for their instances

import ReservationCard from './ReservationCard';
const reservationItem = <ReservationCard />;        (instance naming camelCase)


Component Naming
import Footer from './Footer';

Props Naming:
<MyComponent variant="fancy" /> // Avoid using DOM component props name eg:className,style etc // props Name in camel case

Alignment

//follow this way if component has more props params
<Button
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// if component props can be fit in to one line
<Button color="bar" />

//
{showButton && (
  <Button />
)}

/************************/
Quotes
Always use double quotes (") for JSX attributes, but single quotes (') for all other JS

<ToolTip message="Im tool tip" style={{ left: '20px' }} />

Spacing
<ToolTip 
type={top} //props spacing

/>


omit the value of props if it is true


<ToolTip 
type={top} //props spacing
showToolTip={true} 
/>

<ToolTip 
type={top} //props spacing
showToolTip // better way
/>



**************************************

<img src="sun.jpg" alt=" role="presentation" /> // do not give alt name as image photo etc.



*********************************

// bad
{items.map((item, index) =>
  <div
    {...item}
    key={index}
  />
)}

// good
{items.map(item => (
  <div
    {...item}
    key={item.id}
  />
))}

*/

//Creating class
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}


//Suppose we don’t have state or refs, prefer normal functions (not arrow functions) over classes

function Listing({ hello }) {
  return <div>{hello}</div>;
}
